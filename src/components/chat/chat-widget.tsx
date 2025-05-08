"use client";

import { CornerDownLeft, Bot, User, Loader2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React, { useState, useRef, useEffect, type FormEvent } from "react";
import type { ChatInput } from "@/ai/flows/chat-flow";
import { chatWithBot } from "@/ai/flows/chat-flow";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: Date;
}

const exampleQuestions = [
  "How do I sell my license?",
  "What types of licenses can I sell?",
  "How long does the process take?",
  "Is it secure?",
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
   const messagesEndRef = useRef<HTMLDivElement>(null);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (e?: FormEvent<HTMLFormElement>, question?: string) => {
    if (e) e.preventDefault();
    const messageText = question || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: messageText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const aiResponse = await chatWithBot({ message: messageText } as ChatInput);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: aiResponse.response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "Sorry, I encountered an error. Please try again or contact support via our form.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleQuestionClick = (question: string) => {
    // No need to set input value if sending directly
    // setInputValue(question); 
    handleSendMessage(undefined, question);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-xl z-50 bg-accent text-accent-foreground hover:bg-accent/90"
            aria-label="Open chat assistant"
          >
            <MessageCircle className="h-8 w-8" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] md:max-w-[550px] p-0 flex flex-col h-[calc(100vh-80px)] max-h-[600px] sm:h-[70vh]">
          <DialogHeader className="p-4 border-b sticky top-0 bg-background z-10">
            <DialogTitle className="flex items-center gap-2 text-lg">
              <Bot className="h-6 w-6 text-primary" /> SoftSell Assistant
            </DialogTitle>
            <DialogDescription className="text-sm">
              Ask me anything about selling your software licenses!
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex items-end gap-2 w-full",
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {msg.sender === "ai" && (
                    <Avatar className="h-8 w-8 self-start">
                      <AvatarFallback><Bot size={18} /></AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-3 py-2 text-sm shadow break-words",
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {msg.text.split('\\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < msg.text.split('\\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                   {msg.sender === "user" && (
                    <Avatar className="h-8 w-8 self-start">
                      <AvatarFallback><User size={18} /></AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 justify-start">
                  <Avatar className="h-8 w-8 self-start">
                     <AvatarFallback><Bot size={18} /></AvatarFallback>
                  </Avatar>
                  <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2 text-sm shadow">
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </div>
                </div>
              )}
               <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {messages.length === 0 && !isLoading && (
             <div className="p-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">Or try an example:</p>
                <div className="flex flex-wrap gap-2">
                    {exampleQuestions.map((q) => (
                        <Button key={q} variant="outline" size="sm" onClick={() => handleExampleQuestionClick(q)}>
                            {q}
                        </Button>
                    ))}
                </div>
            </div>
          )}

          <DialogFooter className="p-4 border-t sticky bottom-0 bg-background z-10">
            <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
                disabled={isLoading}
                aria-label="Chat message input"
              />
              <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()} aria-label="Send message">
                <CornerDownLeft className="h-4 w-4" />
              </Button>
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

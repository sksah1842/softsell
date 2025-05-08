# SoftSell Marketplace

This is a responsive, single-page marketing website for SoftSell, a fictional software resale startup. The project was built using Next.js and Tailwind CSS, with components from ShadCN UI.

## Features Implemented

-   **Hero Section**: Eye-catching section with a clear headline, supportive subheading, and a prominent call-to-action (CTA) button ("Sell My Licenses") and a secondary CTA ("Learn More").
-   **How It Works Section**: Clearly outlines the three-step process for users to sell their software licenses:
    1.  Submit Your Licenses (with UploadCloud icon)
    2.  Receive a Fair Valuation (with DollarSign icon)
    3.  Get Paid Quickly (with CreditCard icon)
    Visual cues (arrows) guide the user through the steps on desktop.
-   **Why Choose Us Section**: Highlights four key benefits of using SoftSell, each presented in a card with an icon and a brief description:
    -   Maximum Value (TrendingUp icon)
    -   Secure & Compliant (ShieldCheck icon)
    -   Fast & Hassle-Free (Rocket icon)
    -   Expert Support (Users icon)
-   **Customer Testimonials Section**: Features two dummy customer reviews, including name, role, company, a quote, and a placeholder avatar. Star ratings are included for visual appeal.
-   **Contact / Lead Form Section**: A comprehensive form for lead generation, including fields for:
    -   Name
    -   Email
    -   Company
    -   License Type (dropdown with pre-filled options like Microsoft Office, Adobe Creative Suite, etc.)
    -   Message
    -   Frontend validation is implemented using `react-hook-form` and `zod`.
    -   A success toast notification appears upon form submission.
-   **Responsive Design**: The website is fully responsive and adapts to various screen sizes (desktop, tablet, mobile) using Tailwind CSS's responsive utility classes.
-   **Navigation Bar**: A sticky navigation bar with links to different sections of the page and a "Get a Quote" CTA. Includes a mobile-friendly hamburger menu.
-   **Footer**: Contains copyright information, logo, and social media links.
-   **Logo Placeholder**: A simple SVG logo for "SoftSell" is included.
-   **SEO Meta Tags**: Basic SEO meta tags (title, description, keywords) are included in `layout.tsx`.
-   **Professional UI/UX**:
    -   **Color Palette**:
        -   Primary: Blue (`#2E9AFE`) for trust and professionalism.
        -   Secondary: Light Gray (`#F7F9FA`) for backgrounds.
        -   Accent: Teal (`#00C7B7`) for CTAs and highlights.
        -   These are implemented as CSS HSL variables in `globals.css` for easy theming.
    -   **Font Family**: Uses `Geist Sans` for a modern and clean look, configured in `layout.tsx`.
    -   **Icons**: `lucide-react` is used for consistent, modern outline-style icons.
    -   **Styling**: Tailwind CSS is used for styling, with ShadCN UI components providing a base. Custom styles are applied to enhance the visual appeal.
    -   **Visual Hierarchy & Spacing**: Consistent spacing and clear visual hierarchy are maintained throughout the page.
    -   **Hover Effects & Transitions**: Subtle hover effects and transitions are added to interactive elements for a polished feel.

## Design Choices

-   **Framework**: Next.js was chosen for its robust features, server components (though minimally used for this static page), and optimized performance. Its App Router structure is modern and scalable.
-   **Styling**: Tailwind CSS was selected for its utility-first approach, enabling rapid UI development and easy responsiveness. ShadCN UI components were used as a base for common UI elements like buttons, cards, and forms, providing well-designed and accessible components out-of-the-box.
-   **Color Scheme**: The blue, gray, and teal color scheme was chosen to evoke professionalism, trust (blue), cleanliness (light gray), and a touch of vibrancy/action (teal). This combination is modern and suitable for a tech startup.
-   **Layout**: A single-page layout was implemented as per the requirements, with clear sections navigable via the header. The layout is designed to be intuitive and guide the user through the company's value proposition.
-   **Visuals**: Placeholder images from `picsum.photos` are used for hero and contact sections, with `data-ai-hint` attributes for potential future AI-powered image selection. Icons are used extensively to enhance visual communication in the "How It Works" and "Why Choose Us" sections.
-   **Form Handling**: `react-hook-form` and `zod` were chosen for robust and efficient client-side form validation, providing a good user experience by giving immediate feedback.

## Tech Stack

-   **Next.js** (React Framework)
-   **Tailwind CSS** (Styling)
-   **ShadCN UI** (Component Library)
-   **TypeScript** (Language)
-   **Lucide React** (Icons)
-   **react-hook-form** & **zod** (Form Handling & Validation)

## Time Spent

*   **Setup & Planning**: [User to fill in, e.g., 1 hour]
*   **Component Development**: [User to fill in, e.g., 5 hours]
*   **Styling & Responsiveness**: [User to fill in, e.g., 3 hours]
*   **Content & Copywriting**: [User to fill in, e.g., 1 hour]
*   **Testing & Refinements**: [User to fill in, e.g., 1 hour]
*   **Total**: [User to fill in, e.g., 11 hours]

## Getting Started

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd softsell-marketplace
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) (or the port specified in your Next.js config, likely `9002` for this project) with your browser to see the result.

## Hosting

This project can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages.

*   **Vercel**: Connect your GitHub repository to Vercel for automatic deployments.
*   **Netlify**: Similar to Vercel, connect your repository for CI/CD.
*   **GitHub Pages**: Configure GitHub Actions to build and deploy your Next.js static export.

[User to add specific deployment link here once hosted]

## Bonus Points Consideration

-   [x] Logo placeholder or favicon (Simple SVG logo implemented)
-   [x] SEO meta tags and page title (Implemented in `layout.tsx`)
-   [ ] Light/dark mode toggle (Theme structure in `globals.css` supports it, but toggle UI not implemented)
-   [ ] Use of animations (e.g., Framer Motion) (Minimal CSS transitions used, no Framer Motion)
-   [ ] LLM-Powered Chat Feature (Not implemented as per initial scope focused on core UI, but infrastructure for Genkit is present in the template).

This README provides an overview of the SoftSell Marketplace website.

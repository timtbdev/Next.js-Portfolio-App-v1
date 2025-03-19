# 🤩 Next.js Portfolio App

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)
[![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-000000?style=flat-square&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white)](https://tanstack.com/query)
[![Resend](https://img.shields.io/badge/Resend-000000?style=flat-square&logo=mail&logoColor=white)](https://resend.com)
[![Zustand](https://img.shields.io/badge/Zustand-443E38?style=flat-square&logo=react&logoColor=white)](https://zustand-demo.pmnd.rs/)
[![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?style=flat-square&logo=database&logoColor=black)](https://orm.drizzle.team)
[![Code Style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

![Next js-Portfolio-App-Preview](https://github.com/user-attachments/assets/8180cac0-adc0-4107-b01b-6837bf5ee316)

A **blazing-fast**, **SEO-optimized**, and **fully responsive** portfolio website built with modern web technologies.

## 🌟 Tech Stacks

- 🚀 Built with **Next.js 15** and **TypeScript 5**
- 💨 Styled using **Tailwind CSS v4** and **ShadCN UI**
- 🔐 Authentication and database with **Supabase**
- 📊 State management with **Zustand** and **TanStack Query v5**
- 📧 Email functionality via **Resend**
- 🗃️ Type-safe ORM with **Drizzle**

🌎 **Live Demo:** [timtb.dev](https://timtb.dev)

## 🔍 Advanced SEO Optimization 🚀

<img width="1141" alt="SEO Optimization" src="https://github.com/user-attachments/assets/fdae95c5-b0ee-4b74-b5ba-25340f005878" />

## ⚡ Advanced Performance Optimization 📊

<img width="975" alt="Performance Optimization" src="https://github.com/user-attachments/assets/f49a7b8d-4170-4d25-bd7b-5924097cbef9" />

## ✨ Mobile-First Responsive Design 📱💻

https://github.com/user-attachments/assets/85390f7d-6dac-49ae-814a-883baf6360cf

## ⚡ Blazing-Fast Live Search 🔎

https://github.com/user-attachments/assets/85390f7d-6dac-49ae-814a-883baf6360cf

## 📝 MDX-Powered Blog with Dynamic Scroll Navigation 📑

https://github.com/user-attachments/assets/9301904f-d87d-4de6-b955-4214ffeaaa45

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn or pnpm

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio-template.git
cd portfolio-template
```

2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit `http://localhost:3000` to see your portfolio in action!

## 📁 Project Structure

```
portfolio-template/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   │   ├── login/         # Login page
│   │   └── register/      # Registration page
│   ├── (blog)/            # Blog related routes
│   │   ├── [slug]/        # Individual blog posts
│   │   └── page.tsx       # Blog listing
│   ├── (marketing)/       # Marketing pages
│   │   ├── about/         # About page
│   │   └── contact/       # Contact page
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # UI components
│   ├── blog/             # Blog components
│   └── shared/           # Shared components
├── content/              # MDX content
│   ├── blog/             # Blog posts
│   └── pages/            # Static pages
├── lib/                  # Utility functions
│   ├── utils/            # Helper functions
│   ├── hooks/            # Custom hooks
│   └── config/           # Configuration
├── public/              # Static assets
└── styles/             # Global styles
```

## 🔧 Configuration

Key configuration files:

- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `contentlayer.config.ts` - Content management configuration

## 🛠️ Development Workflow

1. **Local Development**

   ```bash
   pnpm dev     # Start development server
   pnpm build   # Build for production
   pnpm start   # Start production server
   ```

2. **Code Quality**

   ```bash
   pnpm lint    # Run ESLint
   pnpm format  # Run Prettier
   pnpm test    # Run tests
   ```

3. **Database Operations**
   ```bash
   pnpm db:push    # Push schema changes
   pnpm db:studio  # Open Drizzle Studio
   ```

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
RESEND_API_KEY=your_resend_api_key
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions or feedback, reach out through:

- Email: timtb.dev@gmail.com
- X: [@timtbdev](https://x.com/timtbdev)

---

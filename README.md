# **ZebAI: Chat, Create, and Innovate with AI**

ZebAI is a versatile AI-powered platform that allows users to chat with AI, generate images, and create audio from text. Built with Next.js, it provides a responsive and intuitive user interface, making AI accessible and practical for everyone.

---

## **Features**

- **AI Chat**: Have conversations with an AI assistant for creative, professional, or personal tasks.
- **Image Generation**: Create high-quality AI-generated images from prompts.
- **Audio Creation**: Convert text into natural-sounding audio for various use cases.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **Theme Support**: Toggle between light, dark, or system themes.
- **Navigation**: Intuitive and responsive navigation with a sidebar for larger screens and a hamburger menu for smaller screens.

---

## **Tech Stack**

- **Frontend**: [Next.js](https://nextjs.org), [React](https://reactjs.org), [Tailwind CSS](https://tailwindcss.com)
- **Backend**: API routes in Next.js
- **UI Components**: Tailwind CSS, React Markdown
- **State Management**: React hooks for local state
- **Deployment**: [Vercel](https://vercel.com)

---

## **Getting Started**

### Prerequisites

- [Node.js](https://nodejs.org) (v16.8.0 or higher)
- [npm](https://npmjs.com) or [yarn](https://yarnpkg.com)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dev-zeb/zeb-ai.git
   cd zeb-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add any required environment variables. Example:
   ```env
   GEMINI_API_KEY=your_gemini_api_key
   OPENAI_API_KEY=your_openai_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

---

## **Deployment**

This project is already deployed on [Vercel](https://vercel.com). If you want to deploy it yourself:

1. Install the [Vercel CLI](https://vercel.com/docs/cli):
   ```bash
   npm install -g vercel
   ```

2. Deploy your app:
   ```bash
   vercel
   ```

3. Follow the prompts to link your project and deploy.

---

## **Folder Structure**

```
├── app
│   ├── layout.tsx        # Root layout of the app
│   ├── page.tsx          # Homepage
│   └── chat              # Chat-related components and pages
├── components
│   ├── navigation.tsx    # Navigation bar (sidebar and hamburger menu)
│   ├── chat
│   │   ├── ChatBox.tsx   # Main chat component
│   │   ├── ChatMessage.tsx # Chat message component
│   └── theme-provider.tsx # Theme management
├── public                # Public assets
├── styles
│   └── globals.css       # Global styles
├── utils                 # Utility functions
└── README.md             # Documentation
```

---

## **Customization**

- Modify the app's metadata in `app/layout.tsx`:
  ```typescript
  export const metadata = {
    title: "ZebAI - Chat, Create Images & Audio with AI",
    description: "Chat with AI, generate images, and create audio from text with ZebAI",
  };
  ```

- Add custom API keys or configurations to `.env.local`.

---

## **Contributing**

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Contact**

For support or inquiries, please contact [azhossain.98.ah@gmail.com](mailto:azhossain.98.ah@gmail.com).

---

## **Acknowledgements**

- [Gemini](https://ai.google.dev) and [OpenAI](https://openai.com) for their powerful APIs.
- [Next.js](https://nextjs.org) for the amazing framework.
- [Vercel](https://vercel.com) for effortless deployment.
- [Tailwind CSS](https://tailwindcss.com) for beautiful styling.

---

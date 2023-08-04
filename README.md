> **Note**
> This project is under construction and miss some of the features.
> If you have any question or want to create Newspaper website using Next.js and Sanity then contact me directly at my email: usman.haider.developer@gmail.com.

# Next.js Newspaper Website with Native Authoring Experience

This project offers a statically generated newspaper website that leverages Next.js for the frontend and Sanity.io for content management. The included Sanity Studio provides a native authoring experience with features like real-time collaboration, instant content previews, and easy editing.

Your newspaper site can connect to Sanity Content Lake, giving you hosted content APIs with a flexible query language, on-demand image transformations, powerful patching, and more. This project is perfect for starting a professional newspaper or media website.

## Features

- A high-performance static newspaper website with editable articles and sections
- A native and customizable authoring environment, accessible at `yournewspaperwebsite.com/studio`
- Real-time and collaborative article editing with detailed revision history
- Instant content preview across your entire site
- Support for block content and advanced custom fields for media and content embedding
- Incremental Static Revalidation, allowing instant publishing of new content without a rebuild
- Free Sanity project with unlimited admin users, free content updates, and pay-as-you-go for API overages
- TypeScript and Tailwind.css integration for a developer-friendly experience

## Table of Contents

- [Features](#features)
- [Project Overview](#project-overview)
- [Configuration](#configuration)
  - [Step 1. Set up the environment](#step-1-set-up-the-environment)
  - [Step 2. Set up the project locally](#step-2-set-up-the-project-locally)
  - [Step 3. Run Next.js locally in development mode](#step-3-run-nextjs-locally-in-development-mode)
  - [Step 4. Deploy to production](#step-4-deploy-to-production)
- [Questions and Answers](#questions-and-answers)
- [Next steps](#next-steps)

## Project Overview

| [Newspaper Website](https://newspaper-pro.vercel.app/) | [Studio](https://newspaper-pro.vercel.app/studio) |
| ------------------------------------------------------ | ------------------------------------------------- |
| ![Newspaper Website](./Home%20Page.png)                | ![Sanity Studio](./Article%20Preview.png)         |

## Configuration

### Step 1. Set up the environment

Use the Deploy Button below. It will let you deploy the starter using Vercel as well as connect it to your Sanity Content Lake using the Sanity Vercel Integration.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FUsmanHaider15%2Fnewspaper-pro)

### Step 2. Set up the project locally

Clone the repository that was created for you on your GitHub account. Once cloned, run the following command from the project's root directory:

```
npx vercel link
```

Download the environment variables needed to connect Next.js and the Studio to your Sanity project:

```
npx vercel env pull
```

### Step 3. Run Next.js locally in development mode

```
npm install && npm run dev
```

When you run this development server, the changes you make in your frontend and studio configuration will be applied live using hot reloading.

Your personal website should be up and running on http://localhost:3000! You can create and edit content on http://localhost:3000/studio.

### Step 4. Deploy to production

To deploy your changes to production you use git:

```
git add .
git commit
git push
```

Alternatively, you can deploy without a git hosting provider using the Vercel CLI:

```
npx vercel --prod
```

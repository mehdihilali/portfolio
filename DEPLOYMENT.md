# Deploying Your 3D Portfolio to Netlify

This guide will walk you through deploying your 3D Portfolio to Netlify for free.

## Prerequisites

- A GitHub account
- Your project pushed to a GitHub repository

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended for beginners)

1. **Create a Netlify account**
   - Go to [Netlify](https://www.netlify.com/) and sign up for a free account
   - You can sign up using your GitHub account for easier integration

2. **Connect your GitHub repository**
   - Click "Add new site" > "Import an existing project"
   - Select GitHub as your Git provider
   - Authorize Netlify to access your GitHub account
   - Select the repository containing your 3D Portfolio

3. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - The base directory can be left blank

4. **Deploy your site**
   - Click "Deploy site"
   - Netlify will build and deploy your site
   - Once complete, you'll get a unique URL (e.g., random-name.netlify.app)

5. **Set up a custom domain (optional)**
   - In your site settings, go to "Domain management"
   - You can either purchase a domain through Netlify or configure your own

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize your site**
   ```bash
   cd 3D_Portfolio
   netlify init
   ```
   - Follow the prompts to either create a new site or connect to an existing one
   - Configure your build settings when prompted

4. **Deploy your site**
   ```bash
   netlify deploy --prod
   ```

## Continuous Deployment

With GitHub integration, any changes pushed to your main branch will automatically trigger a new build and deployment on Netlify.

## Troubleshooting

- **404 errors when refreshing pages**: This should be automatically handled by the `_redirects` file and `netlify.toml` configuration
- **Build failures**: Check the build logs in Netlify for specific errors
- **3D models not loading**: Ensure all model paths are relative and included in your repository

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
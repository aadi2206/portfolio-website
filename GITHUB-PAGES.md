# Deploying to GitHub Pages

This guide will help you deploy your portfolio website to GitHub Pages.

## Steps to Deploy

1. **Create a GitHub Account** (if you don't have one already)
   - Go to [GitHub](https://github.com) and sign up for an account.

2. **Create a Repository**
   - Click on the "+" icon in the top right corner and select "New repository".
   - Name the repository `yourusername.github.io` (replace `yourusername` with your GitHub username).
   - Make the repository public.
   - Click "Create repository".

3. **Upload Your Website Files**
   - You can do this by cloning the repository locally and copying the files, or by using the GitHub web interface to upload files.
   - Make sure all files are in the root directory of the repository.

4. **Verify Deployment**
   - Your website should be automatically deployed to `https://yourusername.github.io`.
   - It may take a few minutes for the deployment to complete.

5. **Check Settings**
   - Go to your repository settings.
   - Scroll down to the "GitHub Pages" section.
   - Make sure the source is set to the main branch.

## Custom Domain (Optional)

If you want to use a custom domain:

1. **Purchase a Domain** from a domain registrar like Namecheap, GoDaddy, or Google Domains.

2. **Configure DNS**:
   - Add an A record pointing to GitHub Pages IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `yourusername.github.io`.

3. **Add Custom Domain in GitHub**:
   - Go to repository settings.
   - In the GitHub Pages section, enter your custom domain.
   - Click "Save".

4. **Enforce HTTPS**:
   - Once your DNS propagates, check the "Enforce HTTPS" option.

## Troubleshooting

- **Site Not Deploying**: Make sure your repository is named exactly `yourusername.github.io`.
- **CSS Not Loading**: Check that all paths in your HTML file are correct.
- **404 Error**: Ensure you have an `index.html` file in the root of your repository.

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Setting up a Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [HTTPS Configuration](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https) 
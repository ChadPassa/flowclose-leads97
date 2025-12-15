# Netlify Deployment Instructions

## One-Time Setup (2 minutes)

1. **Go to Netlify**: https://app.netlify.com
2. **Click**: "Add new site" → "Import an existing project"
3. **Choose**: GitHub
4. **Select repo**: `ChadPassa/flowclose-anonymous-visitors`
5. **Settings** (should auto-detect from netlify.toml):
   - Build command: `echo 'No build needed - static site'`
   - Publish directory: `.`
6. **Click**: "Deploy site"

## After Setup

**Every time you push to GitHub, Netlify automatically deploys!**

No manual deployment needed ever again.

## Custom Domain (Optional)

1. In Netlify dashboard → Domain settings
2. Add custom domain: `anonymous.flowclosepro.com` (or whatever you want)
3. Update DNS records as instructed
4. SSL certificate auto-generated

## Site Name

Default: Random Netlify subdomain (e.g., `flowclose-anonymous-visitors-abc123.netlify.app`)

To customize:
1. Site settings → Site details → Change site name
2. Enter: `flowclose-anonymous-visitors`
3. New URL: `flowclose-anonymous-visitors.netlify.app`

## Environment Variables (If Needed Later)

Site settings → Environment variables → Add variable

## Build Status Badge (Optional)

Add to README.md:
```
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/flowclose-anonymous-visitors/deploys)
```

## Deployment Logs

View all deployments and logs: https://app.netlify.com/sites/flowclose-anonymous-visitors/deploys

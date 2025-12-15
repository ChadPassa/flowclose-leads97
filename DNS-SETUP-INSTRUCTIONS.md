# DNS Setup Instructions for leads97.flowclosepro.com

## Required DNS Record

To connect leads97.flowclosepro.com to your Netlify site, you need to add the following DNS record at your domain registrar:

| Type | Name/Host | Value/Points To |
|------|-----------|-----------------|
| **CNAME** | `leads97` | `flowclose-leads97.netlify.app` |

## Steps to Add DNS Record

1. **Log in to your DNS provider** (where flowclosepro.com is registered - likely GoDaddy, Namecheap, Cloudflare, etc.)

2. **Navigate to DNS Management** for flowclosepro.com

3. **Add a new CNAME record:**
   - **Type:** CNAME
   - **Name/Host:** `leads97`
   - **Value/Target:** `flowclose-leads97.netlify.app`
   - **TTL:** Auto or 3600 (1 hour)

4. **Save the record**

## Verification

After adding the DNS record:
- DNS propagation can take up to 24 hours (usually much faster, 5-30 minutes)
- Once propagated, Netlify will automatically provision an SSL certificate
- The site will be live at https://leads97.flowclosepro.com

## Current Status

- **Netlify Site:** flowclose-leads97.netlify.app ✅ (Live)
- **Custom Domain:** leads97.flowclosepro.com ⏳ (Pending DNS verification)

## Quick Check

You can verify DNS propagation using:
- https://www.whatsmydns.net/#CNAME/leads97.flowclosepro.com
- Or run: `nslookup leads97.flowclosepro.com`

---

**Note:** The existing leads.flowclosepro.com site should already have DNS configured. You can use the same DNS provider interface to add this new subdomain record.


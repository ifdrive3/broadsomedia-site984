# Broadsomedia™ — Static Site + Netlify Functions

## Overview
This repository contains the public website and lightweight Netlify serverless + edge functions for Broadsomedia™.

## Structure
- `public/` — static website files (index.html, styles, scripts, feeds, .well-known)
- `netlify/functions/` — serverless endpoints (ai-export, sitemap, verify)
- `netlify/edge-functions/` — edge-level bot-protect (adapt to provider)
- `_headers` — Netlify headers for security
- `deploy-sitemap.js` — helper to regenerate sitemap

## Local testing
1. Install dev deps:
   ```bash
   npm install

# 🚀 Deployment Guide: PKU + THU Joint Postdoc Forum 2025

This guide explains how to build and deploy the static website using nginx.

## 📋 Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **nginx** web server
- **Git** (for cloning the repository)

## 🔧 Building Static Assets

### Option 1: Using the Build Script (Recommended)

#### Linux/macOS:
```bash
# Make script executable (first time only)
chmod +x build-static.sh

# Run the build script
./build-static.sh
```

#### Windows:
```cmd
# Run the build script
build-static.bat
```

### Option 2: Manual Build Process

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Temporarily enable static export in `next.config.ts`:**
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   };
   ```

3. **Build the project:**
   ```bash
   npm run build
   # or
   yarn build
   ```

4. **Static files will be generated in the `out/` directory**

## 📁 Build Output Structure

After building, the `out/` directory will contain:

```
out/
├── en/                           # English version
│   ├── index.html               # Homepage
│   ├── registration/
│   │   └── index.html          # Registration page
│   ├── program/
│   │   └── index.html          # Program page
│   ├── venue/
│   │   └── index.html          # Venue page
│   └── contact/
│       └── index.html          # Contact page
├── zh/                          # Chinese version
│   ├── index.html               # 首页
│   ├── registration/
│   │   └── index.html          # 注册页面
│   ├── program/
│   │   └── index.html          # 日程页面
│   ├── venue/
│   │   └── index.html          # 会议地点页面
│   └── contact/
│       └── index.html          # 联系页面
├── _next/                       # Next.js assets
├── registration-qr-code.jpg     # QR code image
└── deployment-info.txt          # Build information
```

## 🌐 Nginx Deployment

### Step 1: Copy Static Files

Copy all files from the `out/` directory to your nginx web root:

```bash
# Example nginx web root path
sudo cp -r out/* /var/www/html/postdoc-forum/
```

### Step 2: Configure Nginx

1. **Copy the nginx configuration:**
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/postdoc-forum
   ```

2. **Edit the configuration file:**
   ```bash
   sudo nano /etc/nginx/sites-available/postdoc-forum
   ```

3. **Update the following values:**
   - `server_name`: Replace `your-domain.com` with your actual domain
   - `root`: Update the path to your web root directory
   - SSL certificate paths (if using HTTPS)

4. **Enable the site:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/postdoc-forum /etc/nginx/sites-enabled/
   ```

5. **Test nginx configuration:**
   ```bash
   sudo nginx -t
   ```

6. **Reload nginx:**
   ```bash
   sudo systemctl reload nginx
   ```

### Step 3: Configure DNS (if applicable)

Point your domain to your server's IP address:

```
A Record: your-domain.com → your-server-ip
CNAME Record: www.your-domain.com → your-domain.com
```

## 🔒 SSL/HTTPS Setup (Optional but Recommended)

### Using Let's Encrypt (Certbot):

1. **Install Certbot:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

2. **Obtain SSL certificate:**
   ```bash
   sudo certbot --nginx -d KIAA-DoA-postdoc-forum-2025.kiaa-pku.cn
   ```

3. **Certbot will automatically update your nginx configuration**

## 🧪 Testing the Deployment

1. **Test basic connectivity:**
   ```bash
   curl -I http://your-domain.com
   ```

2. **Check language redirects:**
   - `https://KIAA-DoA-postdoc-forum-2025.kiaa-pku.cn/` → should redirect to `/en/`
   - `https://KIAA-DoA-postdoc-forum-2025.kiaa-pku.cn/en/` → English homepage
   - `https://KIAA-DoA-postdoc-forum-2025.kiaa-pku.cn/zh/` → Chinese homepage

3. **Test specific pages:**
   - `https://KIAA-DoA-postdoc-forum-2025.kiaa-pku.cn/en/registration/` → English registration
   - `https://KIAA-DoA-postdoc-forum-2025.kiaa-pku.cn/zh/registration/` → Chinese registration

4. **Check QR code accessibility:**
   - `https://KIAA-DoA-postdoc-forum-2025.kiaa-pku.cn/registration-qr-code.jpg`

## 🔧 Nginx Configuration Features

The provided nginx configuration includes:

- ✅ **Automatic language routing** (root `/` redirects to `/en/`)
- ✅ **Gzip compression** for better performance
- ✅ **Static asset caching** with proper cache headers
- ✅ **Security headers** (X-Frame-Options, CSP, etc.)
- ✅ **Error page handling**
- ✅ **SSL/HTTPS ready** configuration
- ✅ **Fallback routing** for unknown URLs

## 🔄 Updating the Website

1. **Pull latest changes:**
   ```bash
   git pull origin main
   ```

2. **Rebuild static assets:**
   ```bash
   ./build-static.sh
   ```

3. **Copy updated files:**
   ```bash
   sudo cp -r out/* /var/www/html/postdoc-forum/
   ```

4. **No nginx restart needed** (serving static files)

## 🐛 Troubleshooting

### Common Issues:

1. **404 errors on page refresh:**
   - Check nginx configuration for proper `try_files` directives
   - Ensure all `index.html` files are present in subdirectories

2. **CSS/JS not loading:**
   - Verify `_next/` directory is accessible
   - Check browser console for 404 errors
   - Ensure proper caching headers

3. **Language switching not working:**
   - Check nginx URL rewriting rules
   - Verify both `/en/` and `/zh/` directories exist

4. **QR code image not displaying:**
   - Confirm `registration-qr-code.jpg` is in the web root
   - Check file permissions

### Nginx Log Files:

- **Access logs:** `/var/log/nginx/postdoc-forum-access.log`
- **Error logs:** `/var/log/nginx/postdoc-forum-error.log`

### Common Warnings:

**Note:** In shared hosting environments with multiple SSL sites, you may see these warnings during `nginx -t`:
- `"protocol options redefined for 0.0.0.0:443"` - This occurs when multiple sites define SSL settings for the same IP:port. This is normal and doesn't affect functionality.
- `"duplicate MIME type"` - This happens when multiple sites define overlapping gzip MIME types. Our configuration uses minimal MIME types to avoid conflicts.

These warnings don't prevent nginx from working correctly but indicate configuration overlaps between different sites on the same server.

## 📊 Performance Optimization

### Additional nginx optimizations:

1. **Enable HTTP/2:**
   ```nginx
   listen 443 ssl http2;
   ```

2. **Add more aggressive caching:**
   ```nginx
   location ~* \.(css|js)$ {
       expires 1y;
       add_header Cache-Control "public, immutable";
   }
   ```

3. **Enable brotli compression** (if available):
   ```nginx
   brotli on;
   brotli_comp_level 6;
   brotli_types text/plain text/css application/json application/javascript;
   ```

## 📞 Support

For issues related to:
- **Building:** Check build script logs and Node.js version
- **Deployment:** Review nginx error logs and configuration
- **SSL:** Verify certificate installation and renewal

---

**Generated with [Claude Code](https://claude.com/claude-code)**
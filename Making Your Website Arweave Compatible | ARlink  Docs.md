---
author:    null
title:     [Making Your Website Arweave Compatible | ARlink  Docs]
source:    https://arlink.gitbook.io/arlink-docs/getting-started/making-your-website-arweave-compatible
clipped:   2025-01-28
published: 

tags:      [clippings]
---

1.  [Getting Started](https://arlink.gitbook.io/arlink-docs/getting-started)

Learn how to prepare your web application for deployment on the Arweave permaweb. This guide covers essential modifications needed for different frameworks and explains important concepts for permaweb compatibility.

## 

Hash Routing Requirements

When deploying applications to Arweave, hash routing is essential for several reasons:

1.  **Serverless Architecture**
    
    -   Arweave is a decentralized storage network without traditional servers
        
    -   No server-side routing is available to handle clean URLs
        
    -   Hash-based routing ensures all navigation happens client-side
        
    
2.  **Data Permanence**
    
    -   Content on Arweave is immutable once stored
        
    -   Hash routing enables "dynamic" content within this immutable structure
        
    -   Allows for SPA-like navigation without server intervention
        
    
3.  **Performance Benefits**
    
    -   All necessary code loads once at initial request
        
    -   Reduces network requests during navigation
        
    -   Improves overall application performance
        
    

Without hash routing, your application's routes may break when users refresh the page or share direct links.

## 

Framework-Specific Configuration

Choose your framework below for specific configuration instructions:

1.  Use HashRouter from react-router-dom:
    

```
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      {/* Your routes here */}
    </HashRouter>
  );
}
```

```
{
  "scripts": {
    "build": "PUBLIC_URL=./ react-scripts build"
  }
}
```

```
module.exports = {
  assetPrefix: "./",
  output: 'export',  // Enables static HTML export
  images: {
    unoptimized: true // Required for static export
  }
}
```

```
{
  "scripts": {
    "build": "next build && next export"
  }
}
```

Next.js doesn't support hash routing. The manifest is adjusted for routes to work on reload, but dynamic routes may have limitations.

1.  Create or modify vue.config.js:
    

```
module.exports = {
  publicPath: "./"
}
```

```
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...]
})
```

Modify nuxt.config.js:

```
export default {
  target: 'static',
  router: {
    mode: 'hash',
    base: './'
  }
}
```

1.  Use hash router for your framework (React, Vue, or Svelte)
    

```
{
  "scripts": {
    "build": "vite build --base ./"
  }
}
```

All assets in your application must use relative paths because:

1.  **Gateway Flexibility**
    
    -   Your app can be accessed through different Arweave gateways
        
    -   Absolute paths tied to specific domains won't work
        
    -   Relative paths ensure resource accessibility regardless of gateway
        
    
2.  **Decentralized Nature**
    
    -   No central server or root directory exists
        
    -   Files must be referenced relative to their location
        
    -   Ensures assets are found regardless of access point
        
    

### 

Path Configuration Guidelines

Follow these rules for proper path configuration:

1.  **Asset References**
    
    -   Use `./` prefix for same-directory resources
        
    -   Use relative paths for images, styles, and scripts
        
    -   Avoid absolute paths starting with `/`
        
    
2.  **Common Patterns**
    
    ```
    ✅ Good: ./images/logo.png
    ✅ Good: ../assets/style.css
    ❌ Bad: /images/logo.png
    ❌ Bad: https://mysite.com/images/logo.png
    ```
    
3.  **Directory Navigation**
    
    -   Same directory: `./file.jpg`
        
    -   Child directory: `./images/file.jpg`
        
    -   Parent directory: `../file.jpg`
        
    

Before deploying, verify these items:

-   Hash routing implemented (if applicable)
    
-   Build configuration updated for your framework
    
-   All file paths are relative
    
-   Assets are properly referenced
    
-   Test build locally before deployment
    

For HTML/CSS/JS applications without a framework, no special configuration is needed. You can deploy your files directly!

## 

Common Issues and Solutions

Broken images after deployment[](#broken-images-after-deployment)

-   Check image paths are relative
    
-   Verify image files are included in build
    
-   Ensure correct case sensitivity in filenames
    

Routes not working on refresh[](#routes-not-working-on-refresh)

-   Confirm hash routing is properly implemented
    
-   Check router configuration
    
-   Verify base URL configuration
    

Assets not loading[](#assets-not-loading)

-   Check for absolute paths in code
    
-   Verify build configuration
    
-   Ensure all assets are included in build directory
    

Once your application is properly configured:

Learn how to deploy your configured application

Test your deployed application

Common issues and solutions
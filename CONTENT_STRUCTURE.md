# 1. Checklists
name (string), slug (based on name), sections - consisting of name (string) and tasks (relation to name [multiple choice])

# 2. Checklist Tasks
name (string), slug (based on name), description (markdown),
priority (low, medium, high), tags (relation to name [multiple choice]), 

solution (markdown)

***QUICK NOTE:*** Detailed solution is rich markdown editor in admin panel where we probably use custom markdown elements
to display tabs or some styled list with possible solutions for Netlify, Apache if it comes to deployment, ESLint or other linters
if it comes to linting etc.

# 3. Task Tags
name (string), slug (based on name)

## Samples:
```bazaar
| Deployment
    | Make sure staging is password protected
        -| Netlify
        -| Apache
        -| Nginx
    | Secure Headers
    | Do not expose environment variables
    | Configure CI
| HEAD
    | Doctype: The Doctype is HTML5 and is at the top of all your HTML pages.
    | Charset: The charset declared (UTF-8) is declared correctly.
    | Viewport: The viewport is declared correctly.
| HTML
    | Error pages: Error 404 page and 5xx exist
    | Noopener: Prevent tab nabbing.
    | Adblockers test: Your website shows your content correctly with adblockers enabled
```
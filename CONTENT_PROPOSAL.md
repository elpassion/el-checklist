# 1. Task Categories
category_name (string), category_slug (based on name), category_introdution (markdown), order (num)

# 2. Checklist Tasks
category (correlation to category_name), task_name (string), task_slug (based on name), task_detailed_description (markdown),
task_priority (low, medium, high), task_tags (correlation to tag_name [multiple choice]), 
task_detailed_solutions (correlation to detailed_solution_name)

# 3. Task Tags
tag_name (string), tag_slug (based on name)

# 4. Detailed solution
detailed_solution_name (string [ex. Deployment - Stagging Password Protection] with proper name to make it easily searchable)
detailed_solution_slug (based on name), detailed_solution (markdown)

***QUICK NOTE:*** Detailed solution is rich markdown editor in admin panel where we probably use cusotm markdown elements
to display tabs or some styled list with possible solutions for Netlify, Apache if it comes to deployment, ESLint or other linters
if it comes to linting etc.

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
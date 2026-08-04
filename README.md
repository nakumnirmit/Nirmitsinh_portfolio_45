# Search Savaari Portfolio Project

This folder is ready for a **Next.js App Router** portfolio.

## Add it to your repository

Copy these folders into the root of your project:

```text
app/
public/
snippets/
```

The project page will be available at:

```text
/projects/search-savaari
```

## Add the card to your portfolio home page

Open:

```text
snippets/project-entry.js
```

Copy the `searchSavaariProject` object into the array that currently stores your portfolio projects.

## Important route adjustments

The page currently uses:

```jsx
<Link href="/">Back to portfolio</Link>
<Link href="/contact">Start a project</Link>
```

Change these two links if your portfolio or contact routes are different.

## Fonts

The page uses your website's existing font, so no new font package is required.

## Images

All nine creatives are already renamed, compressed to WebP and stored in:

```text
public/portfolio/search-savaari/
```

## If your website uses the Pages Router

Move the JSX page to:

```text
pages/projects/search-savaari.jsx
```

Then change the CSS import path as needed. The `metadata` export is only for the App Router and can be removed in the Pages Router.

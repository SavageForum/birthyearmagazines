Title: Fix index.html — HTML markup and links

This PR fixes several HTML syntax issues in index.html that were preventing the page from rendering correctly. It also adds a basic stylesheet and placeholder year pages (1990–1995) to provide a working starting point.

Changes included:
- index.html: corrected malformed tags, added meta description, and linked stylesheet.
- style.css: added basic site styling for hero, year cards, benefits, and featured section.
- 1990.html–1995.html: placeholder pages for each year linked from the homepage.

Testing notes:
- Preview the site by checking out the `fix/index-html` branch locally or viewing the files in the branch on GitHub.
- Ensure the image `/fhm-1992.jpg` is added to the repository, or update the path in index.html.

If you'd like, I can add reviewers, labels, or mark the PR as a draft.
# wrtobin.github.io

This repository contains a static Jekyll site for public-facing material related to HPC, scientific software, computational science, technical writing, and browser-based Lab experiments.

## Structure

- `index.md`: homepage
- `capabilities.md`: technical areas
- `public-work.md`: open-source, talks, publications, and public artifacts
- `cv.md`: longer-form CV page
- `contact.md`: contact and profile links
- `cv/cv.tex`: source LaTeX CV retained in the repository but excluded from the published site output
- `_articles/`: self-published note drafts rendered as standalone pages
- `articles/index.md`: self-published notes index
- `lab/`: Lab landing page and isolated demos
- `archive/legacy-homepage.md`: preserved content from the pre-refactor homepage
- `grad.md`: archived graduate and postdoctoral material

## Local development

Install Ruby and Bundler if they are not already available:

```bash
gem install bundler
bundle install
```

Run a local preview server:

```bash
bundle exec jekyll clean
bundle exec jekyll serve --livereload
```

The site will be available at `http://127.0.0.1:4000/`.

Build the static output without serving:

```bash
bundle exec jekyll build
```

The generated site is written to `_site/`.

## Self-published notes

Add new notes under `_articles/` with frontmatter including at least `title`, `date`, `summary`, and `status`.

If a note should stay in the repository but not appear in the published site output yet, add:

```yaml
published: false
```

When that flag is present, a normal `bundle exec jekyll build` or `bundle exec jekyll serve` run will keep the note out of `_site/` until it is ready to be published.

## Lab

The main site remains plain static Jekyll. Lab demos are isolated so browser-side JavaScript and static experiment assets do not affect the rest of the site.

- Each demo can live in its own folder under `lab/` with an `index.md`, a small JavaScript loader, and any generated `.wasm` files.
- If a Lab page should stay in the repository without being published into `_site/`, add `published: false` to that page frontmatter. The Lab index will only list pages that are actually published.

The current floating-point summation demo uses a minimal static-served Wasm binary to prove out the loading path while keeping the main site build simple.

## Deployment

This repository is already configured as a GitHub Pages site and includes a `CNAME` file for a custom domain.

If GitHub Pages remains configured to build from the default branch, deployment is simply:

```bash
git push origin <default-branch>
```

If you want to verify the exact publishing configuration in GitHub, check the repository Pages settings after pushing.

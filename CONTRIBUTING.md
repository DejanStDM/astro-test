# Contributing Guidelines

Thank you for your interest in contributing to this project. To ensure consistency and maintainability, please follow these guidelines when adding new sections or components.

## Frameworks and Libraries

### Bootstrap

Bootstrap should be used for styling and layout in all helper and documentation HTML files. This includes files in the root directory, `examples/`, and `design-system/`.

Files located in the `pages/` directory are based on specific Figma designs and **should not** use Bootstrap, as they rely on the project's custom SCSS styles.

## Creating a New Section

This guide uses the "Generic Section" as an example. When creating a new section, replace `[section-name]` with a descriptive name for your component (e.g., `about-section`, `team-members`).

### 1. HTML Structure

All new sections should follow a consistent HTML structure based on BEM (Block, Element, Modifier) principles. Create a new `.html` file in the `examples/` directory to demonstrate your section.

**Example Structure:**

```html
<section class="page-sec page-sec--[section-name]">
    <div class="container">
        <div class="[section-name]">
            <div class="[section-name]__header">
                <h2 class="heading-h2 [section-name]__title">Section Title</h2>
                <h3 class="heading-h3 [section-name]__subtitle">Section Subtitle</h3>
            </div>
            <div class="[section-name]__content">
                <!-- Your content goes here -->
                <h2>Content Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
        </div>
    </div>
</section>
```

**Key Classes:**

*   **`page-sec`**: The base class for all page sections.
*   **`page-sec--[section-name]`**: A modifier class to apply specific top-level styles to this section type.
*   **`container`**: A wrapper to constrain the content width.
*   **`[section-name]`**: The main block/component class for your section. All element classes within the section should be prefixed with this name.
*   **`[section-name]__element`**: BEM-style classes for elements within the section (e.g., `__title`, `__header`, `__content`).

### 2. SCSS Styling

Create a new SCSS partial for your section in the `src/scss/components/` directory.

1.  **File Name:** Name the file `_[section-name].scss`.
2.  **Content:** Use the BEM naming convention to style your components.

**Example `_team-section.scss`:**

```scss
// src/scss/components/_team-section.scss
.page-sec--team-section{
    // if section wrapper need styling
    background-color: white;
}
.team-section {
    // Block styles

    &__header {
        // Element styles
        text-align: center;
        margin-bottom: 2rem;
    }

    &__title {
        // Element styles
    }

    &__subtitle {
        // Element styles
    }

    &__content {
        // Element styles
        display: grid;
        gap: 1rem;
    }
}
```

### 3. Import Styles

Finally, import your new SCSS partial into `src/scss/main.scss` under the components section.

```scss
// src/scss/main.scss

// ... other imports

@import 'components/team-section';

// ... other imports
```
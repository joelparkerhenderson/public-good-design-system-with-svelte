# Back Link Component

A navigation component that allows users to go back to a previous page or trigger a back action.

## Usage

```svelte
<script>
  import BackLink from '$lib/components/back-link/BackLink.svelte';
</script>

<BackLink href="/previous-page" />
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | `string` | No | `'Back'` | Text content for the back link |
| `html` | `string` | No | - | HTML content for the back link (takes precedence over text) |
| `href` | `string` | No | `'#'` | URL the link points to (only used when element is 'a') |
| `element` | `'a' \| 'button'` | No | `'a'` | HTML element to use |
| `classes` | `string` | No | `''` | Additional CSS classes |
| `attributes` | `object` | No | `{}` | Additional HTML attributes |

## Examples

### Basic usage
```svelte
<BackLink href="/search-results" />
```

### Custom text
```svelte
<BackLink text="Return to homepage" href="/" />
```

### As button (for JavaScript navigation)
```svelte
<BackLink element="button" text="Go back" />
```

### With HTML content
```svelte
<BackLink html="Back to <strong>search results</strong>" href="/search" />
```

## Accessibility

- Uses semantic elements (`<a>` or `<button>`)
- Icon is marked as `aria-hidden="true"`
- Maintains proper focus management
- Compatible with screen readers

## Design System Notes

- Converted from NHS UK `nhsuk-back-link` component
- Uses DaisyUI button ghost variant for consistent styling
- Maintains original chevron-left icon
- Branded with "public-good" prefix instead of "nhsuk"
- Supports both link and button variants for different use cases
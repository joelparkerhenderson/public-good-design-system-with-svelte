# Action Link Component

A styled link component that includes an arrow icon to indicate navigation or external actions.

## Usage

```svelte
<script>
  import ActionLink from '$lib/components/action-link/ActionLink.svelte';
</script>

<ActionLink 
  text="Find a GP practice"
  href="/find-gp"
/>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | `string` | No | - | Text content for the link |
| `html` | `string` | No | - | HTML content for the link (takes precedence over text) |
| `href` | `string` | Yes | - | URL the link points to |
| `openInNewWindow` | `boolean` | No | `false` | Opens link in new tab/window |
| `classes` | `string` | No | `''` | Additional CSS classes |
| `attributes` | `object` | No | `{}` | Additional HTML attributes |

## Examples

### Basic usage
```svelte
<ActionLink text="Find a service" href="/services" />
```

### With HTML content
```svelte
<ActionLink html="<strong>Book</strong> an appointment" href="/book" />
```

### External link
```svelte
<ActionLink 
  text="External resource" 
  href="https://example.com" 
  openInNewWindow={true}
/>
```

## Accessibility

- Includes proper ARIA attributes
- Uses semantic `<a>` element
- Icon is marked as `aria-hidden="true"`
- External links automatically include `rel="noopener noreferrer"`

## Design System Notes

- Converted from NHS UK `nhsuk-action-link` component
- Uses DaisyUI button classes for consistent styling
- Maintains original icon and layout structure
- Branded with "public-good" prefix instead of "nhsuk"
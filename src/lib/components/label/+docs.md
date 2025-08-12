# Label

The label component provides accessible form labels that can be used standalone or as page headings.

## Usage

```svelte
<script>
  import { Label } from '$lib/components';
</script>

<Label text="Field label" for="field-id" />
<input type="text" id="field-id" />
```

## Examples

### Basic label
Associate a label with a form control using the `for` attribute.

### Label with HTML
Include formatted text, required indicators, or additional markup.

### Page heading label
Use the label as the main page heading with `isPageHeading={true}`.

### Form integration
Labels work seamlessly with all form input types and controls.

### Custom styling
Apply additional CSS classes for different visual treatments.

## Accessibility

The label component:
- Associates with form controls via `for` attribute
- Supports screen readers with semantic HTML
- Maintains proper heading hierarchy when used as page heading
- Provides keyboard navigation support
- Works with required field indicators

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `text` | `string` | `undefined` | Plain text content |
| `html` | `string` | `undefined` | HTML content (takes precedence over text) |
| `for` | `string` | `undefined` | ID of associated form control |
| `isPageHeading` | `boolean` | `false` | Render as page heading (h1) |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

## Design tokens

The component uses these design tokens:

- `label` - Base label styling from DaisyUI
- `label-text` - Text styling for labels
- `text-3xl font-bold` - Page heading styling
- `public-good-label-wrapper` - Wrapper for page heading labels

## Related components

- [Input](../input/+docs.md) - For text input fields with integrated labels
- [Fieldset](../fieldset/+docs.md) - For grouping related form controls
- [Hint](../hint/+docs.md) - For providing guidance text
- [ErrorMessage](../error-message/+docs.md) - For validation error messages
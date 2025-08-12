# Input

The input component provides text input fields with comprehensive support for labels, hints, error messages, and various input types.

## Usage

```svelte
<script>
  import { Input } from '$lib/components';
  
  let value = $state('');
</script>

<Input 
  name="example"
  label={{ text: "Label text" }}
  bind:value
/>
```

## Examples

### Basic input
A simple text input with a label.

### Input with hint
Provide guidance text to help users understand what to enter.

### Input with error
Display validation errors with proper accessibility support.

### Different input types
Support for email, password, tel, url, search, and number inputs.

### Input with prefix/suffix
Add prefix or suffix text for context like currency symbols or units.

### Page heading input
Use the input label as the main page heading.

### Form states
Support for disabled, readonly, and required states.

## Accessibility

The input component:
- Associates labels with inputs using proper `for` attributes
- Connects hints and error messages via `aria-describedby`
- Supports screen readers with semantic HTML
- Provides keyboard navigation support
- Maintains focus management
- Uses appropriate input types for better mobile keyboards

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `name` | `string` | Required | Input name attribute |
| `label` | `InputLabel` | Required | Label configuration object |
| `label.text` | `string` | `undefined` | Label text content |
| `label.html` | `string` | `undefined` | Label HTML content |
| `label.isPageHeading` | `boolean` | `false` | Render as page heading |
| `label.classes` | `string` | `undefined` | Additional label classes |
| `id` | `string` | `name` | Input ID (defaults to name) |
| `type` | `string` | `'text'` | Input type (text, email, password, etc.) |
| `value` | `string` | `''` | Input value (bindable) |
| `hint` | `InputHint` | `undefined` | Hint configuration object |
| `errorMessage` | `InputErrorMessage` | `undefined` | Error message configuration |
| `prefix` | `string` | `undefined` | Text to display before input |
| `suffix` | `string` | `undefined` | Text to display after input |
| `disabled` | `boolean` | `false` | Whether input is disabled |
| `readonly` | `boolean` | `false` | Whether input is read-only |
| `required` | `boolean` | `false` | Whether input is required |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `autocomplete` | `string` | `undefined` | Autocomplete attribute |
| `pattern` | `string` | `undefined` | Input pattern for validation |
| `inputmode` | `string` | `undefined` | Input mode for mobile keyboards |
| `spellcheck` | `boolean` | `undefined` | Enable/disable spellcheck |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

## Design tokens

The component uses these design tokens:

- `input input-bordered` - Base input styling from DaisyUI
- `input-error` - Error state styling
- `form-control` - Form group wrapper
- `label-text` - Label text styling
- `bg-base-200 border border-base-300` - Prefix/suffix styling

## Related components

- [ErrorMessage](../error-message/+docs.md) - For displaying validation errors
- [Hint](../hint/+docs.md) - For providing guidance text
- [Fieldset](../fieldset/+docs.md) - For grouping related inputs
- [Button](../button/+docs.md) - For form submission
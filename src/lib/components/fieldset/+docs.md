# Fieldset

The fieldset component groups related form controls together with an optional legend.

## Usage

```svelte
<script>
  import { Fieldset } from '$lib/components';
</script>

<Fieldset 
  legend={{ text: "Personal information" }}
>
  <!-- Form controls -->
</Fieldset>
```

## Examples

### Basic fieldset
Use a fieldset to group related form inputs together.

### Fieldset as page heading
Set `legend.isPageHeading` to true to use the legend as the main page heading.

### With HTML legend
Use `legend.html` instead of `legend.text` to include HTML formatting in the legend.

### With described by
Use the `describedBy` prop to associate the fieldset with descriptive text.

## Accessibility

The fieldset component:
- Uses semantic `<fieldset>` and `<legend>` elements
- Supports `aria-describedby` for additional context
- Maintains proper heading hierarchy when used as page heading
- Provides keyboard navigation support

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `legend` | `FieldsetLegend` | `undefined` | Legend configuration object |
| `legend.text` | `string` | `undefined` | Legend text content |
| `legend.html` | `string` | `undefined` | Legend HTML content |
| `legend.classes` | `string` | `undefined` | Additional CSS classes for legend |
| `legend.isPageHeading` | `boolean` | `false` | Whether to render legend as page heading |
| `describedBy` | `string` | `undefined` | ID of element that describes the fieldset |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

## Design tokens

The component uses these design tokens:

- `text-lg font-semibold mb-4` - Legend styling
- `text-3xl font-bold` - Page heading styling

## Related components

- [Checkboxes](../checkboxes/+docs.md) - For grouped checkbox inputs
- [DateInput](../date-input/+docs.md) - For date input controls
- [ErrorMessage](../error-message/+docs.md) - For field-level error messages
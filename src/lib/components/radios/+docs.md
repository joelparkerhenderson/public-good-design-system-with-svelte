# Radios

The radios component allows users to select one option from a set of mutually exclusive choices.

## Usage

```svelte
<script>
  import { Radios } from '$lib/components';
  
  let value = $state('');
</script>

<Radios 
  name="appointment-type"
  fieldset={{
    legend: { text: "What type of appointment do you need?" }
  }}
  items={[
    { text: "GP consultation", value: "gp" },
    { text: "Nurse appointment", value: "nurse" },
    { text: "Blood test", value: "blood-test" }
  ]}
  bind:value
/>
```

## Examples

### Basic radio buttons
Simple radio button groups with text labels.

### With hints
Provide additional guidance for each option with hint text.

### With error messages
Display validation errors with proper accessibility support.

### Conditional content
Show additional form fields or information based on the selected option.

### With dividers
Use dividers to group related options visually.

### Disabled options
Disable specific options that aren't currently available.

## Accessibility

The radios component:
- Uses semantic fieldset and legend elements for grouping
- Associates hints and error messages via `aria-describedby`
- Supports keyboard navigation between options
- Manages focus and selection states properly
- Provides appropriate ARIA attributes for conditional content
- Works with screen readers for all content types

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `name` | `string` | Required | Name attribute for the radio group |
| `items` | `RadioItem[]` | Required | Array of radio button options |
| `value` | `string` | `undefined` | Selected value (bindable) |
| `idPrefix` | `string` | `name` | Prefix for generating element IDs |
| `fieldset` | `RadioFieldset` | `undefined` | Fieldset configuration for grouping |
| `hint` | `RadioHint` | `undefined` | Hint text for the entire group |
| `errorMessage` | `RadioErrorMessage` | `undefined` | Error message configuration |
| `formGroup` | `RadioFormGroup` | `undefined` | Form group wrapper configuration |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

### RadioItem interface

| Property | Type | Description |
| -------- | ---- | ----------- |
| `text` | `string` | Plain text label |
| `html` | `string` | HTML label content |
| `value` | `string` | Value for this option |
| `checked` | `boolean` | Whether this option is selected |
| `disabled` | `boolean` | Whether this option is disabled |
| `hint` | `object` | Hint text for this option |
| `conditional` | `object` | Content to show when selected |
| `divider` | `string` | Text divider between options |
| `label` | `object` | Label styling and attributes |
| `attributes` | `object` | Additional HTML attributes |

## Design tokens

The component uses these design tokens:

- `radio` - Base radio button styling from DaisyUI
- `form-control` - Form wrapper styling
- `label justify-start gap-3` - Label layout
- `text-sm text-base-content/70` - Hint text styling
- `bg-base-200 rounded` - Conditional content background

## Behavior

### Value binding
- Use `bind:value` to track the selected option
- The value corresponds to the `value` property of the selected item
- Changes are reactive and update immediately

### Conditional content
- Content appears when an option with `conditional.html` is selected
- Content is hidden when the option is not selected
- Proper ARIA attributes manage screen reader announcements

### Form integration
- Works with standard form submission
- Integrates with validation frameworks
- Supports error states and messages

## Related components

- [Checkboxes](../checkboxes/+docs.md) - For multiple selection scenarios
- [Fieldset](../fieldset/+docs.md) - For grouping form controls
- [Hint](../hint/+docs.md) - For providing guidance text
- [ErrorMessage](../error-message/+docs.md) - For validation error messages
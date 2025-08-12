# Select

A dropdown selection component that allows users to choose one option from a list. The Select component supports labels, hints, error messages, and various customization options.

## Features

- **Single selection**: Choose one option from a dropdown list
- **Label support**: Required labels with optional page heading style
- **Hint text**: Helpful guidance for users
- **Error handling**: Display validation errors with proper ARIA attributes
- **Accessibility**: Full keyboard navigation and screen reader support
- **Disabled options**: Individual options can be disabled
- **Value binding**: Two-way data binding with Svelte
- **Custom styling**: Extensible with additional CSS classes
- **Form integration**: Works seamlessly with form validation

## Usage

### Basic Select

```svelte
<Select 
  name="appointment-type"
  label={{ text: "Type of appointment" }}
  items={[
    { text: "Choose an option", value: "" },
    { text: "GP consultation", value: "gp" },
    { text: "Nurse appointment", value: "nurse" },
    { text: "Blood test", value: "blood-test" }
  ]}
  bind:value={selectedValue}
/>
```

### With Hint and Error

```svelte
<Select 
  name="gp-selection"
  label={{ text: "Choose your GP" }}
  hint={{ text: "Select the doctor you'd like to see" }}
  errorMessage={{ text: "You must select a GP to continue" }}
  items={[
    { text: "Please select a GP", value: "" },
    { text: "Dr. Sarah Johnson", value: "dr-johnson" },
    { text: "Dr. Michael Brown", value: "dr-brown" }
  ]}
  bind:value={selectedGP}
/>
```

### Page Heading Style

```svelte
<Select 
  name="priority-level"
  label={{ 
    text: "How urgent is your appointment?",
    isPageHeading: true
  }}
  hint={{ text: "This helps us prioritize your request" }}
  items={[
    { text: "Select urgency level", value: "" },
    { text: "Routine (within 2 weeks)", value: "routine" },
    { text: "Urgent (same day)", value: "urgent" }
  ]}
  bind:value={priority}
/>
```

### With Disabled Options

```svelte
<Select 
  name="appointment-slots"
  label={{ text: "Available appointment slots" }}
  items={[
    { text: "Choose a slot", value: "" },
    { text: "Monday 9:00 AM", value: "mon-9" },
    { text: "Tuesday 10:30 AM", value: "tue-1030", disabled: true },
    { text: "Wednesday 4:00 PM", value: "wed-16" }
  ]}
  bind:value={selectedSlot}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **Required** | The name attribute for the select element |
| `items` | `SelectItem[]` | `[]` | Array of options to display |
| `value` | `string` | `''` | The selected value (bindable) |
| `label` | `SelectLabel` | **Required** | Label configuration |
| `hint` | `SelectHint` | `undefined` | Optional hint text |
| `errorMessage` | `SelectErrorMessage` | `undefined` | Error message configuration |
| `id` | `string` | `name` | HTML id attribute |
| `disabled` | `boolean` | `false` | Whether the select is disabled |
| `formGroup` | `SelectFormGroup` | `undefined` | Form group styling options |
| `describedBy` | `string` | `undefined` | Additional aria-describedby value |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

## Item Structure

### SelectItem

| Property | Type | Description |
|----------|------|-------------|
| `text` | `string` | Display text for the option |
| `value` | `string` | Optional value attribute. If not provided, text is used |
| `selected` | `boolean` | Whether this option is selected |
| `disabled` | `boolean` | Whether this option is disabled |
| `attributes` | `Record<string, string>` | Additional HTML attributes |

### SelectLabel

| Property | Type | Description |
|----------|------|-------------|
| `text` | `string` | Label text content |
| `html` | `string` | Label HTML content (alternative to text) |
| `classes` | `string` | Additional CSS classes |
| `isPageHeading` | `boolean` | Render as h1 page heading |
| `attributes` | `Record<string, string>` | Additional HTML attributes |

### SelectHint

| Property | Type | Description |
|----------|------|-------------|
| `text` | `string` | Hint text content |
| `html` | `string` | Hint HTML content (alternative to text) |
| `classes` | `string` | Additional CSS classes |
| `attributes` | `Record<string, string>` | Additional HTML attributes |

### SelectErrorMessage

| Property | Type | Description |
|----------|------|-------------|
| `text` | `string` | Error message text |
| `html` | `string` | Error message HTML (alternative to text) |
| `classes` | `string` | Additional CSS classes |

## Accessibility

The Select component follows WCAG 2.1 guidelines:

- **Labeling**: Proper association between labels and select elements
- **ARIA attributes**: Automatic `aria-describedby` for hints and errors
- **Error states**: Clear indication of validation errors
- **Keyboard navigation**: Full keyboard accessibility
- **Screen readers**: Appropriate announcements for all content
- **Focus management**: Proper focus indication and management

## Styling

The component uses DaisyUI classes with Public Good Design System theming:

```css
.public-good-select {
  /* Base select styling with DaisyUI */
}

.public-good-form-group {
  /* Form group container styling */
}

.public-good-form-group--error {
  /* Error state styling */
}
```

## Related Components

- **Input**: For text input fields
- **Radios**: For single selection with visible options
- **Checkboxes**: For multiple selection
- **ErrorMessage**: For standalone error messages
- **Hint**: For standalone hint text
- **Label**: For standalone labels
- **Fieldset**: For grouping related form controls

## NHS UK Equivalent

This component is based on the NHS UK Design System Select component, adapted for Public Good Design System with Tailwind CSS and DaisyUI styling while maintaining the same accessibility standards and user experience patterns.
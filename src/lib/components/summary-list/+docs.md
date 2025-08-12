# Summary List

A component for displaying structured information as key-value pairs with optional actions. Summary lists are ideal for showing patient information, appointment details, test results, and other structured data that users may need to review or edit.

## Features

- **Structured data display**: Clear key-value pair presentation
- **Optional actions**: Add change/edit links for each row
- **Multiple actions**: Support for multiple action links per row
- **Responsive layout**: Adapts from mobile to desktop layouts
- **HTML content support**: Rich content in keys and values
- **Visually hidden text**: Additional context for screen readers
- **Semantic HTML**: Uses proper `dl`, `dt`, `dd` elements
- **Customizable styling**: Extensible with additional CSS classes

## Usage

### Basic Summary List

```svelte
<SummaryList 
  rows={[
    {
      key: { text: "Full name" },
      value: { text: "Sarah Johnson" }
    },
    {
      key: { text: "Date of birth" },
      value: { text: "15 March 1985" }
    },
    {
      key: { text: "NHS number" },
      value: { text: "123 456 7890" }
    }
  ]}
/>
```

### With Actions

```svelte
<SummaryList 
  rows={[
    {
      key: { text: "Full name" },
      value: { text: "Sarah Johnson" },
      actions: {
        items: [
          { 
            href: "#change-name", 
            text: "Change",
            visuallyHiddenText: "full name"
          }
        ]
      }
    },
    {
      key: { text: "Email" },
      value: { text: "sarah@email.com" },
      actions: {
        items: [
          { 
            href: "#change-email", 
            text: "Change",
            visuallyHiddenText: "email address"
          }
        ]
      }
    }
  ]}
/>
```

### Multiple Actions

```svelte
<SummaryList 
  rows={[
    {
      key: { text: "Contact details" },
      value: { html: "07700 900 123<br>sarah@email.com" },
      actions: {
        items: [
          { 
            href: "#change-phone", 
            text: "Change phone",
            visuallyHiddenText: "phone number"
          },
          { 
            href: "#change-email", 
            text: "Change email",
            visuallyHiddenText: "email address"
          }
        ]
      }
    }
  ]}
/>
```

### HTML Content

```svelte
<SummaryList 
  rows={[
    {
      key: { text: "Test results" },
      value: { 
        html: "<span class='text-success font-semibold'>Normal</span><br>Blood pressure: 120/80 mmHg" 
      }
    },
    {
      key: { text: "Address" },
      value: { 
        html: "123 Main Street<br>London<br>SW1A 1AA" 
      }
    }
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `rows` | `SummaryListRow[]` | `[]` | Array of row objects containing key-value pairs |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

## Row Structure

### SummaryListRow

| Property | Type | Description |
|----------|------|-------------|
| `key` | `SummaryListKey` | The label/term for this row |
| `value` | `SummaryListValue` | The content/description for this row |
| `actions` | `SummaryListActions` | Optional actions (edit/change links) |
| `classes` | `string` | Additional CSS classes for the row |

### SummaryListKey

| Property | Type | Description |
|----------|------|-------------|
| `text` | `string` | Key text content |
| `html` | `string` | Key HTML content (alternative to text) |
| `classes` | `string` | Additional CSS classes |

### SummaryListValue

| Property | Type | Description |
|----------|------|-------------|
| `text` | `string` | Value text content |
| `html` | `string` | Value HTML content (alternative to text) |
| `classes` | `string` | Additional CSS classes |

### SummaryListActions

| Property | Type | Description |
|----------|------|-------------|
| `items` | `SummaryListAction[]` | Array of action links |
| `classes` | `string` | Additional CSS classes |

### SummaryListAction

| Property | Type | Description |
|----------|------|-------------|
| `href` | `string` | Link destination |
| `text` | `string` | Link text |
| `html` | `string` | Link HTML content (alternative to text) |
| `visuallyHiddenText` | `string` | Additional context for screen readers |
| `attributes` | `Record<string, string>` | Additional HTML attributes |

## Responsive Behavior

The Summary List adapts to different screen sizes:

- **Mobile**: Single column layout with stacked key-value pairs
- **Desktop**: Multi-column layout with keys, values, and actions aligned

Layout automatically adjusts based on whether any rows have actions:
- **Without actions**: 2-column layout (key, value)
- **With actions**: 3-column layout (key, value, actions)

## Accessibility

The Summary List component follows WCAG 2.1 guidelines:

- **Semantic HTML**: Uses proper `dl`, `dt`, `dd` elements
- **Screen Readers**: Clear relationship between keys and values
- **Visually Hidden Text**: Additional context for action links
- **Keyboard Navigation**: All action links are keyboard accessible
- **Focus Management**: Proper focus indicators for interactive elements

## Healthcare Use Cases

### Patient Information

```svelte
<SummaryList 
  rows={[
    {
      key: { text: "NHS number" },
      value: { text: "123 456 7890" }
    },
    {
      key: { text: "Date of birth" },
      value: { text: "15 March 1985" },
      actions: {
        items: [{ href: "#update-dob", text: "Update", visuallyHiddenText: "date of birth" }]
      }
    }
  ]}
/>
```

### Appointment Details

```svelte
<SummaryList 
  rows={[
    {
      key: { text: "Date and time" },
      value: { text: "Monday, 25 March 2024 at 2:30 PM" },
      actions: {
        items: [{ href: "#reschedule", text: "Reschedule", visuallyHiddenText: "appointment" }]
      }
    },
    {
      key: { text: "Doctor" },
      value: { text: "Dr. Sarah Johnson" }
    }
  ]}
/>
```

### Test Results

```svelte
<SummaryList 
  rows={[
    {
      key: { text: "Blood pressure" },
      value: { html: "<span class='text-success'>120/80 mmHg</span><br>Normal range" }
    },
    {
      key: { text: "Cholesterol" },
      value: { html: "<span class='text-warning'>5.2 mmol/L</span><br>Slightly elevated" }
    }
  ]}
/>
```

### Prescription Information

```svelte
<SummaryList 
  rows={[
    {
      key: { text: "Medication" },
      value: { html: "<strong>Amlodipine 5mg</strong><br>Once daily with food" },
      actions: {
        items: [
          { href: "#reorder", text: "Reorder", visuallyHiddenText: "Amlodipine" },
          { href: "#details", text: "View details", visuallyHiddenText: "for Amlodipine" }
        ]
      }
    }
  ]}
/>
```

## Styling

The component uses Tailwind CSS classes with grid layout:

```css
.public-good-summary-list {
  /* Grid-based layout with responsive breakpoints */
}

.public-good-summary-list__row {
  /* Row styling with borders and spacing */
}

.public-good-summary-list__key {
  /* Key styling with font weight */
}

.public-good-summary-list__value {
  /* Value styling */
}

.public-good-summary-list__actions {
  /* Action link styling */
}
```

## Best Practices

### Action Links

- Always include `visuallyHiddenText` for context
- Use descriptive link text ("Change email" vs "Change")
- Keep action lists short (1-3 actions maximum)

### Content Organization

- Group related information logically
- Use consistent key naming
- Consider the reading flow for users

### Visual Hierarchy

- Use HTML formatting sparingly in values
- Maintain consistent spacing and alignment
- Consider color coding for status information

## Related Components

- **Card**: For containing summary lists
- **Button**: For primary actions
- **NotificationBanner**: For status messages
- **Details**: For collapsible additional information

## NHS UK Equivalent

This component is based on the NHS UK Design System Summary List component, adapted for Public Good Design System with Tailwind CSS and DaisyUI styling while maintaining the same accessibility standards and user experience patterns.
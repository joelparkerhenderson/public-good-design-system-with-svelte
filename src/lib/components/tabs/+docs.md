# Tabs

A tab interface component for organizing related content into separate panels. Users can switch between different sections of content using tab navigation with full keyboard accessibility and mobile responsiveness.

## Features

- **Accessible navigation**: Full keyboard support with arrow keys and proper ARIA roles
- **Mobile responsive**: Adapts to mobile with vertical tab layout
- **State management**: Visual indication of active tab
- **Flexible content**: Support for both text and HTML content in panels
- **Customizable IDs**: Control tab and panel IDs for integration
- **Focus management**: Proper focus handling for screen readers
- **Touch friendly**: Works well on touch devices
- **Progressive enhancement**: Works without JavaScript

## Usage

### Basic Tabs

```svelte
<Tabs 
  title="Content sections"
  items={[
    {
      label: "Overview",
      panel: {
        text: "This is the overview content for the first tab."
      }
    },
    {
      label: "Details",
      panel: {
        html: "<p>This tab contains <strong>HTML content</strong> with formatting.</p>"
      }
    },
    {
      label: "Settings",
      panel: {
        text: "Configuration and settings information goes here."
      }
    }
  ]}
/>
```

### Healthcare Patient Overview

```svelte
<Tabs 
  title="Patient information"
  idPrefix="patient"
  items={[
    {
      label: "Overview",
      panel: {
        html: `
          <h3>Patient Summary</h3>
          <p>Basic patient information and current status.</p>
        `
      }
    },
    {
      label: "Medical History",
      panel: {
        html: `
          <h3>Medical History</h3>
          <p>Previous conditions, surgeries, and allergies.</p>
        `
      }
    },
    {
      label: "Medications",
      panel: {
        html: `
          <h3>Current Medications</h3>
          <p>Active prescriptions and dosage information.</p>
        `
      }
    }
  ]}
/>
```

### Service Information Tabs

```svelte
<Tabs 
  title="NHS services"
  idPrefix="services"
  items={[
    {
      label: "GP Services",
      panel: {
        html: `
          <h3>General Practice</h3>
          <p>Information about GP consultations and services.</p>
        `
      }
    },
    {
      label: "Emergency",
      panel: {
        html: `
          <h3>Emergency Services</h3>
          <p>When and how to access emergency care.</p>
        `
      }
    },
    {
      label: "Specialists",
      panel: {
        html: `
          <h3>Specialist Services</h3>
          <p>Referrals and specialist care information.</p>
        `
      }
    }
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `TabItem[]` | `[]` | Array of tab items with labels and content |
| `title` | `string` | `'Contents'` | Title displayed on mobile (hidden on desktop) |
| `idPrefix` | `string` | `'tab'` | Prefix for generating tab and panel IDs |
| `id` | `string` | `undefined` | HTML id attribute for the tabs container |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

## Item Structure

### TabItem

| Property | Type | Description |
|----------|------|-------------|
| `label` | `string` | Text displayed on the tab button |
| `id` | `string` | Optional custom ID (auto-generated if not provided) |
| `panel` | `TabPanel` | Content configuration for the tab panel |
| `attributes` | `Record<string, string>` | Additional HTML attributes for the tab button |

### TabPanel

| Property | Type | Description |
|----------|------|-------------|
| `text` | `string` | Plain text content for the panel |
| `html` | `string` | HTML content for the panel (alternative to text) |
| `attributes` | `Record<string, string>` | Additional HTML attributes for the panel |

## Keyboard Navigation

The Tabs component supports full keyboard accessibility:

- **Tab**: Move focus to the tab panel content
- **Arrow Left/Right**: Navigate between tab buttons
- **Home**: Jump to first tab
- **End**: Jump to last tab
- **Enter/Space**: Activate focused tab

## Mobile Behavior

On mobile devices (screens under 768px):

- **Vertical layout**: Tabs stack vertically for easier touch navigation
- **Title display**: The `title` prop is shown above the tabs
- **Touch friendly**: Larger touch targets for tab buttons

## Accessibility

The Tabs component follows WCAG 2.1 guidelines:

- **ARIA roles**: Proper `tablist`, `tab`, and `tabpanel` roles
- **ARIA states**: `aria-selected` and `aria-controls` attributes
- **Focus management**: Logical focus order and clear focus indicators
- **Screen reader support**: Proper labeling and relationships
- **Keyboard navigation**: Full keyboard accessibility
- **Color independence**: Visual state not dependent on color alone

## Healthcare Use Cases

### Patient Information

```svelte
<Tabs 
  title="Patient dashboard"
  items={[
    {
      label: "Summary",
      panel: { html: "<!-- Patient summary content -->" }
    },
    {
      label: "History",
      panel: { html: "<!-- Medical history content -->" }
    },
    {
      label: "Medications",
      panel: { html: "<!-- Current medications -->" }
    },
    {
      label: "Results",
      panel: { html: "<!-- Test results -->" }
    }
  ]}
/>
```

### Service Information

```svelte
<Tabs 
  title="Healthcare services"
  items={[
    {
      label: "Primary Care",
      panel: { html: "<!-- GP and nurse services -->" }
    },
    {
      label: "Emergency",
      panel: { html: "<!-- A&E and urgent care -->" }
    },
    {
      label: "Specialists",
      panel: { html: "<!-- Consultant services -->" }
    },
    {
      label: "Mental Health",
      panel: { html: "<!-- Psychology and psychiatry -->" }
    }
  ]}
/>
```

### Appointment Booking

```svelte
<Tabs 
  title="Book appointment"
  items={[
    {
      label: "Online",
      panel: { html: "<!-- Online booking system -->" }
    },
    {
      label: "Phone",
      panel: { html: "<!-- Phone booking information -->" }
    },
    {
      label: "Walk-in",
      panel: { html: "<!-- Walk-in clinic details -->" }
    }
  ]}
/>
```

## Styling

The component uses DaisyUI tab classes with custom enhancements:

```css
.public-good-tabs {
  /* Container styling */
}

.public-good-tabs__title {
  /* Mobile title (hidden on desktop) */
}

.tab-panel {
  /* Panel content styling */
  min-height: 200px;
  padding: 1rem;
  background: white;
  border: 1px solid #e5e7eb;
}

.tab-panel:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}
```

## Best Practices

### Content Organization

- **Logical grouping**: Group related content together
- **Clear labels**: Use descriptive, concise tab labels
- **Consistent length**: Keep content panels roughly similar in length
- **Meaningful order**: Place most important content in first tab

### Accessibility

- **Descriptive labels**: Use clear, specific tab labels
- **Focus indicators**: Ensure visible focus states
- **Screen reader testing**: Test with screen readers
- **Keyboard testing**: Verify all keyboard interactions work

### Performance

- **Lazy loading**: Consider lazy loading of tab content for large datasets
- **Content size**: Keep individual tab content reasonable
- **HTML complexity**: Avoid overly complex HTML in panels

### Mobile Considerations

- **Touch targets**: Ensure tabs are large enough for touch
- **Content scrolling**: Allow panel content to scroll if needed
- **Orientation**: Consider both portrait and landscape orientations

## Related Components

- **Accordion**: For collapsible content sections
- **Card**: For containing tab content
- **Button**: For tab-like single actions
- **Navigation**: For main site navigation

## NHS UK Equivalent

This component is based on the NHS UK Design System Tabs component, adapted for Public Good Design System with Tailwind CSS and DaisyUI styling while maintaining the same accessibility standards and user experience patterns.
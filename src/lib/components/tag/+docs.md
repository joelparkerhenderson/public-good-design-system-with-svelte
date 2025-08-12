# Tag

A status indicator component for displaying the current state of items, processes, or tasks. Tags help users quickly understand status information and make informed decisions about what actions to take next.

## Features

- **Status indication**: Clear visual representation of current state
- **Color coded**: 10 distinct color variants for different status types
- **Accessible**: WCAG 2.2 compliant with semantic HTML structure
- **Non-interactive**: Status display only, prevents confusion with buttons
- **Flexible content**: Support for both text and HTML content
- **Consistent sizing**: Uniform appearance across different contexts
- **Screen reader friendly**: Uses semantic `<strong>` element
- **Color independent**: Status conveyed through text, not just color

## Usage

### Basic Status Tags

```svelte
<Tag variant="green" text="Completed" />
<Tag variant="blue" text="Pending" />
<Tag variant="red" text="Urgent" />
<Tag variant="grey" text="Not Started" />
```

### Healthcare Appointment Status

```svelte
<Tag variant="green" text="Confirmed" />
<Tag variant="blue" text="Pending" />
<Tag variant="orange" text="Rescheduled" />
<Tag variant="red" text="Cancelled" />
```

### Test Results Status

```svelte
<Tag variant="green" text="Results Available" />
<Tag variant="aqua-green" text="In Progress" />
<Tag variant="blue" text="Scheduled" />
<Tag variant="yellow" text="Delayed" />
```

### Application Process Status

```svelte
<Tag variant="purple" text="Under Review" />
<Tag variant="green" text="Approved" />
<Tag variant="red" text="Additional Info Required" />
<Tag variant="orange" text="Declined" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | `''` | Text content to display in the tag |
| `html` | `string` | `undefined` | HTML content (alternative to text) |
| `variant` | `TagVariant` | `'grey'` | Color variant for the tag |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

## Tag Variants

### Status Variants
- **`white`**: Started, In Progress
- **`grey`**: Not Started, Inactive, Default
- **`green`**: Completed, Approved, Success, New
- **`aqua-green`**: Active, Current, Live

### Process Variants
- **`blue`**: Pending, Scheduled, Routine
- **`purple`**: Received, Under Review
- **`pink`**: Sent, Submitted
- **`orange`**: Declined, Rescheduled, Important
- **`yellow`**: Delayed, Review Due, Warning
- **`red`**: Cancelled, Rejected, Urgent, Error

## Healthcare Use Cases

### Patient Management
```svelte
<!-- Appointment status -->
<Tag variant="green" text="Confirmed" />
<Tag variant="blue" text="Pending Confirmation" />
<Tag variant="red" text="Cancelled" />

<!-- Patient records -->
<Tag variant="green" text="Updated" />
<Tag variant="yellow" text="Requires Attention" />
<Tag variant="grey" text="Archived" />
```

### Medical Testing
```svelte
<!-- Test status -->
<Tag variant="green" text="Completed" />
<Tag variant="aqua-green" text="In Progress" />
<Tag variant="blue" text="Scheduled" />
<Tag variant="orange" text="Delayed" />

<!-- Result status -->
<Tag variant="green" text="Normal" />
<Tag variant="yellow" text="Abnormal - Review" />
<Tag variant="red" text="Critical - Urgent" />
```

### Treatment Plans
```svelte
<!-- Treatment status -->
<Tag variant="green" text="Active Treatment" />
<Tag variant="blue" text="Monitoring" />
<Tag variant="orange" text="On Hold" />
<Tag variant="grey" text="Completed" />
```

### Prescription Management
```svelte
<!-- Medication status -->
<Tag variant="green" text="Active" />
<Tag variant="yellow" text="Review Due" />
<Tag variant="red" text="Expired" />
<Tag variant="grey" text="Discontinued" />
```

## Task Management

```svelte
<!-- Task status -->
<Tag variant="green" text="Completed" />
<Tag variant="white" text="Started" />
<Tag variant="grey" text="Not Started" />
<Tag variant="red" text="Overdue" />
```

## Accessibility

The Tag component follows WCAG 2.2 guidelines:

- **Semantic HTML**: Uses `<strong>` element for proper emphasis
- **Color independence**: Status information is conveyed through text
- **High contrast**: Meets AAA contrast requirements
- **Screen reader support**: Properly announced as emphasized content
- **Non-interactive**: Doesn't create keyboard navigation confusion
- **Clear labeling**: Descriptive status text for all users

## Best Practices

### Content Guidelines

- **Use adjectives, not verbs**: "Completed" not "Complete" (avoids suggesting interactivity)
- **Be concise**: Keep text to 1-2 words maximum
- **Be specific**: "Under Review" is better than "Processing"
- **Use sentence case**: "Not started" not "NOT STARTED"

### Color Usage

- **Green**: Positive outcomes, completion, success
- **Blue**: Neutral processes, pending states, information
- **Yellow/Orange**: Warnings, attention needed, delays
- **Red**: Errors, urgent items, cancellations (use carefully)
- **Grey**: Inactive, not started, default states

### Design Guidelines

- **Don't make tags interactive**: They should indicate status, not trigger actions
- **Use sparingly**: Too many tags can clutter the interface
- **Be consistent**: Use the same colors for the same meanings across your app
- **Group related tags**: Place them logically within the content flow

### When to Use Tags

✅ **Good uses**:
- Showing status in lists or cards
- Indicating progress in multi-step processes
- Displaying priority levels
- Showing application or request states

❌ **Avoid using for**:
- Navigation elements (use links instead)
- Actions (use buttons instead)
- Categories or filters (use chips or badges instead)

## Implementation Notes

### Styling

The component uses DaisyUI badge classes with custom variants:

```css
.public-good-tag {
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.2;
  text-transform: none;
  white-space: nowrap;
  vertical-align: middle;
}
```

### Custom Colors

Pink and yellow variants use custom styles for healthcare-specific needs:

```css
/* Pink for sent/submitted items */
.bg-pink-100 {
  background-color: #fce7f3;
  color: #9d174d;
  border-color: #fbcfe8;
}

/* Yellow for warnings/reviews */
.bg-yellow-100 {
  background-color: #fef3c7;
  color: #92400e;
  border-color: #fde68a;
}
```

## Related Components

- **Badge**: For counts and notifications
- **Chip**: For removable filter items
- **Button**: For actionable elements
- **Alert**: For page-level status messages

## NHS UK Equivalent

This component is based on the NHS UK Design System Tag component, adapted for Public Good Design System with Tailwind CSS and DaisyUI styling while maintaining the same accessibility standards and semantic structure.
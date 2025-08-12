# Task List

A component for displaying multi-step processes where users can complete tasks in any order. Task lists give users more control over how they complete long, complex services and provide clear progress indication.

## Features

- **Flexible workflow**: Tasks can be completed in any order
- **Clear progress indication**: Visual status indicators show completion state
- **Accessible navigation**: Proper semantic HTML and ARIA support
- **Interactive elements**: Clickable tasks with hover states
- **Status variants**: Multiple status types for different task states
- **Descriptive hints**: Additional context for complex tasks
- **Keyboard navigation**: Full keyboard accessibility
- **Mobile responsive**: Works well on all device sizes

## Usage

### Basic Task List

```svelte
<TaskList 
  items={[
    {
      title: "Personal details",
      hint: "Provide your name and contact information",
      href: "#personal-details",
      status: {
        text: "Completed",
        variant: "completed"
      }
    },
    {
      title: "Emergency contacts",
      hint: "Add at least one emergency contact",
      href: "#emergency-contacts", 
      status: {
        text: "Incomplete",
        variant: "incomplete"
      }
    }
  ]}
/>
```

### Healthcare Registration Process

```svelte
<TaskList 
  items={[
    {
      title: "Medical history",
      hint: "Tell us about existing conditions and medications",
      href: "#medical-history",
      status: {
        text: "Completed",
        variant: "completed"
      }
    },
    {
      title: "GP registration", 
      hint: "Confirm your current GP practice details",
      href: "#gp-registration",
      status: {
        text: "In Progress",
        variant: "in-progress"
      }
    },
    {
      title: "Identity verification",
      hint: "Upload a photo of your ID document",
      status: {
        text: "Cannot start yet",
        variant: "cannot-start-yet"
      }
    }
  ]}
/>
```

### Appointment Booking

```svelte
<TaskList 
  items={[
    {
      title: "Choose appointment type",
      hint: "Select the healthcare service you need",
      href: "#appointment-type",
      status: {
        text: "Completed",
        variant: "completed"
      }
    },
    {
      title: "Select provider",
      hint: "Choose from available practices in your area",
      href: "#select-provider",
      status: {
        text: "Incomplete",
        variant: "incomplete"
      }
    }
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `TaskListItem[]` | `[]` | Array of task items to display |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

## TaskListItem Structure

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | `string` | Yes | The task name displayed to users |
| `titleHtml` | `string` | No | HTML alternative to title text |
| `hint` | `string` | No | Descriptive text providing additional context |
| `href` | `string` | No | Link destination (omit for non-interactive tasks) |
| `status` | `TaskStatus` | Yes | Status configuration object |
| `id` | `string` | No | Custom ID for the task (auto-generated if not provided) |
| `attributes` | `Record<string, string>` | No | Additional HTML attributes for the task |

## TaskStatus Structure

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | `string` | Required | Status text displayed to users |
| `variant` | `TaskStatusVariant` | `'incomplete'` | Visual style variant |
| `tag` | `boolean` | `true` | Whether to display status as a tag or plain text |

## Status Variants

### `completed`
- **Color**: Green
- **Usage**: Tasks that have been finished successfully
- **Examples**: "Completed", "Submitted", "Approved"

### `incomplete`
- **Color**: Blue  
- **Usage**: Tasks that are ready to start or continue
- **Examples**: "Incomplete", "To do", "Start now"

### `in-progress`
- **Color**: Aqua green
- **Usage**: Tasks that have been started but not finished
- **Examples**: "In Progress", "Started", "Booked"

### `cannot-start-yet`
- **Color**: Grey
- **Usage**: Tasks with unmet dependencies
- **Examples**: "Cannot start yet", "Not available", "Waiting"

## Healthcare Use Cases

### Patient Registration
```svelte
<TaskList 
  items={[
    {
      title: "Personal details",
      hint: "Name, date of birth, and address",
      href: "#personal",
      status: { text: "Completed", variant: "completed" }
    },
    {
      title: "Medical history", 
      hint: "Conditions, allergies, and medications",
      href: "#medical",
      status: { text: "In Progress", variant: "in-progress" }
    }
  ]}
/>
```

### Appointment Booking
```svelte
<TaskList 
  items={[
    {
      title: "Choose service",
      hint: "Select the type of appointment you need",
      href: "#service",
      status: { text: "Completed", variant: "completed" }
    },
    {
      title: "Book appointment",
      hint: "Select date, time and location",
      href: "#booking", 
      status: { text: "Incomplete", variant: "incomplete" }
    }
  ]}
/>
```

### NHS e-Referral Service
```svelte
<TaskList 
  items={[
    {
      title: "Review referral",
      hint: "Check referral details and requirements",
      href: "#review",
      status: { text: "Completed", variant: "completed" }
    },
    {
      title: "Choose hospital",
      hint: "Select your preferred hospital or clinic", 
      href: "#hospital",
      status: { text: "Incomplete", variant: "incomplete" }
    }
  ]}
/>
```

### Treatment Pathway
```svelte
<TaskList 
  items={[
    {
      title: "Pre-assessment",
      hint: "Complete health questionnaire",
      href: "#assessment",
      status: { text: "Completed", variant: "completed" }
    },
    {
      title: "Consent forms",
      hint: "Review and sign treatment consent",
      href: "#consent",
      status: { text: "Incomplete", variant: "incomplete" }
    },
    {
      title: "Pre-operative instructions",
      hint: "Important preparation information",
      status: { text: "Cannot start yet", variant: "cannot-start-yet" }
    }
  ]}
/>
```

## Accessibility

The Task List component follows WCAG 2.1 guidelines:

- **Semantic HTML**: Uses proper list structure (`<ul>`, `<li>`)
- **Screen reader support**: `aria-describedby` links tasks to their status
- **Keyboard navigation**: All interactive elements are keyboard accessible
- **Focus management**: Clear focus indicators with proper contrast ratios
- **Color independence**: Status conveyed through both color and text
- **Descriptive content**: Clear task names and helpful hint text

## Best Practices

### Content Guidelines

- **Clear task names**: Use descriptive, action-oriented titles
- **Helpful hints**: Provide context without being overwhelming  
- **Consistent language**: Use similar patterns across related tasks
- **Logical ordering**: Arrange tasks in a sensible sequence even if completion order is flexible

### UX Guidelines

- **Allow flexibility**: Let users complete tasks in any order when possible
- **Show progress**: Make it clear what's been done and what remains
- **Provide context**: Use hint text to explain complex or important tasks
- **Clear next steps**: Make it obvious what users need to do

### When to Use

✅ **Good for**:
- Multi-step registration processes
- Appointment booking workflows  
- Treatment preparation checklists
- Application processes with multiple requirements
- Complex forms split across multiple pages

❌ **Avoid for**:
- Simple, single-step processes
- Displaying completed information (use Summary List instead)
- Strictly sequential workflows where order matters
- Short processes that can be completed in one session

### Design Guidelines

- **Consistent spacing**: Maintain visual hierarchy between tasks
- **Clear status**: Make task completion state immediately obvious
- **Touch friendly**: Ensure adequate touch targets on mobile devices
- **Loading states**: Show appropriate feedback during status updates

## Implementation Notes

### Styling

The component uses Tailwind CSS classes with DaisyUI components:

```css
.public-good-task-list__link:focus {
  box-shadow: 0 -2px #ffdd00, 0 4px #0b0c0c;
  background-color: #ffdd00;
  outline: 3px solid transparent;
}
```

### Status Management

Status updates should be handled by the parent component:

```svelte
<script>
  let taskItems = [
    // ... task configuration
  ];
  
  function updateTaskStatus(taskId, newStatus) {
    taskItems = taskItems.map(task => 
      task.id === taskId 
        ? { ...task, status: newStatus }
        : task
    );
  }
</script>
```

### Navigation Handling

The component provides links but doesn't handle navigation internally:

```svelte
<TaskList 
  items={tasks.map(task => ({
    ...task,
    href: `/registration/${task.id}`
  }))}
/>
```

## Related Components

- **Tag**: Used internally for status indicators
- **Summary List**: For displaying completed information
- **Breadcrumb**: For showing current position in process
- **Progress**: For linear progress indication

## NHS UK Equivalent

This component is based on the NHS UK Design System Task List component, adapted for Public Good Design System with Tailwind CSS and DaisyUI styling while maintaining the same accessibility standards and interaction patterns.
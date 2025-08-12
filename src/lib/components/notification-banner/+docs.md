# Notification Banner

The notification banner component displays important messages to users with different types and appropriate ARIA roles for accessibility.

## Usage

```svelte
<script>
  import { NotificationBanner } from '$lib/components';
</script>

<NotificationBanner 
  type="success"
  text="Your appointment has been successfully booked."
/>
```

## Examples

### Basic notification
Display important information with the default info styling.

### Success notifications
Use for confirmations and positive feedback with auto-focus for screen readers.

### Warning notifications
Use for important information that needs attention but isn't critical.

### Error notifications
Use for errors and problems that need immediate attention.

### Rich content
Include HTML content, links, lists, and interactive elements.

### Different heading levels
Customize the heading level based on the page structure.

## Accessibility

The notification banner component:
- Uses appropriate ARIA roles (`alert`, `region`, or `status`)
- Automatically focuses success banners for screen reader announcements
- Associates content with titles using `aria-labelledby`
- Supports custom roles for specific use cases
- Includes appropriate icons for visual users
- Maintains proper heading hierarchy

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `type` | `'success' \| 'warning' \| 'info' \| 'error'` | `'info'` | Banner type affecting styling and behavior |
| `titleText` | `string` | Auto-generated | Plain text title |
| `titleHtml` | `string` | `undefined` | HTML title content |
| `titleId` | `string` | Auto-generated | ID for the title element |
| `titleHeadingLevel` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `2` | Heading level for the title |
| `text` | `string` | `undefined` | Plain text content |
| `html` | `string` | `undefined` | HTML content |
| `role` | `'alert' \| 'region' \| 'status'` | Auto-determined | ARIA role for the banner |
| `disableAutoFocus` | `boolean` | `false` | Disable automatic focus for success banners |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

## Design tokens

The component uses these design tokens:

- `alert` - Base alert styling from DaisyUI
- `alert-success`, `alert-warning`, `alert-error`, `alert-info` - Type-specific styling
- `font-bold text-lg mb-2` - Title styling
- Icon sizing: `w-6 h-6 flex-shrink-0 mr-3`

## Behavior

### Auto-focus
- Success banners automatically receive focus for screen reader announcements
- Can be disabled with `disableAutoFocus={true}`
- Uses `role="alert"` for success banners by default

### Role determination
- Success banners: `role="alert"` (high priority)
- Other types: `role="region"` (landmark for navigation)
- Custom roles can be specified via the `role` prop

## Related components

- [InsetText](../inset-text/+docs.md) - For highlighting information within content
- [Card](../card/+docs.md) - For contained information blocks
- [ErrorSummary](../error-summary/+docs.md) - For form validation error summaries
- [Details](../details/+docs.md) - For collapsible information sections
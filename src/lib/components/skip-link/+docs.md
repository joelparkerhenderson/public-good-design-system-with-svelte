# Skip Link

A keyboard navigation aid that allows users to bypass repetitive content and jump directly to the main content or other important sections of a page. Skip links are essential for accessibility, particularly for screen reader and keyboard users.

## Features

- **Keyboard accessibility**: Only visible when navigating with keyboard
- **Smooth transitions**: Slides in and out with focus changes
- **Customizable target**: Link to any element on the page
- **Custom text**: Override default "Skip to main content" text
- **HTML support**: Include formatted text in skip links
- **Multiple instances**: Use multiple skip links for complex pages
- **WCAG compliance**: Meets accessibility guidelines for navigation
- **Screen reader support**: Properly announced by assistive technology

## Usage

### Basic Skip Link

```svelte
<SkipLink />
```

This creates a skip link with default text "Skip to main content" that targets `#maincontent`.

### Custom Text and Target

```svelte
<SkipLink 
  text="Skip to navigation menu"
  href="#navigation"
/>
```

### HTML Content

```svelte
<SkipLink 
  html="Skip to <strong>main content</strong>"
  href="#content"
/>
```

### Multiple Skip Links

```svelte
<SkipLink text="Skip to main content" href="#main" />
<SkipLink text="Skip to navigation" href="#nav" />
<SkipLink text="Skip to search" href="#search" />
```

### Emergency Services Example

```svelte
<SkipLink 
  text="Skip to emergency contact numbers"
  href="#emergency-contacts"
  classes="btn-error"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | `#maincontent` | Target element ID or URL |
| `text` | `string` | `Skip to main content` | Link text content |
| `html` | `string` | `undefined` | HTML content (alternative to text) |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

## Styling

The component uses DaisyUI button classes with custom positioning:

```css
.public-good-skip-link {
  /* Fixed positioning for consistent placement */
  position: fixed;
  top: 8px;
  left: 8px;
  z-index: 9999;
}

/* Hidden until focused */
.public-good-skip-link {
  opacity: 0;
  transform: translateY(-100%);
  transition: all 200ms;
}

/* Visible when focused */
.public-good-skip-link:focus {
  opacity: 1;
  transform: translateY(0);
}
```

## Accessibility

The Skip Link component follows WCAG 2.1 AA guidelines:

- **Keyboard Navigation**: Appears as the first focusable element when pressing Tab
- **Visual Focus**: Clear visual indication with outline and positioning
- **Screen Readers**: Properly announced with meaningful text
- **Focus Management**: Moves focus to target element when activated
- **Hidden by Default**: Only visible during keyboard navigation
- **Smooth Transitions**: Reduces visual jarring when appearing/disappearing

## Implementation Guidelines

### Page Structure

```html
<!DOCTYPE html>
<html>
<head>...</head>
<body>
  <!-- Skip link should be first focusable element -->
  <SkipLink />
  
  <!-- Header/navigation -->
  <header>
    <nav>...</nav>
  </header>
  
  <!-- Main content with target ID -->
  <main id="maincontent">
    <!-- Page content -->
  </main>
</body>
</html>
```

### Target Elements

Ensure target elements exist and are focusable:

```html
<!-- Add tabindex="-1" to make non-focusable elements focusable -->
<main id="maincontent" tabindex="-1">
  <h1>Page Title</h1>
  <!-- Content -->
</main>
```

### Testing

1. **Keyboard Test**: Press Tab to reveal skip link
2. **Activation Test**: Press Enter to jump to target
3. **Focus Test**: Verify focus moves to target element
4. **Screen Reader Test**: Ensure proper announcement

## Healthcare Use Cases

### Patient Portal

```svelte
<SkipLink text="Skip to appointment booking" href="#booking" />
<SkipLink text="Skip to test results" href="#results" />
<SkipLink text="Skip to prescriptions" href="#prescriptions" />
```

### Emergency Services

```svelte
<SkipLink 
  text="Skip to emergency contacts" 
  href="#emergency"
  classes="btn-error" 
/>
<SkipLink 
  text="Skip to 111 assessment" 
  href="#assessment"
  classes="btn-warning" 
/>
```

### Information Pages

```svelte
<SkipLink text="Skip to symptoms" href="#symptoms" />
<SkipLink text="Skip to treatment" href="#treatment" />
<SkipLink text="Skip to prevention" href="#prevention" />
```

## Browser Support

Skip links work across all modern browsers and assistive technologies:

- **Screen Readers**: NVDA, JAWS, VoiceOver, TalkBack
- **Browsers**: Chrome, Firefox, Safari, Edge
- **Keyboard Navigation**: Full support for Tab and Enter keys

## Related Components

- **Button**: For general interactive elements
- **ActionLink**: For styled navigation links
- **BackLink**: For returning to previous pages
- **Breadcrumb**: For hierarchical navigation

## NHS UK Equivalent

This component is based on the NHS UK Design System Skip Link component, adapted for Public Good Design System with Tailwind CSS and DaisyUI styling while maintaining the same accessibility standards and user experience patterns.
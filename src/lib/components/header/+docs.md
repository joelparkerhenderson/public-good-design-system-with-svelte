# Header

A header component that provides consistent top-of-page branding, navigation, and search functionality for health services, following NHS UK design patterns.

## When to use this component

Use the header component:

- At the top of every page to provide consistent branding and navigation
- To display service names and help users understand their current location
- To provide primary navigation between main sections of your service
- To offer search functionality for content-rich services
- To maintain trust and authority with recognizable healthcare branding

## When not to use this component

Do not use the header component:

- In the middle of page content (headers are for page-level navigation only)
- Without proper branding attribution for public health services
- With too many navigation items that could overwhelm users
- In emails or other non-web contexts

## How it works

The header appears at the top of every page and can include:

- **Logo/branding** - Establishes trust and provides homepage navigation
- **Service name** - Helps users understand which specific service they're using
- **Primary navigation** - Links to main sections of your service
- **Search functionality** - Allows users to find specific information
- **Mobile-responsive design** - Collapses navigation into hamburger menu on small screens

The header uses semantic HTML with proper ARIA roles and supports keyboard navigation.

## Accessibility

This component:

- Uses semantic `<header>` element with `role="banner"`
- Provides proper navigation structure with `role="navigation"`
- Includes ARIA labels for screen reader users
- Supports keyboard navigation with logical tab order
- Uses sufficient color contrast for all text
- Provides accessible mobile menu toggle
- Includes visually hidden labels for form controls

## Examples

### Basic header

```svelte
<Header />
```

### Service header

```svelte
<Header 
  serviceName="Book a COVID-19 vaccination"
  serviceUrl="/book-vaccination"
/>
```

### Header with navigation

```svelte
<Header 
  showNavigation={true}
  navigationItems={[
    { text: 'Health A-Z', href: '/health-a-z' },
    { text: 'Services', href: '/services' },
    { text: 'Live Well', href: '/live-well' }
  ]}
/>
```

### Header with search

```svelte
<Header 
  showSearch={true}
  searchPlaceholder="Search health information"
  searchAction="/search"
/>
```

### Complete service header

```svelte
<Header 
  serviceName="Mental Health Support Service"
  serviceUrl="/mental-health"
  showNavigation={true}
  navigationItems={navigationItems}
  showSearch={true}
  searchPlaceholder="Search support resources"
/>
```

### Transactional header

```svelte
<Header 
  transactional={true}
  serviceName="Complete Your Appointment"
/>
```

### Custom content using children

```svelte
<Header serviceName="Patient Portal">
  <div class="bg-secondary/20 border-t border-secondary/30 py-3">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between text-sm">
        <span>Welcome back, <strong>John Smith</strong></span>
        <span>Next appointment: <strong>Today, 2:30 PM</strong></span>
      </div>
    </div>
  </div>
</Header>
```

## Component props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `serviceName` | `string` | `''` | Name of the specific service |
| `serviceUrl` | `string` | `'/'` | URL for the service name link |
| `showNavigation` | `boolean` | `false` | Whether to display primary navigation |
| `navigationItems` | `NavigationItem[]` | `[]` | Array of navigation link objects |
| `showSearch` | `boolean` | `false` | Whether to display search functionality |
| `searchAction` | `string` | `'/search'` | URL for search form submission |
| `searchPlaceholder` | `string` | `'Search'` | Placeholder text for search input |
| `logoText` | `string` | `'Public Good Design System'` | Text for the logo/branding |
| `logoUrl` | `string` | `'/'` | URL for the logo link |
| `organisational` | `boolean` | `false` | Use organizational variant styling |
| `transactional` | `boolean` | `false` | Use transactional variant (simplified) |
| `children` | `Snippet` | `undefined` | Custom content below main header |
| `classes` | `string` | `''` | Additional CSS classes |

### NavigationItem interface

```typescript
interface NavigationItem {
  text?: string;
  html?: string;
  href: string;
  attributes?: Record<string, string>;
}
```

## Header variants

### Default header
- Basic logo and service name
- Clean, minimal design for focused tasks

### Service header
- Includes service name to help users understand context
- Links service name back to service homepage

### Navigation header
- Includes primary navigation menu
- Responsive hamburger menu on mobile
- Up to 5-7 navigation items recommended

### Transactional header
- Simplified design for task-focused pages
- Removes search and navigation to reduce distractions
- Used for checkout, booking, or form completion flows

### Organisational header
- Styled for healthcare trusts and organizations
- Can include custom branding while maintaining accessibility

## Mobile responsive design

### Mobile (< 768px)
- Logo remains visible but may use abbreviated text
- Navigation collapses into hamburger menu
- Search may be hidden or moved to menu
- Touch-friendly button sizes (minimum 44px)

### Tablet (768px - 1024px)
- Maintains desktop-like layout with adjusted spacing
- All elements remain visible
- Optimal balance of content and whitespace

### Desktop (> 1024px)
- Full horizontal navigation
- Search prominently displayed
- All elements at optimal size and spacing

## Navigation best practices

### Information architecture
- Limit primary navigation to 5-7 items
- Use clear, descriptive labels
- Group related content logically
- Consider user mental models

### Healthcare considerations
- Prioritize emergency information access
- Make patient services easily findable
- Consider health literacy levels in navigation labels
- Test navigation with your target audience

### Search functionality
- Provide helpful placeholder text
- Use appropriate search scope for your service
- Consider autocomplete for common searches
- Ensure search results are relevant and accessible

## Design considerations

### Trust and authority
- Maintain consistent branding across all pages
- Use appropriate organizational logos and attribution
- Follow brand guidelines for colors and typography
- Ensure professional appearance

### User experience
- Keep navigation predictable and consistent
- Provide clear visual hierarchy
- Use familiar patterns users expect from health services
- Test with real users, including those with accessibility needs

### Performance
- Optimize logo images and SVGs
- Minimize JavaScript for core header functionality
- Ensure header loads quickly as it's above-the-fold content

## Related components

- **Footer** - Bottom-of-page navigation and information
- **Breadcrumb** - Page hierarchy navigation within sections  
- **Skip Link** - Accessibility navigation aid
- **Navigation** - Standalone navigation components for page sections
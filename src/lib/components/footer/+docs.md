# Footer

A footer component that provides consistent bottom-of-page navigation and copyright information for health services, following NHS UK design patterns.

## When to use this component

Use the footer component:

- On every page of your service to provide consistent navigation
- To display policy links like privacy, terms, and accessibility statements  
- To show copyright information and service ownership
- To include emergency contact information for healthcare services
- To provide links to related services or important resources

## When not to use this component

Do not use the footer component:

- In the middle of page content (use other navigation components instead)
- For primary site navigation (use header navigation instead)
- Without proper copyright attribution for NHS/public health services

## How it works

The footer appears at the bottom of every page and provides:

- A list of important links in a single row (responsive)
- Copyright information clearly displayed
- Proper semantic structure with `role="contentinfo"`
- Hidden heading for screen readers
- Responsive layout that stacks on mobile

The footer uses a simple, reliable single-row layout rather than complex multi-column designs to ensure cross-browser compatibility.

## Accessibility

This component:

- Uses semantic `<footer>` element with proper ARIA role
- Includes visually hidden heading for screen reader context
- Provides proper link structure for keyboard navigation
- Uses sufficient color contrast for all text and links
- Maintains focus indicators for keyboard users

## Examples

### Standard footer with policy links

```svelte
<Footer 
  links={[
    { text: 'Accessibility statement', href: '/accessibility-statement' },
    { text: 'Contact us', href: '/contact' },
    { text: 'Privacy policy', href: '/privacy' },
    { text: 'Terms and conditions', href: '/terms' }
  ]}
/>
```

### Healthcare service footer

```svelte
<Footer 
  links={[
    { text: 'Find NHS services', href: '/find-services' },
    { text: 'Emergency contacts', href: '/emergency' },
    { text: 'Patient support', href: '/patient-support' },
    { text: 'Privacy policy', href: '/privacy' }
  ]}
  copyright="© NHS Digital"
/>
```

### Minimal footer (copyright only)

```svelte
<Footer copyright="© 2024 Public Health Initiative" />
```

### Custom content using children

```svelte
<Footer copyright="© Mental Health Trust">
  <nav class="mb-6">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div>
        <h4 class="font-semibold mb-3">Patient Services</h4>
        <ul class="space-y-2">
          <li><a href="/appointments">Book appointment</a></li>
          <li><a href="/prescriptions">Repeat prescriptions</a></li>
        </ul>
      </div>
      <!-- Additional columns -->
    </div>
  </nav>
</Footer>
```

## Component props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `links` | `FooterLink[]` | `[]` | Array of footer link objects |
| `copyright` | `string` | `'© NHS England'` | Copyright text to display |
| `visuallyHiddenText` | `string` | `'Support links'` | Hidden heading text for screen readers |
| `children` | `Snippet` | `undefined` | Custom content (overrides links) |
| `classes` | `string` | `''` | Additional CSS classes |

### FooterLink interface

```typescript
interface FooterLink {
  text?: string;
  html?: string;
  href: string;
  attributes?: Record<string, string>;
}
```

## Recommended links for healthcare services

### Essential policy links
- **Accessibility statement** - Legal requirement
- **Privacy policy** - Data protection information  
- **Terms and conditions** - Service terms
- **Contact us** - Patient support contact

### Healthcare-specific links
- **Find NHS services** - Service locator
- **Emergency contacts** - Crisis support
- **Patient support** - Help and guidance
- **Book appointments** - Service access

### Emergency services
- **Call 999** - Life-threatening emergencies
- **Call 111** - Non-emergency medical advice
- **Find nearest hospital** - Emergency care locations
- **First aid guidance** - Emergency response help

## Design considerations

### Copyright attribution
- Use appropriate copyright holder (NHS England, NHS Digital, Local Trust)
- Include current year for legal compliance
- Ensure attribution matches service ownership

### Link organization
- Keep essential links visible and accessible
- Group related links logically
- Limit to 5-7 links for mobile usability
- Use clear, descriptive link text

### Mobile optimization
- Links stack vertically on small screens
- Touch targets meet minimum 44px requirement
- Text remains readable at all screen sizes

## Healthcare-specific considerations

### Trust and authority
- Display appropriate NHS or health service branding
- Include official copyright attribution
- Link to verified health information sources

### Patient safety
- Ensure emergency contact information is prominent
- Provide clear paths to urgent care
- Include accessibility support information

### Compliance requirements
- Include required policy links (accessibility, privacy)
- Meet NHS digital standards if applicable
- Follow local trust guidelines for branding

## Related components

- **Header** - Top-of-page navigation and branding
- **Breadcrumb** - Page hierarchy navigation
- **Skip Link** - Accessibility navigation aid
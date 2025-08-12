# Hero

A hero component for creating prominent page introductions with headings, supporting text, and call-to-action buttons, following NHS UK design patterns for health services.

## When to use this component

Use the hero component:

- At the top of landing pages to introduce your service
- To highlight important health information or emergency services
- For service announcements and new feature launches  
- To provide clear entry points for key user journeys
- To communicate your service's value proposition clearly
- For emergency or urgent care messaging that needs high visibility

## When not to use this component

Do not use the hero component:

- On every page - use sparingly for maximum impact
- For lengthy content that would be better as regular page content
- When the page already has a clear purpose without additional introduction
- For non-critical information that doesn't warrant prominent placement
- In the middle of page content (heroes are for page introductions)

## How it works

The hero component creates a prominent section at the top of a page with:

- **Configurable background** - Solid colors or background images with overlay
- **Flexible content** - Headings, text, HTML content, or custom content via children
- **Call-to-action buttons** - Primary and secondary action buttons
- **Responsive design** - Adapts to different screen sizes
- **Healthcare variants** - Emergency, urgent, success, and info color schemes
- **Accessibility features** - Proper heading hierarchy and screen reader support

## Accessibility

This component:

- Uses semantic HTML with proper heading structure
- Supports configurable heading levels for page hierarchy
- Provides sufficient color contrast for all variants
- Includes focus management for interactive elements
- Works with screen readers and keyboard navigation
- Maintains readable text over background images with overlays

## Examples

### Basic hero

```svelte
<Hero 
  heading="We're here for you"
  text="Helping you take control of your health and wellbeing"
/>
```

### Hero with actions

```svelte
<Hero 
  heading="Access Your Health Records"
  text="View test results, book appointments, and manage your healthcare online"
  actions={[
    { text: 'Find Services', href: '/services' },
    { text: 'Book Appointment', href: '/book', variant: 'secondary' }
  ]}
/>
```

### Emergency hero

```svelte
<Hero 
  variant="emergency"
  heading="Emergency Care"
  text="If this is a life-threatening emergency, call 999 immediately"
  actions={[
    { text: 'Call 999', href: 'tel:999' },
    { text: 'Find Hospital', href: '/hospital', variant: 'outline' }
  ]}
/>
```

### Hero with background image

```svelte
<Hero 
  heading="Book Your COVID-19 Vaccination"
  text="Protect yourself and your community. Book your appointment today."
  backgroundImage="/images/vaccination-hero.jpg"
  overlay={true}
  overlayOpacity={70}
  actions={[
    { text: 'Book Now', href: '/book-vaccination' }
  ]}
/>
```

### Custom content using children

```svelte
<Hero backgroundImage="/images/community-health.jpg" overlay={true}>
  <div class="max-w-2xl text-left">
    <h1 class="mb-5 text-5xl font-bold">Community Health Services</h1>
    <p class="mb-3 text-xl">Local health services designed around your community's needs</p>
    <ul class="list-disc list-inside mb-5 space-y-2">
      <li>Preventive care programs</li>
      <li>Community mental health support</li>
      <li>Health education workshops</li>
    </ul>
    <div class="flex gap-4">
      <a href="/local-services" class="btn btn-primary btn-lg">Find Local Services</a>
      <a href="/programs" class="btn btn-secondary btn-lg">Community Programs</a>
    </div>
  </div>
</Hero>
```

## Component props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `heading` | `string` | `''` | Main heading text |
| `headingHtml` | `string` | `''` | HTML content for heading (overrides heading) |
| `headingLevel` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1` | Heading level for semantic structure |
| `text` | `string` | `''` | Supporting text content |
| `html` | `string` | `''` | HTML content for text (overrides text) |
| `backgroundImage` | `string` | `''` | URL for background image |
| `overlay` | `boolean` | `true` | Whether to show overlay on background image |
| `overlayOpacity` | `number` | `60` | Overlay opacity (0-100) |
| `variant` | `'default' \| 'emergency' \| 'urgent' \| 'success' \| 'info'` | `'default'` | Color scheme variant |
| `actions` | `HeroAction[]` | `[]` | Array of action button objects |
| `minHeight` | `string` | `'min-h-96'` | Minimum height CSS class |
| `textAlign` | `'left' \| 'center' \| 'right'` | `'center'` | Text alignment |
| `children` | `Snippet` | `undefined` | Custom content (overrides other content) |
| `classes` | `string` | `''` | Additional CSS classes |

### HeroAction interface

```typescript
interface HeroAction {
  text?: string;
  html?: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  attributes?: Record<string, string>;
}
```

## Hero variants

### Default
- Primary color scheme
- General purpose use
- Balanced visual hierarchy

### Emergency (Red)
- High-visibility red background
- For life-threatening situations
- Urgent call-to-action emphasis

### Urgent (Yellow/Orange)
- Warning color scheme  
- For important but not emergency situations
- Service disruptions, important updates

### Success (Green)
- Positive messaging
- Service launches, achievements
- Successful completion flows

### Info (Blue)
- Informational content
- Educational messaging
- Mental health support, guidance

## Design considerations

### Content guidelines

**Heading text:**
- Keep headings concise (5-10 words ideal)
- Use active, user-focused language
- Start with action verbs when appropriate
- Avoid medical jargon - use plain English

**Supporting text:**
- One to two sentences maximum
- Explain the value or benefit to users
- Include specific next steps when relevant
- Consider health literacy levels

**Call-to-action buttons:**
- Use clear, specific action words
- Limit to 1-3 actions to avoid decision paralysis
- Prioritize primary action visually
- Test button text with your target audience

### Visual design

**Background images:**
- Use high-quality, relevant healthcare imagery
- Ensure text remains readable with overlay
- Test across different screen sizes
- Consider accessibility for low vision users
- Avoid images that might be distressing

**Color schemes:**
- Emergency (red): Life-threatening situations only
- Urgent (yellow): Important updates, service issues
- Success (green): Positive outcomes, new services
- Info (blue): Educational content, mental health
- Default (primary): General healthcare services

### Mobile considerations

**Responsive behavior:**
- Hero scales appropriately on mobile devices
- Text remains readable at all screen sizes
- Buttons are touch-friendly (minimum 44px height)
- Background images work well on small screens

**Performance:**
- Optimize background images for web
- Use appropriate image formats (WebP where supported)
- Consider lazy loading for below-fold heroes
- Test loading performance on slow connections

## Healthcare-specific usage

### Emergency services
- Use emergency variant for 999 calls
- Include clear emergency contact information
- Provide alternative actions (find hospital, first aid)
- Test messaging with emergency responders

### Mental health support
- Use supportive, non-stigmatizing language
- Provide multiple contact options
- Include crisis support information
- Consider different cultural contexts

### Service accessibility
- Ensure heroes work with screen readers
- Provide alternative text for background images
- Use sufficient color contrast ratios
- Test with assistive technologies

### Trust and authority
- Use appropriate NHS or health service branding
- Include official contact information
- Maintain professional appearance
- Follow local health authority guidelines

## Related components

- **Header** - Page-level navigation and branding
- **Card** - Smaller content blocks with actions
- **Notification Banner** - Important announcements and alerts
- **Button** - Standalone call-to-action elements
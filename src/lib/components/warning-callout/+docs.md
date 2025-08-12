# Warning Callout

A warning callout component for displaying critical, time-sensitive health information that users need to be aware of for their safety.

## When to use this component

Use the warning callout component to highlight:

- Critical, time-sensitive health information
- Significant health misconceptions that need correcting
- Information that could significantly impact someone's health or safety
- Emergency contact information or procedures
- Important medication or treatment warnings

## When not to use this component

Do not use the warning callout component:

- On transactional pages or forms (use validation messages instead)
- To suggest contacting medical professionals (use standard content)
- For non-critical information (use inset text instead)
- More than 2 times on a single page (reduces impact)
- For general announcements (use notification banner instead)

## How it works

The warning callout uses a distinctive yellow background with a left border to make it highly visible. It includes:

- A hidden "Important:" prefix for screen readers
- Configurable heading text and level
- Support for both plain text and HTML content
- High contrast colors for accessibility
- Proper semantic structure with ARIA labels

## Accessibility

This component:

- Uses high contrast colors (exceeds WCAG AAA standards)
- Includes hidden text for screen readers ("Important:")
- Uses proper heading structure with configurable levels
- Provides ARIA region labeling
- Supports keyboard navigation

## Examples

### Default warning callout

```svelte
<WarningCallout 
  text="This is important information that users need to be aware of for their health and safety." 
/>
```

### Custom heading

```svelte
<WarningCallout 
  heading="Medication Alert"
  text="Always check with your healthcare provider before stopping any medication, even if you feel better."
/>
```

### With HTML content

```svelte
<WarningCallout 
  heading="COVID-19 Vaccination"
  html="<p>If you have had COVID-19, you should still get vaccinated. <strong>People who have had COVID-19 can get it again</strong>.</p>"
/>
```

### Using children for complex content

```svelte
<WarningCallout heading="Mental Health Support">
  <p>If you're feeling overwhelmed or having thoughts of self-harm:</p>
  <ul>
    <li>Call the Samaritans free on 116 123 (24/7)</li>
    <li>Visit your local emergency department</li>
    <li>Call 999 if you're in immediate danger</li>
  </ul>
</WarningCallout>
```

## Component props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `heading` | `string` | `'Important'` | The heading text for the warning callout |
| `headingHtml` | `string` | `''` | HTML content for the heading (overrides heading prop) |
| `headingLevel` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `3` | The heading level to use for semantic structure |
| `text` | `string` | `''` | Plain text content for the warning |
| `html` | `string` | `''` | HTML content for the warning (overrides text prop) |
| `children` | `Snippet` | `undefined` | Svelte snippet for complex content (overrides text and html) |
| `classes` | `string` | `''` | Additional CSS classes to apply |

All other props are passed through to the underlying `div` element.

## Research and evidence

The warning callout pattern has been tested with users and follows NHS UK design principles:

- Yellow background tested to be highly noticeable in user research
- Content should not disrupt the main flow of information
- Language should be concise and specific
- Effective for highlighting critical health information
- Should be used sparingly to maintain impact

## Related components

- **Notification Banner** - For alerts and announcements with different severity levels
- **Inset Text** - For general information highlighting that's less critical
- **Panel** - For confirmations and neutral announcements

## Healthcare considerations

When writing content for warning callouts:

- Use clear, direct language
- Focus on what the user needs to know or do
- Include specific actions when appropriate
- Consider health literacy levels
- Test content with your target audience
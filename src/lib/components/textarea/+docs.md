# Textarea

A multi-line text input component for collecting longer responses from users. The textarea component integrates with labels, hints, and error messages to provide a complete form input solution.

## Features

- **Multi-line input**: Designed for longer text responses
- **Integrated labeling**: Works with Label, Hint, and ErrorMessage components
- **Accessible**: Full keyboard navigation and screen reader support
- **Flexible sizing**: Configurable rows and columns
- **Error handling**: Built-in error state styling and messaging
- **Form integration**: Proper form validation and submission handling
- **Character limits**: Optional character counting and limits
- **Responsive**: Adapts to different screen sizes
- **Vertical resize**: Users can resize height as needed

## Usage

### Basic Textarea

```svelte
<Textarea
  name="description"
  label={{
    text: "Can you provide more detail about your symptoms?"
  }}
  hint={{
    text: "Do not include personal information like your name or NHS number"
  }}
  rows={5}
/>
```

### With Error Message

```svelte
<Textarea
  name="explanation"
  label={{
    text: "Why can't you provide a National Insurance number?"
  }}
  hint={{
    text: "We need to understand your circumstances"
  }}
  errorMessage={{
    text: "You must provide an explanation"
  }}
  rows={5}
/>
```

### Healthcare Examples

```svelte
<!-- Patient symptom description -->
<Textarea
  name="symptoms"
  label={{
    text: "Describe your current symptoms"
  }}
  hint={{
    text: "Include when symptoms started and how they affect your daily life"
  }}
  rows={6}
  required={true}
/>

<!-- Medical history -->
<Textarea
  name="medical-history"
  label={{
    text: "List your current medications"
  }}
  hint={{
    text: "Include prescription drugs, over-the-counter medications, and dosages"
  }}
  rows={8}
/>

<!-- Appointment request -->
<Textarea
  name="appointment-reason"
  label={{
    text: "Please explain why you need this appointment"
  }}
  hint={{
    text: "Help us book you with the right healthcare professional"
  }}
  rows={4}
  maxlength={500}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | Required | Name attribute for form submission |
| `id` | `string` | Auto-generated | Unique identifier for the textarea |
| `value` | `string` | `''` | Current value (use bind:value for two-way binding) |
| `rows` | `number` | `5` | Number of visible text lines |
| `label` | `TextareaLabel` | Required | Label configuration object |
| `hint` | `TextareaHint` | `undefined` | Optional hint text configuration |
| `errorMessage` | `TextareaErrorMessage` | `undefined` | Error message configuration |
| `formGroup` | `TextareaFormGroup` | `undefined` | Form group wrapper configuration |
| `describedBy` | `string` | `undefined` | Additional aria-describedby IDs |
| `disabled` | `boolean` | `false` | Whether the textarea is disabled |
| `readonly` | `boolean` | `false` | Whether the textarea is read-only |
| `required` | `boolean` | `false` | Whether the field is required |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `autocomplete` | `string` | `undefined` | Autocomplete attribute value |
| `maxlength` | `number` | `undefined` | Maximum character limit |
| `cols` | `number` | `undefined` | Number of columns (character width) |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

## Configuration Objects

### TextareaLabel
| Property | Type | Description |
|----------|------|-------------|
| `text` | `string` | Label text content |
| `html` | `string` | Label HTML content (alternative to text) |
| `classes` | `string` | Additional label CSS classes |
| `isPageHeading` | `boolean` | Whether label should be styled as page heading |
| `attributes` | `Record<string, string>` | Additional label HTML attributes |

### TextareaHint
| Property | Type | Description |
|----------|------|-------------|
| `text` | `string` | Hint text content |
| `html` | `string` | Hint HTML content (alternative to text) |
| `classes` | `string` | Additional hint CSS classes |
| `attributes` | `Record<string, string>` | Additional hint HTML attributes |

### TextareaErrorMessage
| Property | Type | Description |
|----------|------|-------------|
| `text` | `string` | Error message text |
| `html` | `string` | Error message HTML content |
| `classes` | `string` | Additional error message CSS classes |

## Healthcare Use Cases

### Patient Registration
```svelte
<Textarea
  name="medical-conditions"
  label={{
    text: "Do you have any medical conditions or disabilities?"
  }}
  hint={{
    text: "Include any conditions that might affect your care. If none, please write 'None'."
  }}
  rows={5}
  required={true}
/>
```

### Symptom Tracking
```svelte
<Textarea
  name="symptom-diary"
  label={{
    text: "Describe your symptoms over the past week"
  }}
  hint={{
    text: "Include severity, timing, and any triggers you've noticed"
  }}
  rows={8}
  placeholder="Day 1: Mild headache in the morning..."
/>
```

### Treatment Feedback
```svelte
<Textarea
  name="treatment-response"
  label={{
    text: "How are you responding to your current treatment?"
  }}
  hint={{
    text: "Include any side effects, improvements, or concerns"
  }}
  rows={6}
/>
```

### Care Planning
```svelte
<Textarea
  name="care-preferences"
  label={{
    text: "What are your preferences for ongoing care?"
  }}
  hint={{
    text: "Tell us about your goals and any specific needs or preferences"
  }}
  rows={6}
/>
```

## Accessibility

The Textarea component follows WCAG 2.1 guidelines:

- **Semantic HTML**: Uses proper `<textarea>` elements with associated labels
- **Screen reader support**: `aria-describedby` links textarea to hint and error messages
- **Keyboard navigation**: Standard textarea keyboard behavior (Tab, Arrow keys, Enter)
- **Focus management**: Clear focus indicators with proper contrast ratios
- **Error handling**: Error messages include visually hidden "Error:" prefix
- **Required fields**: Proper `required` attribute for form validation
- **Character limits**: Optional character counting for length restrictions

## Best Practices

### Content Guidelines

- **Clear labels**: Use descriptive, specific labels that explain what information is needed
- **Helpful hints**: Provide context about expected content, format, or privacy considerations
- **Appropriate sizing**: Use 5 rows for most cases, 8-10 for longer responses
- **Character limits**: Set reasonable limits and show character counts when helpful

### UX Guidelines

- **Avoid placeholders as labels**: Always use proper labels, not placeholder text
- **Privacy considerations**: Include hints about not sharing personal information when relevant
- **Error messages**: Be specific about what's wrong and how to fix it
- **Preserve content**: Don't clear textareas when showing validation errors

### When to Use

✅ **Good for**:
- Symptom descriptions
- Medical history collection
- Appointment explanations
- Feedback and comments
- Application details
- Care preferences

❌ **Avoid for**:
- Single-line inputs (use Input component)
- Structured data (use specific form controls)
- Very short responses (use Input or Select)

### Sizing Guidelines

- **3 rows**: Brief descriptions, short explanations
- **5 rows**: Default for most use cases
- **6-8 rows**: Detailed descriptions, medical histories
- **10+ rows**: Extensive documentation, detailed feedback

## Form Integration

### Two-way Binding
```svelte
<script>
  let patientNotes = '';
</script>

<Textarea
  name="notes"
  bind:value={patientNotes}
  label={{ text: "Additional notes" }}
/>

<p>Current notes: {patientNotes}</p>
```

### Form Validation
```svelte
<script>
  let symptoms = '';
  let hasError = false;
  
  function validateForm() {
    hasError = symptoms.trim().length < 10;
  }
</script>

<Textarea
  name="symptoms"
  bind:value={symptoms}
  label={{ text: "Describe your symptoms" }}
  hint={{ text: "Please provide at least 10 characters" }}
  errorMessage={hasError ? { text: "Symptoms description is too short" } : undefined}
  required={true}
/>
```

### Character Counting
```svelte
<script>
  let feedback = '';
  const maxLength = 500;
</script>

<Textarea
  name="feedback"
  bind:value={feedback}
  label={{ text: "Your feedback" }}
  maxlength={maxLength}
  rows={6}
/>

<div class="text-xs text-base-content/50 mt-1">
  {feedback.length} / {maxLength} characters
</div>
```

## Styling

The component uses Tailwind CSS classes with DaisyUI textarea styling:

```css
.public-good-textarea {
  resize: vertical;
  min-height: calc(1.5em * 5 + 2rem);
}

.public-good-textarea:focus {
  outline: 3px solid #ffdd00;
  outline-offset: 0;
  box-shadow: inset 0 0 0 2px;
}
```

## Error States

### Validation Patterns
```svelte
<!-- Required field validation -->
<Textarea
  name="required-field"
  label={{ text: "Required information" }}
  errorMessage={!value && submitted ? { text: "This field is required" } : undefined}
  required={true}
/>

<!-- Length validation -->
<Textarea
  name="length-validated"
  label={{ text: "Detailed explanation" }}
  hint={{ text: "Must be at least 50 characters" }}
  errorMessage={value.length < 50 ? { text: "Please provide more detail" } : undefined}
/>

<!-- Content validation -->
<Textarea
  name="content-validated"
  label={{ text: "Safe content" }}
  hint={{ text: "Do not include personal information" }}
  errorMessage={containsPersonalInfo ? { text: "Remove personal information" } : undefined}
/>
```

## Related Components

- **Input**: For single-line text input
- **Label**: Used internally for field labels
- **Hint**: Used internally for helpful text
- **ErrorMessage**: Used internally for validation messages
- **CharacterCount**: For advanced character counting features

## NHS UK Equivalent

This component is based on the NHS UK Design System Textarea component, adapted for Public Good Design System with Tailwind CSS and DaisyUI styling while maintaining the same accessibility standards and user experience patterns.
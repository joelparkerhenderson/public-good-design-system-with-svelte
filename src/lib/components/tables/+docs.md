# Tables

A versatile table component for displaying structured data with support for responsive layouts, sorting indicators, panels, and accessibility features. Ideal for healthcare data like appointment schedules, test results, medication lists, and patient information.

## Features

- **Responsive design**: Adapts to mobile with stacked layout and header labels
- **Panel mode**: Display tables within styled containers with headings
- **Sortable headers**: Visual indicators for sorted columns
- **Numeric formatting**: Right-aligned numeric data
- **First cell headers**: Row headers for better data organization
- **Caption support**: Accessible table descriptions
- **Custom styling**: Extensive customization options
- **Accessibility compliant**: Full WCAG 2.1 support with ARIA roles
- **Overflow handling**: Horizontal scrolling for wide tables

## Usage

### Basic Table

```svelte
<Tables 
  caption="Patient appointments"
  head={[
    { text: "Time" },
    { text: "Patient" },
    { text: "Type" }
  ]}
  rows={[
    [
      { text: "9:00 AM" },
      { text: "Sarah Johnson" },
      { text: "GP consultation" }
    ],
    [
      { text: "9:30 AM" },
      { text: "Michael Brown" },
      { text: "Blood test" }
    ]
  ]}
/>
```

### Table with Numeric Data

```svelte
<Tables 
  caption="Blood test results"
  head={[
    { text: "Test" },
    { text: "Result", format: "numeric" },
    { text: "Range" }
  ]}
  rows={[
    [
      { text: "Cholesterol" },
      { text: "4.2", format: "numeric" },
      { text: "< 5.0 mmol/L" }
    ]
  ]}
/>
```

### Responsive Table

```svelte
<Tables 
  responsive={true}
  caption="Prescription history"
  head={[
    { text: "Date" },
    { text: "Medication" },
    { text: "Status" }
  ]}
  rows={[
    [
      { text: "15 Mar 2024", header: "Date" },
      { text: "Amlodipine 5mg", header: "Medication" },
      { text: "Collected", header: "Status" }
    ]
  ]}
/>
```

### Table as Panel

```svelte
<Tables 
  panel={true}
  heading="Current vital signs"
  headingLevel={3}
  caption="Latest measurements"
  head={[
    { text: "Measurement" },
    { text: "Value", format: "numeric" },
    { text: "Status" }
  ]}
  rows={[
    [
      { text: "Blood pressure" },
      { text: "125/82", format: "numeric" },
      { html: "<span class='text-success'>Normal</span>" }
    ]
  ]}
/>
```

### Sortable Headers

```svelte
<Tables 
  head={[
    { text: "Patient", format: "sort-ascending" },
    { text: "Wait time", format: "sort-descending" },
    { text: "Priority" }
  ]}
  rows={[
    // table data
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `rows` | `TableCell[][]` | `[]` | Array of table rows containing cell data |
| `head` | `TableHead[]` | `undefined` | Optional header row configuration |
| `caption` | `string` | `undefined` | Table caption for accessibility |
| `captionClasses` | `string` | `''` | Additional caption CSS classes |
| `tableClasses` | `string` | `''` | Additional table CSS classes |
| `responsive` | `boolean` | `false` | Enable responsive stacked layout |
| `firstCellIsHeader` | `boolean` | `false` | Treat first cell in each row as header |
| `panel` | `boolean` | `false` | Wrap table in a styled panel |
| `panelClasses` | `string` | `''` | Additional panel CSS classes |
| `heading` | `string` | `undefined` | Panel heading text |
| `headingLevel` | `1-6` | `3` | HTML heading level for panel |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

## Cell Structure

### TableCell

| Property | Type | Description |
|----------|------|-------------|
| `text` | `string` | Cell text content |
| `html` | `string` | Cell HTML content (alternative to text) |
| `header` | `string` | Header label for responsive mode |
| `classes` | `string` | Additional CSS classes |
| `format` | `'numeric' \| 'sort-ascending' \| 'sort-descending'` | Cell formatting type |
| `colspan` | `number` | Number of columns to span |
| `rowspan` | `number` | Number of rows to span |
| `attributes` | `Record<string, string>` | Additional HTML attributes |

### TableHead

Same structure as `TableCell` but used for header cells.

## Responsive Behavior

When `responsive={true}`:

- **Desktop**: Normal table layout
- **Mobile**: Stacked layout with header labels above each data cell
- **Header labels**: Use the `header` property in each cell for mobile labels

```svelte
// Responsive cell with header label
{ text: "Dr. Smith", header: "Doctor" }
```

On mobile, this displays as:
```
Doctor
Dr. Smith
```

## Formatting Options

### Numeric Alignment

```svelte
{ text: "123.45", format: "numeric" }
```

### Sort Indicators

```svelte
// Ascending sort indicator (↑)
{ text: "Column Name", format: "sort-ascending" }

// Descending sort indicator (↓)
{ text: "Column Name", format: "sort-descending" }
```

## Panel Mode

Panel mode wraps the table in a styled container:

```svelte
<Tables 
  panel={true}
  heading="Test Results"
  headingLevel={2}
  panelClasses="border-primary"
  // ... other props
/>
```

## Accessibility

The Tables component follows WCAG 2.1 guidelines:

- **Semantic HTML**: Proper table, thead, tbody, th, td structure
- **Table Captions**: Descriptive captions for screen readers
- **Header Associations**: Proper scope attributes for data relationships
- **ARIA Roles**: Enhanced roles for responsive tables
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Clear data relationships and navigation

## Healthcare Use Cases

### Patient Schedules

```svelte
<Tables 
  caption="Today's appointments"
  head={[
    { text: "Time" },
    { text: "Patient" },
    { text: "Type" },
    { text: "Room" }
  ]}
  rows={appointmentData}
/>
```

### Test Results

```svelte
<Tables 
  panel={true}
  heading="Blood Test Results"
  head={[
    { text: "Test" },
    { text: "Result", format: "numeric" },
    { text: "Reference" },
    { text: "Status" }
  ]}
  rows={testResultData}
/>
```

### Medication Lists

```svelte
<Tables 
  responsive={true}
  firstCellIsHeader={true}
  caption="Current medications"
  head={[
    { text: "Medication" },
    { text: "Dose" },
    { text: "Frequency" },
    { text: "Instructions" }
  ]}
  rows={medicationData}
/>
```

### Appointment Availability

```svelte
<Tables 
  caption="Available slots this week"
  head={[
    { text: "Day" },
    { text: "Morning" },
    { text: "Afternoon" },
    { text: "Evening" }
  ]}
  rows={availabilityData}
/>
```

## Styling

The component uses DaisyUI table classes with custom enhancements:

```css
.public-good-table {
  /* Base table styling */
}

.table-header--numeric,
.table-cell--numeric {
  text-align: right;
}

.table-header--sort-ascending::after {
  content: " ↑";
}

.table-header--sort-descending::after {
  content: " ↓";
}
```

## Best Practices

### Data Organization

- Use meaningful captions for accessibility
- Group related data logically
- Consider row headers for categorical data
- Use consistent formatting for similar data types

### Responsive Design

- Always provide header labels for responsive tables
- Keep column count reasonable for mobile viewing
- Consider which data is most important on small screens

### Visual Hierarchy

- Use panel mode for prominent data tables
- Apply consistent color coding for status information
- Align numeric data to the right
- Use sort indicators sparingly and meaningfully

### Performance

- Limit table size for better performance
- Consider pagination for large datasets
- Use HTML content sparingly to maintain readability

## Related Components

- **SummaryList**: For key-value pair data
- **Card**: For containing tables
- **Pagination**: For large datasets
- **NotificationBanner**: For table status messages

## NHS UK Equivalent

This component is based on the NHS UK Design System Tables component, adapted for Public Good Design System with Tailwind CSS and DaisyUI styling while maintaining the same accessibility standards and user experience patterns.
export const actionLinkConfig = {
  name: 'ActionLink',
  description: 'A styled link component with arrow icon for navigation actions',
  category: 'Navigation',
  examples: [
    {
      name: 'Default',
      props: {
        text: 'Find a service',
        href: '#'
      }
    },
    {
      name: 'External link',
      props: {
        text: 'External resource',
        href: 'https://example.com',
        openInNewWindow: true
      }
    },
    {
      name: 'HTML content',
      props: {
        html: '<strong>Book</strong> an appointment',
        href: '#'
      }
    }
  ]
} as const;
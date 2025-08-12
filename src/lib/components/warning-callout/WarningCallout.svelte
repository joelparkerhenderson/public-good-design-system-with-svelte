<script lang="ts">
  import type { WarningCalloutProps } from '$lib/types';

  interface Props extends WarningCalloutProps {}

  let {
    heading = 'Important',
    headingHtml = '',
    headingLevel = 3,
    text = '',
    html = '',
    children,
    classes = '',
    ...restProps
  }: Props = $props();

  const HeadingTag = $derived(`h${headingLevel}` as keyof HTMLElementTagNameMap);
  const headingId = $derived(`warning-callout-heading-${Math.random().toString(36).substr(2, 9)}`);

  function calloutAttributes() {
    const { class: _, ...attributes } = restProps;
    return attributes;
  }
</script>

<div 
  class="public-good-warning-callout bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4 {classes}"
  role="region"
  aria-labelledby={headingId}
  {...calloutAttributes()}
>
  <svelte:element this={HeadingTag} 
    id={headingId}
    class="public-good-warning-callout__label text-lg font-semibold mb-2 text-yellow-800"
  >
    <span role="text">
      <span class="sr-only">Important: </span>
      {#if headingHtml}
        {@html headingHtml}
      {:else}
        {heading}
      {/if}
    </span>
  </svelte:element>
  
  <div class="public-good-warning-callout__content text-gray-800">
    {#if children}
      {@render children()}
    {:else if html}
      {@html html}
    {:else if text}
      <p class="mb-0">{text}</p>
    {/if}
  </div>
</div>
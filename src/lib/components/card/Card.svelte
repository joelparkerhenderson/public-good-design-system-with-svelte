<script lang="ts">
  import type { CardProps } from '$lib/types.js';
  
  interface Props extends CardProps {}
  
  let {
    heading,
    headingHtml,
    headingLevel = 2,
    headingClasses = '',
    description,
    descriptionHtml,
    href,
    clickable = false,
    secondary = false,
    feature = false,
    primary = false,
    topTask = false,
    imgURL,
    imgALT,
    type,
    classes = '',
    attributes = {},
    ...restProps
  }: Props = $props();

  // Determine card variant classes
  const cardClasses = $derived(() => {
    let baseClasses = 'card bg-base-100 shadow-xl';
    
    if (clickable) baseClasses += ' card-compact hover:shadow-2xl transition-shadow cursor-pointer';
    if (secondary) baseClasses += ' bg-base-200';
    if (feature) baseClasses += ' card-bordered border-primary';
    if (primary) baseClasses += ' bg-primary text-primary-content';
    if (topTask) baseClasses += ' bg-accent text-accent-content';
    
    // Care card types
    if (type === 'non-urgent') baseClasses += ' bg-blue-50 border-blue-200';
    if (type === 'urgent') baseClasses += ' bg-red-50 border-red-200';
    if (type === 'emergency') baseClasses += ' bg-red-600 text-white';
    
    return `${baseClasses} ${classes}`;
  });

  // Create attributes object for spreading
  const cardAttributes = $derived(() => ({
    ...attributes,
    ...restProps
  }));

  // Get the appropriate heading tag
  const HeadingTag = $derived(() => `h${headingLevel}` as keyof HTMLElementTagNameMap);
</script>

<div class={cardClasses} {...cardAttributes()}>
  {#if imgURL}
    <figure>
      <img src={imgURL} alt={imgALT || ''} class="w-full h-48 object-cover" />
    </figure>
  {/if}
  
  <div class="card-body">
    <!-- Heading Section -->
    {#if headingHtml || heading}
      <svelte:element this={HeadingTag} class="card-title {headingClasses}">
        {#if href && !feature}
          <a class="link link-hover" {href}>
            {#if headingHtml}
              {@html headingHtml}
            {:else}
              {heading}
            {/if}
          </a>
        {:else}
          {#if type}
            <span role="text">
              <span class="sr-only">
                {#if type === 'non-urgent'}Non-urgent advice:
                {:else if type === 'urgent'}Urgent advice:
                {:else if type === 'emergency'}Immediate action required:
                {:else}Non-urgent advice:{/if}
              </span>
              {#if headingHtml}
                {@html headingHtml}
              {:else}
                {heading}
              {/if}
            </span>
          {:else}
            {#if headingHtml}
              {@html headingHtml}
            {:else}
              {heading}
            {/if}
          {/if}
        {/if}
        
        {#if type}
          <svg class="w-5 h-5 ml-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        {/if}
      </svelte:element>
    {/if}

    <!-- Description Section -->
    {#if descriptionHtml}
      <div class="card-text">
        {@html descriptionHtml}
      </div>
    {:else if description}
      <p class="card-text">
        {description}
      </p>
    {/if}

    <!-- Primary card chevron icon -->
    {#if primary}
      <div class="card-actions justify-end">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.1"/>
          <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
        </svg>
      </div>
    {/if}
  </div>
</div>

<!-- Make entire card clickable if href provided and clickable is true -->
{#if clickable && href}
  <script>
    // Add click handler to make entire card clickable
    document.addEventListener('DOMContentLoaded', () => {
      const clickableCards = document.querySelectorAll('.card.card-compact[data-clickable]');
      clickableCards.forEach(card => {
        const href = card.dataset.href;
        if (href) {
          card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'A') {
              window.location.href = href;
            }
          });
          card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              window.location.href = href;
            }
          });
        }
      });
    });
  </script>
{/if}
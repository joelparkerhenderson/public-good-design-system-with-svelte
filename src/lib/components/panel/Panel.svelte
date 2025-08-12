<script lang="ts">
  import type { BaseComponentProps } from '$lib/types.js';
  
  interface PanelProps extends BaseComponentProps {
    titleText?: string;
    titleHtml?: string;
    text?: string;
    html?: string;
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  }
  
  interface Props extends PanelProps {}
  
  let {
    titleText,
    titleHtml,
    text,
    html,
    headingLevel = 1,
    classes = '',
    attributes = {},
    children,
    ...restProps
  }: Props = $props();

  // Create attributes object for spreading
  const panelAttributes = $derived(() => ({
    ...attributes,
    ...restProps
  }));
</script>

<div 
  class="public-good-panel bg-primary text-primary-content p-6 rounded-lg shadow-lg {classes}"
  {...panelAttributes()}
>
  {#if titleText || titleHtml}
    {#if headingLevel === 1}
      <h1 class="public-good-panel__title text-3xl font-bold mb-4">
        {#if titleHtml}
          {@html titleHtml}
        {:else}
          {titleText}
        {/if}
      </h1>
    {:else if headingLevel === 2}
      <h2 class="public-good-panel__title text-2xl font-bold mb-4">
        {#if titleHtml}
          {@html titleHtml}
        {:else}
          {titleText}
        {/if}
      </h2>
    {:else if headingLevel === 3}
      <h3 class="public-good-panel__title text-xl font-bold mb-4">
        {#if titleHtml}
          {@html titleHtml}
        {:else}
          {titleText}
        {/if}
      </h3>
    {:else if headingLevel === 4}
      <h4 class="public-good-panel__title text-lg font-bold mb-4">
        {#if titleHtml}
          {@html titleHtml}
        {:else}
          {titleText}
        {/if}
      </h4>
    {:else if headingLevel === 5}
      <h5 class="public-good-panel__title text-base font-bold mb-4">
        {#if titleHtml}
          {@html titleHtml}
        {:else}
          {titleText}
        {/if}
      </h5>
    {:else}
      <h6 class="public-good-panel__title text-sm font-bold mb-4">
        {#if titleHtml}
          {@html titleHtml}
        {:else}
          {titleText}
        {/if}
      </h6>
    {/if}
  {/if}

  {#if children || html || text}
    <div class="public-good-panel__body">
      {#if children}
        {@render children()}
      {:else if html}
        {@html html}
      {:else}
        <p class="m-0">{text}</p>
      {/if}
    </div>
  {/if}
</div>
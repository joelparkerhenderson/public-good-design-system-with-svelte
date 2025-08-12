<script lang="ts">
  import type { BaseComponentProps } from '$lib/types.js';
  
  interface DetailsProps extends BaseComponentProps {
    id?: string;
    summaryText?: string;
    summaryHtml?: string;
    text?: string;
    html?: string;
    open?: boolean;
  }
  
  interface Props extends DetailsProps {}
  
  let {
    id,
    summaryText,
    summaryHtml,
    text,
    html,
    open = false,
    classes = '',
    attributes = {},
    children,
    ...restProps
  }: Props = $props();

  // Create attributes object for spreading
  const detailsAttributes = $derived(() => ({
    ...attributes,
    ...restProps
  }));
</script>

<details 
  class="public-good-details collapse collapse-arrow bg-base-200 {classes}"
  {id}
  {open}
  {...detailsAttributes()}
>
  <summary class="public-good-details__summary collapse-title text-lg font-medium">
    <span class="public-good-details__summary-text">
      {#if summaryHtml}
        {@html summaryHtml}
      {:else}
        {summaryText}
      {/if}
    </span>
  </summary>
  
  <div class="public-good-details__text collapse-content">
    <div class="pt-2">
      {#if children}
        {@render children()}
      {:else if html}
        {@html html}
      {:else if text}
        <p>{text}</p>
      {/if}
    </div>
  </div>
</details>
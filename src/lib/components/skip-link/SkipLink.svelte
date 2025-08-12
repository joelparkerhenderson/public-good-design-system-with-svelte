<script lang="ts">
  import type { BaseComponentProps } from '$lib/types.js';
  
  interface SkipLinkProps extends BaseComponentProps {
    href?: string;
    text?: string;
    html?: string;
  }
  
  interface Props extends SkipLinkProps {}
  
  let {
    href = '#maincontent',
    text = 'Skip to main content',
    html,
    classes = '',
    attributes = {},
    children,
    ...restProps
  }: Props = $props();

  // Create attributes object for skip link
  const skipLinkAttributes = $derived(() => ({
    ...attributes,
    ...restProps
  }));
</script>

<a 
  class="public-good-skip-link btn btn-primary btn-sm fixed top-2 left-2 z-50 opacity-0 focus:opacity-100 transform -translate-y-full focus:translate-y-0 transition-all duration-200 {classes}"
  {href}
  {...skipLinkAttributes()}
>
  {#if children}
    {@render children()}
  {:else if html}
    {@html html}
  {:else}
    {text}
  {/if}
</a>

<style>
  .public-good-skip-link {
    /* Ensure skip link appears on focus for keyboard users */
    position: fixed;
    top: 8px;
    left: 8px;
    z-index: 9999;
  }
  
  .public-good-skip-link:focus {
    /* Override any potential focus outline conflicts */
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
</style>
<script lang="ts">
  import type { ButtonProps } from '$lib/types.js';
  
  interface Props extends ButtonProps {}
  
  let {
    element = 'button',
    text,
    html,
    name,
    type = 'submit',
    value,
    disabled = false,
    href,
    variant = 'primary',
    preventDoubleClick = false,
    classes = '',
    attributes = {},
    ...restProps
  }: Props = $props();

  // Determine element type based on props
  const elementType = $derived(() => {
    if (element) return element;
    if (href) return 'a';
    return 'button';
  });

  // Map NHS UK variants to DaisyUI classes
  const variantClasses = $derived(() => {
    switch (variant) {
      case 'secondary':
        return 'btn-secondary';
      case 'warning':
        return 'btn-warning';
      case 'reverse':
        return 'btn-outline btn-primary';
      case 'login':
        return 'btn-primary btn-wide';
      default:
        return 'btn-primary';
    }
  });

  // Create attributes object for spreading
  const elementAttributes = $derived(() => {
    const attrs: Record<string, any> = {
      ...attributes,
      ...restProps
    };
    
    if (preventDoubleClick && elementType() !== 'a') {
      attrs['data-prevent-double-click'] = 'true';
    }
    
    if (disabled && elementType() !== 'a') {
      attrs.disabled = true;
      attrs['aria-disabled'] = 'true';
    }
    
    return attrs;
  });
</script>

{#if elementType() === 'a'}
  <a 
    class="btn {variantClasses} {disabled ? 'btn-disabled' : ''} {classes}"
    href={href || '#'}
    role="button"
    draggable="false"
    tabindex={disabled ? -1 : 0}
    aria-disabled={disabled}
    {...elementAttributes()}
  >
    {#if html}
      {@html html}
    {:else}
      {text}
    {/if}
  </a>
{:else if elementType() === 'input'}
  <input 
    class="btn {variantClasses} {classes}"
    {value}
    {name}
    {type}
    {disabled}
    {...elementAttributes()}
  />
{:else}
  <button 
    class="btn {variantClasses} {classes}"
    {name}
    {type}
    {value}
    {disabled}
    {...elementAttributes()}
  >
    {#if html}
      {@html html}
    {:else}
      {text}
    {/if}
  </button>
{/if}
<script lang="ts">
  import type { HeroProps } from '$lib/types';

  interface Props extends HeroProps {}

  let {
    heading = '',
    headingHtml = '',
    headingLevel = 1,
    text = '',
    html = '',
    backgroundImage = '',
    overlay = true,
    overlayOpacity = 60,
    variant = 'default',
    actions = [],
    minHeight = 'min-h-96',
    textAlign = 'center',
    children,
    classes = '',
    ...restProps
  }: Props = $props();

  const HeadingTag = $derived(`h${headingLevel}` as keyof HTMLElementTagNameMap);
  
  function heroAttributes() {
    const { class: _, ...attributes } = restProps;
    return attributes;
  }

  const heroVariantClass = $derived(() => {
    switch (variant) {
      case 'emergency':
        return 'bg-error text-error-content';
      case 'urgent':
        return 'bg-warning text-warning-content';
      case 'success':
        return 'bg-success text-success-content';
      case 'info':
        return 'bg-info text-info-content';
      default:
        return 'bg-primary text-primary-content';
    }
  });

  const textAlignClass = $derived(() => {
    switch (textAlign) {
      case 'left':
        return 'text-left';
      case 'right':
        return 'text-right';
      default:
        return 'text-center';
    }
  });

  const overlayClass = $derived(() => {
    return `bg-opacity-${Math.round(overlayOpacity / 5) * 5}`;
  });
</script>

<section 
  class="public-good-hero hero {minHeight} {heroVariantClass} {classes}"
  style={backgroundImage ? `background-image: url('${backgroundImage}')` : ''}
  {...heroAttributes()}
>
  {#if backgroundImage && overlay}
    <div class="hero-overlay bg-neutral {overlayClass}"></div>
  {/if}
  
  <div class="hero-content {textAlignClass}">
    <div class="public-good-hero__content max-w-4xl">
      {#if children}
        {@render children()}
      {:else}
        {#if heading || headingHtml}
          <svelte:element this={HeadingTag} class="public-good-hero__heading mb-5 text-4xl md:text-5xl font-bold">
            {#if headingHtml}
              {@html headingHtml}
            {:else}
              {heading}
            {/if}
          </svelte:element>
        {/if}

        {#if text || html}
          <div class="public-good-hero__text mb-5 text-lg md:text-xl">
            {#if html}
              {@html html}
            {:else}
              <p>{text}</p>
            {/if}
          </div>
        {/if}

        {#if actions.length > 0}
          <div class="public-good-hero__actions flex flex-col sm:flex-row gap-4 justify-center">
            {#each actions as action}
              <a
                class="btn {action.variant === 'secondary' ? 'btn-secondary' : action.variant === 'outline' ? 'btn-outline' : 'btn-primary'} btn-lg"
                href={action.href}
                {...(action.attributes || {})}
              >
                {#if action.html}
                  {@html action.html}
                {:else}
                  {action.text}
                {/if}
              </a>
            {/each}
          </div>
        {/if}
      {/if}
    </div>
  </div>
</section>
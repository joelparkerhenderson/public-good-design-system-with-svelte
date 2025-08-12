<script lang="ts">
  import ActionLink from './ActionLink.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Action Link Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Default</h3>
    <ActionLink 
      text="Find a GP practice"
      href="#"
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With HTML content</h3>
    <ActionLink 
      html="<strong>Book</strong> a vaccine appointment"
      href="#"
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Opens in new window</h3>
    <ActionLink 
      text="External resource"
      href="https://example.com"
      openInNewWindow={true}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With custom classes</h3>
    <ActionLink 
      text="Custom styled action link"
      href="#"
      classes="btn-secondary"
    />
  </section>
</div>
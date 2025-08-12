<script lang="ts">
  import BackLink from './BackLink.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Back Link Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Default (as link)</h3>
    <BackLink href="/previous-page" />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Custom text</h3>
    <BackLink 
      text="Return to search results"
      href="/search"
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">As button</h3>
    <BackLink 
      element="button"
      text="Go back"
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With HTML content</h3>
    <BackLink 
      html="Back to <strong>dashboard</strong>"
      href="/dashboard"
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With custom classes</h3>
    <BackLink 
      text="Back"
      href="/home"
      classes="text-secondary"
    />
  </section>
</div>
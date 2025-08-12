<script lang="ts">
  import Breadcrumb from './Breadcrumb.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Breadcrumb Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Default</h3>
    <Breadcrumb 
      items={[
        { text: 'Home', href: '/' },
        { text: 'Services', href: '/services' },
        { text: 'Find a GP', href: '/services/find-gp' },
        { text: 'GP Details' }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With collapse on mobile</h3>
    <Breadcrumb 
      items={[
        { text: 'Home', href: '/' },
        { text: 'Health A-Z', href: '/conditions' },
        { text: 'Mental health', href: '/conditions/mental-health' },
        { text: 'Depression', href: '/conditions/depression' },
        { text: 'Treatment' }
      ]}
      collapseOnMobile={true}
    />
    <p class="text-sm text-base-content/70">
      On mobile, this shows a back link instead of the full breadcrumb trail.
    </p>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Short breadcrumb</h3>
    <Breadcrumb 
      items={[
        { text: 'Home', href: '/' },
        { text: 'Current page' }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Single item</h3>
    <Breadcrumb 
      items={[
        { text: 'Current page' }
      ]}
    />
  </section>
</div>
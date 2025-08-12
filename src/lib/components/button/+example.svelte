<script lang="ts">
  import Button from './Button.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Button Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Primary (Default)</h3>
    <div class="flex gap-4 flex-wrap">
      <Button text="Save and continue" />
      <Button text="Disabled button" disabled={true} />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Secondary</h3>
    <div class="flex gap-4 flex-wrap">
      <Button text="Find my location" variant="secondary" />
      <Button text="Disabled secondary" variant="secondary" disabled={true} />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Warning</h3>
    <div class="flex gap-4 flex-wrap">
      <Button text="Delete this item" variant="warning" />
      <Button text="Disabled warning" variant="warning" disabled={true} />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Reverse (Outline)</h3>
    <div class="bg-primary p-4 rounded-lg">
      <div class="flex gap-4 flex-wrap">
        <Button text="Log out" variant="reverse" />
        <Button text="Disabled reverse" variant="reverse" disabled={true} />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Login</h3>
    <div class="flex gap-4 flex-wrap">
      <Button text="Continue" variant="login" />
      <Button text="Disabled login" variant="login" disabled={true} />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">As Links</h3>
    <div class="flex gap-4 flex-wrap">
      <Button text="Primary link" href="#" />
      <Button text="Secondary link" variant="secondary" href="#" />
      <Button text="Disabled link" href="#" disabled={true} />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">HTML Content</h3>
    <div class="flex gap-4 flex-wrap">
      <Button html="<strong>Bold</strong> text button" />
      <Button html="Button with <em>emphasis</em>" variant="secondary" />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Input Type</h3>
    <div class="flex gap-4 flex-wrap">
      <Button element="input" text="Submit" type="submit" />
      <Button element="input" text="Reset" type="reset" variant="secondary" />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Prevent Double Click</h3>
    <Button 
      text="Process payment" 
      preventDoubleClick={true}
      variant="primary"
    />
    <p class="text-sm text-base-content/70">
      This button includes double-click prevention.
    </p>
  </section>
</div>
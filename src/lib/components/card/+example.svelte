<script lang="ts">
  import Card from './Card.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Card Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Card</h3>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card 
        heading="Find a pharmacy"
        description="Use our pharmacy finder to search for a pharmacy near you."
        href="#"
      />
      
      <Card 
        heading="Book a vaccination"
        description="Book your COVID-19, flu or other vaccination online."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Secondary Cards</h3>
    <div class="grid gap-4 md:grid-cols-2">
      <Card 
        heading="Health A-Z"
        description="Information on hundreds of conditions and treatments."
        secondary={true}
        href="#"
      />
      
      <Card 
        heading="Mental health support"
        description="Get help and support for your mental health."
        secondary={true}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Feature Card</h3>
    <Card 
      heading="NHS App"
      headingHtml="Download the <strong>NHS App</strong>"
      description="Access your health record, book appointments, order prescriptions and more."
      feature={true}
      href="#"
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Primary Card with Icon</h3>
    <div class="max-w-md">
      <Card 
        heading="Get started"
        description="Find out what you can do with your NHS account."
        primary={true}
        href="#"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Care Cards (Non-urgent, Urgent, Emergency)</h3>
    <div class="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
      <Card 
        heading="Speak to a GP if:"
        description="You have symptoms that are getting worse or not improving."
        type="non-urgent"
      />
      
      <Card 
        heading="Ask for an urgent GP appointment if:"
        description="Your symptoms are severe or getting rapidly worse."
        type="urgent"
      />
      
      <Card 
        heading="Call 999 if:"
        description="You have severe chest pain or difficulty breathing."
        type="emergency"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Card with Image</h3>
    <div class="max-w-md">
      <Card 
        heading="NHS Mobile App"
        description="Get the NHS App to access health services on your phone."
        imgURL="https://via.placeholder.com/400x200/0ea5e9/white?text=NHS+App"
        imgALT="NHS App screenshot"
        href="#"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Top Task Card</h3>
    <div class="max-w-md">
      <Card 
        heading="Find services near you"
        description="Search for GP practices, hospitals, pharmacies and other services."
        topTask={true}
        href="#"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Clickable Card</h3>
    <div class="max-w-md">
      <Card 
        heading="Entire card is clickable"
        description="Click anywhere on this card to navigate."
        clickable={true}
        href="#clickable-example"
      />
    </div>
  </section>
</div>
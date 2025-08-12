<script lang="ts">
  import Images from './Images.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Images Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Image</h3>
    <div class="max-w-md">
      <Images 
        src="https://via.placeholder.com/400x300/0284c7/ffffff?text=Public+Good"
        alt="Placeholder image showing Public Good branding"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Image with Caption</h3>
    <div class="max-w-md">
      <Images 
        src="https://via.placeholder.com/400x300/059669/ffffff?text=Health+Services"
        alt="Healthcare professional providing patient care"
        caption="A healthcare professional discussing treatment options with a patient"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Responsive Image with Srcset</h3>
    <div class="max-w-lg">
      <Images 
        src="https://via.placeholder.com/600x400/7c3aed/ffffff?text=Responsive+Image"
        alt="Responsive image example"
        srcset="https://via.placeholder.com/300x200/7c3aed/ffffff?text=Small 300w, https://via.placeholder.com/600x400/7c3aed/ffffff?text=Medium 600w, https://via.placeholder.com/900x600/7c3aed/ffffff?text=Large 900w"
        sizes="(max-width: 640px) 300px, (max-width: 1024px) 600px, 900px"
        caption="This image adapts to different screen sizes using srcset and sizes attributes"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Medical Information Images</h3>
    <div class="grid gap-4 md:grid-cols-2">
      <Images 
        src="https://via.placeholder.com/350x250/dc2626/ffffff?text=Emergency+Care"
        alt="Emergency medical services ambulance"
        caption="Emergency services are available 24/7 for urgent medical needs"
      />
      
      <Images 
        src="https://via.placeholder.com/350x250/16a34a/ffffff?text=Vaccination"
        alt="Healthcare worker administering a vaccination"
        caption="Vaccinations help protect you and your community from serious diseases"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Health Education Images</h3>
    <div class="space-y-4">
      <Images 
        src="https://via.placeholder.com/500x300/0891b2/ffffff?text=Hand+Washing"
        alt="Proper hand washing technique demonstration"
        caption="Wash your hands thoroughly with soap and water for at least 20 seconds"
        classes="border border-base-300"
      />
      
      <Images 
        src="https://via.placeholder.com/500x300/ea580c/ffffff?text=Healthy+Eating"
        alt="Variety of healthy foods including fruits and vegetables"
        caption="A balanced diet with plenty of fruits and vegetables supports good health"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Clinical Images</h3>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Images 
        src="https://via.placeholder.com/300x200/8b5cf6/ffffff?text=X-Ray+Equipment"
        alt="Medical X-ray machine in a clinical setting"
        caption="X-ray imaging"
      />
      
      <Images 
        src="https://via.placeholder.com/300x200/ec4899/ffffff?text=MRI+Scanner"
        alt="MRI scanner in a hospital radiology department"
        caption="MRI scanning"
      />
      
      <Images 
        src="https://via.placeholder.com/300x200/f59e0b/ffffff?text=Blood+Test"
        alt="Laboratory technician preparing blood samples for testing"
        caption="Blood testing"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Different Aspect Ratios</h3>
    <div class="space-y-4">
      <!-- Square image -->
      <div class="max-w-xs">
        <Images 
          src="https://via.placeholder.com/300x300/0d9488/ffffff?text=Square+Image"
          alt="Square format medical diagram"
          caption="Square format (1:1 ratio)"
        />
      </div>

      <!-- Wide image -->
      <div class="max-w-2xl">
        <Images 
          src="https://via.placeholder.com/800x300/7c2d12/ffffff?text=Wide+Banner+Image"
          alt="Wide banner showing hospital facilities"
          caption="Wide banner format (8:3 ratio)"
        />
      </div>

      <!-- Tall image -->
      <div class="max-w-xs">
        <Images 
          src="https://via.placeholder.com/300x500/be123c/ffffff?text=Tall+Portrait"
          alt="Portrait orientation medical infographic"
          caption="Portrait format (3:5 ratio)"
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Facility and Equipment Images</h3>
    <div class="grid gap-4 md:grid-cols-2">
      <Images 
        src="https://via.placeholder.com/400x300/1e40af/ffffff?text=Hospital+Reception"
        alt="Modern hospital reception area with comfortable seating"
        caption="Our reception areas are designed for comfort and accessibility"
      />
      
      <Images 
        src="https://via.placeholder.com/400x300/059669/ffffff?text=Consultation+Room"
        alt="Clean, well-equipped medical consultation room"
        caption="Private consultation rooms equipped with modern medical technology"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Accessibility Examples</h3>
    <div class="space-y-4">
      <Images 
        src="https://via.placeholder.com/450x300/7c3aed/ffffff?text=Wheelchair+Access"
        alt="Hospital entrance with wheelchair accessible ramp and automatic doors"
        caption="All our facilities are wheelchair accessible with automatic doors and ramps"
      />
      
      <Images 
        src="https://via.placeholder.com/450x300/dc2626/ffffff?text=Sign+Language"
        alt="Healthcare professional communicating with patient using sign language"
        caption="We provide sign language interpreters and other communication support services"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Using Snippet Children</h3>
    <div class="max-w-md">
      <Images 
        src="https://via.placeholder.com/400x300/0891b2/ffffff?text=Custom+Content"
        alt="Medical research laboratory with advanced equipment"
      >
        <figcaption class="text-sm text-base-content/70 mt-2">
          <strong>Research Laboratory:</strong> Our state-of-the-art facility supports
          <em>cutting-edge medical research</em> that benefits patients worldwide.
          <a href="#research" class="link link-primary">Learn more about our research</a>.
        </figcaption>
      </Images>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Custom Styling</h3>
    <div class="space-y-4">
      <Images 
        src="https://via.placeholder.com/500x300/991b1b/ffffff?text=Bordered+Image"
        alt="Medical equipment with custom border styling"
        caption="Image with custom border and shadow"
        classes="border-2 border-primary shadow-lg"
      />
      
      <Images 
        src="https://via.placeholder.com/500x300/166534/ffffff?text=Rounded+Image"
        alt="Healthcare team meeting with rounded corners"
        caption="Image with rounded corners"
        classes="rounded-xl"
      />
    </div>
  </section>
</div>
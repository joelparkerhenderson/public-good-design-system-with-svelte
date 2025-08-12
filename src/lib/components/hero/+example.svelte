<script lang="ts">
  import Hero from './Hero.svelte';
  
  const primaryActions = [
    { text: 'Find Services', href: '/services' },
    { text: 'Book Appointment', href: '/book', variant: 'secondary' as const }
  ];
  
  const emergencyActions = [
    { text: 'Call 999', href: 'tel:999', variant: 'primary' as const },
    { text: 'Find Hospital', href: '/hospital', variant: 'outline' as const }
  ];
  
  const serviceActions = [
    { text: 'Get Started', href: '/register' },
    { text: 'Learn More', href: '/about', variant: 'outline' as const }
  ];
</script>

<div class="space-y-12">
  <section>
    <h3 class="text-lg font-semibold mb-4">Basic Hero</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Hero 
        heading="We're here for you"
        text="Helping you take control of your health and wellbeing"
      />
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Hero with Actions</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Hero 
        heading="Access Your Health Records"
        text="View test results, book appointments, and manage your healthcare online"
        actions={primaryActions}
      />
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Emergency Hero</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Hero 
        variant="emergency"
        heading="Emergency Care"
        text="If this is a life-threatening emergency, call 999 immediately"
        actions={emergencyActions}
        minHeight="min-h-64"
      />
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Mental Health Support Hero</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Hero 
        variant="info"
        heading="Mental Health Support"
        html="<p>You don't have to face mental health challenges alone.</p><p><strong>Free, confidential support is available 24/7.</strong></p>"
        actions={[
          { text: 'Get Help Now', href: '/mental-health' },
          { text: 'Crisis Support', href: '/crisis', variant: 'secondary' as const }
        ]}
      />
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Service Launch Hero</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Hero 
        variant="success"
        heading="New Online Prescription Service"
        text="Order repeat prescriptions online and collect from your local pharmacy"
        actions={serviceActions}
        textAlign="left"
      />
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Hero with Background Image</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Hero 
        heading="Book Your COVID-19 Vaccination"
        text="Protect yourself and your community. Book your appointment today."
        backgroundImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        overlay={true}
        overlayOpacity={70}
        actions={[
          { text: 'Book Now', href: '/book-vaccination' },
          { text: 'More Information', href: '/vaccination-info', variant: 'outline' as const }
        ]}
        minHeight="min-h-[500px]"
      />
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Pregnancy Support Hero</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        overlay={true}
        overlayOpacity={50}
        minHeight="min-h-[400px]"
      >
        <div class="max-w-2xl">
          <h1 class="mb-5 text-4xl md:text-5xl font-bold">Pregnancy & Birth</h1>
          <div class="mb-5 text-lg md:text-xl">
            <p class="mb-3">Get support throughout your pregnancy journey</p>
            <ul class="list-disc list-inside space-y-1 text-left">
              <li>Antenatal appointments</li>
              <li>Birth planning support</li>
              <li>Postnatal care</li>
              <li>Mental health support</li>
            </ul>
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="/pregnancy" class="btn btn-primary btn-lg">Find Support</a>
            <a href="/book-midwife" class="btn btn-secondary btn-lg">Book Midwife Appointment</a>
          </div>
        </div>
      </Hero>
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Compact Warning Hero</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Hero 
        variant="urgent"
        heading="Service Update"
        text="Our phone lines are experiencing high demand. Consider using our online services for faster access."
        actions={[
          { text: 'Online Services', href: '/online' },
          { text: 'Check Status', href: '/status', variant: 'outline' as const }
        ]}
        minHeight="min-h-48"
        headingLevel={2}
      />
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Community Health Hero</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        overlay={true}
        overlayOpacity={60}
        heading="Community Health Services"
        html="<p>Local health services designed around your community's needs</p><p><em>Working together for healthier communities</em></p>"
        textAlign="left"
        minHeight="min-h-[350px]"
        actions={[
          { text: 'Find Local Services', href: '/local-services' },
          { text: 'Community Programs', href: '/programs', variant: 'secondary' as const },
          { text: 'Get Involved', href: '/volunteer', variant: 'outline' as const }
        ]}
      />
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Elderly Care Hero</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        overlay={true}
        overlayOpacity={45}
        textAlign="right"
        minHeight="min-h-[450px]"
      >
        <div class="max-w-xl">
          <h1 class="mb-5 text-4xl md:text-5xl font-bold">Care & Support for Seniors</h1>
          <div class="mb-5 text-lg">
            <p class="mb-3">Comprehensive healthcare tailored for older adults</p>
            <div class="grid grid-cols-1 gap-2 text-base">
              <div class="badge badge-lg badge-primary">Home Care Services</div>
              <div class="badge badge-lg badge-secondary">Health Monitoring</div>
              <div class="badge badge-lg badge-accent">Social Support</div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <a href="/elderly-care" class="btn btn-primary btn-lg">Learn More</a>
            <a href="/care-assessment" class="btn btn-outline btn-lg">Request Assessment</a>
          </div>
        </div>
      </Hero>
    </div>
  </section>
</div>
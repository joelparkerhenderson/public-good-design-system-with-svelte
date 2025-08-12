<script lang="ts">
  import Footer from './Footer.svelte';
  
  const standardLinks = [
    { text: 'Accessibility statement', href: '/accessibility-statement' },
    { text: 'Contact us', href: '/contact' },
    { text: 'Cookies', href: '/cookies' },
    { text: 'Privacy policy', href: '/privacy' },
    { text: 'Terms and conditions', href: '/terms' }
  ];
  
  const healthcareLinks = [
    { text: 'Find NHS services', href: '/find-services' },
    { text: 'Emergency contacts', href: '/emergency' },
    { text: 'Patient support', href: '/patient-support' },
    { text: 'Accessibility statement', href: '/accessibility-statement' },
    { text: 'Privacy policy', href: '/privacy' }
  ];
  
  const extendedLinks = [
    { text: 'About this service', href: '/about' },
    { text: 'Find NHS services', href: '/find-services' },
    { text: 'Book appointments', href: '/appointments' },
    { text: 'Patient support', href: '/patient-support' },
    { text: 'Emergency contacts', href: '/emergency' },
    { text: 'Health A-Z', href: '/health-a-z' },
    { text: 'Accessibility statement', href: '/accessibility-statement' },
    { text: 'Contact us', href: '/contact' },
    { text: 'Cookies', href: '/cookies' },
    { text: 'Privacy policy', href: '/privacy' },
    { text: 'Terms and conditions', href: '/terms' }
  ];
</script>

<div class="space-y-12">
  <section>
    <h3 class="text-lg font-semibold mb-4">Standard Footer</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <div class="bg-base-100 p-8 min-h-[200px]">
        <p class="text-center text-base-content/50">Page content goes here</p>
      </div>
      <Footer links={standardLinks} />
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Healthcare Service Footer</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <div class="bg-base-100 p-8 min-h-[200px]">
        <p class="text-center text-base-content/50">Healthcare service content</p>
      </div>
      <Footer 
        links={healthcareLinks} 
        copyright="© NHS Digital"
      />
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Extended Links Footer</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <div class="bg-base-100 p-8 min-h-[200px]">
        <p class="text-center text-base-content/50">Comprehensive service content</p>
      </div>
      <Footer 
        links={extendedLinks}
        copyright="© Public Good Design System"
      />
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Minimal Footer (Copyright Only)</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <div class="bg-base-100 p-8 min-h-[200px]">
        <p class="text-center text-base-content/50">Simple page content</p>
      </div>
      <Footer copyright="© 2024 Public Health Initiative" />
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Custom Content Footer (Using Children)</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <div class="bg-base-100 p-8 min-h-[200px]">
        <p class="text-center text-base-content/50">Custom service content</p>
      </div>
      <Footer copyright="© Mental Health Trust">
        <nav class="mb-6">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h4 class="font-semibold text-base-content mb-3">Patient Services</h4>
              <ul class="space-y-2">
                <li><a href="/appointments" class="link link-hover text-sm text-base-content/70 hover:text-primary">Book appointment</a></li>
                <li><a href="/prescriptions" class="link link-hover text-sm text-base-content/70 hover:text-primary">Repeat prescriptions</a></li>
                <li><a href="/test-results" class="link link-hover text-sm text-base-content/70 hover:text-primary">Test results</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-base-content mb-3">Support</h4>
              <ul class="space-y-2">
                <li><a href="/crisis-help" class="link link-hover text-sm text-base-content/70 hover:text-primary">Crisis support</a></li>
                <li><a href="/counselling" class="link link-hover text-sm text-base-content/70 hover:text-primary">Counselling services</a></li>
                <li><a href="/wellbeing" class="link link-hover text-sm text-base-content/70 hover:text-primary">Wellbeing resources</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-base-content mb-3">Information</h4>
              <ul class="space-y-2">
                <li><a href="/about" class="link link-hover text-sm text-base-content/70 hover:text-primary">About us</a></li>
                <li><a href="/contact" class="link link-hover text-sm text-base-content/70 hover:text-primary">Contact details</a></li>
                <li><a href="/privacy" class="link link-hover text-sm text-base-content/70 hover:text-primary">Privacy policy</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </Footer>
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Emergency Services Footer</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <div class="bg-base-100 p-8 min-h-[200px]">
        <p class="text-center text-base-content/50">Emergency service information</p>
      </div>
      <Footer copyright="© NHS Emergency Services">
        <div class="mb-6">
          <div class="alert alert-warning mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.876c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.98-.833-2.75 0L3.044 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span>For life-threatening emergencies, call <strong>999</strong> immediately</span>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            <div class="p-4 bg-error/10 rounded-lg border border-error/20">
              <h4 class="font-semibold text-error mb-2">Emergency</h4>
              <p class="text-sm mb-2">Life-threatening situations</p>
              <a href="tel:999" class="btn btn-error btn-sm">Call 999</a>
            </div>
            <div class="p-4 bg-warning/10 rounded-lg border border-warning/20">
              <h4 class="font-semibold text-warning mb-2">Non-Emergency</h4>
              <p class="text-sm mb-2">Medical advice and support</p>
              <a href="tel:111" class="btn btn-warning btn-sm">Call 111</a>
            </div>
          </div>
          
          <nav class="mt-6">
            <ul class="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm">
              <li><a href="/find-hospital" class="link link-hover text-base-content/70 hover:text-primary">Find nearest hospital</a></li>
              <li><a href="/emergency-contacts" class="link link-hover text-base-content/70 hover:text-primary">Emergency contacts</a></li>
              <li><a href="/first-aid" class="link link-hover text-base-content/70 hover:text-primary">First aid guidance</a></li>
              <li><a href="/accessibility" class="link link-hover text-base-content/70 hover:text-primary">Accessibility</a></li>
            </ul>
          </nav>
        </div>
      </Footer>
    </div>
  </section>
</div>
<script lang="ts">
  import Header from './Header.svelte';
  
  const standardNavigation = [
    { text: 'Health A-Z', href: '/health-a-z' },
    { text: 'Services', href: '/services' },
    { text: 'Live Well', href: '/live-well' },
    { text: 'Mental Health', href: '/mental-health' },
    { text: 'Care and Support', href: '/care-support' }
  ];
  
  const serviceNavigation = [
    { text: 'Book Appointment', href: '/book' },
    { text: 'Manage Booking', href: '/manage' },
    { text: 'Find Services', href: '/find' },
    { text: 'Help', href: '/help' }
  ];
  
  const emergencyNavigation = [
    { text: 'Emergency', href: '/emergency', html: '<strong>Emergency</strong>' },
    { text: 'Find Hospital', href: '/hospital' },
    { text: 'First Aid', href: '/first-aid' },
    { text: 'Contact', href: '/contact' }
  ];
</script>

<div class="space-y-12">
  <section>
    <h3 class="text-lg font-semibold mb-4">Basic Header</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Header />
      <div class="bg-base-100 p-8 text-center text-base-content/50">
        <p>Page content goes here</p>
      </div>
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Service Header</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Header 
        serviceName="Book a COVID-19 vaccination"
        serviceUrl="/book-vaccination"
      />
      <div class="bg-base-100 p-8 text-center text-base-content/50">
        <p>Service-specific content</p>
      </div>
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Header with Navigation</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Header 
        showNavigation={true}
        navigationItems={standardNavigation}
      />
      <div class="bg-base-100 p-8 text-center text-base-content/50">
        <p>Content with primary navigation available</p>
      </div>
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Header with Search</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Header 
        showSearch={true}
        searchPlaceholder="Search health information"
      />
      <div class="bg-base-100 p-8 text-center text-base-content/50">
        <p>Searchable content area</p>
      </div>
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Complete Service Header</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Header 
        serviceName="Mental Health Support Service"
        serviceUrl="/mental-health"
        showNavigation={true}
        navigationItems={serviceNavigation}
        showSearch={true}
        searchPlaceholder="Search support resources"
      />
      <div class="bg-base-100 p-8 text-center text-base-content/50">
        <p>Full-featured service with navigation and search</p>
      </div>
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Transactional Header</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Header 
        transactional={true}
        serviceName="Complete Your Appointment"
      />
      <div class="bg-base-100 p-8 text-center text-base-content/50">
        <p>Focused transactional process - no distracting navigation</p>
      </div>
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Emergency Services Header</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Header 
        logoText="Emergency Services"
        serviceName="Find Emergency Care"
        serviceUrl="/emergency"
        showNavigation={true}
        navigationItems={emergencyNavigation}
      />
      <div class="bg-base-100 p-8">
        <div class="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>For life-threatening emergencies, call <strong>999</strong> immediately</span>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Custom Content Header</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Header serviceName="Patient Portal">
        <div class="bg-secondary/20 border-t border-secondary/30 py-3">
          <div class="container mx-auto px-4">
            <div class="flex items-center justify-between text-sm">
              <div class="flex items-center gap-4">
                <span>Welcome back, <strong>John Smith</strong></span>
                <span class="badge badge-success badge-sm">Verified Patient</span>
              </div>
              <div class="flex items-center gap-2">
                <span>Next appointment: <strong>Today, 2:30 PM</strong></span>
                <button class="btn btn-xs btn-secondary">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <div class="bg-base-100 p-8 text-center text-base-content/50">
        <p>Personalized patient dashboard content</p>
      </div>
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Mobile Responsive Test</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <div class="max-w-sm mx-auto">
        <Header 
          serviceName="Mobile Health App"
          showNavigation={true}
          navigationItems={[
            { text: 'Home', href: '/home' },
            { text: 'Appointments', href: '/appointments' },
            { text: 'Records', href: '/records' },
            { text: 'Messages', href: '/messages' },
            { text: 'Settings', href: '/settings' }
          ]}
          showSearch={true}
          searchPlaceholder="Search..."
        />
        <div class="bg-base-100 p-4 text-center text-base-content/50 text-sm">
          <p>Mobile view with hamburger menu</p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Healthcare Trust Header</h3>
    <div class="border border-base-300 rounded-lg overflow-hidden">
      <Header 
        logoText="Regional Health Trust"
        organisational={true}
        showNavigation={true}
        navigationItems={[
          { text: 'Services', href: '/services' },
          { text: 'Departments', href: '/departments' },
          { text: 'Patient Information', href: '/patients' },
          { text: 'Staff Portal', href: '/staff' },
          { text: 'Contact', href: '/contact' }
        ]}
        showSearch={true}
        searchPlaceholder="Search trust services"
      />
      <div class="bg-base-100 p-8 text-center text-base-content/50">
        <p>Regional healthcare trust website</p>
      </div>
    </div>
  </section>
</div>
<script lang="ts">
  import Pagination from './Pagination.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Pagination Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Pagination</h3>
    <Pagination 
      previousUrl="/search?page=1"
      previousPage="Tips for healthy eating"
      nextUrl="/search?page=3"
      nextPage="Exercise and fitness"
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Only Previous Page</h3>
    <Pagination 
      previousUrl="/services"
      previousPage="Our services"
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Only Next Page</h3>
    <Pagination 
      nextUrl="/conditions/diabetes/treatment"
      nextPage="Diabetes treatment options"
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Health Information Articles</h3>
    <div class="space-y-6">
      <div class="p-4 bg-base-100 border rounded-lg">
        <h4 class="text-lg font-semibold mb-2">Understanding Blood Pressure</h4>
        <p class="text-base-content/70 mb-4">Learn about normal blood pressure ranges, what high blood pressure means for your health, and how to manage it effectively.</p>
        
        <Pagination 
          previousUrl="/health/heart-health"
          previousPage="Heart health basics"
          nextUrl="/health/blood-pressure/treatment"
          nextPage="Blood pressure treatment"
        />
      </div>

      <div class="p-4 bg-base-100 border rounded-lg">
        <h4 class="text-lg font-semibold mb-2">COVID-19 Vaccination Guide</h4>
        <p class="text-base-content/70 mb-4">Everything you need to know about COVID-19 vaccines, including who should get them and what to expect.</p>
        
        <Pagination 
          previousUrl="/covid/symptoms"
          previousPage="COVID-19 symptoms"
          nextUrl="/covid/booster"
          nextPage="Booster vaccinations"
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Medical Condition Information</h3>
    <div class="space-y-6">
      <div class="p-4 bg-base-100 border rounded-lg">
        <h4 class="text-lg font-semibold mb-2">Type 2 Diabetes: Symptoms</h4>
        <p class="text-base-content/70 mb-4">Common symptoms of type 2 diabetes and when to see your GP for testing and diagnosis.</p>
        
        <Pagination 
          previousUrl="/conditions/diabetes/overview"
          previousPage="What is diabetes?"
          nextUrl="/conditions/diabetes/diagnosis"
          nextPage="Getting diagnosed"
        />
      </div>

      <div class="p-4 bg-base-100 border rounded-lg">
        <h4 class="text-lg font-semibold mb-2">Mental Health: Anxiety Disorders</h4>
        <p class="text-base-content/70 mb-4">Understanding different types of anxiety disorders and their symptoms.</p>
        
        <Pagination 
          previousUrl="/mental-health/overview"
          previousPage="Mental health overview"
          nextUrl="/mental-health/anxiety/treatment"
          nextPage="Anxiety treatment options"
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Treatment Guides</h3>
    <div class="space-y-6">
      <div class="p-4 bg-base-100 border rounded-lg">
        <h4 class="text-lg font-semibold mb-2">Managing High Cholesterol</h4>
        <p class="text-base-content/70 mb-4">Lifestyle changes and medical treatments that can help lower your cholesterol levels.</p>
        
        <Pagination 
          previousUrl="/conditions/cholesterol/causes"
          previousPage="What causes high cholesterol?"
          nextUrl="/conditions/cholesterol/prevention"
          nextPage="Preventing high cholesterol"
        />
      </div>

      <div class="p-4 bg-base-100 border rounded-lg">
        <h4 class="text-lg font-semibold mb-2">Physiotherapy Exercises</h4>
        <p class="text-base-content/70 mb-4">Safe and effective exercises you can do at home to improve mobility and reduce pain.</p>
        
        <Pagination 
          previousUrl="/treatments/physiotherapy/assessment"
          previousPage="Initial assessment"
          nextUrl="/treatments/physiotherapy/advanced"
          nextPage="Advanced exercises"
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Service Information Pages</h3>
    <div class="space-y-6">
      <div class="p-4 bg-base-100 border rounded-lg">
        <h4 class="text-lg font-semibold mb-2">Booking Your Appointment</h4>
        <p class="text-base-content/70 mb-4">Step-by-step guide to booking appointments online, by phone, or in person.</p>
        
        <Pagination 
          previousUrl="/services/registration"
          previousPage="Patient registration"
          nextUrl="/services/appointments/preparation"
          nextPage="Preparing for your appointment"
        />
      </div>

      <div class="p-4 bg-base-100 border rounded-lg">
        <h4 class="text-lg font-semibold mb-2">Prescription Services</h4>
        <p class="text-base-content/70 mb-4">How to request repeat prescriptions and collect your medications from the pharmacy.</p>
        
        <Pagination 
          previousUrl="/services/appointments"
          previousPage="Appointment booking"
          nextUrl="/services/test-results"
          nextPage="Viewing test results"
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Pregnancy and Child Health</h3>
    <div class="space-y-6">
      <div class="p-4 bg-base-100 border rounded-lg">
        <h4 class="text-lg font-semibold mb-2">Pregnancy: Second Trimester</h4>
        <p class="text-base-content/70 mb-4">What to expect during weeks 13-27 of pregnancy, including routine tests and common symptoms.</p>
        
        <Pagination 
          previousUrl="/pregnancy/first-trimester"
          previousPage="First trimester (weeks 1-12)"
          nextUrl="/pregnancy/third-trimester"
          nextPage="Third trimester (weeks 28-40)"
        />
      </div>

      <div class="p-4 bg-base-100 border rounded-lg">
        <h4 class="text-lg font-semibold mb-2">Child Development: 2-3 Years</h4>
        <p class="text-base-content/70 mb-4">Developmental milestones and what to expect from your toddler at this age.</p>
        
        <Pagination 
          previousUrl="/child-health/development/12-24-months"
          previousPage="12-24 months development"
          nextUrl="/child-health/development/3-4-years"
          nextPage="3-4 years development"
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Long Article Navigation</h3>
    <div class="space-y-6">
      <div class="p-4 bg-base-100 border rounded-lg">
        <h4 class="text-lg font-semibold mb-2">Comprehensive Guide to Heart Disease</h4>
        <p class="text-base-content/70 mb-4">Part 3 of 5: Risk factors and prevention strategies for cardiovascular disease.</p>
        
        <Pagination 
          previousUrl="/conditions/heart-disease/part-2-symptoms"
          previousPage="Part 2: Recognizing symptoms"
          nextUrl="/conditions/heart-disease/part-4-treatment"
          nextPage="Part 4: Treatment options"
        />
      </div>

      <div class="p-4 bg-base-100 border rounded-lg">
        <h4 class="text-lg font-semibold mb-2">Cancer Screening Guidelines</h4>
        <p class="text-base-content/70 mb-4">Chapter 2: Breast cancer screening recommendations for different age groups.</p>
        
        <Pagination 
          previousUrl="/screening/cancer/chapter-1-overview"
          previousPage="Chapter 1: Screening overview"
          nextUrl="/screening/cancer/chapter-3-cervical"
          nextPage="Chapter 3: Cervical screening"
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">First and Last Pages</h3>
    <div class="space-y-6">
      <div class="p-4 bg-base-100 border rounded-lg">
        <h4 class="text-lg font-semibold mb-2">Getting Started with Online Services</h4>
        <p class="text-base-content/70 mb-4">This is the first page in our guide to using online health services.</p>
        
        <Pagination 
          nextUrl="/online-services/registration"
          nextPage="Creating your account"
        />
      </div>

      <div class="p-4 bg-base-100 border rounded-lg">
        <h4 class="text-lg font-semibold mb-2">Emergency Contacts and Resources</h4>
        <p class="text-base-content/70 mb-4">This is the final page with important emergency contact information.</p>
        
        <Pagination 
          previousUrl="/emergency/when-to-call"
          previousPage="When to call for help"
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Medication Information</h3>
    <div class="space-y-6">
      <div class="p-4 bg-base-100 border rounded-lg">
        <h4 class="text-lg font-semibold mb-2">Blood Pressure Medications: ACE Inhibitors</h4>
        <p class="text-base-content/70 mb-4">How ACE inhibitors work, common side effects, and what to expect when starting treatment.</p>
        
        <Pagination 
          previousUrl="/medications/blood-pressure/overview"
          previousPage="Blood pressure medication types"
          nextUrl="/medications/blood-pressure/beta-blockers"
          nextPage="Beta blockers"
        />
      </div>

      <div class="p-4 bg-base-100 border rounded-lg">
        <h4 class="text-lg font-semibold mb-2">Pain Relief: Over-the-Counter Options</h4>
        <p class="text-base-content/70 mb-4">Safe use of common pain relievers like paracetamol and ibuprofen.</p>
        
        <Pagination 
          previousUrl="/medications/pain-relief/when-to-use"
          previousPage="When to use pain relief"
          nextUrl="/medications/pain-relief/prescription"
          nextPage="Prescription pain medication"
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Custom Styling</h3>
    <div class="p-4 bg-base-100 border rounded-lg">
      <h4 class="text-lg font-semibold mb-2">Special Topic: Rare Conditions</h4>
      <p class="text-base-content/70 mb-4">Information about diagnosis and management of rare medical conditions.</p>
      
      <Pagination 
        previousUrl="/rare-conditions/overview"
        previousPage="Understanding rare conditions"
        nextUrl="/rare-conditions/support"
        nextPage="Support and resources"
        classes="bg-base-200 p-4 rounded-lg"
      />
    </div>
  </section>
</div>
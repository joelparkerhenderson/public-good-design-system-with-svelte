<script lang="ts">
  import Panel from './Panel.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Panel Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Panel</h3>
    <Panel 
      titleText="Your appointment is confirmed"
      text="We've sent you a confirmation email with all the details you need for your appointment."
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Panel with HTML Content</h3>
    <Panel 
      titleHtml="<strong>Important:</strong> COVID-19 Guidelines"
      html="Please wear a face covering and arrive no more than <strong>5 minutes early</strong> for your appointment."
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Success Confirmations</h3>
    <div class="space-y-4">
      <Panel 
        titleText="Registration complete"
        text="Welcome to our patient portal. You can now book appointments, view test results, and manage your prescriptions online."
      />

      <Panel 
        titleText="Prescription ready for collection"
        html="Your prescription is ready for collection from <strong>Boots Pharmacy, High Street</strong>. Please bring valid ID."
      />

      <Panel 
        titleText="Test results available"
        text="Your blood test results are now available in your patient portal. Your GP will contact you if any action is needed."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Different Heading Levels</h3>
    <div class="space-y-4">
      <Panel 
        titleText="Page Level Panel"
        headingLevel={1}
        text="This panel uses an h1 heading, suitable for page-level announcements."
      />

      <Panel 
        titleText="Section Level Panel"
        headingLevel={2}
        text="This panel uses an h2 heading, suitable for section-level information."
      />

      <Panel 
        titleText="Subsection Panel"
        headingLevel={3}
        text="This panel uses an h3 heading for subsection information."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Appointment Confirmations</h3>
    <div class="space-y-4">
      <Panel 
        titleText="Appointment booked successfully"
        html="Your appointment with <strong>Dr. Sarah Johnson</strong> is confirmed for:<br><br><strong>Friday, 15th December 2023 at 2:30 PM</strong><br>Room 3, Ground Floor"
      />

      <Panel 
        titleText="Appointment rescheduled"
        html="Your appointment has been moved to:<br><br><strong>Monday, 18th December 2023 at 10:00 AM</strong><br><br>You'll receive a new confirmation email shortly."
      />

      <Panel 
        titleText="Same-day appointment available"
        text="We have a cancellation available today at 3:45 PM. Call 01234 567890 to book this appointment."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Treatment Information</h3>
    <div class="space-y-4">
      <Panel 
        titleText="Your vaccination is complete"
        html="You've received your COVID-19 booster vaccination. You should be protected within <strong>7-14 days</strong>."
      />

      <Panel 
        titleText="Medication prescribed"
        text="Your GP has prescribed new medication. It will be ready for collection from your chosen pharmacy within 2 hours."
      />

      <Panel 
        titleText="Treatment plan updated"
        text="Your physiotherapy treatment plan has been updated based on your progress. Check your patient portal for the new exercises."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Rich Content with Snippets</h3>
    <Panel 
      titleText="Health screening invitation"
    >
      <div class="space-y-4">
        <p class="mb-3">You're invited to our free health screening program. This comprehensive check includes:</p>
        
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Blood pressure measurement</li>
          <li>Cholesterol screening</li>
          <li>BMI calculation</li>
          <li>Diabetes risk assessment</li>
          <li>General health questionnaire</li>
        </ul>
        
        <div class="bg-primary-content/20 p-4 rounded-lg">
          <p class="font-semibold mb-2">Next steps:</p>
          <ol class="list-decimal list-inside space-y-1">
            <li>Call us on 01234 567890 to book</li>
            <li>Choose a convenient date and time</li>
            <li>Attend your 30-minute appointment</li>
            <li>Receive your results within 7 days</li>
          </ol>
        </div>
        
        <div class="flex flex-wrap gap-3 mt-4">
          <button class="btn btn-secondary">Book now</button>
          <button class="btn btn-outline btn-secondary">Learn more</button>
        </div>
      </div>
    </Panel>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Service Updates</h3>
    <div class="space-y-4">
      <Panel 
        titleText="New online services available"
        html="You can now access additional services online:<br><br>• View and download medical certificates<br>• Request fit notes<br>• Update your emergency contacts<br>• Book routine blood tests"
      />

      <Panel 
        titleText="Practice information updated"
        text="We've updated our opening hours for the holiday period. Check our website or call the practice for current times."
      />

      <Panel 
        titleText="Flu vaccination program"
        text="Book your free flu vaccination now. Available for patients over 65, pregnant women, and those with underlying health conditions."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Emergency and Urgent Information</h3>
    <div class="space-y-4">
      <Panel 
        titleText="Important: Practice closure"
        html="The practice will be closed on <strong>Monday 25th December</strong> for the Christmas holiday.<br><br>For urgent medical needs, call <strong>NHS 111</strong> or visit your nearest walk-in centre."
      />

      <Panel 
        titleText="Prescription service disruption"
        text="Our electronic prescription service is temporarily unavailable. Paper prescriptions will be issued until the system is restored."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Health Reminders</h3>
    <div class="space-y-4">
      <Panel 
        titleText="Annual health check due"
        html="It's time for your annual health check. This is especially important for patients with <strong>diabetes, high blood pressure, or heart conditions</strong>."
      />

      <Panel 
        titleText="Cervical screening invitation"
        text="You're due for cervical screening. This important test can help prevent cervical cancer. Book your appointment today."
      />

      <Panel 
        titleText="Blood pressure medication review"
        text="Your blood pressure medication needs reviewing. Please book an appointment with your GP or practice pharmacist."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Patient Portal Features</h3>
    <Panel 
      titleText="Welcome to your patient portal"
    >
      <div class="space-y-4">
        <p>Your secure online access to healthcare services. Here's what you can do:</p>
        
        <div class="grid gap-4 md:grid-cols-2">
          <div class="bg-primary-content/20 p-3 rounded">
            <h4 class="font-semibold mb-2">Appointments</h4>
            <ul class="text-sm space-y-1">
              <li>• Book GP appointments</li>
              <li>• View upcoming visits</li>
              <li>• Cancel if needed</li>
            </ul>
          </div>
          
          <div class="bg-primary-content/20 p-3 rounded">
            <h4 class="font-semibold mb-2">Prescriptions</h4>
            <ul class="text-sm space-y-1">
              <li>• Request repeat prescriptions</li>
              <li>• Choose your pharmacy</li>
              <li>• Track orders</li>
            </ul>
          </div>
          
          <div class="bg-primary-content/20 p-3 rounded">
            <h4 class="font-semibold mb-2">Results</h4>
            <ul class="text-sm space-y-1">
              <li>• View test results</li>
              <li>• Download reports</li>
              <li>• Track trends</li>
            </ul>
          </div>
          
          <div class="bg-primary-content/20 p-3 rounded">
            <h4 class="font-semibold mb-2">Records</h4>
            <ul class="text-sm space-y-1">
              <li>• Access medical history</li>
              <li>• Update personal details</li>
              <li>• Manage preferences</li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-primary-content/30 pt-4">
          <p class="text-sm">
            <strong>Need help?</strong> Visit our help section or call the practice during opening hours.
          </p>
        </div>
      </div>
    </Panel>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Research and Studies</h3>
    <Panel 
      titleText="Research study invitation"
    >
      <div class="space-y-3">
        <p>You've been invited to participate in a research study about diabetes management. Participation is voluntary and won't affect your standard care.</p>
        
        <div class="bg-primary-content/20 p-3 rounded">
          <p class="font-semibold mb-2">Study benefits:</p>
          <ul class="list-disc list-inside space-y-1 text-sm">
            <li>Free health monitoring for 12 months</li>
            <li>Access to new diabetes management tools</li>
            <li>Regular check-ups with specialist nurse</li>
            <li>Contribution to medical research</li>
          </ul>
        </div>
        
        <p class="text-sm">
          For more information, contact our research team on 01234 567891 or email research@practice.nhs.uk
        </p>
      </div>
    </Panel>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Custom Styling</h3>
    <div class="space-y-4">
      <Panel 
        titleText="Custom styled panel"
        text="This panel has custom border and shadow styling."
        classes="border-2 border-accent shadow-2xl"
      />

      <Panel 
        titleText="Alternative color scheme"
        text="This panel uses a different background treatment."
        classes="bg-accent text-accent-content"
      />
    </div>
  </section>
</div>
<script lang="ts">
  import InsetText from './InsetText.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Inset Text Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Inset Text</h3>
    <InsetText text="This is important information that stands out from the main content." />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With HTML Content</h3>
    <InsetText html="You can use <strong>bold text</strong> and <em>italic text</em> in inset content." />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Medical Information</h3>
    <InsetText text="If you have symptoms of coronavirus (COVID-19), however mild, stay at home and arrange to have a test." />
    
    <InsetText html="<strong>Important:</strong> If you're feeling unwell with COVID-19 symptoms, you should stay at home and avoid contact with other people." />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Appointment Information</h3>
    <InsetText>
      <p class="font-semibold mb-2">Before your appointment:</p>
      <ul class="list-disc list-inside space-y-1">
        <li>Arrive 10 minutes early for check-in</li>
        <li>Bring a list of current medications</li>
        <li>Bring your insurance card and ID</li>
        <li>Prepare any questions you want to ask</li>
      </ul>
    </InsetText>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Emergency Information</h3>
    <InsetText>
      <h4 class="font-bold text-error mb-2">Emergency Contact Information</h4>
      <p class="mb-2">For life-threatening emergencies, call <strong>999</strong> immediately.</p>
      <p>For urgent but non-life-threatening situations, call <strong>111</strong> or visit your nearest urgent care center.</p>
    </InsetText>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Treatment Instructions</h3>
    <InsetText>
      <p class="font-semibold mb-2">Taking your medication:</p>
      <ol class="list-decimal list-inside space-y-1">
        <li>Take one tablet twice daily with food</li>
        <li>Do not exceed the recommended dose</li>
        <li>Complete the full course even if you feel better</li>
        <li>Contact your doctor if you experience side effects</li>
      </ol>
    </InsetText>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Health Warnings</h3>
    <InsetText html="<strong>Smoking warning:</strong> Smoking seriously harms you and others around you. Speak to your GP or pharmacist, or call the NHS Smokefree helpline on <strong>0300 123 1044</strong>." />
    
    <InsetText>
      <div class="flex items-start gap-3">
        <div class="text-warning text-xl">⚠️</div>
        <div>
          <p class="font-semibold">Alcohol and medication</p>
          <p>Avoid alcohol while taking this medication as it may increase the risk of side effects or reduce the effectiveness of your treatment.</p>
        </div>
      </div>
    </InsetText>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Service Information</h3>
    <InsetText>
      <h4 class="font-semibold mb-2">Online Services Available</h4>
      <p class="mb-3">You can now access many services online to save time:</p>
      <div class="grid gap-2 md:grid-cols-2">
        <div>• Book appointments</div>
        <div>• View test results</div>
        <div>• Request prescriptions</div>
        <div>• Update personal details</div>
      </div>
      <p class="mt-3 text-sm">
        <a href="#register" class="link link-primary">Register for online access</a> or 
        <a href="#help" class="link link-primary">get help setting up your account</a>.
      </p>
    </InsetText>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Vaccination Information</h3>
    <InsetText html="The COVID-19 vaccine is safe and effective. Most people have no side effects. Those that do are usually mild, like a sore arm, and get better in a few days." />
    
    <InsetText>
      <h4 class="font-semibold mb-2">Who should get vaccinated?</h4>
      <p class="mb-2">The vaccine is recommended for:</p>
      <ul class="list-disc list-inside space-y-1">
        <li>All adults aged 18 and over</li>
        <li>Pregnant women</li>
        <li>People with underlying health conditions</li>
        <li>Healthcare and social care workers</li>
      </ul>
    </InsetText>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Mental Health Support</h3>
    <InsetText>
      <h4 class="font-semibold text-primary mb-2">Need someone to talk to?</h4>
      <p class="mb-3">If you're feeling overwhelmed, anxious, or depressed, support is available:</p>
      <div class="space-y-2">
        <p>• <strong>Samaritans:</strong> 116 123 (free, 24/7)</p>
        <p>• <strong>Mind:</strong> 0300 123 3393 (9am-6pm, Mon-Fri)</p>
        <p>• <strong>NHS 111:</strong> Call 111 and select option 2</p>
      </div>
      <p class="mt-3 text-sm text-base-content/70">
        Remember: seeking help is a sign of strength, not weakness.
      </p>
    </InsetText>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Custom Styling</h3>
    <InsetText 
      text="This inset text has custom border styling to make it stand out even more."
      classes="border-warning bg-warning/10"
    />
    
    <InsetText 
      classes="border-success bg-success/10 rounded-lg"
    >
      <div class="flex items-center gap-3">
        <div class="text-success text-2xl">✅</div>
        <div>
          <p class="font-semibold text-success">Treatment completed successfully</p>
          <p>Your treatment has been completed. Follow up with your doctor in 2 weeks to monitor your progress.</p>
        </div>
      </div>
    </InsetText>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Data Protection Notice</h3>
    <InsetText>
      <h4 class="font-semibold mb-2">How we use your information</h4>
      <p class="mb-3">We collect and use your personal information to:</p>
      <ul class="list-disc list-inside space-y-1 mb-3">
        <li>Provide you with healthcare services</li>
        <li>Manage your appointments and treatments</li>
        <li>Communicate with you about your care</li>
        <li>Ensure the safety and quality of our services</li>
      </ul>
      <p class="text-sm">
        For more information about how we handle your data, see our 
        <a href="#privacy" class="link link-primary">Privacy Policy</a>.
      </p>
    </InsetText>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Research Participation</h3>
    <InsetText html="<strong>Opportunity to participate in research:</strong> You may be invited to participate in medical research studies. Participation is always voluntary and will not affect your standard care." />
  </section>
</div>
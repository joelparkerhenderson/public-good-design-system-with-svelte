<script lang="ts">
  import NotificationBanner from './NotificationBanner.svelte';
  
  let showSuccess = $state(false);
  let showWarning = $state(false);
  let showError = $state(false);
  let showInfo = $state(false);
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Notification Banner Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Notification Banner</h3>
    <NotificationBanner 
      text="This is an important message that users need to see."
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Success Banner</h3>
    <NotificationBanner 
      type="success"
      text="Your appointment has been successfully booked."
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Warning Banner</h3>
    <NotificationBanner 
      type="warning"
      titleText="Service disruption"
      text="Our online booking system will be unavailable for maintenance on Sunday between 2am and 6am."
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Error Banner</h3>
    <NotificationBanner 
      type="error"
      titleText="Form submission failed"
      text="There was a problem submitting your form. Please check the errors below and try again."
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Info Banner</h3>
    <NotificationBanner 
      type="info"
      titleText="New service available"
      text="You can now book COVID-19 vaccinations online through our patient portal."
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With HTML Content</h3>
    <NotificationBanner 
      type="info"
      titleHtml="Update to <strong>terms and conditions</strong>"
      html="We've updated our terms and conditions. <a href='#terms' class='link link-hover'>Read the updated terms</a> to understand how this affects you."
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Medical Information Banners</h3>
    <div class="space-y-3">
      <NotificationBanner 
        type="warning"
        titleText="COVID-19 safety measures"
        html="Please wear a face covering when attending your appointment. If you have <strong>COVID-19 symptoms</strong>, please call us instead of attending."
      />

      <NotificationBanner 
        type="success"
        titleText="Vaccination completed"
        text="You have received both doses of the COVID-19 vaccine. Your vaccination certificate is available in your patient record."
      />

      <NotificationBanner 
        type="info"
        titleText="Prescription ready"
        text="Your prescription is ready for collection from the pharmacy. Please bring valid ID."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Appointment Related Banners</h3>
    <div class="space-y-3">
      <NotificationBanner 
        type="success"
        titleText="Appointment confirmed"
        html="Your appointment with <strong>Dr. Smith</strong> is confirmed for <strong>Friday 15th December at 2:30pm</strong>."
      />

      <NotificationBanner 
        type="warning"
        titleText="Appointment reminder"
        text="You have an appointment tomorrow at 10:30am. Please arrive 10 minutes early for check-in."
      />

      <NotificationBanner 
        type="error"
        titleText="Appointment cancellation"
        text="Your appointment has been cancelled due to doctor unavailability. Please contact us to reschedule."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">System Messages</h3>
    <div class="space-y-3">
      <NotificationBanner 
        type="info"
        titleText="System maintenance"
        html="Our patient portal will be offline for maintenance on <strong>Saturday night from 11pm to 6am Sunday</strong>. Emergency services remain available by calling 111."
      />

      <NotificationBanner 
        type="warning"
        titleText="High demand"
        text="Due to high demand, online appointment booking may take longer than usual. For urgent matters, please call our reception."
      />

      <NotificationBanner 
        type="error"
        titleText="Service unavailable"
        text="Our online prescription ordering service is currently unavailable. Please call the pharmacy directly."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Rich Content with Snippets</h3>
    <NotificationBanner 
      type="info"
      titleText="Health screening program"
    >
      <div class="space-y-3">
        <p>You're eligible for our free health screening program. This includes:</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Blood pressure check</li>
          <li>Cholesterol screening</li>
          <li>BMI assessment</li>
          <li>Diabetes risk evaluation</li>
        </ul>
        <div class="flex flex-wrap gap-2 mt-3">
          <button class="btn btn-primary btn-sm">Book screening</button>
          <button class="btn btn-outline btn-sm">Learn more</button>
        </div>
      </div>
    </NotificationBanner>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Emergency and Urgent Banners</h3>
    <div class="space-y-3">
      <NotificationBanner 
        type="error"
        titleText="Emergency notice"
        role="alert"
        html="If you are experiencing <strong>chest pain, difficulty breathing, or other emergency symptoms</strong>, call <strong>999</strong> immediately or go to your nearest A&E department."
      />

      <NotificationBanner 
        type="warning"
        titleText="Urgent: Practice closure"
        text="Due to unforeseen circumstances, the practice will be closed today. For urgent medical needs, please call NHS 111."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Different Heading Levels</h3>
    <div class="space-y-3">
      <NotificationBanner 
        type="info"
        titleText="Page heading notification"
        titleHeadingLevel={1}
        text="This notification uses an h1 heading, suitable for page-level notifications."
      />

      <NotificationBanner 
        type="success"
        titleText="Section notification"
        titleHeadingLevel={3}
        text="This notification uses an h3 heading, suitable for section-level notifications."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Interactive Examples</h3>
    <div class="space-y-3">
      <div class="flex flex-wrap gap-2 mb-4">
        <button class="btn btn-success btn-sm" onclick={() => showSuccess = !showSuccess}>
          {showSuccess ? 'Hide' : 'Show'} Success
        </button>
        <button class="btn btn-warning btn-sm" onclick={() => showWarning = !showWarning}>
          {showWarning ? 'Hide' : 'Show'} Warning
        </button>
        <button class="btn btn-error btn-sm" onclick={() => showError = !showError}>
          {showError ? 'Hide' : 'Show'} Error
        </button>
        <button class="btn btn-info btn-sm" onclick={() => showInfo = !showInfo}>
          {showInfo ? 'Hide' : 'Show'} Info
        </button>
      </div>

      {#if showSuccess}
        <NotificationBanner 
          type="success"
          titleText="Form submitted successfully"
          text="Your patient registration form has been submitted and is being processed."
        />
      {/if}

      {#if showWarning}
        <NotificationBanner 
          type="warning"
          titleText="Session timeout warning"
          text="Your session will expire in 5 minutes. Please save your work or extend your session."
        />
      {/if}

      {#if showError}
        <NotificationBanner 
          type="error"
          titleText="Connection error"
          text="Unable to connect to our servers. Please check your internet connection and try again."
        />
      {/if}

      {#if showInfo}
        <NotificationBanner 
          type="info"
          titleText="New feature available"
          html="We've added a new symptom checker to help you decide if you need medical attention. <a href='#symptom-checker' class='link link-hover'>Try it now</a>."
        />
      {/if}
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Patient Portal Notifications</h3>
    <div class="space-y-3">
      <NotificationBanner 
        type="info"
        titleText="Welcome to your patient portal"
        html="This is your secure portal where you can view your medical records, book appointments, and manage prescriptions. <a href='#tour' class='link link-hover'>Take a tour</a> to get started."
      />

      <NotificationBanner 
        type="success"
        titleText="Profile updated"
        text="Your contact details have been successfully updated. Changes may take up to 24 hours to reflect in all systems."
      />

      <NotificationBanner 
        type="warning"
        titleText="Incomplete profile"
        text="Some of your profile information is missing. Please complete your profile to ensure we can contact you about your care."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Medication and Treatment Notifications</h3>
    <div class="space-y-3">
      <NotificationBanner 
        type="info"
        titleText="Medication review due"
        html="Your medication review is due this month. Please <a href='#book-review' class='link link-hover'>book an appointment</a> with your GP or pharmacist."
      />

      <NotificationBanner 
        type="warning"
        titleText="Drug interaction warning"
        text="The medications you're taking may interact with each other. Please discuss this with your pharmacist or GP."
      />

      <NotificationBanner 
        type="success"
        titleText="Treatment completed"
        text="You have successfully completed your course of treatment. Your GP will review your progress at your next appointment."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Custom Styling</h3>
    <NotificationBanner 
      type="info"
      titleText="Custom styled banner"
      text="This banner has custom border and shadow styling."
      classes="border-2 border-primary shadow-lg"
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Without Auto Focus</h3>
    <NotificationBanner 
      type="success"
      titleText="No auto focus"
      text="This success banner will not automatically receive focus when it appears."
      disableAutoFocus={true}
    />
  </section>
</div>
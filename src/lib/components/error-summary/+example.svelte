<script lang="ts">
  import ErrorSummary from './ErrorSummary.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Error Summary Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Error Summary</h3>
    <ErrorSummary 
      errorList={[
        { text: "Enter your full name", href: "#full-name" },
        { text: "Enter a valid email address", href: "#email" },
        { text: "Select your date of birth", href: "#date-of-birth" }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Custom Title</h3>
    <ErrorSummary 
      titleText="Please correct the following errors"
      errorList={[
        { text: "Your password is too short", href: "#password" },
        { text: "Passwords do not match", href: "#confirm-password" }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Description</h3>
    <ErrorSummary 
      descriptionText="Please review and fix the errors below before continuing."
      errorList={[
        { text: "Enter your NHS number", href: "#nhs-number" },
        { text: "Select your preferred appointment time", href: "#appointment-time" },
        { text: "Confirm your contact details", href: "#contact-details" }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With HTML Content</h3>
    <ErrorSummary 
      titleHtml="<strong>Important:</strong> Fix these errors"
      descriptionHtml="Some fields require your <em>immediate attention</em>."
      errorList={[
        { 
          html: "Enter your <strong>full name</strong> as it appears on your ID", 
          href: "#full-name-field" 
        },
        { 
          html: "Your <em>date of birth</em> must be in the past", 
          href: "#dob-field" 
        }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Form Validation Example</h3>
    <ErrorSummary 
      titleText="There are problems with your application"
      descriptionText="Fix the errors below and try again."
      errorList={[
        { text: "Enter your first name", href: "#first-name" },
        { text: "Enter your last name", href: "#last-name" },
        { text: "Enter a valid phone number", href: "#phone" },
        { text: "Select your preferred contact method", href: "#contact-method" },
        { text: "Agree to the terms and conditions", href: "#terms" }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Medical Form Errors</h3>
    <ErrorSummary 
      titleText="Complete all required fields"
      descriptionText="We need this information to process your appointment request."
      errorList={[
        { text: "Enter your NHS number or select 'I don't know my NHS number'", href: "#nhs-number" },
        { text: "Select your reason for the appointment", href: "#appointment-reason" },
        { text: "Choose your preferred appointment date", href: "#preferred-date" },
        { text: "Provide details of your current symptoms", href: "#symptoms" }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Registration Errors</h3>
    <ErrorSummary 
      errorList={[
        { text: "Enter your postcode to find your address", href: "#postcode" },
        { text: "Select your GP practice from the list", href: "#gp-practice" },
        { text: "Upload a photo of your ID", href: "#id-upload" },
        { text: "Confirm your emergency contact details", href: "#emergency-contact" }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Payment Form Errors</h3>
    <ErrorSummary 
      titleText="Payment details incomplete"
      descriptionText="Please check your payment information and try again."
      errorList={[
        { text: "Enter a valid card number", href: "#card-number" },
        { text: "Enter the expiry date", href: "#expiry-date" },
        { text: "Enter your security code (CVV)", href: "#cvv" },
        { text: "Enter the name on the card", href: "#card-name" },
        { text: "Select your billing address", href: "#billing-address" }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Without Links (Information Only)</h3>
    <ErrorSummary 
      titleText="System errors detected"
      descriptionText="The following issues need to be resolved:"
      errorList={[
        { text: "Your session has expired" },
        { text: "Unable to connect to the appointment system" },
        { text: "Your account is temporarily locked" }
      ]}
    />
  </section>
</div>
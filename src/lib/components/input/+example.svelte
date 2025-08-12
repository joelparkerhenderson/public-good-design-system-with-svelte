<script lang="ts">
  import Input from './Input.svelte';
  
  // Reactive state for form examples
  let name = $state('');
  let email = $state('');
  let phone = $state('');
  let nhsNumber = $state('');
  let password = $state('');
  let search = $state('');
  let postcode = $state('');
  let amount = $state('');
  let website = $state('');
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Input Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Input</h3>
    <div class="max-w-md">
      <Input 
        name="full-name"
        label={{ text: "Full name" }}
        bind:value={name}
      />
      {#if name}
        <p class="text-sm text-base-content/70 mt-2">Value: {name}</p>
      {/if}
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Input with Hint</h3>
    <div class="max-w-md">
      <Input 
        name="email"
        type="email"
        label={{ text: "Email address" }}
        hint={{ text: "We'll use this to send you appointment confirmations" }}
        bind:value={email}
        autocomplete="email"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Input with Error</h3>
    <div class="max-w-md">
      <Input 
        name="phone-error"
        type="tel"
        label={{ text: "Phone number" }}
        hint={{ text: "For example, 07700 900 123" }}
        errorMessage={{ text: "Enter a valid UK phone number" }}
        bind:value={phone}
        autocomplete="tel"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Different Input Types</h3>
    <div class="space-y-4 max-w-md">
      <Input 
        name="nhs-number"
        type="text"
        label={{ text: "NHS number" }}
        hint={{ html: "This is a 10 digit number, like <strong>485 777 3456</strong>" }}
        pattern="[0-9\s]*"
        inputmode="numeric"
        bind:value={nhsNumber}
      />

      <Input 
        name="password"
        type="password"
        label={{ text: "Password" }}
        hint={{ text: "Must be at least 8 characters" }}
        bind:value={password}
        autocomplete="new-password"
      />

      <Input 
        name="search"
        type="search"
        label={{ text: "Search services" }}
        placeholder="Enter keywords..."
        bind:value={search}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Input with Prefix and Suffix</h3>
    <div class="space-y-4 max-w-md">
      <Input 
        name="website"
        type="url"
        label={{ text: "Website" }}
        prefix="https://"
        hint={{ text: "Enter your practice website URL" }}
        bind:value={website}
      />

      <Input 
        name="amount"
        type="number"
        label={{ text: "Prescription charge" }}
        prefix="£"
        suffix="GBP"
        hint={{ text: "Standard prescription charge applies" }}
        bind:value={amount}
      />

      <Input 
        name="postcode"
        type="text"
        label={{ text: "Postcode" }}
        suffix="🔍"
        hint={{ text: "We'll find your address" }}
        bind:value={postcode}
        classes="uppercase"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Page Heading Input</h3>
    <div class="max-w-md">
      <Input 
        name="patient-name"
        label={{ 
          text: "What is your name?", 
          isPageHeading: true 
        }}
        hint={{ text: "Enter your full name as it appears on your ID" }}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Form States</h3>
    <div class="space-y-4 max-w-md">
      <Input 
        name="disabled-input"
        label={{ text: "Disabled input" }}
        value="This field is disabled"
        disabled
      />

      <Input 
        name="readonly-input"
        label={{ text: "Read-only input" }}
        value="This field is read-only"
        readonly
      />

      <Input 
        name="required-input"
        label={{ text: "Required field" }}
        hint={{ text: "This field must be completed" }}
        required
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Medical Form Examples</h3>
    <div class="space-y-4 max-w-lg">
      <Input 
        name="patient-id"
        label={{ text: "Patient ID" }}
        hint={{ text: "Found on your appointment letter or medical card" }}
        pattern="[A-Z0-9]*"
        classes="uppercase font-mono"
      />

      <Input 
        name="gp-practice"
        label={{ text: "GP practice name" }}
        hint={{ text: "The name of your registered GP practice" }}
        autocomplete="organization"
      />

      <Input 
        name="emergency-contact"
        label={{ text: "Emergency contact number" }}
        type="tel"
        hint={{ text: "Someone we can contact in case of emergency" }}
        autocomplete="tel"
      />

      <Input 
        name="allergies"
        label={{ text: "Known allergies" }}
        hint={{ text: "List any medications, foods, or other allergies" }}
        placeholder="e.g., Penicillin, Nuts, Latex"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Appointment Booking Form</h3>
    <div class="space-y-4 max-w-lg">
      <Input 
        name="preferred-time"
        type="time"
        label={{ text: "Preferred appointment time" }}
        hint={{ text: "Choose your preferred time of day" }}
      />

      <Input 
        name="reason"
        label={{ text: "Reason for appointment" }}
        hint={{ text: "Brief description of why you need to see a doctor" }}
        placeholder="e.g., Regular check-up, Follow-up, New symptoms"
      />

      <Input 
        name="insurance-number"
        label={{ text: "Insurance number (if applicable)" }}
        hint={{ text: "Private insurance policy number" }}
        pattern="[A-Z0-9-]*"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With HTML Labels and Hints</h3>
    <div class="space-y-4 max-w-md">
      <Input 
        name="patient-consent"
        label={{ html: "Patient <strong>consent</strong> reference" }}
        hint={{ html: "This appears on your <em>consent form</em> - ask a nurse if you need help finding it" }}
      />

      <Input 
        name="medication-dosage"
        label={{ html: "Current <em>medication</em> dosage" }}
        hint={{ html: "Include the <strong>strength</strong> (e.g., 5mg, 10ml) and <strong>frequency</strong>" }}
        placeholder="e.g., 5mg twice daily"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Input Validation Examples</h3>
    <div class="space-y-4 max-w-md">
      <Input 
        name="date-birth"
        label={{ text: "Date of birth" }}
        hint={{ text: "For example, 27 3 1985" }}
        pattern="[0-9\s]*"
        inputmode="numeric"
        errorMessage={{ text: "Enter your date of birth in the correct format" }}
      />

      <Input 
        name="ni-number"
        label={{ text: "National Insurance number" }}
        hint={{ text: "It's on your National Insurance card, benefit letter, payslip or P60. For example, 'QQ 12 34 56 C'." }}
        pattern="[A-Z]{2}[0-9]{6}[A-Z]"
        errorMessage={{ text: "Enter a National Insurance number in the correct format" }}
        classes="uppercase"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Complex Form Example</h3>
    <div class="space-y-4 max-w-lg">
      <fieldset class="public-good-fieldset">
        <legend class="text-lg font-semibold mb-4">Contact details</legend>
        
        <div class="space-y-4">
          <Input 
            name="contact-name"
            label={{ text: "Full name" }}
            hint={{ text: "Include your title (Mr, Mrs, Dr, etc.)" }}
            autocomplete="name"
            required
          />

          <Input 
            name="contact-email"
            type="email"
            label={{ text: "Email address" }}
            hint={{ text: "We'll send appointment confirmations to this email" }}
            autocomplete="email"
            required
          />

          <Input 
            name="contact-phone"
            type="tel"
            label={{ text: "Mobile phone number" }}
            prefix="+44"
            hint={{ text: "We'll send SMS reminders to this number" }}
            autocomplete="tel"
            required
          />
        </div>
      </fieldset>
    </div>
  </section>
</div>
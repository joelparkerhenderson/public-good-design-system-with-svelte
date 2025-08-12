<script lang="ts">
  import Select from './Select.svelte';
  
  // Reactive state for examples
  let appointmentType = $state('');
  let timeSlot = $state('');
  let gp = $state('');
  let priority = $state('');
  let accessibility = $state('');
  let insurance = $state('');
  let country = $state('');
  let medication = $state('');
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Select Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Select</h3>
    <div class="max-w-md">
      <Select 
        name="appointment-type"
        label={{ text: "Type of appointment" }}
        items={[
          { text: "Choose an option", value: "" },
          { text: "GP consultation", value: "gp" },
          { text: "Nurse appointment", value: "nurse" },
          { text: "Blood test", value: "blood-test" },
          { text: "Vaccination", value: "vaccination" },
          { text: "Health check", value: "health-check" }
        ]}
        bind:value={appointmentType}
      />
      {#if appointmentType}
        <p class="text-sm text-base-content/70 mt-2">Selected: {appointmentType}</p>
      {/if}
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Hint</h3>
    <div class="max-w-md">
      <Select 
        name="time-slot"
        label={{ text: "Preferred appointment time" }}
        hint={{ text: "Choose the time that works best for you" }}
        items={[
          { text: "Select a time", value: "" },
          { text: "Morning (9am-12pm)", value: "morning" },
          { text: "Afternoon (1pm-5pm)", value: "afternoon" },
          { text: "Early evening (5pm-7pm)", value: "early-evening" }
        ]}
        bind:value={timeSlot}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Error Message</h3>
    <div class="max-w-md">
      <Select 
        name="gp-selection"
        label={{ text: "Choose your GP" }}
        hint={{ text: "Select the doctor you'd like to see" }}
        errorMessage={{ text: "You must select a GP to continue" }}
        items={[
          { text: "Please select a GP", value: "" },
          { text: "Dr. Sarah Johnson", value: "dr-johnson" },
          { text: "Dr. Michael Brown", value: "dr-brown" },
          { text: "Dr. Emily Davis", value: "dr-davis" },
          { text: "Dr. James Wilson", value: "dr-wilson" },
          { text: "Any available GP", value: "any" }
        ]}
        bind:value={gp}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Page Heading Style</h3>
    <div class="max-w-md">
      <Select 
        name="priority-level"
        label={{ 
          text: "How urgent is your appointment?",
          isPageHeading: true
        }}
        hint={{ text: "This helps us prioritize your request" }}
        items={[
          { text: "Select urgency level", value: "" },
          { text: "Routine (within 2 weeks)", value: "routine" },
          { text: "Soon (within 48 hours)", value: "soon" },
          { text: "Urgent (same day)", value: "urgent" },
          { text: "Emergency (immediate)", value: "emergency" }
        ]}
        bind:value={priority}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Medical Specialties</h3>
    <div class="max-w-md">
      <Select 
        name="specialty"
        label={{ text: "Which specialist do you need to see?" }}
        hint={{ text: "Choose the medical specialty for your referral" }}
        items={[
          { text: "Choose a specialty", value: "" },
          { text: "Cardiology (Heart)", value: "cardiology" },
          { text: "Dermatology (Skin)", value: "dermatology" },
          { text: "Endocrinology (Diabetes/Hormones)", value: "endocrinology" },
          { text: "Gastroenterology (Digestive)", value: "gastroenterology" },
          { text: "Neurology (Brain/Nervous System)", value: "neurology" },
          { text: "Oncology (Cancer)", value: "oncology" },
          { text: "Orthopedics (Bones/Joints)", value: "orthopedics" },
          { text: "Psychiatry (Mental Health)", value: "psychiatry" },
          { text: "Rheumatology (Arthritis)", value: "rheumatology" },
          { text: "Urology (Kidney/Bladder)", value: "urology" }
        ]}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Accessibility Requirements</h3>
    <div class="max-w-md">
      <Select 
        name="accessibility-needs"
        label={{ text: "Do you have any accessibility requirements?" }}
        hint={{ text: "Help us prepare for your visit" }}
        items={[
          { text: "No special requirements", value: "none" },
          { text: "Wheelchair access", value: "wheelchair" },
          { text: "Hearing loop", value: "hearing-loop" },
          { text: "Sign language interpreter", value: "sign-language" },
          { text: "Large print materials", value: "large-print" },
          { text: "Easy read materials", value: "easy-read" },
          { text: "Companion/carer support", value: "companion" },
          { text: "Other (please specify)", value: "other" }
        ]}
        bind:value={accessibility}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Insurance and Payment</h3>
    <div class="max-w-md">
      <Select 
        name="insurance-type"
        label={{ text: "Payment method" }}
        hint={{ text: "How will you be paying for this appointment?" }}
        items={[
          { text: "Select payment method", value: "" },
          { text: "NHS (free)", value: "nhs" },
          { text: "Private insurance", value: "private-insurance" },
          { text: "Self-pay", value: "self-pay" },
          { text: "Employer scheme", value: "employer" },
          { text: "Student health plan", value: "student" }
        ]}
        bind:value={insurance}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Location and Demographics</h3>
    <div class="space-y-4 max-w-md">
      <Select 
        name="country-birth"
        label={{ text: "Country of birth" }}
        hint={{ text: "This information helps us provide culturally appropriate care" }}
        items={[
          { text: "Please select", value: "" },
          { text: "United Kingdom", value: "uk" },
          { text: "Ireland", value: "ireland" },
          { text: "United States", value: "us" },
          { text: "Canada", value: "canada" },
          { text: "Australia", value: "australia" },
          { text: "New Zealand", value: "new-zealand" },
          { text: "Germany", value: "germany" },
          { text: "France", value: "france" },
          { text: "Spain", value: "spain" },
          { text: "Italy", value: "italy" },
          { text: "Poland", value: "poland" },
          { text: "Romania", value: "romania" },
          { text: "India", value: "india" },
          { text: "Pakistan", value: "pakistan" },
          { text: "Bangladesh", value: "bangladesh" },
          { text: "Nigeria", value: "nigeria" },
          { text: "South Africa", value: "south-africa" },
          { text: "Other", value: "other" },
          { text: "Prefer not to say", value: "prefer-not-to-say" }
        ]}
        bind:value={country}
      />

      <Select 
        name="language-preference"
        label={{ text: "Preferred language for appointments" }}
        items={[
          { text: "English", value: "english" },
          { text: "Welsh", value: "welsh" },
          { text: "Arabic", value: "arabic" },
          { text: "Bengali", value: "bengali" },
          { text: "Gujarati", value: "gujarati" },
          { text: "Hindi", value: "hindi" },
          { text: "Punjabi", value: "punjabi" },
          { text: "Polish", value: "polish" },
          { text: "Romanian", value: "romanian" },
          { text: "Somali", value: "somali" },
          { text: "Spanish", value: "spanish" },
          { text: "Turkish", value: "turkish" },
          { text: "Urdu", value: "urdu" },
          { text: "Other (interpreter needed)", value: "other" }
        ]}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Medication Management</h3>
    <div class="max-w-md">
      <Select 
        name="medication-frequency"
        label={{ text: "How often do you take this medication?" }}
        hint={{ text: "Select the frequency that matches your prescription" }}
        items={[
          { text: "Choose frequency", value: "" },
          { text: "Once daily", value: "once-daily" },
          { text: "Twice daily", value: "twice-daily" },
          { text: "Three times daily", value: "three-times-daily" },
          { text: "Four times daily", value: "four-times-daily" },
          { text: "Every other day", value: "every-other-day" },
          { text: "Weekly", value: "weekly" },
          { text: "Monthly", value: "monthly" },
          { text: "As needed", value: "as-needed" },
          { text: "Before meals", value: "before-meals" },
          { text: "After meals", value: "after-meals" },
          { text: "At bedtime", value: "bedtime" }
        ]}
        bind:value={medication}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Disabled Options</h3>
    <div class="max-w-md">
      <Select 
        name="appointment-slots"
        label={{ text: "Available appointment slots" }}
        hint={{ text: "Some slots may not be available" }}
        items={[
          { text: "Choose a slot", value: "" },
          { text: "Monday 9:00 AM", value: "mon-9" },
          { text: "Monday 2:00 PM", value: "mon-14" },
          { text: "Tuesday 10:30 AM", value: "tue-1030", disabled: true },
          { text: "Tuesday 3:30 PM", value: "tue-1530" },
          { text: "Wednesday 11:00 AM", value: "wed-11", disabled: true },
          { text: "Wednesday 4:00 PM", value: "wed-16" },
          { text: "Thursday 9:30 AM", value: "thu-930" },
          { text: "Friday 1:30 PM", value: "fri-1330", disabled: true }
        ]}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Complex Medical Form</h3>
    <div class="space-y-4 max-w-lg">
      <fieldset class="border border-base-300 rounded-lg p-4">
        <legend class="text-lg font-semibold px-2">Medical History</legend>
        
        <div class="space-y-4 mt-4">
          <Select 
            name="blood-type"
            label={{ text: "Blood type" }}
            hint={{ text: "If known, this helps in emergency situations" }}
            items={[
              { text: "Unknown", value: "unknown" },
              { text: "A+", value: "a-positive" },
              { text: "A-", value: "a-negative" },
              { text: "B+", value: "b-positive" },
              { text: "B-", value: "b-negative" },
              { text: "AB+", value: "ab-positive" },
              { text: "AB-", value: "ab-negative" },
              { text: "O+", value: "o-positive" },
              { text: "O-", value: "o-negative" }
            ]}
          />

          <Select 
            name="smoking-status"
            label={{ text: "Smoking status" }}
            items={[
              { text: "Please select", value: "" },
              { text: "Never smoked", value: "never" },
              { text: "Ex-smoker", value: "ex-smoker" },
              { text: "Current smoker (occasional)", value: "occasional" },
              { text: "Current smoker (daily)", value: "daily" },
              { text: "Prefer not to say", value: "prefer-not-to-say" }
            ]}
          />

          <Select 
            name="alcohol-consumption"
            label={{ text: "Alcohol consumption" }}
            hint={{ text: "Units per week (1 unit = half pint of beer, small glass of wine)" }}
            items={[
              { text: "Please select", value: "" },
              { text: "None", value: "none" },
              { text: "1-2 units per week", value: "low" },
              { text: "3-14 units per week", value: "moderate" },
              { text: "15-35 units per week", value: "high" },
              { text: "Over 35 units per week", value: "very-high" },
              { text: "Prefer not to say", value: "prefer-not-to-say" }
            ]}
          />
        </div>
      </fieldset>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Emergency Contact Information</h3>
    <div class="space-y-4 max-w-md">
      <Select 
        name="emergency-relationship"
        label={{ text: "Relationship to emergency contact" }}
        hint={{ text: "How is this person related to you?" }}
        items={[
          { text: "Choose relationship", value: "" },
          { text: "Spouse/Partner", value: "spouse" },
          { text: "Parent", value: "parent" },
          { text: "Child", value: "child" },
          { text: "Sibling", value: "sibling" },
          { text: "Grandparent", value: "grandparent" },
          { text: "Grandchild", value: "grandchild" },
          { text: "Other family member", value: "family-other" },
          { text: "Friend", value: "friend" },
          { text: "Neighbor", value: "neighbor" },
          { text: "Carer", value: "carer" },
          { text: "Guardian", value: "guardian" },
          { text: "Other", value: "other" }
        ]}
      />

      <Select 
        name="contact-preference"
        label={{ text: "Preferred contact method for emergencies" }}
        items={[
          { text: "Mobile phone", value: "mobile" },
          { text: "Home phone", value: "home" },
          { text: "Work phone", value: "work" },
          { text: "Email", value: "email" },
          { text: "Text message", value: "text" }
        ]}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Custom Styling</h3>
    <div class="max-w-md">
      <Select 
        name="custom-styled"
        label={{ text: "Custom styled select" }}
        hint={{ text: "This select has custom border styling" }}
        classes="border-2 border-accent"
        items={[
          { text: "Option 1", value: "1" },
          { text: "Option 2", value: "2" },
          { text: "Option 3", value: "3" }
        ]}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Disabled Select</h3>
    <div class="max-w-md">
      <Select 
        name="disabled-example"
        label={{ text: "Disabled select field" }}
        hint={{ text: "This field is currently unavailable" }}
        disabled={true}
        items={[
          { text: "Not available", value: "na" },
          { text: "Option 1", value: "1" },
          { text: "Option 2", value: "2" }
        ]}
      />
    </div>
  </section>
</div>
<script lang="ts">
  import Radios from './Radios.svelte';
  
  // Reactive state for examples
  let appointment = $state('');
  let contact = $state('');
  let symptoms = $state('');
  let urgency = $state('');
  let medication = $state('');
  let consent = $state('');
  let accessibility = $state('');
  let insurance = $state('');
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Radios Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Radio Buttons</h3>
    <Radios 
      name="appointment-type"
      fieldset={{
        legend: { text: "What type of appointment do you need?" }
      }}
      items={[
        { text: "GP consultation", value: "gp" },
        { text: "Nurse appointment", value: "nurse" },
        { text: "Blood test", value: "blood-test" },
        { text: "Vaccination", value: "vaccination" }
      ]}
      bind:value={appointment}
    />
    {#if appointment}
      <p class="text-sm text-base-content/70">Selected: {appointment}</p>
    {/if}
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Hints</h3>
    <Radios 
      name="contact-preference"
      fieldset={{
        legend: { text: "How would you prefer to be contacted?" }
      }}
      hint={{ text: "We'll use this for appointment reminders and test results" }}
      items={[
        { 
          text: "Phone call", 
          value: "phone",
          hint: { text: "We'll call you during working hours" }
        },
        { 
          text: "Text message", 
          value: "text",
          hint: { text: "SMS reminders and updates" }
        },
        { 
          text: "Email", 
          value: "email",
          hint: { text: "Digital communications and documents" }
        },
        { 
          text: "Post", 
          value: "post",
          hint: { text: "Traditional mail correspondence" }
        }
      ]}
      bind:value={contact}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Error Message</h3>
    <Radios 
      name="symptoms-error"
      fieldset={{
        legend: { text: "Are you experiencing any of these symptoms?" }
      }}
      errorMessage={{ text: "Select at least one option or choose 'None of the above'" }}
      items={[
        { text: "Fever or high temperature", value: "fever" },
        { text: "New, continuous cough", value: "cough" },
        { text: "Loss of taste or smell", value: "loss-taste-smell" },
        { text: "Difficulty breathing", value: "breathing" },
        { text: "None of the above", value: "none" }
      ]}
      bind:value={symptoms}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Conditional Content</h3>
    <Radios 
      name="urgency"
      fieldset={{
        legend: { text: "How urgent is your appointment?" }
      }}
      items={[
        { 
          text: "Routine (within 2 weeks)", 
          value: "routine",
          conditional: {
            html: `<div class="space-y-2">
              <p><strong>Routine appointment</strong></p>
              <p>For regular check-ups, medication reviews, or non-urgent health concerns.</p>
              <p class="text-sm text-base-content/70">Next available: within 2 weeks</p>
            </div>`
          }
        },
        { 
          text: "Soon (within 48 hours)", 
          value: "soon",
          conditional: {
            html: `<div class="space-y-2">
              <p><strong>Soon appointment</strong></p>
              <p>For health concerns that need attention but aren't urgent.</p>
              <p class="text-sm text-base-content/70">Next available: within 48 hours</p>
            </div>`
          }
        },
        { 
          text: "Today (same day)", 
          value: "today",
          conditional: {
            html: `<div class="space-y-2">
              <p><strong>Same day appointment</strong></p>
              <p>For urgent health concerns that need immediate attention.</p>
              <p class="text-sm text-warning">Limited availability - please call if urgent</p>
            </div>`
          }
        }
      ]}
      bind:value={urgency}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Dividers</h3>
    <Radios 
      name="medication-frequency"
      fieldset={{
        legend: { text: "How often do you take this medication?" }
      }}
      items={[
        { text: "Once daily", value: "once-daily" },
        { text: "Twice daily", value: "twice-daily" },
        { text: "Three times daily", value: "three-times" },
        { divider: "or" },
        { text: "As needed", value: "as-needed" },
        { text: "Weekly", value: "weekly" },
        { text: "Other frequency", value: "other" }
      ]}
      bind:value={medication}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Page Heading Style</h3>
    <Radios 
      name="consent"
      fieldset={{
        legend: { 
          text: "Do you consent to share your information with specialists?",
          isPageHeading: true
        }
      }}
      hint={{ text: "This helps us provide you with the best possible care" }}
      items={[
        { 
          text: "Yes, I consent", 
          value: "yes",
          hint: { text: "We'll share relevant information with healthcare professionals involved in your care" }
        },
        { 
          text: "No, I do not consent", 
          value: "no",
          hint: { text: "We'll only share information when legally required" }
        },
        { 
          text: "I need more information", 
          value: "more-info",
          hint: { text: "We'll explain our information sharing practices" }
        }
      ]}
      bind:value={consent}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Accessibility Requirements</h3>
    <Radios 
      name="accessibility"
      fieldset={{
        legend: { text: "Do you have any accessibility requirements?" }
      }}
      hint={{ text: "Help us prepare for your visit" }}
      items={[
        { 
          text: "Wheelchair access", 
          value: "wheelchair",
          hint: { text: "Step-free access and accessible facilities" }
        },
        { 
          text: "Hearing loop", 
          value: "hearing-loop",
          hint: { text: "Induction loop system for hearing aids" }
        },
        { 
          text: "Sign language interpreter", 
          value: "sign-language",
          hint: { text: "BSL interpreter for your appointment" }
        },
        { 
          text: "Large print materials", 
          value: "large-print",
          hint: { text: "Documents in larger, easier to read format" }
        },
        { 
          text: "Other requirements", 
          value: "other",
          conditional: {
            html: `<div class="form-control">
              <label class="label">
                <span class="label-text">Please describe your requirements</span>
              </label>
              <textarea class="textarea textarea-bordered" rows="3" placeholder="Tell us what support you need..."></textarea>
            </div>`
          }
        },
        { text: "No special requirements", value: "none" }
      ]}
      bind:value={accessibility}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Insurance and Payment</h3>
    <Radios 
      name="insurance"
      fieldset={{
        legend: { text: "How will you be paying for this appointment?" }
      }}
      items={[
        { 
          text: "NHS (free)", 
          value: "nhs",
          hint: { text: "Standard NHS care at no charge" }
        },
        { 
          text: "Private insurance", 
          value: "private-insurance",
          hint: { text: "Covered by your private health insurance" },
          conditional: {
            html: `<div class="space-y-3">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Insurance provider</span>
                </label>
                <input type="text" class="input input-bordered" placeholder="e.g., Bupa, AXA, Aviva" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Policy number</span>
                </label>
                <input type="text" class="input input-bordered" />
              </div>
            </div>`
          }
        },
        { 
          text: "Self-pay", 
          value: "self-pay",
          hint: { text: "Pay directly for private consultation" },
          conditional: {
            html: `<div class="alert alert-info">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <p><strong>Self-pay consultation: £150</strong></p>
                <p class="text-sm">Payment required at the time of appointment. We accept cash, card, or bank transfer.</p>
              </div>
            </div>`
          }
        }
      ]}
      bind:value={insurance}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Complex Medical Form</h3>
    <div class="space-y-6">
      <Radios 
        name="chest-pain"
        fieldset={{
          legend: { text: "Are you currently experiencing chest pain?" }
        }}
        hint={{ text: "This helps us prioritize your appointment" }}
        items={[
          { 
            text: "Yes, severe chest pain", 
            value: "severe",
            hint: { text: "Intense pain that prevents normal activities" },
            conditional: {
              html: `<div class="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p><strong>This requires immediate attention</strong></p>
                  <p>For severe chest pain, please call 999 or go to your nearest A&E department immediately.</p>
                </div>
              </div>`
            }
          },
          { 
            text: "Yes, mild chest discomfort", 
            value: "mild",
            hint: { text: "Noticeable but manageable discomfort" }
          },
          { 
            text: "No chest pain currently", 
            value: "none",
            hint: { text: "No current chest pain or discomfort" }
          }
        ]}
      />

      <Radios 
        name="previous-heart-problems"
        fieldset={{
          legend: { text: "Have you had any previous heart problems?" }
        }}
        items={[
          { text: "Heart attack", value: "heart-attack" },
          { text: "Angina", value: "angina" },
          { text: "Heart surgery", value: "heart-surgery" },
          { text: "Heart rhythm problems", value: "rhythm-problems" },
          { text: "High blood pressure", value: "high-bp" },
          { text: "No previous heart problems", value: "none" }
        ]}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Disabled Options</h3>
    <Radios 
      name="disabled-example"
      fieldset={{
        legend: { text: "Appointment time preference" }
      }}
      hint={{ text: "Some options may not be available" }}
      items={[
        { text: "Morning (9am-12pm)", value: "morning" },
        { text: "Afternoon (1pm-5pm)", value: "afternoon" },
        { 
          text: "Evening (5pm-8pm)", 
          value: "evening", 
          disabled: true,
          hint: { text: "Currently unavailable" }
        },
        { 
          text: "Weekend", 
          value: "weekend", 
          disabled: true,
          hint: { text: "No weekend appointments available" }
        }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Without Fieldset</h3>
    <div class="space-y-2">
      <label class="text-lg font-semibold">Would you like SMS reminders?</label>
      <Radios 
        name="sms-reminders"
        hint={{ text: "We'll send appointment reminders to your mobile phone" }}
        items={[
          { text: "Yes, send SMS reminders", value: "yes" },
          { text: "No, don't send SMS reminders", value: "no" }
        ]}
      />
    </div>
  </section>
</div>
<script lang="ts">
  import Checkboxes from './Checkboxes.svelte';
</script>

<div class="space-y-8 p-6">
  <h2 class="text-2xl font-bold mb-4">Checkboxes Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Checkboxes</h3>
    <Checkboxes 
      name="nationality"
      fieldset={{
        legend: {
          text: "What is your nationality?"
        }
      }}
      items={[
        { value: "british", text: "British" },
        { value: "irish", text: "Irish" },
        { value: "other", text: "Citizen of another country" }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Hint Text</h3>
    <Checkboxes 
      name="services"
      fieldset={{
        legend: {
          text: "Which services do you need?"
        }
      }}
      hint={{ text: "Select all that apply to you" }}
      items={[
        { value: "gp", text: "GP appointment" },
        { value: "dentist", text: "Dentist appointment" },
        { value: "optician", text: "Eye test" },
        { value: "pharmacy", text: "Pharmacy services" }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Individual Item Hints</h3>
    <Checkboxes 
      name="contact-method"
      fieldset={{
        legend: {
          text: "How would you prefer to be contacted?"
        }
      }}
      items={[
        { 
          value: "email", 
          text: "Email",
          hint: { text: "We'll send updates to your registered email address" }
        },
        { 
          value: "sms", 
          text: "Text message",
          hint: { text: "Standard message rates apply" }
        },
        { 
          value: "phone", 
          text: "Phone call",
          hint: { text: "We'll call during business hours" }
        }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Error Message</h3>
    <Checkboxes 
      name="conditions"
      fieldset={{
        legend: {
          text: "Do you have any of these conditions?"
        }
      }}
      errorMessage={{ text: "Select any conditions that apply to you" }}
      items={[
        { value: "diabetes", text: "Diabetes" },
        { value: "asthma", text: "Asthma" },
        { value: "hypertension", text: "High blood pressure" },
        { value: "none", text: "None of these" }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Pre-selected Values</h3>
    <Checkboxes 
      name="symptoms"
      fieldset={{
        legend: {
          text: "Which symptoms are you experiencing?"
        }
      }}
      values={["fever", "cough"]}
      items={[
        { value: "fever", text: "Fever" },
        { value: "cough", text: "Cough" },
        { value: "headache", text: "Headache" },
        { value: "fatigue", text: "Fatigue" }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Conditional Content</h3>
    <Checkboxes 
      name="contact-preferences"
      fieldset={{
        legend: {
          text: "How would you like us to contact you?"
        }
      }}
      items={[
        { 
          value: "email", 
          text: "Email",
          conditional: {
            html: '<div class="form-control"><label class="label"><span class="label-text">Email address</span></label><input type="email" class="input input-bordered" placeholder="your@email.com" /></div>'
          }
        },
        { 
          value: "phone", 
          text: "Phone",
          conditional: {
            html: '<div class="form-control"><label class="label"><span class="label-text">Phone number</span></label><input type="tel" class="input input-bordered" placeholder="07700 900 123" /></div>'
          }
        },
        { 
          value: "post", 
          text: "Post",
          conditional: {
            html: '<div class="form-control"><label class="label"><span class="label-text">Postal address</span></label><textarea class="textarea textarea-bordered" placeholder="Your address"></textarea></div>'
          }
        }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With "None of the above" Option</h3>
    <Checkboxes 
      name="medical-history"
      fieldset={{
        legend: {
          text: "Do you have any of these medical conditions?"
        }
      }}
      items={[
        { value: "heart-disease", text: "Heart disease", exclusiveGroup: "medical" },
        { value: "diabetes", text: "Diabetes", exclusiveGroup: "medical" },
        { value: "asthma", text: "Asthma", exclusiveGroup: "medical" },
        { divider: "or" },
        { 
          value: "none", 
          text: "None of the above",
          exclusive: true,
          exclusiveGroup: "medical"
        }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Page Heading</h3>
    <Checkboxes 
      name="appointment-type"
      fieldset={{
        legend: {
          text: "What type of appointment do you need?",
          classes: "text-primary",
          isPageHeading: true
        }
      }}
      hint={{ text: "Select the most appropriate option for your situation" }}
      items={[
        { value: "routine", text: "Routine check-up" },
        { value: "urgent", text: "Urgent appointment" },
        { value: "follow-up", text: "Follow-up appointment" },
        { value: "consultation", text: "Consultation" }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Disabled Items</h3>
    <Checkboxes 
      name="services-available"
      fieldset={{
        legend: {
          text: "Which services are you interested in?"
        }
      }}
      items={[
        { value: "gp", text: "GP services" },
        { value: "dental", text: "Dental services", disabled: true },
        { value: "mental-health", text: "Mental health support" },
        { value: "physio", text: "Physiotherapy", disabled: true }
      ]}
    />
  </section>
</div>
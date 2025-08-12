<script lang="ts">
  import Fieldset from './Fieldset.svelte';
  import Checkboxes from '../checkboxes/Checkboxes.svelte';
  import DateInput from '../date-input/DateInput.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Fieldset Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Fieldset</h3>
    <Fieldset 
      legend={{ text: "Personal information" }}
    >
      <div class="space-y-4">
        <div class="form-control">
          <label class="label">
            <span class="label-text">First name</span>
          </label>
          <input type="text" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Last name</span>
          </label>
          <input type="text" class="input input-bordered" />
        </div>
      </div>
    </Fieldset>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Fieldset as Page Heading</h3>
    <Fieldset 
      legend={{ 
        text: "What is your address?", 
        isPageHeading: true 
      }}
    >
      <div class="space-y-4">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Building and street</span>
          </label>
          <input type="text" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Town or city</span>
          </label>
          <input type="text" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Postcode</span>
          </label>
          <input type="text" class="input input-bordered" />
        </div>
      </div>
    </Fieldset>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With HTML Legend</h3>
    <Fieldset 
      legend={{ 
        html: "Which <strong>symptoms</strong> are you experiencing?",
        classes: "text-primary"
      }}
    >
      <div class="space-y-2">
        <label class="cursor-pointer label justify-start gap-2">
          <input type="checkbox" class="checkbox" />
          <span class="label-text">Fever</span>
        </label>
        <label class="cursor-pointer label justify-start gap-2">
          <input type="checkbox" class="checkbox" />
          <span class="label-text">Cough</span>
        </label>
        <label class="cursor-pointer label justify-start gap-2">
          <input type="checkbox" class="checkbox" />
          <span class="label-text">Headache</span>
        </label>
        <label class="cursor-pointer label justify-start gap-2">
          <input type="checkbox" class="checkbox" />
          <span class="label-text">Fatigue</span>
        </label>
      </div>
    </Fieldset>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Described By</h3>
    <Fieldset 
      legend={{ text: "Emergency contact details" }}
      describedBy="emergency-contact-hint"
    >
      <div id="emergency-contact-hint" class="text-sm text-base-content/70 mb-4">
        We'll only contact this person in case of emergency
      </div>
      <div class="space-y-4">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Contact name</span>
          </label>
          <input type="text" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Phone number</span>
          </label>
          <input type="tel" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Relationship to you</span>
          </label>
          <select class="select select-bordered">
            <option>Choose an option</option>
            <option>Partner</option>
            <option>Parent</option>
            <option>Sibling</option>
            <option>Friend</option>
            <option>Other</option>
          </select>
        </div>
      </div>
    </Fieldset>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Nested Components</h3>
    <Fieldset 
      legend={{ text: "Appointment preferences" }}
    >
      <div class="space-y-6">
        <Checkboxes 
          name="appointment-type"
          legend={{
            text: "What type of appointment do you need?",
            classes: "text-base font-medium"
          }}
          items={[
            { value: "routine", text: "Routine check-up" },
            { value: "urgent", text: "Urgent consultation" },
            { value: "follow-up", text: "Follow-up appointment" },
            { value: "specialist", text: "Specialist referral" }
          ]}
        />

        <DateInput 
          legend={{
            text: "When would you prefer your appointment?",
            classes: "text-base font-medium"
          }}
          hintText="For example, 27 3 2024"
        />
      </div>
    </Fieldset>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Medical History Form</h3>
    <Fieldset 
      legend={{ 
        text: "Medical History", 
        isPageHeading: true 
      }}
    >
      <div class="space-y-6">
        <Fieldset 
          legend={{ text: "Current medications" }}
          describedBy="medications-hint"
        >
          <div id="medications-hint" class="text-sm text-base-content/70 mb-4">
            Include prescription drugs, over-the-counter medications, and supplements
          </div>
          <div class="space-y-3">
            <label class="cursor-pointer label justify-start gap-2">
              <input type="radio" name="medications" class="radio" />
              <span class="label-text">I'm not taking any medications</span>
            </label>
            <label class="cursor-pointer label justify-start gap-2">
              <input type="radio" name="medications" class="radio" />
              <span class="label-text">I take medications (please list below)</span>
            </label>
          </div>
          <div class="form-control mt-4">
            <label class="label">
              <span class="label-text">List your medications</span>
            </label>
            <textarea class="textarea textarea-bordered" rows="3" placeholder="Medication name, dosage, frequency..."></textarea>
          </div>
        </Fieldset>

        <Fieldset 
          legend={{ text: "Allergies and adverse reactions" }}
        >
          <div class="space-y-3">
            <label class="cursor-pointer label justify-start gap-2">
              <input type="radio" name="allergies" class="radio" />
              <span class="label-text">No known allergies</span>
            </label>
            <label class="cursor-pointer label justify-start gap-2">
              <input type="radio" name="allergies" class="radio" />
              <span class="label-text">I have allergies (please specify below)</span>
            </label>
          </div>
          <div class="form-control mt-4">
            <label class="label">
              <span class="label-text">Describe your allergies</span>
            </label>
            <textarea class="textarea textarea-bordered" rows="3" placeholder="Allergy triggers and reactions..."></textarea>
          </div>
        </Fieldset>
      </div>
    </Fieldset>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Without Legend</h3>
    <Fieldset>
      <div class="alert alert-info mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>This fieldset has no legend but groups related form controls</span>
      </div>
      <div class="space-y-4">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Additional notes</span>
          </label>
          <textarea class="textarea textarea-bordered" placeholder="Any additional information..."></textarea>
        </div>
        <div class="form-control">
          <label class="cursor-pointer label justify-start gap-2">
            <input type="checkbox" class="checkbox" />
            <span class="label-text">I agree to the terms and conditions</span>
          </label>
        </div>
      </div>
    </Fieldset>
  </section>
</div>
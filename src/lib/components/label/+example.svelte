<script lang="ts">
  import Label from './Label.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Label Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Label</h3>
    <div class="space-y-3">
      <Label text="Name" for="basic-name" />
      <input type="text" id="basic-name" class="input input-bordered" />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Label with HTML Content</h3>
    <div class="space-y-3">
      <Label html="Email <span class='text-error'>*</span>" for="email-required" />
      <input type="email" id="email-required" class="input input-bordered" required />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Page Heading Label</h3>
    <div class="space-y-4">
      <Label 
        text="What is your full name?" 
        for="page-heading-name" 
        isPageHeading={true}
      />
      <input type="text" id="page-heading-name" class="input input-bordered max-w-md" />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Form Examples</h3>
    <div class="space-y-4 max-w-md">
      <div class="form-control">
        <Label text="First name" for="first-name" />
        <input type="text" id="first-name" class="input input-bordered" />
      </div>

      <div class="form-control">
        <Label text="Last name" for="last-name" />
        <input type="text" id="last-name" class="input input-bordered" />
      </div>

      <div class="form-control">
        <Label html="Phone number <span class='text-base-content/60'>(optional)</span>" for="phone" />
        <input type="tel" id="phone" class="input input-bordered" />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Medical Form Labels</h3>
    <div class="space-y-4 max-w-md">
      <div class="form-control">
        <Label text="NHS number" for="nhs-number" />
        <input type="text" id="nhs-number" class="input input-bordered" pattern="[0-9\s]*" />
      </div>

      <div class="form-control">
        <Label text="Date of birth" for="date-birth" />
        <input type="text" id="date-birth" class="input input-bordered" placeholder="DD MM YYYY" />
      </div>

      <div class="form-control">
        <Label html="Current medications <span class='text-sm font-normal'>(include dosage)</span>" for="medications" />
        <textarea id="medications" class="textarea textarea-bordered" rows="3"></textarea>
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Different Input Types</h3>
    <div class="space-y-4 max-w-md">
      <div class="form-control">
        <Label text="Password" for="password" />
        <input type="password" id="password" class="input input-bordered" />
      </div>

      <div class="form-control">
        <Label text="Choose appointment date" for="appointment-date" />
        <input type="date" id="appointment-date" class="input input-bordered" />
      </div>

      <div class="form-control">
        <Label text="Preferred time" for="appointment-time" />
        <input type="time" id="appointment-time" class="input input-bordered" />
      </div>

      <div class="form-control">
        <Label text="Emergency contact number" for="emergency-number" />
        <input type="tel" id="emergency-number" class="input input-bordered" />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Labels for Other Controls</h3>
    <div class="space-y-4 max-w-md">
      <div class="form-control">
        <Label text="Reason for visit" for="visit-reason" />
        <select id="visit-reason" class="select select-bordered">
          <option>Choose an option</option>
          <option>Routine check-up</option>
          <option>Follow-up appointment</option>
          <option>New symptoms</option>
          <option>Prescription renewal</option>
        </select>
      </div>

      <div class="form-control">
        <Label text="Additional notes" for="notes" />
        <textarea id="notes" class="textarea textarea-bordered" rows="3" placeholder="Any additional information..."></textarea>
      </div>

      <div class="form-control">
        <Label text="Preferred contact method" for="contact-method" />
        <div id="contact-method" class="space-y-2 mt-2">
          <label class="cursor-pointer label justify-start gap-2">
            <input type="radio" name="contact" class="radio" value="phone" />
            <span class="label-text">Phone</span>
          </label>
          <label class="cursor-pointer label justify-start gap-2">
            <input type="radio" name="contact" class="radio" value="email" />
            <span class="label-text">Email</span>
          </label>
          <label class="cursor-pointer label justify-start gap-2">
            <input type="radio" name="contact" class="radio" value="text" />
            <span class="label-text">Text message</span>
          </label>
        </div>
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Required Field Indicators</h3>
    <div class="space-y-4 max-w-md">
      <div class="form-control">
        <Label html="Full name <span class='text-error'>*</span>" for="required-name" />
        <input type="text" id="required-name" class="input input-bordered" required />
      </div>

      <div class="form-control">
        <Label for="required-email">
          Email address
          <span class="text-error ml-1" aria-label="required">*</span>
        </Label>
        <input type="email" id="required-email" class="input input-bordered" required />
      </div>

      <div class="form-control">
        <Label text="Address (optional)" for="address" classes="text-base-content/70" />
        <input type="text" id="address" class="input input-bordered" />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Custom Styling</h3>
    <div class="space-y-4 max-w-md">
      <div class="form-control">
        <Label text="Important field" for="important" classes="text-warning font-bold" />
        <input type="text" id="important" class="input input-bordered input-warning" />
      </div>

      <div class="form-control">
        <Label text="Success field" for="success" classes="text-success" />
        <input type="text" id="success" class="input input-bordered input-success" value="Completed" readonly />
      </div>

      <div class="form-control">
        <Label text="Large label" for="large" classes="text-lg font-semibold" />
        <input type="text" id="large" class="input input-bordered input-lg" />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Complex Form Example</h3>
    <div class="max-w-lg">
      <fieldset class="border border-base-300 rounded-lg p-4">
        <legend class="text-lg font-semibold px-2">Patient Information</legend>
        
        <div class="space-y-4 mt-4">
          <div class="grid gap-4 md:grid-cols-2">
            <div class="form-control">
              <Label text="Title" for="title" />
              <select id="title" class="select select-bordered">
                <option>Mr</option>
                <option>Mrs</option>
                <option>Ms</option>
                <option>Dr</option>
                <option>Prof</option>
              </select>
            </div>
            
            <div class="form-control">
              <Label html="Gender <span class='text-error'>*</span>" for="gender" />
              <select id="gender" class="select select-bordered" required>
                <option value="">Choose...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>
          </div>

          <div class="form-control">
            <Label html="Preferred name <span class='text-sm font-normal'>(how you'd like to be addressed)</span>" for="preferred-name" />
            <input type="text" id="preferred-name" class="input input-bordered" />
          </div>

          <div class="form-control">
            <Label text="Postcode" for="postcode" />
            <div class="flex gap-2">
              <input type="text" id="postcode" class="input input-bordered flex-1" />
              <button type="button" class="btn btn-outline">Find Address</button>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Using Snippet Children</h3>
    <div class="space-y-4 max-w-md">
      <div class="form-control">
        <Label for="complex-label">
          <span class="flex items-center gap-2">
            <span>Priority level</span>
            <div class="badge badge-primary badge-xs">new</div>
          </span>
        </Label>
        <select id="complex-label" class="select select-bordered">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Urgent</option>
        </select>
      </div>

      <div class="form-control">
        <Label for="help-label">
          <div class="flex items-center justify-between">
            <span>Account number</span>
            <button type="button" class="btn btn-ghost btn-xs" aria-label="Help">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </Label>
        <input type="text" id="help-label" class="input input-bordered" />
      </div>
    </div>
  </section>
</div>
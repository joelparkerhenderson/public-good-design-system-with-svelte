<script lang="ts">
  import ErrorMessage from './ErrorMessage.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Error Message Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Error Message</h3>
    <div class="space-y-2">
      <ErrorMessage text="Enter your full name" />
      <ErrorMessage text="Select a date in the future" />
      <ErrorMessage text="Enter a valid email address" />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With HTML Content</h3>
    <div class="space-y-2">
      <ErrorMessage html="Enter your <strong>full name</strong> as it appears on your ID" />
      <ErrorMessage html="Your password must be at least <em>8 characters</em> long" />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Custom Hidden Text</h3>
    <div class="space-y-2">
      <ErrorMessage 
        text="This field is required" 
        visuallyHiddenText="Validation error"
      />
      <ErrorMessage 
        text="Format should be DD/MM/YYYY" 
        visuallyHiddenText="Date format error"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Form Field Examples</h3>
    <div class="space-y-4">
      <!-- Name field with error -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Full name</span>
        </label>
        <input type="text" class="input input-bordered input-error" />
        <ErrorMessage 
          id="name-error"
          text="Enter your full name"
        />
      </div>

      <!-- Email field with error -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email address</span>
        </label>
        <input type="email" class="input input-bordered input-error" value="invalid-email" />
        <ErrorMessage 
          id="email-error"
          text="Enter a valid email address, like name@example.com"
        />
      </div>

      <!-- Date field with error -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Date of birth</span>
        </label>
        <input type="text" class="input input-bordered input-error" />
        <ErrorMessage 
          id="dob-error"
          html="Enter a valid date, for example <strong>27 3 1985</strong>"
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Different Error Types</h3>
    <div class="space-y-3">
      <div class="p-3 bg-base-200 rounded">
        <p class="text-sm mb-2"><strong>Required field error:</strong></p>
        <ErrorMessage text="This field is required" />
      </div>

      <div class="p-3 bg-base-200 rounded">
        <p class="text-sm mb-2"><strong>Format validation error:</strong></p>
        <ErrorMessage text="Enter a valid phone number, like 07700 900 123" />
      </div>

      <div class="p-3 bg-base-200 rounded">
        <p class="text-sm mb-2"><strong>Range validation error:</strong></p>
        <ErrorMessage text="Enter a number between 1 and 100" />
      </div>

      <div class="p-3 bg-base-200 rounded">
        <p class="text-sm mb-2"><strong>Custom business rule error:</strong></p>
        <ErrorMessage html="You cannot book an appointment more than <strong>6 months</strong> in advance" />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Without Hidden Text</h3>
    <ErrorMessage 
      text="Custom error message without screen reader prefix"
      visuallyHiddenText=""
    />
  </section>
</div>
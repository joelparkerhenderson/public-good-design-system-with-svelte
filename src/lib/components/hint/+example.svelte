<script lang="ts">
  import Hint from './Hint.svelte';
  import ErrorMessage from '../error-message/ErrorMessage.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Hint Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Hint</h3>
    <div class="space-y-4">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Full name</span>
        </label>
        <Hint text="Enter your name as it appears on your passport or driving licence" />
        <input type="text" class="input input-bordered" />
      </div>

      <div class="form-control">
        <label class="label">
          <span class="label-text">Email address</span>
        </label>
        <Hint text="We'll use this to send you appointment confirmations" />
        <input type="email" class="input input-bordered" />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With HTML Content</h3>
    <div class="space-y-4">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <Hint html="Your password must be at least <strong>8 characters</strong> and include a mix of letters and numbers" />
        <input type="password" class="input input-bordered" />
      </div>

      <div class="form-control">
        <label class="label">
          <span class="label-text">Phone number</span>
        </label>
        <Hint html="For example <strong>07700 900 123</strong> or <strong>+44 7700 900 123</strong>" />
        <input type="tel" class="input input-bordered" />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Form Field Examples</h3>
    <div class="space-y-4">
      <!-- Date of birth field -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Date of birth</span>
        </label>
        <Hint 
          id="dob-hint"
          text="For example, 27 3 1985"
        />
        <input type="text" class="input input-bordered" aria-describedby="dob-hint" />
      </div>

      <!-- Address field -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Address</span>
        </label>
        <Hint 
          id="address-hint"
          text="Include your house number and street name"
        />
        <input type="text" class="input input-bordered" aria-describedby="address-hint" />
      </div>

      <!-- NHS number field -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">NHS number</span>
        </label>
        <Hint 
          id="nhs-number-hint"
          html="This is a 10 digit number, like <strong>485 777 3456</strong>. You can find it on any letter from the NHS or your NHS card."
        />
        <input type="text" class="input input-bordered" aria-describedby="nhs-number-hint" />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Error Messages</h3>
    <div class="space-y-4">
      <!-- Field with hint and error -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">National Insurance number</span>
        </label>
        <Hint 
          id="ni-hint"
          text="It's on your National Insurance card, benefit letter, payslip or P60. For example, 'QQ 12 34 56 C'."
        />
        <input type="text" class="input input-bordered input-error" value="invalid" aria-describedby="ni-hint ni-error" />
        <ErrorMessage 
          id="ni-error"
          text="Enter a National Insurance number in the correct format"
        />
      </div>

      <!-- Another field with hint and error -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Postcode</span>
        </label>
        <Hint 
          id="postcode-hint"
          text="For example, SW1A 1AA"
        />
        <input type="text" class="input input-bordered input-error" aria-describedby="postcode-hint postcode-error" />
        <ErrorMessage 
          id="postcode-error"
          text="Enter a real postcode"
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Different Contexts</h3>
    <div class="space-y-4">
      <div class="p-4 bg-base-200 rounded">
        <h4 class="font-medium mb-2">Personal Information</h4>
        <Hint text="We collect this information to verify your identity and provide you with the best care." />
      </div>

      <div class="p-4 bg-base-200 rounded">
        <h4 class="font-medium mb-2">Appointment Booking</h4>
        <Hint html="Choose a time that works for you. You can <strong>reschedule</strong> or <strong>cancel</strong> up to 24 hours before your appointment." />
      </div>

      <div class="p-4 bg-base-200 rounded">
        <h4 class="font-medium mb-2">Medical History</h4>
        <Hint text="Include any ongoing conditions, recent treatments, or medications. This helps us provide you with safe and appropriate care." />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Multi-part Forms</h3>
    <div class="space-y-6">
      <!-- Contact details -->
      <fieldset class="public-good-fieldset">
        <legend class="text-lg font-semibold mb-4">Contact details</legend>
        <Hint text="We'll use these details to contact you about your appointment." />
        
        <div class="mt-4 space-y-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Mobile phone number</span>
            </label>
            <Hint text="We'll send appointment reminders to this number" />
            <input type="tel" class="input input-bordered" />
          </div>
          
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email address (optional)</span>
            </label>
            <Hint text="We'll also email you appointment confirmations if you provide an email" />
            <input type="email" class="input input-bordered" />
          </div>
        </div>
      </fieldset>

      <!-- Emergency contact -->
      <fieldset class="public-good-fieldset">
        <legend class="text-lg font-semibold mb-4">Emergency contact</legend>
        <Hint html="Provide details of someone we can contact in case of emergency. This could be a <strong>family member</strong>, <strong>friend</strong>, or <strong>carer</strong>." />
        
        <div class="mt-4 space-y-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Contact name</span>
            </label>
            <input type="text" class="input input-bordered" />
          </div>
          
          <div class="form-control">
            <label class="label">
              <span class="label-text">Relationship to you</span>
            </label>
            <Hint text="For example, partner, parent, friend" />
            <input type="text" class="input input-bordered" />
          </div>
        </div>
      </fieldset>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Using Snippet Children</h3>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Special requirements</span>
      </label>
      <Hint>
        Tell us about any special requirements you have, such as:
        <ul class="list-disc list-inside mt-2 ml-4">
          <li>Mobility aids or wheelchair access</li>
          <li>Interpreter or translation services</li>
          <li>Large print or audio formats</li>
          <li>Any other support you need</li>
        </ul>
      </Hint>
      <textarea class="textarea textarea-bordered mt-2" rows="4"></textarea>
    </div>
  </section>
</div>
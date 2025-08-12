<script lang="ts">
  import Textarea from './Textarea.svelte';

  // Reactive variables for examples
  let symptoms = '';
  let medicalHistory = '';
  let appointmentReason = '';
  let feedback = '';
  let explanation = '';
  let additionalInfo = '';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Textarea Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Patient Symptom Description</h3>
    <div class="max-w-2xl">
      <Textarea
        name="symptoms"
        bind:value={symptoms}
        label={{
          text: "Can you provide more detail about your symptoms?"
        }}
        hint={{
          text: "Describe when the symptoms started, how they affect you, and any treatments you've tried. Do not include personal information like your name or NHS number."
        }}
        rows={6}
        placeholder="For example: I've had a persistent cough for 2 weeks that gets worse at night..."
      />
      
      {#if symptoms}
        <div class="mt-3 p-3 bg-base-100 rounded border">
          <h4 class="font-semibold text-sm mb-2">Your Input:</h4>
          <p class="text-sm">{symptoms}</p>
        </div>
      {/if}
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Medical History</h3>
    <div class="max-w-2xl">
      <Textarea
        name="medical-history"
        bind:value={medicalHistory}
        label={{
          text: "Describe your current medications and any health conditions",
          isPageHeading: false
        }}
        hint={{
          text: "Include prescription medications, over-the-counter drugs, and any ongoing health conditions. Please include dosages if known."
        }}
        rows={8}
        required={true}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Appointment Request</h3>
    <div class="max-w-2xl">
      <Textarea
        name="appointment-reason"
        bind:value={appointmentReason}
        label={{
          text: "Please explain why you need this appointment"
        }}
        hint={{
          text: "Help us understand the urgency and type of care you need. This helps us book you with the right healthcare professional."
        }}
        rows={5}
        maxlength={500}
      />
      
      {#if appointmentReason}
        <div class="text-xs text-base-content/50 mt-1">
          {appointmentReason.length} / 500 characters
        </div>
      {/if}
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Service Feedback</h3>
    <div class="max-w-2xl">
      <Textarea
        name="feedback"
        bind:value={feedback}
        label={{
          text: "Tell us about your experience with our service"
        }}
        hint={{
          text: "Your feedback helps us improve our services. Please be specific about what went well or what could be better."
        }}
        rows={6}
        placeholder="What did we do well? What could we improve?"
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Error State Example</h3>
    <div class="max-w-2xl">
      <Textarea
        name="explanation-error"
        bind:value={explanation}
        label={{
          text: "Why can't you provide a National Insurance number?"
        }}
        hint={{
          text: "We need to understand your circumstances to help you access services."
        }}
        errorMessage={{
          text: "You must provide an explanation"
        }}
        rows={5}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Benefit Application</h3>
    <div class="max-w-2xl">
      <Textarea
        name="additional-info"
        bind:value={additionalInfo}
        label={{
          text: "Is there anything else you'd like to tell us about your application?"
        }}
        hint={{
          text: "Include any additional information that might help us process your application. This field is optional."
        }}
        rows={4}
        placeholder="Optional additional information..."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Different Sizes</h3>
    <div class="grid gap-4 md:grid-cols-2">
      <div>
        <h4 class="font-medium mb-2">Compact (3 rows)</h4>
        <Textarea
          name="compact"
          label={{
            text: "Brief description"
          }}
          hint={{
            text: "Keep your response short and focused"
          }}
          rows={3}
        />
      </div>
      
      <div>
        <h4 class="font-medium mb-2">Extended (10 rows)</h4>
        <Textarea
          name="extended"
          label={{
            text: "Detailed explanation"
          }}
          hint={{
            text: "Provide as much detail as necessary"
          }}
          rows={10}
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Disabled and Readonly States</h3>
    <div class="grid gap-4 md:grid-cols-2">
      <div>
        <h4 class="font-medium mb-2">Disabled</h4>
        <Textarea
          name="disabled"
          label={{
            text: "Disabled textarea"
          }}
          hint={{
            text: "This field is not available for editing"
          }}
          value="This content cannot be edited"
          disabled={true}
          rows={3}
        />
      </div>
      
      <div>
        <h4 class="font-medium mb-2">Read-only</h4>
        <Textarea
          name="readonly"
          label={{
            text: "Read-only textarea"
          }}
          hint={{
            text: "This shows existing information that cannot be changed"
          }}
          value="This information is read-only and cannot be modified by the user."
          readonly={true}
          rows={3}
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Healthcare Form Examples</h3>
    
    <div class="space-y-6">
      <div class="max-w-2xl">
        <h4 class="font-medium mb-3">Pre-Surgery Questionnaire</h4>
        <Textarea
          name="allergies"
          label={{
            text: "Do you have any allergies or adverse reactions to medications?"
          }}
          hint={{
            text: "Include any known allergies to medications, latex, or other medical materials. If none, please write 'None known'."
          }}
          rows={4}
          required={true}
        />
      </div>
      
      <div class="max-w-2xl">
        <h4 class="font-medium mb-3">Mental Health Assessment</h4>
        <Textarea
          name="mental-health"
          label={{
            text: "How are you feeling today and this week?"
          }}
          hint={{
            text: "Please describe your mood, energy levels, sleep patterns, and any concerns. This information helps us provide better care."
          }}
          rows={6}
          placeholder="For example: I've been feeling anxious lately and having trouble sleeping..."
        />
      </div>
      
      <div class="max-w-2xl">
        <h4 class="font-medium mb-3">Discharge Planning</h4>
        <Textarea
          name="home-support"
          label={{
            text: "What support do you have available at home?"
          }}
          hint={{
            text: "Tell us about family members, carers, or services that can help you when you leave hospital."
          }}
          rows={5}
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Accessibility Features</h3>
    <div class="alert alert-info">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <div>
        <h4 class="font-bold">Textarea Accessibility</h4>
        <div class="text-sm mt-2">
          <ul class="list-disc list-inside space-y-1">
            <li><strong>Semantic HTML:</strong> Uses proper textarea elements with labels</li>
            <li><strong>Screen Reader Support:</strong> aria-describedby links to hints and errors</li>
            <li><strong>Keyboard Navigation:</strong> Standard textarea keyboard behavior</li>
            <li><strong>Focus Management:</strong> Clear focus indicators with proper contrast</li>
            <li><strong>Error Handling:</strong> Clear error messages with "Error:" prefix for screen readers</li>
            <li><strong>Required Fields:</strong> Proper required attribute and validation</li>
            <li><strong>Character Counting:</strong> Optional character count for length limits</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>
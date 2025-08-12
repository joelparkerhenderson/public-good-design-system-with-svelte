<script lang="ts">
  import Details from './Details.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Details (Collapsible) Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Details</h3>
    <Details 
      summaryText="How to register with a GP practice"
      text="You can register with a GP practice by visiting their website, calling them, or visiting in person. You'll need to provide proof of identity and address."
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With HTML Content</h3>
    <Details 
      summaryText="What to expect at your appointment"
      html="<p>Your appointment will typically include:</p><ul class='list-disc list-inside mt-2 space-y-1'><li>A review of your symptoms</li><li>Physical examination if needed</li><li>Discussion of treatment options</li><li>Follow-up arrangements</li></ul>"
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Open by Default</h3>
    <Details 
      summaryText="Important information about your medication"
      text="Take this medication with food to reduce stomach irritation. Do not exceed the recommended dose. Contact your doctor if you experience any unusual side effects."
      open={true}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">HTML Summary Text</h3>
    <Details 
      summaryHtml="<strong>Emergency</strong> contact information"
      text="In a medical emergency, call 999. For urgent but non-emergency situations, call NHS 111. Your local GP practice emergency number is displayed on their website."
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Help and Support</h3>
    <div class="space-y-3">
      <Details 
        summaryText="How do I book an appointment online?"
        text="Log into your GP practice's patient portal or app. Navigate to 'Book Appointment', choose your preferred date and time from available slots, and confirm your booking."
      />
      
      <Details 
        summaryText="Can I cancel my appointment?"
        text="Yes, you can cancel your appointment up to 24 hours in advance. Call your GP practice directly or use their online booking system to cancel."
      />
      
      <Details 
        summaryText="What should I bring to my appointment?"
        text="Bring a list of your current medications, any relevant test results, and photo ID. If it's your first visit, bring proof of address as well."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Medication Information</h3>
    <div class="space-y-3">
      <Details 
        summaryText="Side effects and what to do"
        html="<p class='mb-3'><strong>Common side effects include:</strong></p><ul class='list-disc list-inside space-y-1'><li>Headache</li><li>Nausea</li><li>Dizziness</li></ul><p class='mt-3'><strong>Contact your doctor if you experience:</strong></p><ul class='list-disc list-inside space-y-1'><li>Severe allergic reactions</li><li>Chest pain</li><li>Difficulty breathing</li></ul>"
      />
      
      <Details 
        summaryText="How and when to take your medication"
        text="Take one tablet twice daily with meals. Try to take it at the same times each day. If you miss a dose, take it as soon as you remember, unless it's almost time for your next dose."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Condition-Specific Information</h3>
    <div class="space-y-3">
      <Details 
        summaryText="Living with diabetes: daily management tips"
        html="<div class='space-y-3'><p><strong>Blood sugar monitoring:</strong></p><ul class='list-disc list-inside ml-4 space-y-1'><li>Check levels as recommended by your healthcare team</li><li>Keep a record of your readings</li><li>Know your target ranges</li></ul><p><strong>Diet and exercise:</strong></p><ul class='list-disc list-inside ml-4 space-y-1'><li>Follow a balanced diet</li><li>Stay physically active</li><li>Monitor carbohydrate intake</li></ul></div>"
      />
      
      <Details 
        summaryText="When to seek immediate medical help"
        text="Call 999 immediately if you experience severe chest pain, difficulty breathing, loss of consciousness, or signs of severe allergic reaction such as swelling of the face, lips, or throat."
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Custom Styled</h3>
    <Details 
      summaryText="Important safety information"
      text="This information is crucial for your safety and wellbeing. Please read carefully and contact your healthcare provider if you have any questions."
      classes="border-l-4 border-warning"
    />
  </section>
</div>
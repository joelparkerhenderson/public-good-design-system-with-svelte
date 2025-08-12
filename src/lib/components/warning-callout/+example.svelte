<script lang="ts">
  import WarningCallout from './WarningCallout.svelte';
</script>

<div class="space-y-8">
  <section>
    <h3 class="text-lg font-semibold mb-4">Default Warning Callout</h3>
    <WarningCallout text="This is important information that users need to be aware of for their health and safety." />
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Custom Heading</h3>
    <WarningCallout 
      heading="Medication Alert" 
      text="Always check with your healthcare provider before stopping any medication, even if you feel better."
    />
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">With HTML Content</h3>
    <WarningCallout 
      heading="COVID-19 Vaccination"
      html="<p>If you have had COVID-19, you should still get vaccinated. <strong>People who have had COVID-19 can get it again</strong>.</p><p>The vaccine will help protect you from getting COVID-19 again.</p>"
    />
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Different Heading Level</h3>
    <WarningCallout 
      headingLevel={2}
      heading="Emergency Contact"
      text="If this is a medical emergency, call 999 immediately. Do not wait to seek emergency care."
    />
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Using Children Snippet</h3>
    <WarningCallout heading="Mental Health Support">
      <p>If you're feeling overwhelmed or having thoughts of self-harm:</p>
      <ul class="list-disc pl-6 mt-2">
        <li>Call the Samaritans free on 116 123 (24/7)</li>
        <li>Visit your local emergency department</li>
        <li>Call 999 if you're in immediate danger</li>
      </ul>
      <p class="mt-3">Remember: <strong>You are not alone</strong>, and help is available.</p>
    </WarningCallout>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Healthcare Misconception</h3>
    <WarningCallout 
      heading="Antibiotic Use"
      text="Antibiotics do not work against viruses like colds and flu. Taking antibiotics when you don't need them can make them less effective when you do need them."
    />
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Prescription Information</h3>
    <WarningCallout heading="Prescription Changes">
      <p>Never share your prescription medications with others, even if they have similar symptoms.</p>
      <p class="mt-2">Each prescription is specifically tailored to your:</p>
      <ul class="list-disc pl-6 mt-1">
        <li>Medical history</li>
        <li>Current medications</li>
        <li>Individual health needs</li>
      </ul>
    </WarningCallout>
  </section>

  <section>
    <h3 class="text-lg font-semibold mb-4">Time-Sensitive Health Information</h3>
    <WarningCallout 
      heading="Stroke Symptoms - Act F.A.S.T"
      html="<p>If you notice any of these signs, call 999 immediately:</p>
      <ul class='list-none mt-2 space-y-1'>
        <li><strong>F</strong>ace - Has their face dropped on one side?</li>
        <li><strong>A</strong>rms - Can they raise both arms above their head?</li>
        <li><strong>S</strong>peech - Is their speech slurred?</li>
        <li><strong>T</strong>ime - Time to call 999 if you see any of these signs</li>
      </ul>"
    />
  </section>
</div>
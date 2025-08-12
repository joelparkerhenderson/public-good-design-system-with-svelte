<script lang="ts">
  import CharacterCount from './CharacterCount.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Character Count Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Character Count (200 limit)</h3>
    <CharacterCount 
      name="feedback"
      label={{ text: "Can you provide more detail?" }}
      hint={{ text: "Don't include personal or financial information, eg your National Insurance number or credit card details." }}
      maxlength={200}
      rows={5}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Word Count (150 words)</h3>
    <CharacterCount 
      name="description"
      label={{ text: "Describe your symptoms" }}
      hint={{ text: "Include when symptoms started and how they affect you." }}
      maxwords={150}
      rows={6}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Error Message</h3>
    <CharacterCount 
      name="comments"
      label={{ text: "Additional comments" }}
      maxlength={100}
      errorMessage={{ text: "Enter additional comments" }}
      rows={4}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Custom Threshold (50%)</h3>
    <CharacterCount 
      name="short-answer"
      label={{ text: "Short answer (50 characters)" }}
      hint={{ text: "Warning will show when you reach 50% of the limit (25 characters)." }}
      maxlength={50}
      threshold={50}
      rows={3}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With HTML Label</h3>
    <CharacterCount 
      name="medical-history"
      label={{ html: "Tell us about your <strong>medical history</strong>" }}
      hint={{ text: "Include any conditions, medications, or allergies." }}
      maxlength={300}
      rows={6}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Page Heading Style</h3>
    <CharacterCount 
      name="main-concern"
      label={{ 
        text: "What is your main health concern?", 
        isPageHeading: true 
      }}
      hint={{ text: "Describe your primary reason for this appointment." }}
      maxwords={100}
      rows={5}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Pre-filled Value</h3>
    <CharacterCount 
      name="prefilled"
      label={{ text: "Edit this text" }}
      value="This textarea already has some content that you can edit."
      maxlength={150}
      rows={4}
    />
  </section>
</div>
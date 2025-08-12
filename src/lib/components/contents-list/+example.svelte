<script lang="ts">
  import ContentsList from './ContentsList.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Contents List Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Contents List</h3>
    <div class="max-w-md">
      <ContentsList 
        items={[
          { text: "What is diabetes?", href: "#what-is-diabetes" },
          { text: "Symptoms", href: "#symptoms" },
          { text: "Causes", href: "#causes" },
          { text: "Treatment", href: "#treatment" },
          { text: "Prevention", href: "#prevention" }
        ]}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Current Page</h3>
    <div class="max-w-md">
      <ContentsList 
        items={[
          { text: "Overview", href: "#overview" },
          { text: "Symptoms", href: "#symptoms", current: true },
          { text: "Causes", href: "#causes" },
          { text: "Diagnosis", href: "#diagnosis" },
          { text: "Treatment", href: "#treatment" },
          { text: "Living with the condition", href: "#living-with" }
        ]}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Guide Navigation</h3>
    <div class="max-w-md">
      <ContentsList 
        items={[
          { text: "Before your appointment", href: "/guide/before-appointment" },
          { text: "What to expect", href: "/guide/what-to-expect" },
          { text: "During the procedure", href: "/guide/during-procedure", current: true },
          { text: "After your procedure", href: "/guide/after-procedure" },
          { text: "Recovery and follow-up", href: "/guide/recovery" }
        ]}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Health Condition Guide</h3>
    <div class="max-w-md">
      <ContentsList 
        items={[
          { text: "What is high blood pressure?", href: "#what-is" },
          { text: "Check your blood pressure", href: "#check" },
          { text: "Causes of high blood pressure", href: "#causes" },
          { text: "Treatment", href: "#treatment" },
          { text: "Prevention", href: "#prevention" },
          { text: "Living with high blood pressure", href: "#living-with" }
        ]}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Service Information</h3>
    <div class="max-w-md">
      <ContentsList 
        items={[
          { text: "How to register with a GP", href: "/services/register-gp" },
          { text: "Book an appointment", href: "/services/book-appointment" },
          { text: "Online services", href: "/services/online", current: true },
          { text: "Repeat prescriptions", href: "/services/prescriptions" },
          { text: "Patient rights", href: "/services/patient-rights" }
        ]}
      />
    </div>
  </section>
</div>
<script lang="ts">
  import DateInput from './DateInput.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Date Input Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Date Input</h3>
    <DateInput 
      id="basic-date"
      fieldset={{
        legend: {
          text: "What is your date of birth?"
        }
      }}
      hint={{
        text: "For example, 27 3 1985"
      }}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Pre-filled Values</h3>
    <DateInput 
      id="prefilled-date"
      fieldset={{
        legend: {
          text: "When did your symptoms start?"
        }
      }}
      hint={{
        text: "For example, 15 6 2023"
      }}
      values={{
        day: "15",
        month: "6", 
        year: "2023"
      }}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">With Error Message</h3>
    <DateInput 
      id="error-date"
      fieldset={{
        legend: {
          text: "When do you want your appointment?"
        }
      }}
      hint={{
        text: "This must be in the future"
      }}
      errorMessage={{
        text: "Enter a valid date that is in the future"
      }}
      values={{
        day: "32",
        month: "13",
        year: "2022"
      }}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Page Heading Style</h3>
    <DateInput 
      id="page-heading-date"
      fieldset={{
        legend: {
          text: "What is your date of birth?",
          isPageHeading: true,
          classes: "text-primary"
        }
      }}
      hint={{
        text: "We use this to check your identity and find your records"
      }}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Custom Name Prefix</h3>
    <DateInput 
      id="custom-prefix-date"
      namePrefix="appointment"
      fieldset={{
        legend: {
          text: "Preferred appointment date"
        }
      }}
      hint={{
        text: "Choose your preferred date for the appointment"
      }}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Custom Items with Autocomplete</h3>
    <DateInput 
      id="custom-items-date"
      fieldset={{
        legend: {
          text: "Date of hospital admission"
        }
      }}
      items={[
        {
          name: "day",
          classes: "w-16",
          inputmode: "numeric",
          autocomplete: "bday-day"
        },
        {
          name: "month", 
          classes: "w-16",
          inputmode: "numeric",
          autocomplete: "bday-month"
        },
        {
          name: "year",
          classes: "w-20",
          inputmode: "numeric",
          autocomplete: "bday-year"
        }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Without Fieldset</h3>
    <div class="space-y-2">
      <label class="label">
        <span class="label-text font-medium">Event date</span>
      </label>
      <DateInput 
        id="no-fieldset-date"
        hint={{
          text: "Enter the date when the event occurred"
        }}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Memorial or Historical Date</h3>
    <DateInput 
      id="historical-date"
      fieldset={{
        legend: {
          text: "When did this health condition start?"
        }
      }}
      hint={{
        text: "If you're not sure, give an approximate date"
      }}
      values={{
        month: "3",
        year: "2020"
      }}
    />
  </section>
</div>
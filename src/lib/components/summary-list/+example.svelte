<script lang="ts">
  import SummaryList from './SummaryList.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Summary List Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Patient Information</h3>
    <div class="card bg-base-100 shadow-sm border">
      <div class="card-body">
        <SummaryList 
          rows={[
            {
              key: { text: "Full name" },
              value: { text: "Sarah Elizabeth Johnson" }
            },
            {
              key: { text: "Date of birth" },
              value: { text: "15 March 1985" }
            },
            {
              key: { text: "NHS number" },
              value: { text: "123 456 7890" }
            },
            {
              key: { text: "Address" },
              value: { html: "123 Main Street<br>London<br>SW1A 1AA" }
            },
            {
              key: { text: "Phone number" },
              value: { text: "07700 900 123" }
            },
            {
              key: { text: "Email address" },
              value: { text: "sarah.johnson@email.com" }
            }
          ]}
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Patient Information with Actions</h3>
    <div class="card bg-base-100 shadow-sm border">
      <div class="card-body">
        <SummaryList 
          rows={[
            {
              key: { text: "Full name" },
              value: { text: "Sarah Elizabeth Johnson" },
              actions: {
                items: [
                  { 
                    href: "#change-name", 
                    text: "Change",
                    visuallyHiddenText: "full name"
                  }
                ]
              }
            },
            {
              key: { text: "Date of birth" },
              value: { text: "15 March 1985" },
              actions: {
                items: [
                  { 
                    href: "#change-dob", 
                    text: "Change",
                    visuallyHiddenText: "date of birth"
                  }
                ]
              }
            },
            {
              key: { text: "Contact details" },
              value: { html: "07700 900 123<br>sarah.johnson@email.com" },
              actions: {
                items: [
                  { 
                    href: "#change-phone", 
                    text: "Change phone",
                    visuallyHiddenText: "phone number"
                  },
                  { 
                    href: "#change-email", 
                    text: "Change email",
                    visuallyHiddenText: "email address"
                  }
                ]
              }
            },
            {
              key: { text: "Address" },
              value: { html: "123 Main Street<br>London<br>SW1A 1AA" },
              actions: {
                items: [
                  { 
                    href: "#change-address", 
                    text: "Change",
                    visuallyHiddenText: "address"
                  }
                ]
              }
            }
          ]}
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Appointment Summary</h3>
    <div class="card bg-base-100 shadow-sm border">
      <div class="card-body">
        <h4 class="font-semibold mb-3">Upcoming GP Appointment</h4>
        <SummaryList 
          rows={[
            {
              key: { text: "Appointment type" },
              value: { text: "GP consultation" }
            },
            {
              key: { text: "Date and time" },
              value: { text: "Monday, 25 March 2024 at 2:30 PM" },
              actions: {
                items: [
                  { 
                    href: "#reschedule", 
                    text: "Reschedule",
                    visuallyHiddenText: "appointment"
                  }
                ]
              }
            },
            {
              key: { text: "Doctor" },
              value: { text: "Dr. Michael Brown" }
            },
            {
              key: { text: "Location" },
              value: { html: "Main Practice<br>456 High Street<br>London, SW2 1BB" }
            },
            {
              key: { text: "Duration" },
              value: { text: "15 minutes" }
            },
            {
              key: { text: "Reason for visit" },
              value: { text: "Annual health check" },
              actions: {
                items: [
                  { 
                    href: "#edit-reason", 
                    text: "Edit",
                    visuallyHiddenText: "reason for visit"
                  }
                ]
              }
            }
          ]}
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Prescription Summary</h3>
    <div class="card bg-base-100 shadow-sm border">
      <div class="card-body">
        <h4 class="font-semibold mb-3">Current Prescriptions</h4>
        <SummaryList 
          rows={[
            {
              key: { text: "Medication 1" },
              value: { html: "<strong>Amlodipine 5mg</strong><br>Once daily with food<br>28 tablets" },
              actions: {
                items: [
                  { 
                    href: "#reorder-amlodipine", 
                    text: "Reorder",
                    visuallyHiddenText: "Amlodipine"
                  },
                  { 
                    href: "#view-amlodipine", 
                    text: "View details",
                    visuallyHiddenText: "for Amlodipine"
                  }
                ]
              }
            },
            {
              key: { text: "Medication 2" },
              value: { html: "<strong>Simvastatin 20mg</strong><br>Once daily in the evening<br>28 tablets" },
              actions: {
                items: [
                  { 
                    href: "#reorder-simvastatin", 
                    text: "Reorder",
                    visuallyHiddenText: "Simvastatin"
                  },
                  { 
                    href: "#view-simvastatin", 
                    text: "View details",
                    visuallyHiddenText: "for Simvastatin"
                  }
                ]
              }
            },
            {
              key: { text: "Pharmacy" },
              value: { text: "Boots Pharmacy, High Street" },
              actions: {
                items: [
                  { 
                    href: "#change-pharmacy", 
                    text: "Change",
                    visuallyHiddenText: "pharmacy"
                  }
                ]
              }
            },
            {
              key: { text: "Delivery method" },
              value: { text: "Collect in store" },
              actions: {
                items: [
                  { 
                    href: "#change-delivery", 
                    text: "Change",
                    visuallyHiddenText: "delivery method"
                  }
                ]
              }
            }
          ]}
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Test Results Summary</h3>
    <div class="card bg-base-100 shadow-sm border">
      <div class="card-body">
        <h4 class="font-semibold mb-3">Blood Test Results - 20 March 2024</h4>
        <SummaryList 
          rows={[
            {
              key: { text: "Cholesterol" },
              value: { html: "<span class='text-success font-semibold'>4.2 mmol/L</span><br>Normal range" }
            },
            {
              key: { text: "Blood pressure" },
              value: { html: "<span class='text-warning font-semibold'>145/90 mmHg</span><br>Slightly elevated" }
            },
            {
              key: { text: "Blood sugar (HbA1c)" },
              value: { html: "<span class='text-success font-semibold'>38 mmol/mol</span><br>Normal range" }
            },
            {
              key: { text: "Weight" },
              value: { text: "72 kg" }
            },
            {
              key: { text: "BMI" },
              value: { html: "<span class='text-success font-semibold'>23.5</span><br>Normal weight" }
            },
            {
              key: { text: "Next review" },
              value: { text: "6 months" },
              actions: {
                items: [
                  { 
                    href: "#book-followup", 
                    text: "Book appointment",
                    visuallyHiddenText: "for follow-up review"
                  }
                ]
              }
            }
          ]}
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Emergency Contact Information</h3>
    <div class="card bg-base-100 shadow-sm border">
      <div class="card-body">
        <SummaryList 
          rows={[
            {
              key: { text: "Primary contact" },
              value: { html: "<strong>John Johnson</strong><br>Spouse<br>07800 123 456" },
              actions: {
                items: [
                  { 
                    href: "#edit-primary-contact", 
                    text: "Edit",
                    visuallyHiddenText: "primary emergency contact"
                  }
                ]
              }
            },
            {
              key: { text: "Secondary contact" },
              value: { html: "<strong>Dr. Lisa Wilson</strong><br>Family friend<br>07900 234 567" },
              actions: {
                items: [
                  { 
                    href: "#edit-secondary-contact", 
                    text: "Edit",
                    visuallyHiddenText: "secondary emergency contact"
                  }
                ]
              }
            },
            {
              key: { text: "Medical conditions" },
              value: { text: "Hypertension, High cholesterol" },
              actions: {
                items: [
                  { 
                    href: "#update-conditions", 
                    text: "Update",
                    visuallyHiddenText: "medical conditions"
                  }
                ]
              }
            },
            {
              key: { text: "Allergies" },
              value: { text: "Penicillin" },
              actions: {
                items: [
                  { 
                    href: "#update-allergies", 
                    text: "Update",
                    visuallyHiddenText: "allergies"
                  }
                ]
              }
            }
          ]}
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Insurance and Payment Information</h3>
    <div class="card bg-base-100 shadow-sm border">
      <div class="card-body">
        <SummaryList 
          rows={[
            {
              key: { text: "NHS eligibility" },
              value: { html: "<span class='text-success font-semibold'>Eligible</span><br>UK resident" }
            },
            {
              key: { text: "Private insurance" },
              value: { html: "Bupa Healthcare<br>Policy: BH123456789<br>Expires: December 2024" },
              actions: {
                items: [
                  { 
                    href: "#update-insurance", 
                    text: "Update",
                    visuallyHiddenText: "insurance details"
                  }
                ]
              }
            },
            {
              key: { text: "Payment method" },
              value: { html: "Card ending ****1234<br>Expires: 06/26" },
              actions: {
                items: [
                  { 
                    href: "#update-payment", 
                    text: "Update",
                    visuallyHiddenText: "payment method"
                  }
                ]
              }
            }
          ]}
        />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Custom Styling</h3>
    <div class="card bg-base-100 shadow-sm border">
      <div class="card-body">
        <SummaryList 
          classes="bg-base-50 p-4 rounded-lg"
          rows={[
            {
              key: { text: "Custom styled", classes: "text-primary font-bold" },
              value: { text: "This summary list has custom styling applied", classes: "text-secondary" }
            },
            {
              key: { text: "Border styling" },
              value: { text: "You can customize the appearance" },
              actions: {
                items: [
                  { 
                    href: "#customize", 
                    text: "Customize",
                    visuallyHiddenText: "styling"
                  }
                ]
              }
            }
          ]}
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
        <h4 class="font-bold">Summary List Accessibility</h4>
        <div class="text-sm mt-2">
          <ul class="list-disc list-inside space-y-1">
            <li><strong>Semantic HTML:</strong> Uses proper dt/dd elements</li>
            <li><strong>Screen Readers:</strong> Clear relationship between keys and values</li>
            <li><strong>Visually Hidden Text:</strong> Additional context for action links</li>
            <li><strong>Responsive Design:</strong> Adapts to mobile and desktop layouts</li>
            <li><strong>Focus Management:</strong> Proper keyboard navigation for links</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>
<script lang="ts">
  import Tables from './Tables.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Tables Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Table</h3>
    <Tables 
      caption="Patient appointment schedule"
      head={[
        { text: "Time" },
        { text: "Patient name" },
        { text: "Appointment type" },
        { text: "Duration" }
      ]}
      rows={[
        [
          { text: "9:00 AM" },
          { text: "Sarah Johnson" },
          { text: "GP consultation" },
          { text: "15 mins" }
        ],
        [
          { text: "9:30 AM" },
          { text: "Michael Brown" },
          { text: "Blood pressure check" },
          { text: "10 mins" }
        ],
        [
          { text: "10:00 AM" },
          { text: "Emily Davis" },
          { text: "Vaccination" },
          { text: "5 mins" }
        ],
        [
          { text: "10:30 AM" },
          { text: "James Wilson" },
          { text: "Follow-up consultation" },
          { text: "20 mins" }
        ]
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Table with Numeric Data</h3>
    <Tables 
      caption="Blood test results"
      head={[
        { text: "Test name" },
        { text: "Result", format: "numeric" },
        { text: "Reference range" },
        { text: "Status" }
      ]}
      rows={[
        [
          { text: "Total cholesterol" },
          { text: "4.2", format: "numeric" },
          { text: "< 5.0 mmol/L" },
          { html: "<span class='text-success font-semibold'>Normal</span>" }
        ],
        [
          { text: "HDL cholesterol" },
          { text: "1.8", format: "numeric" },
          { text: "> 1.0 mmol/L" },
          { html: "<span class='text-success font-semibold'>Normal</span>" }
        ],
        [
          { text: "LDL cholesterol" },
          { text: "2.1", format: "numeric" },
          { text: "< 3.0 mmol/L" },
          { html: "<span class='text-success font-semibold'>Normal</span>" }
        ],
        [
          { text: "Triglycerides" },
          { text: "2.8", format: "numeric" },
          { text: "< 2.3 mmol/L" },
          { html: "<span class='text-warning font-semibold'>Elevated</span>" }
        ]
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Table with First Cell as Header</h3>
    <Tables 
      caption="Medication dosage schedule"
      firstCellIsHeader={true}
      head={[
        { text: "Medication" },
        { text: "Morning" },
        { text: "Afternoon" },
        { text: "Evening" }
      ]}
      rows={[
        [
          { text: "Amlodipine 5mg" },
          { text: "1 tablet" },
          { text: "-" },
          { text: "-" }
        ],
        [
          { text: "Simvastatin 20mg" },
          { text: "-" },
          { text: "-" },
          { text: "1 tablet" }
        ],
        [
          { text: "Metformin 500mg" },
          { text: "1 tablet" },
          { text: "1 tablet" },
          { text: "1 tablet" }
        ]
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Responsive Table</h3>
    <div class="alert alert-info mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <div>
        <h4 class="font-bold">Responsive behavior</h4>
        <div class="text-sm">Resize your browser to see how the table adapts on mobile devices</div>
      </div>
    </div>
    
    <Tables 
      caption="Prescription history (responsive)"
      responsive={true}
      head={[
        { text: "Date" },
        { text: "Medication" },
        { text: "Quantity" },
        { text: "Pharmacy" },
        { text: "Status" }
      ]}
      rows={[
        [
          { text: "15 Mar 2024", header: "Date" },
          { text: "Amlodipine 5mg", header: "Medication" },
          { text: "28 tablets", header: "Quantity" },
          { text: "Boots Pharmacy", header: "Pharmacy" },
          { html: "<span class='badge badge-success'>Collected</span>", header: "Status" }
        ],
        [
          { text: "12 Mar 2024", header: "Date" },
          { text: "Simvastatin 20mg", header: "Medication" },
          { text: "28 tablets", header: "Quantity" },
          { text: "Boots Pharmacy", header: "Pharmacy" },
          { html: "<span class='badge badge-success'>Collected</span>", header: "Status" }
        ],
        [
          { text: "8 Mar 2024", header: "Date" },
          { text: "Metformin 500mg", header: "Medication" },
          { text: "56 tablets", header: "Quantity" },
          { text: "Lloyds Pharmacy", header: "Pharmacy" },
          { html: "<span class='badge badge-warning'>Ready</span>", header: "Status" }
        ]
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Table as Panel</h3>
    <Tables 
      panel={true}
      heading="Current vital signs"
      headingLevel={3}
      caption="Latest measurements from today's appointment"
      head={[
        { text: "Measurement" },
        { text: "Value", format: "numeric" },
        { text: "Normal range" },
        { text: "Trend" }
      ]}
      rows={[
        [
          { text: "Blood pressure" },
          { text: "125/82", format: "numeric" },
          { text: "< 140/90 mmHg" },
          { html: "<span class='text-success'>↓ Improving</span>" }
        ],
        [
          { text: "Heart rate" },
          { text: "68", format: "numeric" },
          { text: "60-100 bpm" },
          { html: "<span class='text-success'>→ Stable</span>" }
        ],
        [
          { text: "Temperature" },
          { text: "36.8°C", format: "numeric" },
          { text: "36.1-37.2°C" },
          { html: "<span class='text-success'>→ Normal</span>" }
        ],
        [
          { text: "Weight" },
          { text: "72.5 kg", format: "numeric" },
          { text: "BMI 23.5" },
          { html: "<span class='text-warning'>↑ Slight increase</span>" }
        ]
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Complex Medical Data Table</h3>
    <Tables 
      caption="Comprehensive health screening results"
      head={[
        { text: "Category" },
        { text: "Test" },
        { text: "Result", format: "numeric" },
        { text: "Reference", classes: "text-sm" },
        { text: "Status" },
        { text: "Action required" }
      ]}
      firstCellIsHeader={true}
      rows={[
        [
          { text: "Cardiovascular", rowspan: 3 },
          { text: "Total cholesterol" },
          { text: "4.2 mmol/L", format: "numeric" },
          { text: "< 5.0", classes: "text-sm text-base-content/70" },
          { html: "<span class='badge badge-success'>Normal</span>" },
          { text: "Continue current diet" }
        ],
        [
          { text: "Blood pressure" },
          { text: "135/85 mmHg", format: "numeric" },
          { text: "< 140/90", classes: "text-sm text-base-content/70" },
          { html: "<span class='badge badge-warning'>Borderline</span>" },
          { text: "Monitor weekly" }
        ],
        [
          { text: "Resting heart rate" },
          { text: "72 bpm", format: "numeric" },
          { text: "60-100", classes: "text-sm text-base-content/70" },
          { html: "<span class='badge badge-success'>Normal</span>" },
          { text: "No action needed" }
        ],
        [
          { text: "Metabolic", rowspan: 2 },
          { text: "HbA1c" },
          { text: "42 mmol/mol", format: "numeric" },
          { text: "< 48", classes: "text-sm text-base-content/70" },
          { html: "<span class='badge badge-success'>Normal</span>" },
          { text: "Annual review" }
        ],
        [
          { text: "BMI" },
          { text: "23.5", format: "numeric" },
          { text: "18.5-25", classes: "text-sm text-base-content/70" },
          { html: "<span class='badge badge-success'>Normal</span>" },
          { text: "Maintain current weight" }
        ]
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Appointment Availability Table</h3>
    <Tables 
      panel={true}
      heading="Available appointments this week"
      headingLevel={4}
      panelClasses="border-primary"
      head={[
        { text: "Day" },
        { text: "Morning (9am-12pm)" },
        { text: "Afternoon (1pm-5pm)" },
        { text: "Evening (5pm-7pm)" }
      ]}
      firstCellIsHeader={true}
      rows={[
        [
          { text: "Monday" },
          { html: "<span class='text-success'>3 slots available</span>" },
          { html: "<span class='text-warning'>1 slot available</span>" },
          { html: "<span class='text-error'>Fully booked</span>" }
        ],
        [
          { text: "Tuesday" },
          { html: "<span class='text-success'>5 slots available</span>" },
          { html: "<span class='text-success'>4 slots available</span>" },
          { html: "<span class='text-warning'>2 slots available</span>" }
        ],
        [
          { text: "Wednesday" },
          { html: "<span class='text-error'>Fully booked</span>" },
          { html: "<span class='text-warning'>1 slot available</span>" },
          { html: "<span class='text-success'>3 slots available</span>" }
        ],
        [
          { text: "Thursday" },
          { html: "<span class='text-success'>6 slots available</span>" },
          { html: "<span class='text-success'>5 slots available</span>" },
          { html: "<span class='text-success'>4 slots available</span>" }
        ],
        [
          { text: "Friday" },
          { html: "<span class='text-warning'>2 slots available</span>" },
          { html: "<span class='text-warning'>1 slot available</span>" },
          { html: "<span class='text-error'>Fully booked</span>" }
        ]
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Sortable Table Headers</h3>
    <Tables 
      caption="Patient waiting times (sortable)"
      head={[
        { text: "Patient ID" },
        { text: "Arrival time", format: "sort-ascending" },
        { text: "Wait time (mins)", format: "numeric" },
        { text: "Priority", format: "sort-descending" },
        { text: "Status" }
      ]}
      rows={[
        [
          { text: "P001" },
          { text: "08:45" },
          { text: "15", format: "numeric" },
          { text: "Routine" },
          { html: "<span class='badge badge-info'>Waiting</span>" }
        ],
        [
          { text: "P002" },
          { text: "09:15" },
          { text: "45", format: "numeric" },
          { text: "Urgent" },
          { html: "<span class='badge badge-warning'>In consultation</span>" }
        ],
        [
          { text: "P003" },
          { text: "09:30" },
          { text: "30", format: "numeric" },
          { text: "Routine" },
          { html: "<span class='badge badge-info'>Waiting</span>" }
        ]
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Custom Styling</h3>
    <Tables 
      tableClasses="table-zebra table-hover"
      classes="border-2 border-accent"
      caption="Custom styled table"
      head={[
        { text: "Feature", classes: "bg-primary text-primary-content" },
        { text: "Standard", classes: "bg-primary text-primary-content" },
        { text: "Premium", classes: "bg-primary text-primary-content" }
      ]}
      rows={[
        [
          { text: "GP appointments" },
          { text: "Unlimited" },
          { text: "Unlimited + priority booking" }
        ],
        [
          { text: "Specialist referrals" },
          { text: "Standard NHS waiting times" },
          { text: "Fast-track private referrals" }
        ],
        [
          { text: "Health checks" },
          { text: "Annual" },
          { text: "Quarterly + comprehensive screening" }
        ]
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Accessibility Features</h3>
    <div class="alert alert-info">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <div>
        <h4 class="font-bold">Table Accessibility</h4>
        <div class="text-sm mt-2">
          <ul class="list-disc list-inside space-y-1">
            <li><strong>Semantic HTML:</strong> Proper table, thead, tbody, th, td elements</li>
            <li><strong>Screen Readers:</strong> Caption and header associations</li>
            <li><strong>Keyboard Navigation:</strong> Full keyboard accessibility</li>
            <li><strong>Responsive Design:</strong> Mobile-friendly with header labels</li>
            <li><strong>ARIA Roles:</strong> Enhanced roles for responsive tables</li>
            <li><strong>Color Coding:</strong> Status information with appropriate contrast</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>
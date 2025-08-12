<script lang="ts">
  import TaskList from './TaskList.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Task List Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Patient Registration Process</h3>
    <p class="text-base-content/70">Complete your registration to access NHS services online. You can complete these tasks in any order.</p>
    
    <TaskList 
      items={[
        {
          title: "Personal details",
          hint: "Provide your name, date of birth, and contact information",
          href: "#personal-details",
          status: {
            text: "Completed",
            variant: "completed"
          },
          id: "personal-details"
        },
        {
          title: "Medical history",
          hint: "Tell us about any existing medical conditions and medications",
          href: "#medical-history", 
          status: {
            text: "Completed",
            variant: "completed"
          },
          id: "medical-history"
        },
        {
          title: "Emergency contacts",
          hint: "Add at least one emergency contact person",
          href: "#emergency-contacts",
          status: {
            text: "In Progress",
            variant: "in-progress"
          },
          id: "emergency-contacts"
        },
        {
          title: "GP registration",
          hint: "Confirm your current GP practice details",
          href: "#gp-registration",
          status: {
            text: "Incomplete",
            variant: "incomplete"
          },
          id: "gp-registration"
        },
        {
          title: "Identity verification",
          hint: "Upload a photo of your ID document",
          status: {
            text: "Cannot start yet",
            variant: "cannot-start-yet"
          },
          id: "identity-verification"
        }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Appointment Booking Journey</h3>
    <p class="text-base-content/70">Book your appointment by completing the following steps.</p>
    
    <TaskList 
      items={[
        {
          title: "Choose appointment type",
          hint: "Select the type of healthcare service you need",
          href: "#appointment-type",
          status: {
            text: "Completed",
            variant: "completed"
          }
        },
        {
          title: "Select healthcare provider",
          hint: "Choose from available GP practices or specialists in your area",
          href: "#select-provider",
          status: {
            text: "Completed", 
            variant: "completed"
          }
        },
        {
          title: "Choose date and time",
          hint: "Pick from available appointment slots",
          href: "#choose-time",
          status: {
            text: "In Progress",
            variant: "in-progress"
          }
        },
        {
          title: "Provide appointment details",
          hint: "Tell us the reason for your visit",
          status: {
            text: "Incomplete",
            variant: "incomplete"
          }
        },
        {
          title: "Confirm booking",
          hint: "Review and confirm your appointment details",
          status: {
            text: "Cannot start yet",
            variant: "cannot-start-yet"
          }
        }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">NHS e-Referral Service</h3>
    <p class="text-base-content/70">Your GP has referred you for specialist treatment. Complete these steps to book your appointment.</p>
    
    <TaskList 
      items={[
        {
          title: "Review your referral",
          hint: "Check the details of your referral and what to expect",
          href: "#review-referral",
          status: {
            text: "Completed",
            variant: "completed"
          }
        },
        {
          title: "Choose hospital or clinic", 
          hint: "Select where you'd like to have your appointment",
          href: "#choose-hospital",
          status: {
            text: "Completed",
            variant: "completed"
          }
        },
        {
          title: "Book appointment",
          hint: "Choose an available appointment slot",
          href: "#book-appointment",
          status: {
            text: "Incomplete",
            variant: "incomplete"
          }
        },
        {
          title: "Prepare for appointment",
          hint: "Read what to bring and how to prepare",
          status: {
            text: "Cannot start yet",
            variant: "cannot-start-yet"
          }
        }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Treatment Pathway</h3>
    <p class="text-base-content/70">Complete your pre-treatment requirements before your scheduled procedure.</p>
    
    <TaskList 
      items={[
        {
          title: "Pre-assessment questionnaire",
          hint: "Answer questions about your health and medications",
          href: "#pre-assessment",
          status: {
            text: "Completed",
            variant: "completed"
          }
        },
        {
          title: "Blood tests",
          hint: "Attend your scheduled blood test appointment",
          href: "#blood-tests",
          status: {
            text: "Booked",
            variant: "in-progress"
          }
        },
        {
          title: "Treatment consent",
          hint: "Review and sign consent forms for your treatment",
          href: "#consent-forms",
          status: {
            text: "Incomplete",
            variant: "incomplete"
          }
        },
        {
          title: "Pre-operative instructions",
          hint: "Important information about preparing for your procedure",
          status: {
            text: "Cannot start yet",
            variant: "cannot-start-yet"
          }
        }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Prescription Management</h3>
    <p class="text-base-content/70">Manage your repeat prescriptions and medication reviews.</p>
    
    <TaskList 
      items={[
        {
          title: "Review current medications",
          hint: "Check your list of current prescriptions",
          href: "#review-medications",
          status: {
            text: "Completed",
            variant: "completed"
          }
        },
        {
          title: "Request repeat prescription",
          hint: "Order your regular medications",
          href: "#repeat-prescription",
          status: {
            text: "Incomplete",
            variant: "incomplete"
          }
        },
        {
          title: "Pharmacy collection",
          hint: "Choose where to collect your prescription",
          href: "#pharmacy-collection",
          status: {
            text: "Incomplete", 
            variant: "incomplete"
          }
        },
        {
          title: "Medication review appointment",
          hint: "Book your annual medication review with your GP",
          status: {
            text: "Not required",
            variant: "cannot-start-yet"
          }
        }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Health Check Assessment</h3>
    <p class="text-base-content/70">Complete your NHS Health Check to assess your risk of heart disease, stroke, diabetes and kidney disease.</p>
    
    <TaskList 
      items={[
        {
          title: "Health questionnaire",
          hint: "Answer questions about your lifestyle and family history",
          href: "#health-questionnaire",
          status: {
            text: "Completed",
            variant: "completed"
          }
        },
        {
          title: "Physical measurements",
          hint: "Height, weight, and blood pressure checks",
          href: "#measurements",
          status: {
            text: "Completed",
            variant: "completed"
          }
        },
        {
          title: "Blood tests", 
          hint: "Cholesterol and blood sugar tests",
          href: "#health-check-blood-tests",
          status: {
            text: "Results available",
            variant: "completed"
          }
        },
        {
          title: "Review results",
          hint: "Discuss your results with a healthcare professional",
          href: "#review-results",
          status: {
            text: "Scheduled",
            variant: "in-progress"
          }
        },
        {
          title: "Health action plan",
          hint: "Get your personalized recommendations",
          status: {
            text: "Cannot start yet",
            variant: "cannot-start-yet"
          }
        }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Status Variants</h3>
    <p class="text-base-content/70">Different status types available in task lists.</p>
    
    <TaskList 
      items={[
        {
          title: "Completed task",
          hint: "This task has been finished successfully",
          status: {
            text: "Completed",
            variant: "completed"
          }
        },
        {
          title: "Task in progress",
          hint: "This task has been started but not finished",
          status: {
            text: "In Progress", 
            variant: "in-progress"
          }
        },
        {
          title: "Incomplete task",
          hint: "This task is ready to start",
          status: {
            text: "Incomplete",
            variant: "incomplete"
          }
        },
        {
          title: "Cannot start yet",
          hint: "This task has dependencies that need to be completed first",
          status: {
            text: "Cannot start yet",
            variant: "cannot-start-yet"
          }
        },
        {
          title: "Task without tag",
          hint: "This task uses text-only status display",
          status: {
            text: "Optional",
            tag: false
          }
        }
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
        <h4 class="font-bold">Task List Accessibility</h4>
        <div class="text-sm mt-2">
          <ul class="list-disc list-inside space-y-1">
            <li><strong>Semantic HTML:</strong> Uses proper list structure (&lt;ul&gt;, &lt;li&gt;)</li>
            <li><strong>Screen Reader Support:</strong> aria-describedby links tasks to status</li>
            <li><strong>Keyboard Navigation:</strong> Full keyboard accessibility for all interactive elements</li>
            <li><strong>Focus Management:</strong> Clear focus indicators with proper contrast</li>
            <li><strong>Status Indicators:</strong> Color and text convey status information</li>
            <li><strong>Descriptive Hints:</strong> Additional context for complex tasks</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>
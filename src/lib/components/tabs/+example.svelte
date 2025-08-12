<script lang="ts">
  import Tabs from './Tabs.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Tabs Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Patient Health Overview</h3>
    <Tabs 
      title="Patient information"
      idPrefix="patient"
      items={[
        {
          label: "Overview",
          panel: {
            html: `
              <div class="space-y-4">
                <h3 class="text-lg font-semibold">Patient Summary</h3>
                <div class="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 class="font-medium mb-2">Personal Details</h4>
                    <dl class="space-y-1">
                      <div class="flex justify-between">
                        <dt>Name:</dt>
                        <dd>Sarah Elizabeth Johnson</dd>
                      </div>
                      <div class="flex justify-between">
                        <dt>Age:</dt>
                        <dd>38 years</dd>
                      </div>
                      <div class="flex justify-between">
                        <dt>NHS Number:</dt>
                        <dd>123 456 7890</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h4 class="font-medium mb-2">Current Status</h4>
                    <div class="space-y-2">
                      <div class="badge badge-success">Active Patient</div>
                      <div class="badge badge-info">Regular Check-ups</div>
                      <div class="badge badge-warning">Medication Review Due</div>
                    </div>
                  </div>
                </div>
              </div>
            `
          }
        },
        {
          label: "Medical History",
          panel: {
            html: `
              <div class="space-y-4">
                <h3 class="text-lg font-semibold">Medical History</h3>
                <div class="space-y-4">
                  <div class="alert alert-info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <h4 class="font-bold">Chronic Conditions</h4>
                      <ul class="list-disc list-inside mt-2">
                        <li>Hypertension (diagnosed 2018)</li>
                        <li>High cholesterol (diagnosed 2020)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 class="font-medium mb-2">Previous Surgeries</h4>
                    <ul class="space-y-2">
                      <li class="flex justify-between items-center">
                        <span>Appendectomy</span>
                        <span class="badge badge-outline">March 2015</span>
                      </li>
                      <li class="flex justify-between items-center">
                        <span>Gallbladder removal</span>
                        <span class="badge badge-outline">June 2019</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 class="font-medium mb-2">Allergies</h4>
                    <div class="alert alert-warning">
                      <span class="font-semibold">Penicillin:</span> Severe allergic reaction (rash, breathing difficulties)
                    </div>
                  </div>
                </div>
              </div>
            `
          }
        },
        {
          label: "Current Medications",
          panel: {
            html: `
              <div class="space-y-4">
                <h3 class="text-lg font-semibold">Current Prescriptions</h3>
                <div class="overflow-x-auto">
                  <table class="table table-zebra">
                    <thead>
                      <tr>
                        <th>Medication</th>
                        <th>Dosage</th>
                        <th>Frequency</th>
                        <th>Prescribed Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="font-semibold">Amlodipine</div>
                          <div class="text-sm opacity-70">Blood pressure</div>
                        </td>
                        <td>5mg</td>
                        <td>Once daily</td>
                        <td>Jan 2024</td>
                        <td><span class="badge badge-success">Active</span></td>
                      </tr>
                      <tr>
                        <td>
                          <div class="font-semibold">Simvastatin</div>
                          <div class="text-sm opacity-70">Cholesterol</div>
                        </td>
                        <td>20mg</td>
                        <td>Once daily (evening)</td>
                        <td>Feb 2024</td>
                        <td><span class="badge badge-success">Active</span></td>
                      </tr>
                      <tr>
                        <td>
                          <div class="font-semibold">Paracetamol</div>
                          <div class="text-sm opacity-70">Pain relief</div>
                        </td>
                        <td>500mg</td>
                        <td>As needed</td>
                        <td>Mar 2024</td>
                        <td><span class="badge badge-warning">As needed</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            `
          }
        },
        {
          label: "Test Results",
          panel: {
            html: `
              <div class="space-y-4">
                <h3 class="text-lg font-semibold">Recent Test Results</h3>
                <div class="grid gap-4 md:grid-cols-2">
                  <div class="card bg-base-50 border">
                    <div class="card-body">
                      <h4 class="card-title text-base">Blood Test - March 2024</h4>
                      <div class="space-y-2">
                        <div class="flex justify-between">
                          <span>Cholesterol:</span>
                          <span class="text-success font-semibold">4.2 mmol/L ✓</span>
                        </div>
                        <div class="flex justify-between">
                          <span>Blood Sugar:</span>
                          <span class="text-success font-semibold">5.8 mmol/L ✓</span>
                        </div>
                        <div class="flex justify-between">
                          <span>Blood Pressure:</span>
                          <span class="text-warning font-semibold">135/85 mmHg ⚠</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card bg-base-50 border">
                    <div class="card-body">
                      <h4 class="card-title text-base">ECG - February 2024</h4>
                      <div class="space-y-2">
                        <div class="flex justify-between">
                          <span>Rhythm:</span>
                          <span class="text-success font-semibold">Normal sinus ✓</span>
                        </div>
                        <div class="flex justify-between">
                          <span>Heart Rate:</span>
                          <span class="text-success font-semibold">72 bpm ✓</span>
                        </div>
                        <div class="flex justify-between">
                          <span>Overall:</span>
                          <span class="text-success font-semibold">Normal ✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="alert alert-info">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h4 class="font-bold">Next Test Due</h4>
                    <p>Annual blood test scheduled for March 2025</p>
                  </div>
                </div>
              </div>
            `
          }
        }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Healthcare Services Information</h3>
    <Tabs 
      title="NHS services"
      idPrefix="services"
      items={[
        {
          label: "GP Services",
          panel: {
            html: `
              <div class="space-y-4">
                <h3 class="text-lg font-semibold">General Practice Services</h3>
                <div class="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 class="font-medium mb-3">Available Services</h4>
                    <ul class="space-y-2">
                      <li class="flex items-center gap-2">
                        <span class="badge badge-sm badge-success">✓</span>
                        General consultations
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="badge badge-sm badge-success">✓</span>
                        Health checks and screening
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="badge badge-sm badge-success">✓</span>
                        Vaccinations and immunizations
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="badge badge-sm badge-success">✓</span>
                        Chronic disease management
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="badge badge-sm badge-success">✓</span>
                        Mental health support
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 class="font-medium mb-3">Opening Hours</h4>
                    <div class="space-y-2 text-sm">
                      <div class="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>8:00 AM - 6:30 PM</span>
                      </div>
                      <div class="flex justify-between">
                        <span>Saturday:</span>
                        <span>8:00 AM - 12:00 PM</span>
                      </div>
                      <div class="flex justify-between">
                        <span>Sunday:</span>
                        <span class="text-error">Closed</span>
                      </div>
                      <div class="divider my-2"></div>
                      <div class="alert alert-warning alert-sm">
                        <span class="text-xs">Emergency appointments available outside hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `
          }
        },
        {
          label: "Emergency Services",
          panel: {
            html: `
              <div class="space-y-4">
                <h3 class="text-lg font-semibold">Emergency & Urgent Care</h3>
                
                <div class="alert alert-error">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                  </svg>
                  <div>
                    <h4 class="font-bold">Life-threatening emergency: Call 999</h4>
                    <p>For cardiac arrest, severe bleeding, difficulty breathing, or unconsciousness</p>
                  </div>
                </div>
                
                <div class="grid gap-4 md:grid-cols-2">
                  <div class="card bg-base-50 border">
                    <div class="card-body">
                      <h4 class="card-title text-base text-warning">A&E Department</h4>
                      <p class="text-sm">For serious injuries and life-threatening conditions</p>
                      <div class="space-y-2 mt-3">
                        <div class="flex justify-between text-sm">
                          <span>Current wait:</span>
                          <span class="badge badge-warning">3-4 hours</span>
                        </div>
                        <div class="flex justify-between text-sm">
                          <span>Location:</span>
                          <span>City Hospital</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card bg-base-50 border">
                    <div class="card-body">
                      <h4 class="card-title text-base text-info">NHS 111</h4>
                      <p class="text-sm">For urgent medical help when it's not life-threatening</p>
                      <div class="space-y-2 mt-3">
                        <div class="flex justify-between text-sm">
                          <span>Phone:</span>
                          <span class="font-semibold">111</span>
                        </div>
                        <div class="flex justify-between text-sm">
                          <span>Online:</span>
                          <span class="link link-info">nhs.uk</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `
          }
        },
        {
          label: "Specialist Services",
          panel: {
            html: `
              <div class="space-y-4">
                <h3 class="text-lg font-semibold">Specialist & Secondary Care</h3>
                
                <div class="grid gap-4 md:grid-cols-3">
                  <div class="card bg-base-50 border">
                    <div class="card-body">
                      <h4 class="card-title text-sm">Cardiology</h4>
                      <p class="text-xs">Heart and cardiovascular conditions</p>
                      <div class="text-xs mt-2">
                        <div>Waiting time: <span class="badge badge-sm badge-warning">8-12 weeks</span></div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card bg-base-50 border">
                    <div class="card-body">
                      <h4 class="card-title text-sm">Dermatology</h4>
                      <p class="text-xs">Skin conditions and disorders</p>
                      <div class="text-xs mt-2">
                        <div>Waiting time: <span class="badge badge-sm badge-error">16-20 weeks</span></div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card bg-base-50 border">
                    <div class="card-body">
                      <h4 class="card-title text-sm">Orthopedics</h4>
                      <p class="text-xs">Bones, joints, and muscles</p>
                      <div class="text-xs mt-2">
                        <div>Waiting time: <span class="badge badge-sm badge-warning">12-16 weeks</span></div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card bg-base-50 border">
                    <div class="card-body">
                      <h4 class="card-title text-sm">Mental Health</h4>
                      <p class="text-xs">Psychological support services</p>
                      <div class="text-xs mt-2">
                        <div>Waiting time: <span class="badge badge-sm badge-info">2-6 weeks</span></div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card bg-base-50 border">
                    <div class="card-body">
                      <h4 class="card-title text-sm">Physiotherapy</h4>
                      <p class="text-xs">Movement and rehabilitation</p>
                      <div class="text-xs mt-2">
                        <div>Waiting time: <span class="badge badge-sm badge-success">1-3 weeks</span></div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card bg-base-50 border">
                    <div class="card-body">
                      <h4 class="card-title text-sm">Endocrinology</h4>
                      <p class="text-xs">Diabetes and hormone disorders</p>
                      <div class="text-xs mt-2">
                        <div>Waiting time: <span class="badge badge-sm badge-warning">10-14 weeks</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="alert alert-info">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h4 class="font-bold">Referral Required</h4>
                    <p class="text-sm">Most specialist services require a referral from your GP. Speak to your doctor about the referral process.</p>
                  </div>
                </div>
              </div>
            `
          }
        },
        {
          label: "Pharmacy Services",
          panel: {
            html: `
              <div class="space-y-4">
                <h3 class="text-lg font-semibold">Pharmacy & Medication Services</h3>
                
                <div class="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 class="font-medium mb-3">Available Services</h4>
                    <div class="space-y-3">
                      <div class="flex items-start gap-3">
                        <span class="badge badge-success badge-sm mt-1">✓</span>
                        <div>
                          <div class="font-medium">Prescription Collection</div>
                          <div class="text-sm opacity-70">Collect regular and one-off prescriptions</div>
                        </div>
                      </div>
                      
                      <div class="flex items-start gap-3">
                        <span class="badge badge-success badge-sm mt-1">✓</span>
                        <div>
                          <div class="font-medium">Medicine Reviews</div>
                          <div class="text-sm opacity-70">Regular medication check-ups with pharmacist</div>
                        </div>
                      </div>
                      
                      <div class="flex items-start gap-3">
                        <span class="badge badge-success badge-sm mt-1">✓</span>
                        <div>
                          <div class="font-medium">Vaccinations</div>
                          <div class="text-sm opacity-70">Flu, COVID-19, travel vaccines</div>
                        </div>
                      </div>
                      
                      <div class="flex items-start gap-3">
                        <span class="badge badge-success badge-sm mt-1">✓</span>
                        <div>
                          <div class="font-medium">Health Advice</div>
                          <div class="text-sm opacity-70">Minor ailments and medication guidance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 class="font-medium mb-3">Local Pharmacies</h4>
                    <div class="space-y-3">
                      <div class="card bg-base-50 border border-primary">
                        <div class="card-body p-3">
                          <h5 class="font-medium">Boots Pharmacy</h5>
                          <p class="text-sm">123 High Street</p>
                          <div class="flex justify-between items-center text-xs mt-2">
                            <span>Open until 8 PM</span>
                            <span class="badge badge-primary badge-xs">Your pharmacy</span>
                          </div>
                        </div>
                      </div>
                      
                      <div class="card bg-base-50 border">
                        <div class="card-body p-3">
                          <h5 class="font-medium">Lloyds Pharmacy</h5>
                          <p class="text-sm">456 Main Road</p>
                          <div class="flex justify-between items-center text-xs mt-2">
                            <span>Open until 6 PM</span>
                            <span class="badge badge-outline badge-xs">0.3 miles</span>
                          </div>
                        </div>
                      </div>
                      
                      <div class="card bg-base-50 border">
                        <div class="card-body p-3">
                          <h5 class="font-medium">Independent Pharmacy</h5>
                          <p class="text-sm">789 Church Lane</p>
                          <div class="flex justify-between items-center text-xs mt-2">
                            <span>Open until 7 PM</span>
                            <span class="badge badge-outline badge-xs">0.5 miles</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `
          }
        }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Appointment Booking</h3>
    <Tabs 
      title="Book appointments"
      idPrefix="booking"
      items={[
        {
          label: "Online Booking",
          panel: {
            html: `
              <div class="space-y-4">
                <h3 class="text-lg font-semibold">Book Appointments Online</h3>
                
                <div class="alert alert-success">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h4 class="font-bold">Available 24/7</h4>
                    <p>Book, cancel, or reschedule appointments anytime online</p>
                  </div>
                </div>
                
                <div class="steps steps-vertical lg:steps-horizontal">
                  <div class="step step-primary">
                    <div class="text-left">
                      <div class="font-semibold">Choose appointment type</div>
                      <div class="text-sm">GP consultation, nurse appointment, or health check</div>
                    </div>
                  </div>
                  <div class="step step-primary">
                    <div class="text-left">
                      <div class="font-semibold">Select date and time</div>
                      <div class="text-sm">View available slots and pick what works for you</div>
                    </div>
                  </div>
                  <div class="step step-primary">
                    <div class="text-left">
                      <div class="font-semibold">Confirm details</div>
                      <div class="text-sm">Review and confirm your appointment</div>
                    </div>
                  </div>
                </div>
                
                <div class="card bg-primary text-primary-content">
                  <div class="card-body">
                    <h4 class="card-title">Quick Actions</h4>
                    <div class="grid gap-2 md:grid-cols-3">
                      <button class="btn btn-sm">Book GP appointment</button>
                      <button class="btn btn-sm">Book nurse appointment</button>
                      <button class="btn btn-sm">Book health check</button>
                    </div>
                  </div>
                </div>
              </div>
            `
          }
        },
        {
          label: "Phone Booking",
          panel: {
            html: `
              <div class="space-y-4">
                <h3 class="text-lg font-semibold">Book by Phone</h3>
                
                <div class="grid gap-4 md:grid-cols-2">
                  <div class="card bg-base-50 border">
                    <div class="card-body">
                      <h4 class="card-title text-base">Reception Hours</h4>
                      <div class="space-y-2 text-sm">
                        <div class="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>8:00 AM - 6:30 PM</span>
                        </div>
                        <div class="flex justify-between">
                          <span>Saturday:</span>
                          <span>8:00 AM - 12:00 PM</span>
                        </div>
                        <div class="flex justify-between">
                          <span>Sunday:</span>
                          <span class="text-error">Closed</span>
                        </div>
                      </div>
                      <div class="divider my-2"></div>
                      <div class="text-center">
                        <div class="text-lg font-bold text-primary">020 7123 4567</div>
                        <div class="text-xs">Main reception line</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card bg-base-50 border">
                    <div class="card-body">
                      <h4 class="card-title text-base">What to Have Ready</h4>
                      <ul class="text-sm space-y-1">
                        <li class="flex items-center gap-2">
                          <span class="badge badge-sm badge-primary">1</span>
                          Your NHS number
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="badge badge-sm badge-primary">2</span>
                          Date of birth
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="badge badge-sm badge-primary">3</span>
                          Reason for appointment
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="badge badge-sm badge-primary">4</span>
                          Preferred dates/times
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="alert alert-info">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h4 class="font-bold">Busy Times</h4>
                    <p class="text-sm">Phone lines are typically busiest on Monday mornings and Friday afternoons. Consider calling mid-week for shorter wait times.</p>
                  </div>
                </div>
              </div>
            `
          }
        },
        {
          label: "Walk-in Services",
          panel: {
            html: `
              <div class="space-y-4">
                <h3 class="text-lg font-semibold">Walk-in & Urgent Care</h3>
                
                <div class="alert alert-warning">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                  </svg>
                  <div>
                    <h4 class="font-bold">No appointments needed</h4>
                    <p>Walk-in services operate on a first-come, first-served basis</p>
                  </div>
                </div>
                
                <div class="grid gap-4 md:grid-cols-2">
                  <div class="card bg-base-50 border">
                    <div class="card-body">
                      <h4 class="card-title text-base">Minor Illness Clinic</h4>
                      <p class="text-sm mb-3">For urgent but non-emergency conditions</p>
                      <div class="space-y-2 text-sm">
                        <div class="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>2:00 PM - 5:00 PM</span>
                        </div>
                        <div class="flex justify-between">
                          <span>Expected wait:</span>
                          <span class="badge badge-warning badge-sm">30-60 mins</span>
                        </div>
                      </div>
                      <div class="mt-3">
                        <h5 class="font-medium text-sm">Suitable for:</h5>
                        <ul class="text-xs space-y-1 mt-1">
                          <li>• Coughs and colds</li>
                          <li>• Sore throats</li>
                          <li>• Minor injuries</li>
                          <li>• Skin problems</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card bg-base-50 border">
                    <div class="card-body">
                      <h4 class="card-title text-base">Blood Pressure Clinic</h4>
                      <p class="text-sm mb-3">Quick blood pressure checks</p>
                      <div class="space-y-2 text-sm">
                        <div class="flex justify-between">
                          <span>Wednesdays:</span>
                          <span>9:00 AM - 11:00 AM</span>
                        </div>
                        <div class="flex justify-between">
                          <span>Expected wait:</span>
                          <span class="badge badge-success badge-sm">5-15 mins</span>
                        </div>
                      </div>
                      <div class="mt-3">
                        <h5 class="font-medium text-sm">Includes:</h5>
                        <ul class="text-xs space-y-1 mt-1">
                          <li>• Blood pressure measurement</li>
                          <li>• Basic health advice</li>
                          <li>• Follow-up recommendations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `
          }
        }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Example</h3>
    <Tabs 
      title="Simple content"
      idPrefix="basic"
      items={[
        {
          label: "Tab 1",
          panel: {
            text: "This is the content for the first tab. It contains simple text content that demonstrates basic tab functionality."
          }
        },
        {
          label: "Tab 2",
          panel: {
            html: "<p>This is the <strong>second tab</strong> with some <em>HTML content</em>.</p><p>It shows how HTML can be used in tab panels.</p>"
          }
        },
        {
          label: "Tab 3",
          panel: {
            text: "The third tab demonstrates how multiple tabs work together to organize content effectively."
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
        <h4 class="font-bold">Tabs Accessibility</h4>
        <div class="text-sm mt-2">
          <ul class="list-disc list-inside space-y-1">
            <li><strong>Keyboard Navigation:</strong> Arrow keys to move between tabs, Enter/Space to activate</li>
            <li><strong>Screen Readers:</strong> Proper ARIA roles and labels for tab navigation</li>
            <li><strong>Focus Management:</strong> Clear focus indicators and logical tab order</li>
            <li><strong>Mobile Friendly:</strong> Responsive design with vertical tabs on mobile</li>
            <li><strong>State Management:</strong> Clear indication of active tab</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>
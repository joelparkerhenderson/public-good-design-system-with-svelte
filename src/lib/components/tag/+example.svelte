<script lang="ts">
  import Tag from './Tag.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Tag Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Patient Appointment Status</h3>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div class="card bg-base-100 border">
        <div class="card-body">
          <h4 class="card-title text-base">Dr. Sarah Wilson - Cardiology</h4>
          <p class="text-sm text-base-content/70">March 15, 2024 at 10:30 AM</p>
          <div class="flex items-center gap-2 mt-2">
            <Tag variant="green" text="Confirmed" />
            <span class="text-xs text-base-content/50">Booked 2 days ago</span>
          </div>
        </div>
      </div>
      
      <div class="card bg-base-100 border">
        <div class="card-body">
          <h4 class="card-title text-base">Dr. James Brown - General Practice</h4>
          <p class="text-sm text-base-content/70">March 18, 2024 at 2:15 PM</p>
          <div class="flex items-center gap-2 mt-2">
            <Tag variant="blue" text="Pending" />
            <span class="text-xs text-base-content/50">Awaiting confirmation</span>
          </div>
        </div>
      </div>
      
      <div class="card bg-base-100 border">
        <div class="card-body">
          <h4 class="card-title text-base">Dr. Emily Davis - Dermatology</h4>
          <p class="text-sm text-base-content/70">March 12, 2024 at 9:00 AM</p>
          <div class="flex items-center gap-2 mt-2">
            <Tag variant="red" text="Cancelled" />
            <span class="text-xs text-base-content/50">Patient requested</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Test Results Dashboard</h3>
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <thead>
          <tr>
            <th>Test Name</th>
            <th>Date Ordered</th>
            <th>Status</th>
            <th>Results Available</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="font-semibold">Blood Chemistry Panel</div>
              <div class="text-sm opacity-70">Comprehensive metabolic panel</div>
            </td>
            <td>March 10, 2024</td>
            <td><Tag variant="green" text="Completed" /></td>
            <td>March 11, 2024</td>
          </tr>
          <tr>
            <td>
              <div class="font-semibold">Chest X-Ray</div>
              <div class="text-sm opacity-70">Annual screening</div>
            </td>
            <td>March 12, 2024</td>
            <td><Tag variant="aqua-green" text="In Progress" /></td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <div class="font-semibold">ECG</div>
              <div class="text-sm opacity-70">Electrocardiogram</div>
            </td>
            <td>March 14, 2024</td>
            <td><Tag variant="blue" text="Scheduled" /></td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <div class="font-semibold">MRI Scan</div>
              <div class="text-sm opacity-70">Brain and spine</div>
            </td>
            <td>March 16, 2024</td>
            <td><Tag variant="orange" text="Delayed" /></td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Prescription Management</h3>
    <div class="grid gap-4 md:grid-cols-2">
      <div class="card bg-base-100 border">
        <div class="card-body">
          <div class="flex justify-between items-start">
            <div>
              <h4 class="font-semibold">Amlodipine 5mg</h4>
              <p class="text-sm text-base-content/70">Once daily for blood pressure</p>
              <p class="text-xs text-base-content/50 mt-1">Prescribed by Dr. Wilson</p>
            </div>
            <Tag variant="green" text="Active" />
          </div>
          <div class="mt-3">
            <div class="text-sm">
              <div class="flex justify-between">
                <span>Last refill:</span>
                <span>March 1, 2024</span>
              </div>
              <div class="flex justify-between">
                <span>Next refill due:</span>
                <span>March 31, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card bg-base-100 border">
        <div class="card-body">
          <div class="flex justify-between items-start">
            <div>
              <h4 class="font-semibold">Simvastatin 20mg</h4>
              <p class="text-sm text-base-content/70">Once daily for cholesterol</p>
              <p class="text-xs text-base-content/50 mt-1">Prescribed by Dr. Brown</p>
            </div>
            <Tag variant="yellow" text="Review Due" />
          </div>
          <div class="mt-3">
            <div class="text-sm">
              <div class="flex justify-between">
                <span>Last refill:</span>
                <span>February 15, 2024</span>
              </div>
              <div class="flex justify-between">
                <span>Review date:</span>
                <span class="text-warning font-semibold">March 20, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Healthcare Application Status</h3>
    <div class="space-y-3">
      <div class="card bg-base-100 border">
        <div class="card-body">
          <div class="flex justify-between items-center">
            <div>
              <h4 class="font-semibold">Disability Living Allowance</h4>
              <p class="text-sm text-base-content/70">Application submitted March 8, 2024</p>
              <p class="text-xs text-base-content/50">Reference: DLA2024-03-08-001</p>
            </div>
            <div class="flex flex-col items-end gap-1">
              <Tag variant="purple" text="Under Review" />
              <span class="text-xs text-base-content/50">Est. 6-8 weeks</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card bg-base-100 border">
        <div class="card-body">
          <div class="flex justify-between items-center">
            <div>
              <h4 class="font-semibold">Personal Independence Payment</h4>
              <p class="text-sm text-base-content/70">Application submitted February 20, 2024</p>
              <p class="text-xs text-base-content/50">Reference: PIP2024-02-20-003</p>
            </div>
            <div class="flex flex-col items-end gap-1">
              <Tag variant="green" text="Approved" />
              <span class="text-xs text-success">Decision letter sent</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card bg-base-100 border">
        <div class="card-body">
          <div class="flex justify-between items-center">
            <div>
              <h4 class="font-semibold">Carer's Allowance</h4>
              <p class="text-sm text-base-content/70">Application submitted March 1, 2024</p>
              <p class="text-xs text-base-content/50">Reference: CA2024-03-01-007</p>
            </div>
            <div class="flex flex-col items-end gap-1">
              <Tag variant="red" text="Additional Info Required" />
              <span class="text-xs text-error">Action needed by March 25</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Task Management</h3>
    <div class="space-y-3">
      <div class="flex items-center justify-between p-4 bg-base-100 border rounded-lg">
        <div class="flex items-center gap-3">
          <input type="checkbox" class="checkbox checkbox-sm" checked />
          <div>
            <h4 class="font-semibold">Complete health questionnaire</h4>
            <p class="text-sm text-base-content/70">Required before next appointment</p>
          </div>
        </div>
        <Tag variant="green" text="Completed" />
      </div>
      
      <div class="flex items-center justify-between p-4 bg-base-100 border rounded-lg">
        <div class="flex items-center gap-3">
          <input type="checkbox" class="checkbox checkbox-sm" />
          <div>
            <h4 class="font-semibold">Book follow-up blood test</h4>
            <p class="text-sm text-base-content/70">Due within 2 weeks</p>
          </div>
        </div>
        <Tag variant="white" text="Started" />
      </div>
      
      <div class="flex items-center justify-between p-4 bg-base-100 border rounded-lg">
        <div class="flex items-center gap-3">
          <input type="checkbox" class="checkbox checkbox-sm" />
          <div>
            <h4 class="font-semibold">Update emergency contact information</h4>
            <p class="text-sm text-base-content/70">Annual review required</p>
          </div>
        </div>
        <Tag variant="grey" text="Not Started" />
      </div>
      
      <div class="flex items-center justify-between p-4 bg-base-100 border rounded-lg">
        <div class="flex items-center gap-3">
          <input type="checkbox" class="checkbox checkbox-sm" />
          <div>
            <h4 class="font-semibold">Schedule physiotherapy sessions</h4>
            <p class="text-sm text-base-content/70">Referred by Dr. Davis</p>
          </div>
        </div>
        <Tag variant="red" text="Urgent" />
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">All Tag Variants</h3>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div class="space-y-2">
        <h4 class="font-medium text-sm">Status Tags</h4>
        <div class="flex flex-wrap gap-2">
          <Tag variant="white" text="Started" />
          <Tag variant="grey" text="Not Started" />
          <Tag variant="green" text="Completed" />
          <Tag variant="aqua-green" text="Active" />
          <Tag variant="blue" text="Pending" />
        </div>
      </div>
      
      <div class="space-y-2">
        <h4 class="font-medium text-sm">Process Tags</h4>
        <div class="flex flex-wrap gap-2">
          <Tag variant="purple" text="Received" />
          <Tag variant="pink" text="Sent" />
          <Tag variant="orange" text="Declined" />
          <Tag variant="yellow" text="Delayed" />
        </div>
      </div>
      
      <div class="space-y-2">
        <h4 class="font-medium text-sm">Priority Tags</h4>
        <div class="flex flex-wrap gap-2">
          <Tag variant="green" text="New" />
          <Tag variant="blue" text="Routine" />
          <Tag variant="orange" text="Important" />
          <Tag variant="red" text="Urgent" />
        </div>
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
        <h4 class="font-bold">Tag Accessibility</h4>
        <div class="text-sm mt-2">
          <ul class="list-disc list-inside space-y-1">
            <li><strong>Semantic HTML:</strong> Uses &lt;strong&gt; element for screen reader emphasis</li>
            <li><strong>Color Independence:</strong> Status conveyed through text, not just color</li>
            <li><strong>High Contrast:</strong> Meets WCAG 2.2 contrast requirements</li>
            <li><strong>Non-interactive:</strong> Tags are status indicators, not buttons</li>
            <li><strong>Clear Labeling:</strong> Descriptive text explains current status</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>
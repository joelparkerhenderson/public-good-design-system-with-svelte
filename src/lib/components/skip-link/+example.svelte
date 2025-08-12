<script lang="ts">
  import SkipLink from './SkipLink.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Skip Link Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Basic Skip Link</h3>
    <div class="bg-base-200 p-4 rounded-lg">
      <p class="text-sm text-base-content/70 mb-4">
        Press <kbd class="kbd kbd-sm">Tab</kbd> to see the skip link appear:
      </p>
      <SkipLink />
      <p class="text-sm text-base-content/70 mt-4">
        The skip link above will appear when you navigate with the keyboard. It links to #maincontent by default.
      </p>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Custom Text and Target</h3>
    <div class="bg-base-200 p-4 rounded-lg">
      <SkipLink 
        text="Jump to navigation menu"
        href="#navigation"
      />
      <p class="text-sm text-base-content/70 mt-4">
        This skip link has custom text and targets a different element (#navigation).
      </p>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">HTML Content</h3>
    <div class="bg-base-200 p-4 rounded-lg">
      <SkipLink 
        html="Skip to <strong>main content</strong>"
        href="#content"
      />
      <p class="text-sm text-base-content/70 mt-4">
        Skip links can contain HTML formatting for emphasis.
      </p>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Healthcare Portal Skip Links</h3>
    <div class="bg-base-200 p-4 rounded-lg space-y-3">
      <SkipLink 
        text="Skip to appointment booking"
        href="#booking-section"
      />
      
      <SkipLink 
        text="Skip to test results"
        href="#results-section"
      />
      
      <SkipLink 
        text="Skip to prescription management"
        href="#prescriptions-section"
      />
      
      <SkipLink 
        text="Skip to contact information"
        href="#contact-section"
      />
      
      <p class="text-sm text-base-content/70 mt-4">
        Multiple skip links can help users navigate directly to important sections of a healthcare portal.
      </p>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Emergency Services Skip Links</h3>
    <div class="bg-base-200 p-4 rounded-lg space-y-3">
      <SkipLink 
        text="Skip to emergency contact numbers"
        href="#emergency-contacts"
        classes="btn-error"
      />
      
      <SkipLink 
        text="Skip to nearest A&E locations"
        href="#emergency-locations"
        classes="btn-warning"
      />
      
      <SkipLink 
        text="Skip to 111 online assessment"
        href="#online-assessment"
        classes="btn-info"
      />
      
      <p class="text-sm text-base-content/70 mt-4">
        Emergency-focused skip links with color coding to indicate urgency levels.
      </p>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Accessibility Features</h3>
    <div class="bg-base-200 p-4 rounded-lg">
      <div class="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h4 class="font-bold">Skip Link Accessibility</h4>
          <div class="text-sm mt-2">
            <ul class="list-disc list-inside space-y-1">
              <li><strong>Keyboard Navigation:</strong> Appears when pressing Tab</li>
              <li><strong>Screen Readers:</strong> Announced as "Skip to main content link"</li>
              <li><strong>Visual Focus:</strong> Clear outline and positioning when focused</li>
              <li><strong>Hidden by Default:</strong> Only visible when keyboard navigating</li>
              <li><strong>Smooth Transition:</strong> Slides in smoothly when focused</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Implementation Example</h3>
    <div class="mockup-code">
      <pre data-prefix="1"><code>&lt;!-- Place at the top of your page layout --&gt;</code></pre>
      <pre data-prefix="2"><code>&lt;SkipLink /&gt;</code></pre>
      <pre data-prefix="3"><code></code></pre>
      <pre data-prefix="4"><code>&lt;!-- Your header/navigation here --&gt;</code></pre>
      <pre data-prefix="5"><code>&lt;header&gt;...&lt;/header&gt;</code></pre>
      <pre data-prefix="6"><code></code></pre>
      <pre data-prefix="7"><code>&lt;!-- Main content with id="maincontent" --&gt;</code></pre>
      <pre data-prefix="8"><code>&lt;main id="maincontent"&gt;</code></pre>
      <pre data-prefix="9"><code>  &lt;!-- Your main page content --&gt;</code></pre>
      <pre data-prefix="10"><code>&lt;/main&gt;</code></pre>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Testing Instructions</h3>
    <div class="bg-base-200 p-4 rounded-lg">
      <div class="steps steps-vertical lg:steps-horizontal">
        <div class="step step-primary">
          <div class="text-left">
            <div class="font-semibold">Press Tab</div>
            <div class="text-sm">Navigate with keyboard to reveal skip link</div>
          </div>
        </div>
        <div class="step step-primary">
          <div class="text-left">
            <div class="font-semibold">Press Enter</div>
            <div class="text-sm">Activate the skip link to jump to target</div>
          </div>
        </div>
        <div class="step step-primary">
          <div class="text-left">
            <div class="font-semibold">Verify Focus</div>
            <div class="text-sm">Ensure focus moves to the target element</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<script lang="ts">
  import DoDontList from './DoDontList.svelte';
</script>

<div class="space-y-6 p-6">
  <h2 class="text-2xl font-bold mb-4">Do and Don't List Examples</h2>
  
  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Do List (Recommendations)</h3>
    <DoDontList 
      title="Do"
      type="tick"
      items={[
        { item: "wash your hands regularly with soap and water" },
        { item: "cover your mouth and nose when you cough or sneeze" },
        { item: "get plenty of rest if you're feeling unwell" },
        { item: "drink lots of fluids to stay hydrated" }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Don't List (Things to Avoid)</h3>
    <DoDontList 
      title="Don't"
      type="cross"
      items={[
        { item: "touch your eyes, nose, or mouth with unwashed hands" },
        { item: "share personal items like towels or utensils" },
        { item: "ignore symptoms if they get worse" },
        { item: "stop taking prescribed medication without consulting your doctor" }
      ]}
    />
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Medication Guidance</h3>
    <div class="grid gap-6 md:grid-cols-2">
      <DoDontList 
        title="Do"
        type="tick"
        headingLevel={4}
        items={[
          { item: "take medication at the same time each day" },
          { item: "store medication in a cool, dry place" },
          { item: "read the label carefully before taking" },
          { item: "tell your doctor about any side effects" }
        ]}
      />
      
      <DoDontList 
        title="Don't"
        type="cross"
        headingLevel={4}
        items={[
          { item: "exceed the recommended dose" },
          { item: "share your medication with others" },
          { item: "store medication in direct sunlight" },
          { item: "stop taking medication suddenly" }
        ]}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Exercise and Physical Activity</h3>
    <div class="grid gap-6 md:grid-cols-2">
      <DoDontList 
        title="Do"
        type="tick"
        items={[
          { item: "start with gentle exercises like walking" },
          { item: "warm up before exercising" },
          { item: "listen to your body and rest when needed" },
          { item: "wear appropriate footwear and clothing" }
        ]}
      />
      
      <DoDontList 
        title="Don't"
        type="cross"
        hidePrefix={true}
        items={[
          { item: "exercise if you have chest pain or feel dizzy" },
          { item: "ignore pain or discomfort" },
          { item: "exercise immediately after eating a large meal" },
          { item: "push yourself too hard, especially when starting" }
        ]}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Diet and Nutrition</h3>
    <div class="grid gap-6 md:grid-cols-2">
      <DoDontList 
        title="Include in your diet"
        type="tick"
        headingLevel={4}
        items={[
          { item: "plenty of fruits and vegetables" },
          { item: "whole grains like brown rice and oats" },
          { item: "lean proteins such as fish and poultry" },
          { item: "healthy fats from nuts and olive oil" }
        ]}
      />
      
      <DoDontList 
        title="Limit or avoid"
        type="cross"
        headingLevel={4}
        hidePrefix={true}
        items={[
          { item: "processed foods high in salt and sugar" },
          { item: "excessive alcohol consumption" },
          { item: "trans fats and saturated fats" },
          { item: "sugary drinks and snacks" }
        ]}
      />
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-lg font-semibold">Mental Health and Wellbeing</h3>
    <div class="grid gap-6 lg:grid-cols-2">
      <DoDontList 
        title="Do"
        type="tick"
        items={[
          { item: "talk to someone you trust about how you're feeling" },
          { item: "maintain a regular sleep schedule" },
          { item: "practice relaxation techniques like deep breathing" },
          { item: "engage in activities you enjoy" }
        ]}
      />
      
      <DoDontList 
        title="Don't"
        type="cross"
        items={[
          { item: "isolate yourself from friends and family" },
          { item: "use alcohol or drugs to cope with stress" },
          { item: "ignore persistent feelings of sadness or anxiety" },
          { item: "hesitate to seek professional help when needed" }
        ]}
      />
    </div>
  </section>
</div>
<script lang="ts">
  import type { CheckboxesProps } from '$lib/types.js';
  
  interface Props extends CheckboxesProps {}
  
  let {
    name,
    items = [],
    describedBy,
    fieldset,
    hint,
    errorMessage,
    formGroup,
    idPrefix,
    exclusive = false,
    exclusiveGroup,
    values = [],
    classes = '',
    attributes = {},
    ...restProps
  }: Props = $props();

  // Create a reactive set of checked values
  let checkedValues = $state(new Set(values));
  
  // Generate ID for items that don't have one
  const getItemId = (item: any, index: number) => {
    if (item.id) return item.id;
    const prefix = idPrefix || name;
    return `${prefix}-${index}`;
  };

  // Handle checkbox change
  function handleCheckboxChange(value: string, checked: boolean, item: any) {
    const newCheckedValues = new Set(checkedValues);
    
    if (checked) {
      // If this is an exclusive item, clear all other items in the group
      if (item.exclusive) {
        if (exclusiveGroup || item.exclusiveGroup) {
          // Clear items in the same exclusive group
          items.forEach(otherItem => {
            if (otherItem.exclusiveGroup === (item.exclusiveGroup || exclusiveGroup) && otherItem.value !== value) {
              newCheckedValues.delete(otherItem.value);
            }
          });
        } else {
          // Clear all other items
          newCheckedValues.clear();
        }
      }
      // If checking a regular item and an exclusive item is checked, uncheck the exclusive
      else {
        items.forEach(otherItem => {
          if (otherItem.exclusive && (
            !exclusiveGroup || 
            !item.exclusiveGroup || 
            otherItem.exclusiveGroup === item.exclusiveGroup
          )) {
            newCheckedValues.delete(otherItem.value);
          }
        });
      }
      
      newCheckedValues.add(value);
    } else {
      newCheckedValues.delete(value);
    }
    
    checkedValues = newCheckedValues;
  }

  // Create form group attributes
  const formGroupAttributes = $derived(() => ({
    ...(formGroup?.attributes || {}),
    ...restProps
  }));

  // Create fieldset describedBy
  const fieldsetDescribedBy = $derived(() => {
    const parts = [
      describedBy,
      hint ? `${name}-hint` : '',
      errorMessage ? `${name}-error` : ''
    ].filter(Boolean);
    
    return parts.length > 0 ? parts.join(' ') : undefined;
  });
</script>

<div 
  class="public-good-checkboxes form-control w-full {formGroup?.classes || ''}"
  {...formGroupAttributes()}
>
  {#if fieldset?.legend}
    <fieldset class="space-y-4" aria-describedby={fieldsetDescribedBy}>
      <!-- Legend -->
      {#if fieldset.legend.isPageHeading}
        <h1 class="text-2xl font-bold {fieldset.legend.classes || ''}">
          {fieldset.legend.text}
        </h1>
      {:else}
        <legend class="label-text text-base font-medium {fieldset.legend.classes || ''}">
          {fieldset.legend.text}
        </legend>
      {/if}

      <!-- Hint -->
      {#if hint}
        <div class="label-text-alt text-base-content/70" id="{name}-hint">
          {hint.text}
        </div>
      {/if}

      <!-- Error Message -->
      {#if errorMessage}
        <div class="label-text-alt text-error" id="{name}-error">
          <span class="font-medium">Error:</span> {errorMessage.text}
        </div>
      {/if}

      <!-- Checkboxes -->
      <div class="space-y-3 {classes}" {...attributes}>
        {#each items as item, index}
          {#if item.divider}
            <div class="divider text-base-content/50 text-sm">{item.divider}</div>
          {:else}
            <div class="form-control">
              <label class="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  id={getItemId(item, index)}
                  name={item.name || name}
                  value={item.value}
                  class="checkbox checkbox-primary {errorMessage ? 'checkbox-error' : ''}"
                  checked={checkedValues.has(item.value)}
                  disabled={item.disabled}
                  aria-describedby={item.hint ? `${getItemId(item, index)}-hint` : undefined}
                  on:change={(e) => handleCheckboxChange(item.value, e.target.checked, item)}
                  {...(item.attributes || {})}
                />
                
                <div class="flex-1">
                  <span class="label-text">
                    {#if item.html}
                      {@html item.html}
                    {:else}
                      {item.text}
                    {/if}
                  </span>
                  
                  {#if item.hint}
                    <div class="label-text-alt text-base-content/70 mt-1" id="{getItemId(item, index)}-hint">
                      {item.hint.text}
                    </div>
                  {/if}
                </div>
              </label>

              <!-- Conditional content -->
              {#if item.conditional && checkedValues.has(item.value)}
                <div class="ml-8 mt-3 p-3 bg-base-200 rounded">
                  {@html item.conditional.html}
                </div>
              {/if}
            </div>
          {/if}
        {/each}
      </div>
    </fieldset>
  {:else}
    <!-- Without fieldset -->
    <div class="space-y-3 {classes}" {...attributes} aria-describedby={describedBy}>
      {#each items as item, index}
        {#if item.divider}
          <div class="divider text-base-content/50 text-sm">{item.divider}</div>
        {:else}
          <div class="form-control">
            <label class="label cursor-pointer justify-start gap-3">
              <input
                type="checkbox"
                id={getItemId(item, index)}
                name={item.name || name}
                value={item.value}
                class="checkbox checkbox-primary {errorMessage ? 'checkbox-error' : ''}"
                checked={checkedValues.has(item.value)}
                disabled={item.disabled}
                aria-describedby={item.hint ? `${getItemId(item, index)}-hint` : undefined}
                on:change={(e) => handleCheckboxChange(item.value, e.target.checked, item)}
                {...(item.attributes || {})}
              />
              
              <div class="flex-1">
                <span class="label-text">
                  {#if item.html}
                    {@html item.html}
                  {:else}
                    {item.text}
                  {/if}
                </span>
                
                {#if item.hint}
                  <div class="label-text-alt text-base-content/70 mt-1" id="{getItemId(item, index)}-hint">
                    {item.hint.text}
                  </div>
                {/if}
              </div>
            </label>

            <!-- Conditional content -->
            {#if item.conditional && checkedValues.has(item.value)}
              <div class="ml-8 mt-3 p-3 bg-base-200 rounded">
                {@html item.conditional.html}
              </div>
            {/if}
          </div>
        {/if}
      {/each}
    </div>
  {/if}
</div>
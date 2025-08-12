<script lang="ts">
  import type { BaseComponentProps } from '$lib/types.js';
  import ErrorMessage from '../error-message/ErrorMessage.svelte';
  import Hint from '../hint/Hint.svelte';
  
  interface SelectItem {
    text: string;
    value?: string;
    selected?: boolean;
    disabled?: boolean;
    attributes?: Record<string, string>;
  }
  
  interface SelectLabel {
    text?: string;
    html?: string;
    classes?: string;
    isPageHeading?: boolean;
    attributes?: Record<string, string>;
  }
  
  interface SelectHint {
    text?: string;
    html?: string;
    classes?: string;
    attributes?: Record<string, string>;
  }
  
  interface SelectErrorMessage {
    text?: string;
    html?: string;
    classes?: string;
  }
  
  interface SelectFormGroup {
    classes?: string;
    attributes?: Record<string, string>;
  }
  
  interface SelectProps extends BaseComponentProps {
    id?: string;
    name: string;
    items: SelectItem[];
    value?: string;
    label: SelectLabel;
    hint?: SelectHint;
    errorMessage?: SelectErrorMessage;
    formGroup?: SelectFormGroup;
    describedBy?: string;
    disabled?: boolean;
  }
  
  interface Props extends SelectProps {}
  
  let {
    id,
    name,
    items = [],
    value = $bindable(''),
    label,
    hint,
    errorMessage,
    formGroup,
    describedBy,
    disabled,
    classes = '',
    attributes = {},
    children,
    ...restProps
  }: Props = $props();

  // Generate IDs
  const selectId = $derived(id || name);
  const hintId = $derived(hint ? `${selectId}-hint` : undefined);
  const errorId = $derived(errorMessage ? `${selectId}-error` : undefined);
  
  // Build aria-describedby
  const ariaDescribedBy = $derived(() => {
    const parts = [];
    if (describedBy) parts.push(describedBy);
    if (hintId) parts.push(hintId);
    if (errorId) parts.push(errorId);
    return parts.length > 0 ? parts.join(' ') : undefined;
  });

  // Create attributes object for form group
  const formGroupAttributes = $derived(() => ({
    ...formGroup?.attributes
  }));

  // Create attributes object for select
  const selectAttributes = $derived(() => ({
    ...attributes,
    ...restProps,
    'aria-describedby': ariaDescribedBy()
  }));

  // Get effective value for option (value or text)
  function getEffectiveValue(item: SelectItem): string {
    return item.value !== undefined ? item.value : item.text;
  }

  // Check if item is selected
  function isItemSelected(item: SelectItem): boolean {
    if (item.selected !== undefined) return item.selected;
    if (value !== undefined) {
      const effectiveValue = getEffectiveValue(item);
      return effectiveValue === value && item.selected !== false;
    }
    return false;
  }
</script>

<div 
  class="public-good-form-group form-control {errorMessage ? 'public-good-form-group--error' : ''} {formGroup?.classes || ''}"
  {...formGroupAttributes()}
>
  <!-- Label -->
  {#if label.isPageHeading}
    <h1 class="label-text text-3xl font-bold {label.classes || ''}" {...(label.attributes || {})}>
      {#if label.html}
        {@html label.html}
      {:else}
        {label.text}
      {/if}
    </h1>
  {:else}
    <label class="label {label.classes || ''}" for={selectId} {...(label.attributes || {})}>
      <span class="label-text">
        {#if label.html}
          {@html label.html}
        {:else}
          {label.text}
        {/if}
      </span>
    </label>
  {/if}

  <!-- Hint -->
  {#if hint}
    <Hint 
      id={hintId}
      text={hint.text}
      html={hint.html}
      classes={hint.classes}
      attributes={hint.attributes}
    />
  {/if}

  <!-- Error Message -->
  {#if errorMessage}
    <ErrorMessage 
      id={errorId}
      text={errorMessage.text}
      html={errorMessage.html}
      classes={errorMessage.classes}
    />
  {/if}

  <!-- Select -->
  <select 
    class="select select-bordered public-good-select {classes} {errorMessage ? 'select-error' : ''}"
    id={selectId}
    {name}
    bind:value
    {disabled}
    {...selectAttributes()}
  >
    {#each items as item}
      {#if item}
        {@const effectiveValue = getEffectiveValue(item)}
        <option 
          value={item.value !== undefined ? item.value : undefined}
          selected={isItemSelected(item)}
          disabled={item.disabled}
          {...(item.attributes || {})}
        >
          {item.text}
        </option>
      {/if}
    {/each}
  </select>

  {#if children}
    {@render children()}
  {/if}
</div>
<script lang="ts">
  import type { BaseComponentProps } from '$lib/types.js';
  import Label from '../label/Label.svelte';
  import Hint from '../hint/Hint.svelte';
  import ErrorMessage from '../error-message/ErrorMessage.svelte';
  
  interface TextareaLabel {
    text?: string;
    html?: string;
    classes?: string;
    isPageHeading?: boolean;
    attributes?: Record<string, string>;
  }
  
  interface TextareaHint {
    text?: string;
    html?: string;
    classes?: string;
    attributes?: Record<string, string>;
  }
  
  interface TextareaErrorMessage {
    text?: string;
    html?: string;
    classes?: string;
  }
  
  interface TextareaFormGroup {
    classes?: string;
    attributes?: Record<string, string>;
  }
  
  interface TextareaProps extends BaseComponentProps {
    id?: string;
    name: string;
    value?: string;
    rows?: number;
    label: TextareaLabel;
    hint?: TextareaHint;
    errorMessage?: TextareaErrorMessage;
    formGroup?: TextareaFormGroup;
    describedBy?: string;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    placeholder?: string;
    autocomplete?: string;
    maxlength?: number;
    cols?: number;
  }
  
  interface Props extends TextareaProps {}
  
  let {
    id,
    name,
    value = $bindable(''),
    rows = 5,
    label,
    hint,
    errorMessage,
    formGroup,
    describedBy,
    disabled = false,
    readonly = false,
    required = false,
    placeholder,
    autocomplete,
    maxlength,
    cols,
    classes = '',
    attributes = {},
    children,
    ...restProps
  }: Props = $props();

  // Generate unique IDs
  const textareaId = $derived(id || `textarea-${Math.random().toString(36).substring(2, 9)}`);
  const hintId = $derived(hint ? `${textareaId}-hint` : undefined);
  const errorId = $derived(errorMessage ? `${textareaId}-error` : undefined);

  // Build describedBy string
  const ariaDescribedBy = $derived(() => {
    const ids = [];
    if (describedBy) ids.push(describedBy);
    if (hintId) ids.push(hintId);
    if (errorId) ids.push(errorId);
    return ids.length > 0 ? ids.join(' ') : undefined;
  });

  // Create attributes object for textarea
  const textareaAttributes = $derived(() => ({
    ...attributes,
    ...restProps,
    ...(autocomplete && { autocomplete }),
    ...(placeholder && { placeholder }),
    ...(maxlength && { maxlength }),
    ...(cols && { cols })
  }));
</script>

<div 
  class="public-good-textarea-form-group form-control w-full {errorMessage ? 'form-control-error' : ''} {formGroup?.classes || ''}"
  {...(formGroup?.attributes || {})}
>
  <!-- Label -->
  {#if label}
    <Label
      for={textareaId}
      text={label.text}
      html={label.html}
      classes="label {label.classes || ''}"
      isPageHeading={label.isPageHeading}
      attributes={label.attributes}
    />
  {/if}

  <!-- Hint -->
  {#if hint}
    <Hint
      id={hintId}
      text={hint.text}
      html={hint.html}
      classes="text-sm text-base-content/70 mb-2 {hint.classes || ''}"
      attributes={hint.attributes}
    />
  {/if}

  <!-- Error Message -->
  {#if errorMessage}
    <ErrorMessage
      id={errorId}
      text={errorMessage.text}
      html={errorMessage.html}
      classes="text-sm text-error mb-2 {errorMessage.classes || ''}"
    />
  {/if}

  <!-- Textarea -->
  <textarea
    class="public-good-textarea textarea textarea-bordered w-full {errorMessage ? 'textarea-error border-error focus:border-error' : 'focus:border-primary'} {classes}"
    id={textareaId}
    {name}
    bind:value
    {rows}
    {disabled}
    {readonly}
    {required}
    aria-describedby={ariaDescribedBy()}
    {...textareaAttributes()}
  ></textarea>

  {#if children}
    {@render children()}
  {/if}
</div>

<style>
  .public-good-textarea {
    /* Base textarea styling */
    resize: vertical;
    min-height: calc(1.5em * 5 + 2rem); /* Approximate 5 rows + padding */
  }
  
  .public-good-textarea:focus {
    outline: 3px solid #ffdd00;
    outline-offset: 0;
    box-shadow: inset 0 0 0 2px;
  }
  
  .public-good-textarea--error:focus {
    border-color: #d63384;
    box-shadow: inset 0 0 0 2px #d63384;
  }
  
  /* Remove default browser styling */
  .public-good-textarea:focus {
    outline-offset: 0;
  }
  
  /* Ensure consistent resize behavior */
  .public-good-textarea {
    resize: vertical;
  }
</style>
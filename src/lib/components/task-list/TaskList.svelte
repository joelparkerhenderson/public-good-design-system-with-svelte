<script lang="ts">
  import type { BaseComponentProps } from '$lib/types.js';
  import Tag from '../tag/Tag.svelte';
  
  interface TaskListItem {
    title: string;
    titleHtml?: string;
    hint?: string;
    href?: string;
    status: {
      text: string;
      variant?: 'completed' | 'incomplete' | 'cannot-start-yet' | 'in-progress';
      tag?: boolean;
    };
    id?: string;
    attributes?: Record<string, string>;
  }
  
  interface TaskListProps extends BaseComponentProps {
    items: TaskListItem[];
  }
  
  interface Props extends TaskListProps {}
  
  let {
    items = [],
    classes = '',
    attributes = {},
    children,
    ...restProps
  }: Props = $props();

  // Create attributes object for task list
  const taskListAttributes = $derived(() => ({
    ...attributes,
    ...restProps
  }));

  // Get status variant for Tag component
  const getStatusVariant = (status: TaskListItem['status']) => {
    const variantMap = {
      'completed': 'green',
      'incomplete': 'blue', 
      'cannot-start-yet': 'grey',
      'in-progress': 'aqua-green'
    } as const;
    return variantMap[status.variant || 'incomplete'] as any;
  };

  // Check if task has a link
  const hasLink = (item: TaskListItem) => !!item.href;

  // Generate unique ID for status
  const getStatusId = (item: TaskListItem, index: number) => {
    return item.id ? `${item.id}-status` : `task-${index}-status`;
  };
</script>

<ul 
  class="public-good-task-list space-y-0 {classes}"
  {...taskListAttributes()}
>
  {#each items as item, index}
    <li class="public-good-task-list__item border-b border-base-300 last:border-b-0">
      <div class="public-good-task-list__content flex justify-between items-start py-4 px-0 {hasLink(item) ? 'hover:bg-base-50 transition-colors duration-150' : ''}">
        
        <!-- Task Name and Hint -->
        <div class="public-good-task-list__name-and-hint flex-1 min-w-0">
          {#if hasLink(item)}
            <a 
              href={item.href}
              class="public-good-task-list__link block text-primary hover:text-primary-focus focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm -m-1 p-1"
              aria-describedby={getStatusId(item, index)}
              {...(item.attributes || {})}
            >
              <span class="public-good-task-list__task-name text-lg font-semibold">
                {#if item.titleHtml}
                  {@html item.titleHtml}
                {:else}
                  {item.title}
                {/if}
              </span>
            </a>
          {:else}
            <div class="public-good-task-list__task-name text-lg font-semibold text-base-content">
              {#if item.titleHtml}
                {@html item.titleHtml}
              {:else}
                {item.title}
              {/if}
            </div>
          {/if}
          
          {#if item.hint}
            <div class="public-good-task-list__hint text-sm text-base-content/70 mt-1">
              {item.hint}
            </div>
          {/if}
        </div>
        
        <!-- Status -->
        <div 
          class="public-good-task-list__status ml-4 flex-shrink-0"
          id={getStatusId(item, index)}
        >
          {#if item.status.tag !== false}
            <Tag 
              variant={getStatusVariant(item.status)}
              text={item.status.text}
            />
          {:else}
            <span 
              class="public-good-task-list__status-text text-sm font-semibold {item.status.variant === 'completed' ? 'text-success' : 'text-base-content/70'}"
            >
              {item.status.text}
            </span>
          {/if}
        </div>
        
      </div>
    </li>
  {/each}
</ul>

{#if children}
  {@render children()}
{/if}

<style>
  .public-good-task-list {
    /* Base task list styling */
  }
  
  .public-good-task-list__item {
    /* Individual task item styling */
  }
  
  .public-good-task-list__link:hover .public-good-task-list__task-name {
    text-decoration: underline;
  }
  
  .public-good-task-list__link:focus {
    box-shadow: 0 -2px #ffdd00, 0 4px #0b0c0c;
    background-color: #ffdd00;
    outline: 3px solid transparent;
  }
  
  @media (hover: hover) and (pointer: fine) {
    .public-good-task-list__item:hover .public-good-task-list__content {
      cursor: pointer;
    }
  }
</style>
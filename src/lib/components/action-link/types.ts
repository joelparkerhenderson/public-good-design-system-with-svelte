import type { BaseComponentProps } from '$lib/types.js';

export interface ActionLinkProps extends BaseComponentProps {
  text?: string;
  html?: string;
  href: string;
  openInNewWindow?: boolean;
}
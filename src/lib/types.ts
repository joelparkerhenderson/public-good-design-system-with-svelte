// Common types for Public Good Design System components

export interface BaseComponentProps {
  classes?: string;
  attributes?: Record<string, string>;
}

export interface ButtonProps extends BaseComponentProps {
  element?: 'button' | 'a' | 'input';
  text?: string;
  html?: string;
  name?: string;
  type?: 'button' | 'submit' | 'reset';
  value?: string;
  disabled?: boolean;
  href?: string;
  variant?: 'primary' | 'secondary' | 'warning' | 'reverse' | 'login';
  preventDoubleClick?: boolean;
}

export interface CardProps extends BaseComponentProps {
  heading?: string;
  headingHtml?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  headingClasses?: string;
  description?: string;
  descriptionHtml?: string;
  href?: string;
  clickable?: boolean;
  secondary?: boolean;
  feature?: boolean;
  primary?: boolean;
  topTask?: boolean;
  imgURL?: string;
  imgALT?: string;
  type?: 'non-urgent' | 'urgent' | 'emergency';
}

export interface CheckboxItem {
  text?: string;
  html?: string;
  id?: string;
  name?: string;
  value: string;
  hint?: { text: string };
  checked?: boolean;
  disabled?: boolean;
  conditional?: { html: string };
  divider?: string;
  attributes?: Record<string, string>;
}

export interface CheckboxesProps extends BaseComponentProps {
  name: string;
  items: CheckboxItem[];
  describedBy?: string;
  fieldset?: {
    legend?: {
      text: string;
      classes?: string;
      isPageHeading?: boolean;
    };
  };
  hint?: { text: string };
  errorMessage?: { text: string };
  formGroup?: {
    classes?: string;
    attributes?: Record<string, string>;
  };
  idPrefix?: string;
  exclusive?: boolean;
  exclusiveGroup?: string;
  values?: string[];
}

export interface ActionLinkProps extends BaseComponentProps {
  text?: string;
  html?: string;
  href: string;
  openInNewWindow?: boolean;
}

export interface BackLinkProps extends BaseComponentProps {
  text?: string;
  html?: string;
  href?: string;
  element?: 'a' | 'button';
}

export interface BreadcrumbItem {
  text: string;
  href?: string;
  attributes?: Record<string, string>;
}

export interface BreadcrumbProps extends BaseComponentProps {
  items: BreadcrumbItem[];
  labelText?: string;
  collapseOnMobile?: boolean;
}

export interface FieldsetLegend {
  text?: string;
  html?: string;
  classes?: string;
  isPageHeading?: boolean;
}

export interface FieldsetProps extends BaseComponentProps {
  legend?: FieldsetLegend;
  describedBy?: string;
}

export interface HintProps extends BaseComponentProps {
  text?: string;
  html?: string;
  id?: string;
}

export interface ImagesProps extends BaseComponentProps {
  src: string;
  alt: string;
  caption?: string;
  sizes?: string;
  srcset?: string;
}

export interface InputLabel {
  text?: string;
  html?: string;
  classes?: string;
  isPageHeading?: boolean;
  attributes?: Record<string, string>;
}

export interface InputHint {
  text?: string;
  html?: string;
  classes?: string;
  attributes?: Record<string, string>;
}

export interface InputErrorMessage {
  text?: string;
  html?: string;
  classes?: string;
}

export interface InputFormGroup {
  classes?: string;
  attributes?: Record<string, string>;
}

export interface InputProps extends BaseComponentProps {
  id?: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number';
  value?: string;
  label: InputLabel;
  hint?: InputHint;
  errorMessage?: InputErrorMessage;
  formGroup?: InputFormGroup;
  describedBy?: string;
  spellcheck?: boolean;
  autocomplete?: string;
  pattern?: string;
  inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  prefix?: string;
  suffix?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  placeholder?: string;
}

export interface InsetTextProps extends BaseComponentProps {
  text?: string;
  html?: string;
}

export interface LabelProps extends BaseComponentProps {
  text?: string;
  html?: string;
  for?: string;
  isPageHeading?: boolean;
}

export interface NotificationBannerProps extends BaseComponentProps {
  type?: 'success' | 'warning' | 'info' | 'error';
  titleText?: string;
  titleHtml?: string;
  titleId?: string;
  titleHeadingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  text?: string;
  html?: string;
  role?: 'alert' | 'region' | 'status';
  disableAutoFocus?: boolean;
}

export interface PaginationProps extends BaseComponentProps {
  previousUrl?: string;
  previousPage?: string;
  nextUrl?: string;
  nextPage?: string;
}

export interface PanelProps extends BaseComponentProps {
  titleText?: string;
  titleHtml?: string;
  text?: string;
  html?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface RadioItem {
  text?: string;
  html?: string;
  id?: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  hint?: { text?: string; html?: string; classes?: string; attributes?: Record<string, string> };
  conditional?: { html: string };
  divider?: string;
  label?: { classes?: string; attributes?: Record<string, string> };
  attributes?: Record<string, string>;
}

export interface RadioFieldset {
  legend?: {
    text?: string;
    html?: string;
    classes?: string;
    isPageHeading?: boolean;
  };
  classes?: string;
  attributes?: Record<string, string>;
  describedBy?: string;
}

export interface RadioHint {
  text?: string;
  html?: string;
  classes?: string;
  attributes?: Record<string, string>;
}

export interface RadioErrorMessage {
  text?: string;
  html?: string;
  classes?: string;
}

export interface RadioFormGroup {
  classes?: string;
  attributes?: Record<string, string>;
}

export interface RadiosProps extends BaseComponentProps {
  name: string;
  items: RadioItem[];
  value?: string;
  idPrefix?: string;
  fieldset?: RadioFieldset;
  hint?: RadioHint;
  errorMessage?: RadioErrorMessage;
  formGroup?: RadioFormGroup;
}

export interface SelectItem {
  text: string;
  value?: string;
  selected?: boolean;
  disabled?: boolean;
  attributes?: Record<string, string>;
}

export interface SelectLabel {
  text?: string;
  html?: string;
  classes?: string;
  isPageHeading?: boolean;
  attributes?: Record<string, string>;
}

export interface SelectHint {
  text?: string;
  html?: string;
  classes?: string;
  attributes?: Record<string, string>;
}

export interface SelectErrorMessage {
  text?: string;
  html?: string;
  classes?: string;
}

export interface SelectFormGroup {
  classes?: string;
  attributes?: Record<string, string>;
}

export interface SelectProps extends BaseComponentProps {
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

export interface SkipLinkProps extends BaseComponentProps {
  href?: string;
  text?: string;
  html?: string;
}

export interface SummaryListAction {
  href: string;
  text?: string;
  html?: string;
  visuallyHiddenText?: string;
  attributes?: Record<string, string>;
}

export interface SummaryListActions {
  items: SummaryListAction[];
  classes?: string;
}

export interface SummaryListKey {
  text?: string;
  html?: string;
  classes?: string;
}

export interface SummaryListValue {
  text?: string;
  html?: string;
  classes?: string;
}

export interface SummaryListRow {
  key: SummaryListKey;
  value: SummaryListValue;
  actions?: SummaryListActions;
  classes?: string;
}

export interface SummaryListProps extends BaseComponentProps {
  rows: SummaryListRow[];
}

export interface TableCell {
  text?: string;
  html?: string;
  header?: string;
  classes?: string;
  format?: 'numeric' | 'sort-ascending' | 'sort-descending';
  colspan?: number;
  rowspan?: number;
  attributes?: Record<string, string>;
}

export interface TableHead {
  text?: string;
  html?: string;
  classes?: string;
  format?: 'numeric' | 'sort-ascending' | 'sort-descending';
  colspan?: number;
  rowspan?: number;
  attributes?: Record<string, string>;
}

export interface TablesProps extends BaseComponentProps {
  rows: TableCell[][];
  head?: TableHead[];
  caption?: string;
  captionClasses?: string;
  tableClasses?: string;
  responsive?: boolean;
  firstCellIsHeader?: boolean;
  panel?: boolean;
  panelClasses?: string;
  heading?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface TabPanel {
  text?: string;
  html?: string;
  attributes?: Record<string, string>;
}

export interface TabItem {
  label: string;
  id?: string;
  panel: TabPanel;
  attributes?: Record<string, string>;
}

export interface TabsProps extends BaseComponentProps {
  items: TabItem[];
  title?: string;
  idPrefix?: string;
  id?: string;
}

export interface TagProps extends BaseComponentProps {
  text?: string;
  html?: string;
  variant?: 'white' | 'grey' | 'green' | 'aqua-green' | 'blue' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow';
}

export interface TaskListStatus {
  text: string;
  variant?: 'completed' | 'incomplete' | 'cannot-start-yet' | 'in-progress';
  tag?: boolean;
}

export interface TaskListItem {
  title: string;
  titleHtml?: string;
  hint?: string;
  href?: string;
  status: TaskListStatus;
  id?: string;
  attributes?: Record<string, string>;
}

export interface TaskListProps extends BaseComponentProps {
  items: TaskListItem[];
}

export interface TextareaLabel {
  text?: string;
  html?: string;
  classes?: string;
  isPageHeading?: boolean;
  attributes?: Record<string, string>;
}

export interface TextareaHint {
  text?: string;
  html?: string;
  classes?: string;
  attributes?: Record<string, string>;
}

export interface TextareaErrorMessage {
  text?: string;
  html?: string;
  classes?: string;
}

export interface TextareaFormGroup {
  classes?: string;
  attributes?: Record<string, string>;
}

export interface TextareaProps extends BaseComponentProps {
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

export interface WarningCalloutProps extends BaseComponentProps {
  heading?: string;
  headingHtml?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  text?: string;
  html?: string;
}

export interface FooterLink {
  text?: string;
  html?: string;
  href: string;
  attributes?: Record<string, string>;
}

export interface FooterProps extends BaseComponentProps {
  links?: FooterLink[];
  copyright?: string;
  visuallyHiddenText?: string;
}

export interface NavigationItem {
  text?: string;
  html?: string;
  href: string;
  attributes?: Record<string, string>;
}

export interface HeaderProps extends BaseComponentProps {
  serviceName?: string;
  serviceUrl?: string;
  showNavigation?: boolean;
  navigationItems?: NavigationItem[];
  showSearch?: boolean;
  searchAction?: string;
  searchPlaceholder?: string;
  logoText?: string;
  logoUrl?: string;
  organisational?: boolean;
  transactional?: boolean;
}

export interface HeroAction {
  text?: string;
  html?: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  attributes?: Record<string, string>;
}

export interface HeroProps extends BaseComponentProps {
  heading?: string;
  headingHtml?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  text?: string;
  html?: string;
  backgroundImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  variant?: 'default' | 'emergency' | 'urgent' | 'success' | 'info';
  actions?: HeroAction[];
  minHeight?: string;
  textAlign?: 'left' | 'center' | 'right';
}
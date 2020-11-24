import { CxAnchor } from '@connex/core/anchor';
import { CxButton } from '@connex/core/button';
import { CxDialog } from '@connex/dialog/dialog';
import { CxDialogButtons } from '@connex/dialog/dialog-buttons';
import { CxDialogContent } from '@connex/dialog/dialog-content';
import { CxDialogHeader } from '@connex/dialog/dialog-header';
import { CxDivider } from '@connex/layout/divider';
import { CxIcon } from '@connex/core/icon';
import { CxInput } from '@connex/core/input';
import { CxMultiSelect } from '@connex/inputs/multi-select';
import { CxPlaceholder } from '@connex/core/placeholder';
import { CxRadio, CxRadioGroup, CxRadioLegend } from '@connex/core/radios';
import { CxSearch } from '@connex/inputs/search';
import { CxSelect } from '@connex/core/select';
import { CxSpinner } from '@connex/core/spinner';
import { CxSnackbarAlert } from '@connex/snackbar-alert/snackbar-alert';
import { CxTable } from '@connex/table/table';
import { CxTableBody } from '@connex/table/tbody';
import { CxTableHeader } from '@connex/table/thead';
import { CxTableData } from '@connex/table/td';
import { CxTableHeaderCell } from '@connex/table/th';
import { CxTableRow } from '@connex/table/tr';
import { CxTextarea } from '@connex/core/textarea';
import { CxTile, CxTileContent, CxTileHeader, CxTileSubHeader } from '@connex/core/tile';

interface BaseElement
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  children?: React.ReactNode;
  class?: string;
}

declare global {
  interface HTMLCxAElement extends BaseElement, Partial<CxAnchor> {}
  interface HTMLCxButtonElement extends BaseElement, Partial<CxButton> {}
  interface HTMLCxDialogElement extends BaseElement, Partial<CxDialog> {}
  interface HTMLCxDialogButtonsElement extends BaseElement, Partial<CxDialogButtons> {}
  interface HTMLCxDialogContentElement extends BaseElement, Partial<CxDialogContent> {}
  interface HTMLCxDialogHeaderElement extends BaseElement, Partial<CxDialogHeader> {}
  interface HTMLCxDividerElement extends BaseElement, Partial<CxDivider> {}
  interface HTMLCxIconElement extends BaseElement, Partial<CxIcon> {}
  interface HTMLCxInputElement extends BaseElement, Partial<CxInput> {}
  interface HTMLCxMultiSelectElement extends BaseElement, Partial<CxMultiSelect> {}
  interface HTMLCxPlaceholderElement extends BaseElement, Partial<CxPlaceholder> {}
  interface HTMLCxRadioElement extends BaseElement, Partial<CxRadio> {}
  interface HTMLCxRadioGroupElement extends BaseElement, Partial<CxRadioGroup> {}
  interface HTMLCxRadioLegendElement extends BaseElement, Partial<CxRadioLegend> {}
  interface HTMLCxSearchElement extends BaseElement, Partial<CxSearch> {}
  interface HTMLCxSelectElement extends BaseElement, Partial<CxSelect> {}
  interface HTMLCxSpinnerElement extends BaseElement, Partial<CxSpinner> {}
  interface HTMLCxSnackbarAlertElement extends BaseElement, Partial<CxSnackbarAlert> {}
  interface HTMLCxTableElement extends BaseElement, Partial<CxTable> {}
  interface HTMLCxTbodyElement extends BaseElement, Partial<CxTableBody> {}
  interface HTMLCxTheadElement extends BaseElement, Partial<CxTableHeader> {}
  interface HTMLCxTrElement extends BaseElement, Partial<CxTableRow> {}
  interface HTMLCxThElement extends BaseElement, Partial<CxTableHeaderCell> {}
  interface HTMLCxTdElement extends BaseElement, Partial<CxTableData> {}
  interface HTMLCxTextareaElement extends BaseElement, Partial<CxTextarea> {}
  interface HTMLCxTileElement extends BaseElement, Partial<CxTile> {}
  interface HTMLCxTileContentElement extends BaseElement, Partial<CxTileContent> {}
  interface HTMLCxTileHeaderElement extends BaseElement, Partial<CxTileHeader> {}
  interface HTMLCxTileSubheaderElement extends BaseElement, Partial<CxTileSubHeader> {}

  namespace JSX {
    interface IntrinsicElements {
      // legacy connex types
      'cx-error-state': any;

      // new connex types
      'cx-a': Omit<HTMLCxAElement, 'className'>;
      'cx-button': Omit<HTMLCxButtonElement, 'className'>;
      'cx-dialog': Omit<HTMLCxDialogElement, 'className'>;
      'cx-dialog-buttons': Omit<HTMLCxDialogButtonsElement, 'className'>;
      'cx-dialog-content': Omit<HTMLCxDialogContentElement, 'className'>;
      'cx-dialog-header': Omit<HTMLCxDialogHeaderElement, 'className'>;
      'cx-divider': Omit<HTMLCxDividerElement, 'className'>;
      'cx-icon': Omit<HTMLCxIconElement, 'className'>;
      'cx-input': Omit<HTMLCxInputElement, 'className'>;
      'cx-multi-select': Omit<HTMLCxMultiSelectElement, 'className'>;
      'cx-placeholder': Omit<HTMLCxPlaceholderElement, 'className'>;
      'cx-radio': Omit<HTMLCxRadioElement, 'className'>;
      'cx-radio-group': Omit<HTMLCxRadioGroupElement, 'className'>;
      'cx-radio-legend': Omit<HTMLCxRadioLegendElement, 'className'>;
      'cx-search': Omit<HTMLCxSearchElement, 'className'>;
      'cx-select': Omit<HTMLCxSelectElement, 'className'>;
      'cx-spinner': Omit<HTMLCxSpinnerElement, 'className'>;
      'cx-snackbar-alert': Omit<HTMLCxSnackbarAlertElement, 'className'>;
      'cx-table': Omit<HTMLCxTableElement, 'className'>;
      'cx-tbody': Omit<HTMLCxTbodyElement, 'className'>;
      'cx-thead': Omit<HTMLCxTheadElement, 'className'>;
      'cx-tr': Omit<HTMLCxTrElement, 'className'>;
      'cx-th': Omit<HTMLCxThElement, 'className'>;
      'cx-td': Omit<HTMLCxTdElement, 'className'>;
      'cx-textarea': Omit<HTMLCxTextareaElement, 'className'>;
      'cx-tile': Omit<HTMLCxTileElement, 'className'>;
      'cx-tile-content': Omit<HTMLCxTileContentElement, 'className'>;
      'cx-tile-header': Omit<HTMLCxTileHeaderElement, 'className'>;
      'cx-tile-subheader': Omit<HTMLCxTileSubheaderElement, 'className'>;
    }
  }
}

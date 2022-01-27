import _Transfer from './transfer';
import { withInstall } from '../utils/withInstall';
import mapProps from '../utils/map-props';
import { TdTransferProps } from './type';

import './style';

export type TransferProps = TdTransferProps;

export const Transfer = withInstall(
  mapProps([
    {
      name: 'checked',
      event: ['update:checked'],
    },
    {
      name: 'value',
      event: ['change'],
      alias: ['modelValue'],
    },
  ])(_Transfer),
);

export default Transfer;

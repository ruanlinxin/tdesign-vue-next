import _Tag from './tag';
import _CheckTag from './check-tag';
import mapProps from '../utils/map-props';
import { withInstall } from '../utils/withInstall';
import { TdTagProps } from './type';

import './style';

export * from './type';
export type TagProps = TdTagProps;

export const Tag = withInstall(_Tag);
export const CheckTag = withInstall(
  mapProps([
    {
      name: 'checked',
      event: 'change',
    },
  ])(_CheckTag),
);
export default Tag;

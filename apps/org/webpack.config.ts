import { withReact } from '@nx/react';
import { composePlugins, withNx } from '@nx/webpack';

export default composePlugins(withNx(), withReact());

import * as React from 'react';

export * from './components';
export { default as describeConformance } from './describeConformance';
export { default as describeConformanceUnstyled } from './describeConformanceUnstyled';
export { default as describeJoyColorInversion } from './describeJoyColorInversion';
export { default as createDescribe } from './createDescribe';
export * from './createRenderer';
export { default as createMount } from './createMount';
export { default as findOutermostIntrinsic, wrapsIntrinsicElement } from './findOutermostIntrinsic';
export {
  default as focusVisible,
  simulatePointerDevice,
  programmaticFocusTriggersFocusVisible,
} from './focusVisible';
export {} from './initMatchers';
export * as fireDiscreteEvent from './fireDiscreteEvent';
export * as userEvent from './userEvent';

/**
 * Set to true if console logs during [lifecycles that are invoked twice in `React.StrictMode`](https://react.dev/learn/render-and-commit) are supressed.
 * Useful for asserting on `console.warn` or `console.error` via `toErrorDev()`.
 */
export const strictModeDoubleLoggingSupressed = React.version.startsWith('17');

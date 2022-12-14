/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export const DIVIDER = Object.freeze({
  horizontal: 'horizontal',
  vertical: 'vertical',
  grid: 'grid',
  clean: 'clean',
} as const);

export const SIZE = Object.freeze({
  compact: 'compact',
  default: 'default',
  spacious: 'spacious',
} as const);

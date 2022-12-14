/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export const KIND = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
} as const;

export const SHAPE = {
  default: 'default',
  pill: 'pill',
  round: 'round',
  circle: 'circle',
  square: 'square',
} as const;

export const SIZE = {
  mini: 'mini',
  default: 'default',
  compact: 'compact',
  large: 'large',
} as const;

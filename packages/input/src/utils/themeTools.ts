import { darken } from 'polished';

import { colors } from '@xcritical/theme';

import { IBaseInputTheme } from '../interfaces';


export const generateApperance = ({
  background,
  color,
  height,
  boxShadowColor,
  padding,
  font,
  border,
  borderRadius,
  transition,
  borderColor,
}: any): IBaseInputTheme => ({
  backgroundColor: background,
  color,
  height,
  boxShadowColor: boxShadowColor || darken(0.95, background),
  padding,
  font,
  borderColor,
  borderRadius,
  transition,
  hover: {
    borderColor: darken(0.1, borderColor),
    color,
    height,
    boxShadowColor: boxShadowColor || darken(0.95, background),
    padding,
    font,
    border,
    borderRadius,
    transition,
  },
  focus: {
    borderColor: darken(0.1, borderColor),
    color,
    height,
    boxShadowColor: boxShadowColor || darken(0.95, background),
    padding,
    font,
    border,
    borderRadius,
    transition,
  },
  selected: {
    borderColor: darken(0.1, borderColor),
    color,
    height,
    boxShadowColor: boxShadowColor || darken(0.95, background),
    padding,
    font,
    border,
    borderRadius,
    transition,
  },
  active: {
    borderColor: darken(0.1, borderColor),
    color,
    height,
    boxShadowColor: boxShadowColor || darken(0.95, background),
    padding,
    font,
    border,
    borderRadius,
    transition,
  },
  disabled: {
    borderColor,
    color,
    height,
    boxShadowColor: boxShadowColor || darken(0.95, background),
    padding,
    font,
    border,
    borderRadius,
    transition,
  },
  invalid: {
    backgroundColor: colors.WARNING,
    color,
    height,
    boxShadowColor: boxShadowColor || darken(0.95, background),
    padding,
    font,
    border,
    borderRadius,
    transition,
  },
});

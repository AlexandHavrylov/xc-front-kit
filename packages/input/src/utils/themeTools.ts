import { darken } from 'polished';
import { InputTheme } from '../interfaces';


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
}: any): InputTheme  => ({
  backgroundColor: background,
  color,
  height,
  boxShadowColor: boxShadowColor || darken(0.95, background),
  padding,
  font,
  border,
  borderRadius,
  transition,
  hover: {
    backgroundColor: darken(0.1, background),
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
    backgroundColor: darken(0.1, background),
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
    backgroundColor: darken(0.1, background),
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
    backgroundColor: darken(0.1, background),
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
    backgroundColor,
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
    backgroundColor,
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

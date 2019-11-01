import React, {
  useState, useRef, useEffect, useCallback, useContext, useMemo,
} from 'react';
import Select from 'react-select';

import { ThemeContext } from 'styled-components';
import { IThemeNamespace, ITheme } from '@xcritical/theme';
import { selectThemeNamespace, selectThemeStyle } from './theme';
import {
  getFormatOptionLabel,
  ClearIndicator,
  MultiValueRemove,
  DropdownIndicator,
} from './styled';
import { convertToOptions, findOptionByValue, themeConverter } from './utils';
import { SelectProps, ISelectBaseTheme } from './interfaces';


export const PureSelect: React.FC<SelectProps> = React.memo(({
  className,
  disabled = false,
  isMulti = false,
  isSearchable = false,
  isRTL = false,
  isCloseMenuOnSelect = true,
  isHideSelectedOptions = true,
  isControlShouldRenderValue = true,
  appearance = 'default',
  baseAppearance = 'default',
  shouldFitContainer = false,
  items = {},
  value,
  placeholder,
  onChange,
  theme = {
    [selectThemeNamespace]: selectThemeStyle,
  },
  ...rest
}) => {
  const themeContext = useContext<IThemeNamespace<ITheme<ISelectBaseTheme>>>(ThemeContext);
  const innerTheme = theme || themeContext;

  const selectRef = useRef<any>();
  const formatOptionLabel = useRef(getFormatOptionLabel(
    innerTheme,
    appearance,
    baseAppearance,
    isRTL,
  ));

  const options = useMemo(() => convertToOptions(items), [items]);
  const [currentOption, setCurrentOption] = useState(findOptionByValue(value, options));

  useEffect(() => {
    setCurrentOption(findOptionByValue(value, options));
  }, [options, value]);

  const styles = useRef(themeConverter(
    innerTheme,
    appearance,
    baseAppearance,
    shouldFitContainer,
  ));

  useEffect(() => {
    styles.current = themeConverter(
      innerTheme,
      appearance,
      baseAppearance,
      shouldFitContainer,
    );
  }, [innerTheme, appearance, baseAppearance, shouldFitContainer]);

  useEffect(() => {
    formatOptionLabel.current = getFormatOptionLabel(
      innerTheme,
      appearance,
      baseAppearance,
      isRTL,
    );
  }, [innerTheme, appearance, baseAppearance, isRTL]);


  const onItemChanged = useCallback((selectedOption, action) => {
    setCurrentOption(selectedOption);

    if (onChange) {
      const selectedValue = !isMulti && selectedOption ? selectedOption.value : selectedOption;

      onChange(selectedValue, action);
    }
  }, [isMulti, onChange]);

  return (
    <Select
      ref={ selectRef }
      className={ className }
      classNamePrefix={ className }
      value={ currentOption }
      onChange={ onItemChanged }
      options={ options }
      formatOptionLabel={ formatOptionLabel.current }
      styles={ styles.current }
      isDisabled={ disabled }
      isMulti={ isMulti }
      isSearchable={ isSearchable }
      isRtl={ isRTL }
      controlShouldRenderValue={ isControlShouldRenderValue }
      closeMenuOnSelect={ isCloseMenuOnSelect }
      hideSelectedOptions={ isHideSelectedOptions }
      placeholder={ placeholder }
      components={ {
        DropdownIndicator,
        ClearIndicator,
        MultiValueRemove,
        ...rest.components,
      } }
      { ...rest }
    />
  );
});

export default PureSelect;

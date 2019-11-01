import React from 'react';
import { components } from 'react-select';

import { ChevronDown, ChevronUp } from '../Icons';
import { DropdownIndicatorProps } from '../interfaces';


const DropdownIndicator = (props: DropdownIndicatorProps) => {
  const { getStyles } = props;
  const dropdownIndicatorStyles = getStyles('dropdownIndicator', props);

  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator { ...props }>
        {
          props.selectProps.menuIsOpen
            ? <ChevronUp fill={ dropdownIndicatorStyles && dropdownIndicatorStyles.color } />
            : <ChevronDown fill={ dropdownIndicatorStyles && dropdownIndicatorStyles.color } />
        }
      </components.DropdownIndicator>
    )
  );
};

export default DropdownIndicator;

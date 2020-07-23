import React, {
  FC, createRef, useState, useEffect, useCallback, memo,
} from 'react';
import { withTheme } from 'styled-components';


import { getInlineEditUncontrolled } from './InlineEditUncontrolled';
import { IInlineEditProps } from './interfaces';


const getPureInlineEdit: <TFieldValue>() => FC<
IInlineEditProps<TFieldValue>
> = function f<TFieldValue>() {
  return ({
    appearance = 'default',
    startWithEditViewOpen = false,
    onConfirm,
    onCancel,
    defaultValue,
    readView,
    editView,
    disabled = false,
    invalid = false,
    error,
    isEditing,
    onIsEditingChange,
    ...rest
  }: IInlineEditProps<TFieldValue>) => {
    const editViewRef = createRef<HTMLElement>();
    const [isEditingAuto, setIsEditingAutoMode] = useState(startWithEditViewOpen);
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
      if (startWithEditViewOpen && editViewRef.current) {
        editViewRef.current.focus();
      }
    }, [startWithEditViewOpen, editViewRef]);

    useEffect(() => {
      if (isEditingAuto && editViewRef.current) {
        editViewRef.current.focus();
      }
    }, [isEditingAuto, editViewRef]);

    useEffect(() => {
      if (invalid && isEditing === undefined) {
        setIsEditingAutoMode(true);
      }
    });

    const handleConfirm = useCallback((newValue: TFieldValue): void => {
      setValue(newValue);
      onConfirm(newValue);
      if (isEditing) return;
      setIsEditingAutoMode(false);
    }, [onConfirm, onIsEditingChange]);

    const handleCancel = useCallback((): void => {
      setValue(defaultValue);
      if (onCancel) {
        onCancel();
        return;
      }
      setIsEditingAutoMode(false);
    }, [onCancel, defaultValue]);

    const handleEditRequested = useCallback((): void => {
      if (onIsEditingChange) {
        onIsEditingChange(true);
        return;
      }
      setIsEditingAutoMode(true);
    }, []);

    const InlineEditUncontrolled = getInlineEditUncontrolled<TFieldValue>();

    return (
      <InlineEditUncontrolled
        { ...rest }
        invalid={ invalid }
        error={ error }
        defaultValue={ value }
        editView={ editView }
        readView={ readView }
        onConfirm={ handleConfirm }
        onCancel={ handleCancel }
        isEditing={ isEditing !== undefined ? isEditing : isEditingAuto }
        disabled={ disabled }
        onEditRequested={ handleEditRequested }
        appearance={ appearance }
      />
    );
  };
};

export const PureInlineEdit = getPureInlineEdit();

export const InlineEdit = memo(withTheme(PureInlineEdit));

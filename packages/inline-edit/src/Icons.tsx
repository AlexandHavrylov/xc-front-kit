import React, { ReactElement } from 'react';


export const ConfirmIcon = (): ReactElement => (
  <svg style={ { width: '18px', height: '18px' } } viewBox="0 0 24 24">
    <path fill="#000000" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
  </svg>
);

export const CancelIcon = (): ReactElement => (
  <svg style={ { width: '18px', height: '18px' } } viewBox="0 0 24 24">
    <path fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
  </svg>
);

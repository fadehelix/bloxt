import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { IButton } from './index';

function Button(props: IButton) {
  const { text, icon, variant, ...rest } = props;
  return (
    // @ts-ignore
    <MuiButton variant={variant} startIcon={icon} size="medium" {...rest}>
      {text}
    </MuiButton>
  );
}

export default Button;

import { FC } from 'react';
import { Box } from '@mui/material';

type Props = {
  readonly isNew: boolean;
}

export const DropLabel: FC<Props> = ({ isNew }) => {

  return (
    <Box component="span" sx={{ color: isNew ? '#ffcf00' : '#0be881' }}>
      {isNew ? 'New' : 'Up'}
    </Box>
  );
};

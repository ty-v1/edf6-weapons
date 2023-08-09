import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from '~/component/Header';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Container sx={{ pt: 8 }}>
        <Box sx={{ my: 4 }}>
          {children}
        </Box>
      </Container>
    </>
  );
}

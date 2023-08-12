import { AppBar, Button, Container, Toolbar } from '@mui/material';

export default function Header() {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Button sx={{ color: 'white' }} href='/'>ドロップ一覧</Button>
          <Button sx={{ color: 'white' }} href='/drop/register/ranger'>レンジャードロップ登録</Button>
          <Button sx={{ color: 'white' }} href='/drop/register/air-raider'>エアレイダードロップ登録</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

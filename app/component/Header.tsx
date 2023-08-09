import { AppBar, Button, Container, Toolbar } from '@mui/material';

export default function Header() {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Button sx={{ color: 'white' }} href='/'>ドロップ一覧</Button>
          <Button sx={{ color: 'white' }} href='/ranger/register'>レンジャードロップ登録</Button>
          <Button sx={{ color: 'white' }} href='/air-raider/register'>エアレイダードロップ登録</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

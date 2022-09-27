import { Button, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import useModalRoute from "../hooks/useModalRoute";

const Next = () => {
  const { startModalPath } = useModalRoute();

  return (
    <Container maxWidth="lg">
      <h2>次ページ</h2>
      <p>
        EY-Officeの教育の特色は、長年実際にサービスやアプリ開発を行ってきた開発者が講師としてリモート、または御社に出向き御社の課題・状況に合わせてソフトウェア開発者のスキルを上げる教育行う点です。
      </p>
      <Stack direction="row" spacing={2}>
        <Button onClick={() => startModalPath("/modal-top")} variant="contained">
          モーダルダイアログ
        </Button>
        <Button component={Link} to="/" variant="outlined">
          戻る
        </Button>
      </Stack>
    </Container>
  );
};

export default Next;

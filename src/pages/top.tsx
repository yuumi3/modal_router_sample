import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <Container maxWidth="lg">
      <h2>トップページ</h2>
      <p>
        EY-Officeの教育の特色は、長年実際にサービスやアプリ開発を行ってきた開発者が講師としてリモート、または御社に出向き御社の課題・状況に合わせてソフトウェア開発者のスキルを上げる教育行う点です。
      </p>
      <Button component={Link} to="/next" variant="contained">
        次へ
      </Button>
    </Container>
  );
};

export default Top;

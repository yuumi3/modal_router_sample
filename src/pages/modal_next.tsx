import { Button, DialogActions, DialogContentText } from "@mui/material";
import useModalRoute from "../hooks/useModalRoute";

const ModalNext = () => {
  const { endModalPath } = useModalRoute();
  return (
    <>
      <DialogContentText>
        <h2>次ページ</h2>
        EY-Officeの教育の特色は、長年実際にサービスやアプリ開発を行ってきた開発者が講師としてリモート、または御社に出向き御社の課題・状況に合わせてソフトウェア開発者のスキルを上げる教育行う点です。
      </DialogContentText>
      <DialogActions>
        <Button onClick={() => endModalPath()} variant="outlined">
          閉じる
        </Button>
      </DialogActions>
    </>
  );
};

export default ModalNext;

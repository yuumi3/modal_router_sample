import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Outlet } from "react-router-dom";
import useModalRoute from "../hooks/useModalRoute";

const Modal = () => {
  const { endModalPath, isModalOpened } = useModalRoute();

  const closeModal = () => {
    endModalPath();
  };

  return (
    <Dialog open={isModalOpened()} onClose={closeModal}>
      <DialogTitle>モーダルダイアログ</DialogTitle>
      <DialogContent>
        <Outlet />
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

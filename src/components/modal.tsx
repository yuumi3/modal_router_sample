import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import useModalRoute from "../hooks/useModalRoute";

const Modal = () => {
  const [open, setOpen] = useState(true);
  const { endModalPath } = useModalRoute();

  const closeModal = () => {
    endModalPath();
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={closeModal}>
      <DialogTitle>モーダルダイアログ</DialogTitle>
      <DialogContent>
        <Outlet />
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

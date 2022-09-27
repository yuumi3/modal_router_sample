import { Route, Routes, useLocation } from "react-router-dom";
import { BackgroundLocation } from "./hooks/useModalRoute";
import Modal from "./components/modal";
import Next from "./pages/next";
import Top from "./pages/top";
import ModalNext from "./pages/modal_next";
import ModalTop from "./pages/modal_top";

const App = () => {
  const location = useLocation();
  const background = (location.state as BackgroundLocation)?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path="/next" element={<Next />} />
        <Route path="/" element={<Top />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="/" element={<Modal />}>
            <Route path="/modal-top" element={<ModalTop />} />
            <Route path="/modal-next" element={<ModalNext />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;

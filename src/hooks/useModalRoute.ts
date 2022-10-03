import { Location, useLocation, useNavigate } from "react-router-dom";
import { atom, useRecoilState } from "recoil";

export type BackgroundLocation = { background: Location | undefined };

const backgroundLocationState = atom<BackgroundLocation>({
  key: "backgroundLocation",
  default: {
    background: undefined
  }
});

const useModalRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [backgroundLocation, setBackgroundLocation] = useRecoilState(backgroundLocationState);

  const startModalPath = (to: string) => {
    setBackgroundLocation({ background: location });
    navigate(to, { state: { background: location } });
  };

  const endModalPath = () => {
    const background = backgroundLocation.background;
    setBackgroundLocation({ background: undefined });
    navigate(`${background?.pathname.replace(/\/+$/, "")}/${background?.search}`);
  };

  const goModalPath = (to: string) => {
    navigate(to, { state: backgroundLocation });
  };

  const isModalOpened = (): boolean => {
    return Boolean(backgroundLocation.background);
  };

  return { startModalPath, endModalPath, goModalPath, isModalOpened };
};

export default useModalRoute;

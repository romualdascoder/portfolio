import ReactGA from "react-ga4";

const useGaTracker = () => {
  ReactGA.initialize("G-WT67226195");
  ReactGA.send({ hitType: "pageview", page: "/" });
};

export default useGaTracker;

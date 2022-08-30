import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { AppProvider } from "./context/AppProvider";
import { ErrorPage } from "./page/ErrorPage";
import { HomePage } from "./page/HomePage";

const Router = () => {
  const { error } = useContext(AppContext);
  return <>{error === " " ? <ErrorPage error={error} /> : <HomePage />}</>;
};

export const App = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};

export default App;

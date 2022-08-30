import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { AppProvider } from "./context/AppProvider";
import { ErrorPage } from "./page/ErrorPage";
import { HomePage } from "./page/HomePage";

const Router = () => {
  const { error } = useContext(AppContext);
  return (
    <main className="page">{error === " " ? <ErrorPage error={error} /> : <HomePage />}</main>
  );
};

export const App = () => {
  return (
    <AppProvider>
      <header>
        <h1>Pronóstico del tiempo</h1>
      </header>
      <Router />
    </AppProvider>
  );
};

export default App;

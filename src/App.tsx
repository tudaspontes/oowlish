import { Provider } from "react-redux";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { store } from "./store/storeConfig";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <Provider store={store}>
      <Header />
      <Dashboard />
      <GlobalStyle  />
    </Provider>
  );
}
import { Provider } from "react-redux";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { store } from "./store/storeConfig";
import { GlobalStyle } from "./styles/global";
import { TimeTableProvider } from "./TimeTableContext";

export function App() {
  return (
    <Provider store={store}>
      <TimeTableProvider>
        <Header />
        <Dashboard />
        <GlobalStyle />
      </TimeTableProvider>
    </Provider>
  );
}

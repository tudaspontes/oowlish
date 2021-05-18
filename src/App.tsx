import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header'
import { Dashboard } from "./components/Dashboard";
import { TimeTableProvider } from "./TimeTableContext";

export function App() {
  
  return (
    <TimeTableProvider>
      <Header />        
      <Dashboard />
      <GlobalStyle />
    </TimeTableProvider>
  );
}

import { useSelector } from "react-redux";
import { RootState } from "../../store/storeConfig";
import { Container } from "../Summary/styles";
import { format } from 'date-fns'

export function Summary() {
  const { timeTables }: any = useSelector((state: RootState) => state.rootReducer);

  return (
    <Container>
      <div>
        <header>
          <p>Worked Time</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-1 w-1" fill="none" viewBox="0 0 24 24" stroke="orange">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </header>
        <strong>{timeTables[0].worked ?  
                format(timeTables[0].worked, "mm:ss") : "-"}</strong>
      </div>
      <div>
        <header>
          <p>Expected Work Time</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-1 w-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </header>
        <strong>{format(120, "120:00:00")}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Remaining Work Time</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-1 w-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </header>
        <strong>{timeTables[0].worked ? timeTables[0].worked - 120 : "-"}</strong>
      </div>
    </Container>
  )
}
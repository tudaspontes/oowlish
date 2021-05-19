import { useDispatch, useSelector } from "react-redux";
import { setTimeAction } from "../../store/actionCreator";
import { RootState } from "../../store/storeConfig";
import { calcularDiferencaDeHorario } from "../../utils/Utils";
import { Container } from "./styles";

interface TimeButtonProps {
  statusIni: number;
}

export function TimeButton({ statusIni }: TimeButtonProps) {
  const dispatch = useDispatch();

  const { timeTables } = useSelector((state: RootState) => state.rootReducer);

  function handleButtonEntry() {
    const dados = {
        passo: 2,
        day: new Date(),
        entry: new Date(),    
        launchBreakStart: false,    
        launchBreakEnd: false,    
        exit: false,    
        worked: false,    
      };

    dispatch(setTimeAction([dados
    ]));

    // salvarDados(dados)
  }

  function handleButtonLaunchIni() {
    dispatch(setTimeAction([ 
      {
        ...timeTables[0],  
        passo: 3,  
        launchBreakStart: new Date(),    
      }
    ]));
  }

  function handleButtonLaunchEnd() {
    dispatch(setTimeAction([ 
      {
        ...timeTables[0],  
        passo: 4,  
        launchBreakEnd: new Date(),    
      }
    ]));
  }

  function handleButtonExit() {

    const timeTablesObj = timeTables[0];
    const exit = new Date();

    dispatch(setTimeAction([ 
      {
        ...timeTablesObj,  
        passo: 5,  
        exit,
        worked: calcularDiferencaDeHorario(timeTablesObj.entry, timeTablesObj.launchBreakStart, 
          timeTablesObj.launchBreakEnd, exit)
      }
    ]));
  }

  return (
    <Container>
      {timeTables[0].passo === 1 && (
        <button type="button" onClick={handleButtonEntry}>
          Entry Time
        </button>
      )}

      {timeTables[0].passo === 2 && (
        <button onClick={handleButtonLaunchIni}>Begin Launch Break</button>
      )}

      {timeTables[0].passo === 3 && (
        <button onClick={handleButtonLaunchEnd}>End Launch Break</button>
      )}

      {timeTables[0].passo === 4 &&
        <button type="button" onClick={handleButtonExit}>Exit Time</button>}

      {timeTables[0].passo === 5 && (
        <button onClick={() => {}} disabled>
          {" "}
          See you tomorrow 😉{" "}
        </button>
      )}
    </Container>
  );
}

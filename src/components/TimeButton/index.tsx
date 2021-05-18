import { useDispatch, useSelector } from "react-redux";
import { setTimeAction } from "../../store/actionCreator";
import { RootState } from "../../store/storeConfig";
import { Container } from "./styles";

interface TimeButtonProps {
  statusIni: number;
}

export function TimeButton({ statusIni }: TimeButtonProps) {
  const dispatch = useDispatch();

  const time = useSelector((state: RootState) => state.rootReducer);

  function handleButton() {
    dispatch(setTimeAction(new Date().getTime()));
  }

  console.log("time:", time);

  return (
    <Container>
      {statusIni === 0 && (
        <button type="button" onClick={handleButton}>
          Entry Time
        </button>
      )}

      {statusIni === 1 && (
        <button onClick={handleButton}>Begin Launch Break</button>
      )}

      {statusIni === 2 && (
        <button onClick={handleButton}>End Launch Break</button>
      )}

      {statusIni === 3 && <button onClick={handleButton}>Exit Time</button>}

      {statusIni >= 4 && (
        <button onClick={handleButton} disabled>
          {" "}
          See you tomorrow 😉{" "}
        </button>
      )}
    </Container>
  );
}

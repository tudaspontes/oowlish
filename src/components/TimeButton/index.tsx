import { ReactNode, useState } from 'react'
import { Container } from "./styles"

interface TimeButtonProps {
  status: number;
  children: ReactNode;
}

export function TimeButton({}:TimeButtonProps) {
  const [status, setStatus] = useState(0)

  function handleButton() {
    setStatus(status + 1)
  }

  return(
    <Container>
      {(status === 0) &&
      <button onClick={handleButton}>Entry Time</button>}
      
      {(status === 1) &&
      <button onClick={handleButton}>Begin Launch Break</button>}

      {(status === 2) &&
      <button onClick={handleButton}>End Launch Break</button>}

      {(status === 3) &&
      <button onClick={handleButton}>Exit Time</button>}

      {(status >= 4) &&
      <button onClick={handleButton} disabled> See you tomorrow 😉 </button>}
    </Container>
  );
}

import { FormEvent, useState } from "react";
import { Container } from "./styles";


export function TimeInput() {

  const [day, setDay] = useState('0');
  const [entry, setEntry] = useState('0');
  const [launchStart, setLaunchStart] = useState('0');
  const [launchEnd, setLaunchEnd] = useState('0');
  const [exit, setExit] = useState('0');

  function handleTimeInput(event: FormEvent) {
    event.preventDefault();

    console.log({
      day,
      entry,
      launchStart,
      launchEnd,
      exit
    })
  }
  return(
    <Container onClick={handleTimeInput}>
      <input
        type="date"
        name="day"     
        onClick={() => setDay}
      />

      <input
        type="datetime"
        name="entry-time"
        value={entry}
        onChange={event => setEntry(event.target.value)}
      />

      <input
        type="datetime"
        name="launch-start"
        value={launchStart}
        onChange={event => setLaunchStart(event.target.value)}
      />
      
      <input
        type="datetime"
        name="launch-end"
        value={launchEnd}
        onChange={event => setLaunchEnd(event.target.value)}
      />
      
      <input
        type="datetime"
        name="exit-time"
        value={exit}
        onChange={event => setExit(event.target.value)}
      />

    </Container>
  )
}
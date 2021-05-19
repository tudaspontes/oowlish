import { Container } from "./styles";
import { useSelector } from "react-redux"; 
import { RootState } from "../../store/storeConfig";
import { format } from 'date-fns-tz'

export function TimeTable() {
  const { timeTables }: any = useSelector((state: RootState) => state.rootReducer);
  console.log('timeTables:', timeTables);
  
  
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Entry time</th>
            <th>Launch break starts</th>
            <th>Launch break ends</th>
            <th>Exit time</th>
            <th>Worked time</th>
          </tr>
        </thead>

        <tbody>
          {timeTables.map((timeTable: any, index: number) => (
            <tr key={index}>
              <td>{timeTable.day ?  
                format(timeTable.day, "P") : "-"}
              </td>
              <td>{timeTable.entry ?  
                format(timeTable.entry, "pp") : "-"}
              </td>
              <td>{timeTable.launchBreakStart ?  
                format(timeTable.launchBreakStart, "pp") : "-"}
              </td>
              <td>{timeTable.launchBreakEnd ?  
                format(timeTable.launchBreakEnd, "pp") : "-"}
              </td>
              <td>{timeTable.exit ?  
                format(timeTable.exit, "pp") : "-"}
              </td>
              <td>{timeTable.worked ?  
                format(timeTable.worked, "mm:ss") : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
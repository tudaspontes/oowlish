import { differenceInMilliseconds } from "date-fns"

export function calcularDiferencaDeHorario(entry, launchIni, launchEnd, exit) {
  const tempoAlmoco = differenceInMilliseconds(launchEnd, launchIni)
  const tempoTrabalho = differenceInMilliseconds(exit, entry)
  const worked = tempoTrabalho - tempoAlmoco
  
  return new Date(worked);
  
}

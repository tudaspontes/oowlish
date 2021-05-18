import logoImg from '../../assets/logo.png'
import { TimeButton } from '../TimeButton'
import { TimeInput } from '../TimeInput'
import { Container, Content } from './styles'

interface HeaderProps {
 
}

export function Header({  }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <TimeButton status={0}>         
         <TimeInput />
        </TimeButton>
      </Content>
    </Container>
  )
}
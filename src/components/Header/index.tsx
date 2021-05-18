import logoImg from "../../assets/logo.png";
import { TimeButton } from "../TimeButton";
import { Container, Content } from "./styles";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <TimeButton statusIni={0} />
      </Content>
    </Container>
  );
}

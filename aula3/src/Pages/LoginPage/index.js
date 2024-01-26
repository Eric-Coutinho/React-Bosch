import LoginComponent from "../../Components/LoginComponent";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function LoginPage() {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <LoginComponent />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

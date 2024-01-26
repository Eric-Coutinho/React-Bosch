import RegisterComponent from "../../Components/RegisterComponent";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function RegisterPage() {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <RegisterComponent />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

import { Link, NavLink } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Space, CardSpace, Text, Title } from "./styled";

function AccessDenied() {
  return (
    <Space>
        <CardSpace>
            <Title>
                403
            </Title>
                <Text>
                    Access Denied :(
                </Text>

        </CardSpace>
    </Space>
  );
}

export default AccessDenied;

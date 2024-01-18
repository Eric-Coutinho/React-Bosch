import { Link, NavLink } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Space, CardSpace, Text, Title } from "./styled";

function NotFoundCard() {
  return (
    <Space>
        <CardSpace>
            <Title>
                404
            </Title>
                <Text>
                    Página não encontrada :(
                </Text>

        </CardSpace>
    </Space>
  );
}

export default NotFoundCard;

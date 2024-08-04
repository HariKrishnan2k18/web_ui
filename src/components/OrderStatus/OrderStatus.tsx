import {
  Container,
  Card,
  CardImage,
  Value,
  PercentDiv,
  Count,
} from "./styled.components";
import { FaShoppingBasket } from "react-icons/fa";
import { BsBagCheckFill } from "react-icons/bs";
import { BsBagXFill } from "react-icons/bs";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { HiCurrencyDollar } from "react-icons/hi2";
import { OrderStatusprops } from "../../utils/interface/interface";
import { ReactNode } from "react";
import { largeIcon as size } from "../../utils/theme/theme";

function OrderStatus(props: OrderStatusprops) {
  const Icon: { [key: number]: { element: ReactNode; color: string } } = {
    1: {
      element: <FaShoppingBasket size={size} color="blue" />,
      color: "#101069",
    },
    2: {
      element: <BsBagCheckFill size={size} color="green" />,
      color: "#325312",
    },
    3: { element: <BsBagXFill size={size} color="red" />, color: "#680b0b" },
    4: {
      element: <HiCurrencyDollar size={size} color="fuchsia" />,
      color: "#644b4b",
    },
  };

  const Percent = (v: number) => {
    return v < 0 ? <BiSolidDownArrow /> : <BiSolidUpArrow />;
  };
  return (
    <Container>
      {props.data.map((data) => (
        <Card>
          <CardImage color={Icon[data.id].color}>
            {Icon[data.id]?.element}
          </CardImage>
          <div>{data.content}</div>
          <Value>
            <Count>{data.count} </Count>
            <PercentDiv color={data.percent > 0 ? "green" : "red"}>
              <span>{Percent(data.percent)}</span>
              <span>{`${Math.abs(data.percent)}%`}</span>
            </PercentDiv>
          </Value>
        </Card>
      ))}
    </Container>
  );
}

export default OrderStatus;

import { RecentOrderProps } from "../../utils/interface/interface";
import {
  BodyRow,
  Container,
  CustomerImg,
  ImgTag,
  Table,
  Thead,
  Status,
  Title,
} from "./styled.components";

function RecentOrder(props: RecentOrderProps) {
  return (
    <Container>
      <Title>Recent Orders</Title>
      <Table>
        <Thead>
          <div>Customer</div>
          <div>Order No.</div>
          <div>Amount</div>
          <div>Status</div>
        </Thead>
        {props.data.map((e) => (
          <BodyRow>
            <ImgTag>
              <CustomerImg src={e.img} alt="img" width="35px" height="35px" />
              <span> {e.name} </span>
            </ImgTag>
            <div>{e.orderno}</div>
            <div>{e.amount}</div>
            <div>
              <Status
                color={e.status === "delivered" ? "#001b00" : "#e82424"}
                background={e.status === "delivered" ? "#4e964e" : "#461d1d"}
              >
                {e.status}
              </Status>
            </div>
          </BodyRow>
        ))}
      </Table>
    </Container>
  );
}

export default RecentOrder;

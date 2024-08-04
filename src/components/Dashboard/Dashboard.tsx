import OrderStatus from "../OrderStatus/OrderStatus";
import { mockData } from "../../mockdata/mockdata";
import NetProfit from "../NetProfit/NetProfit";
import { Wrappper, Container, Title } from "./styled.components";
import ActivityChart from "../ActivityChart/ActivityChart";
import Category from "../Category/Category";
import RecentOrder from "../RecentOrder/RecentOrder";
import Feedback from "../Feedback/Feedback";

function Dashboard() {
  return (
    <Container>
      <Title> Dashboard</Title>
      <Wrappper>
        <OrderStatus data={mockData?.order} />
        <NetProfit data={mockData?.netprofit} />
        <ActivityChart data={mockData?.activity} />
        <Category />
        <RecentOrder data={mockData?.recentorders} />
        <Feedback data={mockData?.feedback} />
      </Wrappper>
    </Container>
  );
}

export default Dashboard;

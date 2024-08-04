import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Container,
  CircleStyle,
  Title,
  Amount,
  PercentOutertext,
  Arrow,
  Wrapper,
} from "./styled.components";
import { BiSolidUpArrow } from "react-icons/bi";

function NetProfit(props: any) {
  return (
    <Container>
      <div>
        <Title> Net Profit </Title>
        <Amount>{props?.data?.amount}</Amount>
        <Arrow>
          <BiSolidUpArrow />
          <span>{`${props?.data?.profit}%`}</span>
        </Arrow>
      </div>
      <Wrapper>
        <CircleStyle>
          <CircularProgressbarWithChildren value={props?.data?.percent}>
            <div>{`${props?.data?.percent}%`}</div>
            <div>Code</div>
            <div> Completed</div>
          </CircularProgressbarWithChildren>
        </CircleStyle>
        <PercentOutertext>
          * This value here has been rounded off.
        </PercentOutertext>
      </Wrapper>
    </Container>
  );
}

export default NetProfit;

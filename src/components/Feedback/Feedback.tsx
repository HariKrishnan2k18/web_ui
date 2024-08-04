import { FeedBackProps } from "../../utils/interface/interface";
import { Comments, Container, Imgdiv, StarSpan } from "./styled.components";

const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  return (
    <div>
      {stars.map((star) => (
        <StarSpan key={star} color={star <= rating ? "yellow" : "white"}>
          &#9733;
        </StarSpan>
      ))}
    </div>
  );
};

function Feedback(props: FeedBackProps) {
  return (
    <Container>
      <h3>Customer's FeedBack</h3>
      {props.data?.map((e: any) => (
        <Comments>
          <Imgdiv>
            <img src={e.img} alt="img" width={"50px"} height={"50px"} />
            <span>{e.name}</span>
          </Imgdiv>
          <StarRating rating={e.star} />
          <div>{e.comment}</div>
        </Comments>
      ))}
    </Container>
  );
}

export default Feedback;

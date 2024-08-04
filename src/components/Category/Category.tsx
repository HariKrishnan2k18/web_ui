import { RiFocus3Line } from "react-icons/ri";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaBowlFood } from "react-icons/fa6";
import { BiSolidDish } from "react-icons/bi";
import { Container, LeftDiv, Wrapper, IconStyle } from "./styled.components";
import { largeIcon as size } from "../../utils/theme/theme";

function Category() {
  return (
    <Container>
      <Wrapper>
        <LeftDiv>
          <IconStyle color={"#b34242"}>
            <RiFocus3Line color="red" size={size} />
          </IconStyle>
          <span>Goals</span>
        </LeftDiv>
        <div>
          <IoIosArrowDroprightCircle size={size} color="gray" />
        </div>
      </Wrapper>
      <Wrapper>
        <LeftDiv>
          <IconStyle color={"#3a3a63"}>
            <FaBowlFood size={size} color="blue" />
          </IconStyle>
          <span>Popular Dishes</span>
        </LeftDiv>
        <IoIosArrowDroprightCircle size={size} color="gray" />
      </Wrapper>
      <Wrapper>
        <LeftDiv>
          <IconStyle color={"#234723"}>
            <BiSolidDish size={size} color="green" />
          </IconStyle>
          <span>Menus</span>
        </LeftDiv>
        <IoIosArrowDroprightCircle size={size} color="gray" />
      </Wrapper>
    </Container>
  );
}
export default Category;

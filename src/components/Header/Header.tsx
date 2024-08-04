import {
  Container,
  IconStyle,
  InputDiv,
  StyleInput,
  ProfileDiv,
} from "./styled.components";
import { MdOutlineEmail } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { smallIcon as size } from "../../utils/theme/theme";

function Header() {
  return (
    <Container>
      <InputDiv>
        <CiSearch color="white" />
        <StyleInput type="text" placeholder="Search" />
      </InputDiv>
      <ProfileDiv>
        <IconStyle>
          <MdOutlineEmail color="white" size={size} />
        </IconStyle>
        <IconStyle>
          <CiSettings color="gray" size={size} />
        </IconStyle>
        <IconStyle>
          <IoMdNotificationsOutline color="gray" size={size} />
        </IconStyle>
        <img
          src="https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-actors8.png"
          alt="img"
          width={"30px"}
          height={"35px"}
        ></img>
      </ProfileDiv>
    </Container>
  );
}

export default Header;

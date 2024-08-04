import { Container, PowerIcon, SidebarItem } from "./styled.components";
import {
  FaBox,
  FaChartBar,
  FaHome,
  FaClipboardCheck,
  FaWallet,
} from "react-icons/fa";
import { FaXbox } from "react-icons/fa6";
import { RiLoginCircleFill } from "react-icons/ri";
import { mediumicon as size } from "../../utils/theme/theme";
import { sidebarColor as color } from "../../utils/theme/theme";

function Sidebar() {
  return (
    <Container>
      <SidebarItem>
        <FaXbox color={"blue"} size={size} />
      </SidebarItem>
      <SidebarItem>
        <FaHome color={color} size={size} />
      </SidebarItem>
      <SidebarItem>
        <FaChartBar color={color} size={size} />
      </SidebarItem>
      <SidebarItem>
        <FaClipboardCheck color={color} size={size} />
      </SidebarItem>
      <SidebarItem>
        <FaWallet color={color} size={size} />
      </SidebarItem>
      <SidebarItem>
        <FaBox color={color} size={size} />
      </SidebarItem>
      <PowerIcon>
        <RiLoginCircleFill color={color} size={size} />
      </PowerIcon>
    </Container>
  );
}

export default Sidebar;

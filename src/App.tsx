import { IconButton, useBoolean } from "@chakra-ui/react";
import "./App.css";
import CommonButton from "./components/Common/Button";
import { SearchIcon } from "@chakra-ui/icons";
import MenuCustome from "./components/Common/Menu";
import TooltipCustome from "./components/Common/Tooltip";
import CheckboxField from "./components/CustomeField/CheckboxField";

function App() {
  const [flag, setFlag] = useBoolean();
  const menuBtn = {
    titleMenu: "aaa",
  };
  const MenuItems = [
    {
      titleItem: "aaaa",
      onClick: () => {},
    },
    {
      titleItem: "bbbb",
    },
  ];
  return (
    <>
      <CheckboxField />
    </>
  );
}

export default App;

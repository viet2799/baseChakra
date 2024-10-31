import { IconButton, useBoolean } from "@chakra-ui/react";
import "./App.css";
import CommonButton from "./components/Common/Button";
import { SearchIcon } from "@chakra-ui/icons";
import MenuCustome from "./components/Common/Menu";
import TooltipCustome from "./components/Common/Tooltip";

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
      <CommonButton
        colorScheme="blue"
        aria-label="aaaaaaaa"
        rounded={4}
        icon={<SearchIcon />}
        isIconBtn
      />

      <IconButton
        colorScheme="red-40"
        aria-label="aaaa"
        icon={<SearchIcon />}
      />
      <p>Boolean state: {flag.toString()}</p>
      <button onClick={setFlag.toggle}>
        Click me to toggle the boolean value
      </button>

      <TooltipCustome />
    </>
  );
}

export default App;

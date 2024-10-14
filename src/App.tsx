import { IconButton, theme } from "@chakra-ui/react";
import "./App.css";
import CommonButton from "./components/Common/Button";
import { SearchIcon } from "@chakra-ui/icons";

function App() {
  console.log("theme", theme);
  return (
    <>
      <CommonButton
        colorScheme="blue"
        aria-label="aaaaaaaa"
        rounded={4}
        icon={<SearchIcon />}
        isIconBtn
      />

      <IconButton colorScheme="red-40" aria-label="aaaa" icon={<SearchIcon />} />
    </>
  );
}

export default App;

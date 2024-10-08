import { IconButton } from "@chakra-ui/react";
import "./App.css";
import CommonButton from "./components/Common/Button";
import { SearchIcon } from "@chakra-ui/icons";

function App() {
//   const optionBtn = [
//     {
//       children: "123",
//       colorScheme: "red",
//       size: "lg",
//     },
//     {
//       children: "123",
//       colorScheme: "green",
//     },
//   ];
  return (
    <>
      <CommonButton colorScheme="blue" aria-label="aaaaaaaa"  rounded={4} icon={<SearchIcon />} isIconBtn />

      <IconButton colorScheme="blue" aria-label="aaaa" icon={<SearchIcon />} />
    </>
  );
}

export default App;

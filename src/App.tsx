import "./App.css";
import CommonButton from "./components/Common/Button";

function App() {
  const optionBtn = [
    {
      children: "123",
      colorScheme: "red",
    },
    {
      children: "123",
      colorScheme: "green",
    },
  ];
  return (
    <>
      <CommonButton isGroup optionBtn={optionBtn} gap={4} colorScheme="red">
        aaaa
      </CommonButton>
    </>
  );
}

export default App;

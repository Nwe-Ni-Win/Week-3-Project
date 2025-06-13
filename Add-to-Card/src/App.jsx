import Main from "./layout/main";
import ItemContextProvider from "./store/itemContext";
function App() {
  return (
    <>
      <ItemContextProvider>
        <Main />
      </ItemContextProvider>
    </>
  );
}

export default App;

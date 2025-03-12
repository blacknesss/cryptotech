import { useEffect } from "react";
import { useAppDispatch } from "./features/crypto/model/hooks";
import Header from "./widgets/header/Header";
import Main from "./widgets/main/Main";
import { connectToBinance, disconnectFromBinance } from "./features/crypto/api/cryptoApi";


function App() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    connectToBinance(dispatch);

    return () => {
      disconnectFromBinance();
    }
},[dispatch])

  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;

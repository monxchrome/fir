import {Route, Routes} from "react-                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                -dom";
import MainPage from "./pages/MainPage/MainPage";
import CheckBoxOne from "./compounents/CheckBoxes/CheckBoxOne";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
        </Routes>
    </div>
  );
}

export default App;

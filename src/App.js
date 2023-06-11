import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import {
  CheckBox1, CheckBox10, CheckBox11, CheckBox12, CheckBox13, CheckBox14, CheckBox15, CheckBox16,
  CheckBox2,
  CheckBox3,
  CheckBox4,
  CheckBox5,
  CheckBox6,
  CheckBox7,
  CheckBox8, CheckBox9
} from "./compounents/Main/Main";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/checkBox1'} element={<CheckBox1/>}/>
            <Route path={'/checkBox2'} element={<CheckBox2/>}/>
            <Route path={'/checkBox3'} element={<CheckBox3/>}/>
            <Route path={'/checkBox4'} element={<CheckBox4/>}/>
            <Route path={'/checkBox5'} element={<CheckBox5/>}/>
            <Route path={'/checkBox6'} element={<CheckBox6/>}/>
            <Route path={'/checkBox7'} element={<CheckBox7/>}/>
            <Route path={'/checkBox8'} element={<CheckBox8/>}/>
            <Route path={'/checkBox9'} element={<CheckBox9/>}/>
            <Route path={'/checkBox10'} element={<CheckBox10/>}/>
            <Route path={'/checkBox11'} element={<CheckBox11/>}/>
            <Route path={'/checkBox12'} element={<CheckBox12/>}/>
            <Route path={'/checkBox13'} element={<CheckBox13/>}/>
            <Route path={'/checkBox14'} element={<CheckBox14/>}/>
            <Route path={'/checkBox15'} element={<CheckBox15/>}/>
            <Route path={'/checkBox16'} element={<CheckBox16/>}/>
        </Routes>
    </div>
  );
}

export default App;

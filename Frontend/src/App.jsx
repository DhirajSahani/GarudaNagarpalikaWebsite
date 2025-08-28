
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Intro2 from "./Components/intro2";
import Intro3 from "./Components/Intro3";
import Staff from "./Components/Staff";
import PlanProject from "./Pages/PlanProject";
import BudgetProgram from "./Pages/BudgetProgram";




const App = () => {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/intro" element={<Intro />} />
          <Route path='/intro2' element={<Intro2 />} />
          <Route path='/intro3' element={<Intro3 />} />
          <Route path='/Staff' element={<Staff/>} />
          <Route path="/PlanProject" element={<PlanProject />} />
          <Route path="/BudgetProgram" element={<BudgetProgram />} />


        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
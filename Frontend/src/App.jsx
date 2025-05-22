
import "./App.css";
import DashBoard from "./assets/Pages/DashBoard";
import{Routes, Route} from "react-router";
import PostUser from "./assets/Pages/PostUser";
import UpdateUser from "./assets/Pages/UpdateUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/employee" element={<PostUser/>}/>
      <Route path="/employee/:id" element={<UpdateUser/>}/>
    </Routes>
  );
}

export default App;

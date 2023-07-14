import "./App.css";
import Home from "./components/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/login";
import Post from "./components/post/post";
import Connect from "./components/ConnectWithSenior/connect";
import Prac from "./components/practice/prac";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/signup/SignupPage";
import Gs from "./components/home/company/gs";
import Flip from "./components/home/company/flip";
import Amex from "./components/home/company/amex";
import Cisco from "./components/home/company/cisco";
import Oracle from "./components/home/company/oracle";
import Barclays from "./components/home/company/barclays";
import Array from "./components/practice/topic/array";
import Backtracking from "./components/practice/topic/backtracking";
import Bst from "./components/practice/topic/bst";
import Graph from "./components/practice/topic/graph";
import Heap from "./components/practice/topic/heap";
import Linkedlist from "./components/practice/topic/linkedlist";
import Sorting from "./components/practice/topic/sorting";
import Stack from "./components/practice/topic/stack";
import String from "./components/practice/topic/string";
import ProfileScreen from "./components/editProfile/ProfileScreen";
import Interview from "./components/interview/interview";
import Bookmark from "./components/Bookmark/bookmark";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/practice" element={<Prac />} />
          <Route exact path="/bookmark" element={<Bookmark />} />
          <Route exact path="/connect" element={<Connect />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/post" element={<Post />} />
          <Route exact path="/gs" element={<Gs />} />
          <Route exact path="/flip" element={<Flip />} />
          <Route exact path="/amex" element={<Amex />} />
          <Route exact path="/cisco" element={<Cisco />} />
          <Route exact path="/oracle" element={<Oracle />} />
          <Route exact path="/barclays" element={<Barclays />} />
          <Route exact path="/array" element={<Array />} />
          <Route exact path="/strings" element={<String />} />
          <Route exact path="/linkedlist" element={<Linkedlist />} />
          <Route exact path="/stack" element={<Stack />} />
          <Route exact path="/sorting" element={<Sorting />} />
          <Route exact path="/heap" element={<Heap />} />
          <Route exact path="/graph" element={<Graph />} />
          <Route exact path="/bst" element={<Bst />} />
          <Route exact path="/backtracking" element={<Backtracking />} />
          <Route exact path="/edit" element={<ProfileScreen />} />
          <Route exact path="/interview" element={<Interview />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

/*
<Route path="/home">
{login ? <Profile/>: <Redirect to="/" />} 
</Route>


*/

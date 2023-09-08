import './App.css';
import './scss/reset.scss';
import './scss/all.scss';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './pages/Home';
import Me from './pages/Me';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/me" element={<Me />} />
      {/* <Route path="users" element={<Users />}>
        <Route path="me" element={<OwnUserProfile />} />
        <Route path=":id" element={<UserProfile />} />
      </Route> */}
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
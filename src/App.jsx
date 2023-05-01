import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import VideoResources from "./pages/VideoResources";
import Login from "./pages/Login";
import Slides from "./pages/Slides";
import SingleVideo from "./pages/SingleVideo";
import Resources from "./pages/Resources";
import ProtectedRoute from "./components/ProtectedRoute";
import { Navigate, Route, Routes } from "react-router-dom";
import UpdateProfile from "./pages/UpdateProfile";
import SingleSlide from "./pages/SingleSlide";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard/*" element={<ProtectedRoute element={<Home />} />}>
        <Route index element={<VideoResources />} />
        <Route path="slides" element={<Slides />} />
        <Route path="slides/:id" element={<SingleSlide />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="videos/:id" element={<SingleVideo />} />
        <Route path="resources" element={<Resources />} />
        <Route path="profile" element={<UpdateProfile />} />
      </Route>
      <Route path="*" element={<h2>Sahifa topilmadi</h2>} />
    </Routes>
  );
}

export default App;

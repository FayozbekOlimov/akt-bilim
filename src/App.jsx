import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import VideoResources from "./pages/VideoResources";
import Login from "./pages/Login";
import Presentations from "./pages/Presentations";
import SingleVideo from "./pages/SingleVideo";
import Resources from "./pages/Resources";
import ProtectedRoute from "./components/ProtectedRoute";
import { Navigate, Route, Routes } from "react-router-dom";
import UpdateProfile from "./pages/UpdateProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard/*" element={<ProtectedRoute element={<Home />} />}>
        <Route index element={<VideoResources />} />
        <Route path="presentations" element={<Presentations />} />
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

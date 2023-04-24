import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = useSelector((state) => state.login);

  return isLoggedIn ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

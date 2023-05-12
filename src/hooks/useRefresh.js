import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_API } from "../api";
import { refreshUrl } from "../api/urls";
import { updateTokens } from "../redux/loginSlice";

const useRefresh = () => {
  const { refresh } = useSelector((state) => state.login?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const refreshToken = async () => {
    try {
      const response = await BASE_API.post(refreshUrl, { refresh });
      dispatch(updateTokens(response.data));
    } catch (error) {
      navigate("/login", { replace: true });
    }
  };

  return refreshToken;
};

export default useRefresh;

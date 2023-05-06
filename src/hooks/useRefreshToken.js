import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_API } from "../api";
import { refreshUrl } from "../api/urls";
import { updateTokens } from "../redux/loginSlice";

const useRefreshToken = (refreshInterval) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { refresh } = useSelector((state) => state.login?.user);

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const response = await BASE_API.post(refreshUrl, { refresh });
        dispatch(updateTokens(response.data));
      } catch (error) {
        navigate("/login", { replace: true });
      }
    };

    const intervalId = setInterval(refreshToken, refreshInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [refresh, dispatch]);

  return null;
};

export default useRefreshToken;

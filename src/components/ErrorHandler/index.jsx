import { Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import {
  ERR_NETWORK_MSG,
  SERVER_ERROR_MSG,
  TOKEN_EXPIRED_MSG,
} from "../../constants";

const ErrorHandler = ({ error }) => {
  if (error === TOKEN_EXPIRED_MSG) return <Navigate to="/login" replace />;
  if (error === ERR_NETWORK_MSG) {
    return (
      <Typography variant="subtitle1" color="error">
        {ERR_NETWORK_MSG}
      </Typography>
    );
  }
  return (
    <Typography variant="subtitle1" color="error">
      {SERVER_ERROR_MSG}
    </Typography>
  );
};

export default ErrorHandler;

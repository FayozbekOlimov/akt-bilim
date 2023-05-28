import {
  DEFAULT_FONTSIZE,
  DEFAULT_MODE,
  ERR_NETWORK_MSG,
  SERVER_ERROR_MSG,
  TOKEN_EXPIRED_MSG,
} from "../constants";

export const dateFormat = (date) => {
  const [mm, dd, yyyy] = new Date(date).toLocaleDateString().split("/");
  return [format(dd), format(mm), yyyy].join("-");
};

const format = (x) => (+x < 10 ? "0" + +x : x);

export const videoLinkFormat = (link) => {
  let key = "";
  if (link) {
    if (link.includes("=")) {
      key = link.slice(link.lastIndexOf("=") + 1);
    } else {
      key = link.slice(link.lastIndexOf("/") + 1);
    }
  }
  return "https://youtube.com/embed/" + key;
};

export const normalView = () => {
  document.body.classList.remove("special-dark");
  document.body.classList.remove("special-light");
};

export const specialLightView = () => {
  document.body.classList.remove("special-dark");
  document.body.classList.add("special-light");
};

export const specialDarkView = () => {
  document.body.classList.remove("special-light");
  document.body.classList.add("special-dark");
};

export const getModeFromLocalStorage = () =>
  localStorage.getItem("mode") || DEFAULT_MODE;

export const setModeToLocalStorage = (mode) =>
  localStorage.setItem("mode", mode);

export const getScaleFromLocalStorage = () => {
  const scale = localStorage.getItem("scale");
  return scale ? Number(scale) : 0;
};

export const setScaleToLocalStorage = (scale) =>
  localStorage.setItem("scale", scale);

export const calculateFontSize = (scale) =>
  DEFAULT_FONTSIZE + (5 * scale) / 100;

export const getFontSize = () => {
  const scale = getScaleFromLocalStorage();
  return calculateFontSize(scale);
};

export const errorHandler = (error) => {
  if (error.code === "ERR_NETWORK") {
    throw new Error(ERR_NETWORK_MSG);
  } else if (error.response.status === 401) {
    throw new Error(TOKEN_EXPIRED_MSG);
  } else {
    throw new Error(SERVER_ERROR_MSG);
  }
};

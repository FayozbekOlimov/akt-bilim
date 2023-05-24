import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ArticleIcon from "@mui/icons-material/Article";
import QuizIcon from "@mui/icons-material/Quiz";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { AccountCircle } from "@mui/icons-material";

export const navLinks = [
  {
    text: "Video qo'llanmalar",
    to: "",
    icon: <OndemandVideoIcon sx={{ fontSize: "24px" }} />,
  },
  {
    text: "Taqdimotlar",
    to: "slides",
    icon: <ArticleIcon sx={{ fontSize: "24px" }} />,
  },
  {
    text: "Fanlar",
    to: "subjects",
    icon: <QuizIcon sx={{ fontSize: "24px" }} />,
  },
  {
    text: "Mening profilim",
    to: "profile",
    icon: <AccountCircle sx={{ fontSize: "24px" }} />,
  },
  {
    text: "Chiqish",
    to: "/login",
    icon: <LogoutOutlinedIcon color="error" sx={{ fontSize: "24px" }} />,
  },
];

import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ArticleIcon from "@mui/icons-material/Article";
import QuizIcon from "@mui/icons-material/Quiz";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export const listItems = [
  {
    text: "Video qo'llanmalar",
    to: "",
    icon: <OndemandVideoIcon />,
  },
  {
    text: "Taqdimotlar",
    to: "presentations",
    icon: <ArticleIcon />,
  },
  {
    text: "Fanlar",
    to: "subjects",
    icon: <QuizIcon />,
  },
  {
    text: "Chiqish",
    to: "/login",
    icon: <LogoutOutlinedIcon />,
  },
];

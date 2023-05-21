import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#00CD97",
    color: "#212121",
    fontSize: theme.typography.fontSize + 1,
    fontWeight: 600,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: theme.typography.fontSize,
  },
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

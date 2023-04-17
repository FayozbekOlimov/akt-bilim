import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./styles";

function createData(tr, text, date) {
  return { tr, text, date };
}

const rows = [
  createData(1, "HTML Tutorial", "05-16-2023"),
  createData(2, "CSS Tutorial", "05-17-2023"),
  createData(3, "JavaScript Tutorial", "05-18-2023"),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ width: 60 }}>T/r</StyledTableCell>
            <StyledTableCell>Mavzu nomi</StyledTableCell>
            <StyledTableCell>Yuklangan vaqti</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.tr}>
              <StyledTableCell>{row.tr}</StyledTableCell>
              <StyledTableCell>{row.text}</StyledTableCell>
              <StyledTableCell>{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

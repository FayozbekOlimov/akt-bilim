import {
  Link,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FAILED, LOADING } from "../../redux/actionTypes";
import { fetchResourceById } from "../../redux/resourceSlice";
import { StyledTableCell, StyledTableRow } from "./styles";
import { dateFormat } from "../../helpers";
import { IMAGE_URL } from "../../api/urls";

const Resources = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { access } = useSelector((state) => state.login?.user);
  const { resource, status, error } = useSelector((state) => state.resource);

  useEffect(() => {
    dispatch(fetchResourceById({ accessToken: access, id }));
  }, [dispatch]);

  if (status === LOADING) {
    return "Loading...";
  }

  if (status === FAILED) {
    return <div>{error}</div>;
  }

  if (resource.length === 0) {
    return <Typography variant="subtitle1">Resurslar mavjud emas</Typography>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ width: 60 }}>T/r</StyledTableCell>
            <StyledTableCell>Mavzu nomi</StyledTableCell>
            <StyledTableCell>Yuklangan vaqti</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resource?.length &&
            resource.map((res, index) => (
              <StyledTableRow key={res.id}>
                <StyledTableCell>{index + 1}</StyledTableCell>
                <StyledTableCell>
                  <Link
                    href={IMAGE_URL + res.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    color="text.primary"
                  >
                    {res.name}
                  </Link>
                </StyledTableCell>
                <StyledTableCell>{dateFormat(res.date)}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Resources;

import { Chip, Divider, Grid, MenuItem, MenuList } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import ListItemText from "@mui/material/ListItemText";
import shadows from "@mui/material/styles/shadows";
import { Link } from "react-router-dom";

const Subjects = () => {
  return (
    <Grid container spacing={2}>
      {Array.from(Array(3)).map((_, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <Card
            sx={{
              boxShadow: shadows[5],
            }}
          >
            <CardHeader
              title="Web dasturlashga kirish"
              component="h5"
              sx={{
                bgcolor: "primary.dark",
                color: "text.primary",
              }}
            />
            <Divider />
            <CardContent sx={{ padding: "8px 0 !important" }}>
              <MenuList disablePadding>
                <MenuItem component={Link} to="/dashboard/resources">
                  <ListItemText>Resurslar soni</ListItemText>
                  <Chip
                    label="10"
                    color="success"
                    variant="filled"
                    size="small"
                    sx={{ height: "20px" }}
                  />
                </MenuItem>
                <MenuItem component={Link} to="/dashboard/resources">
                  <ListItemText>Testlar soni</ListItemText>
                  <Chip
                    label="5"
                    color="success"
                    variant="filled"
                    size="small"
                    sx={{ height: "20px" }}
                  />
                </MenuItem>
              </MenuList>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Subjects;

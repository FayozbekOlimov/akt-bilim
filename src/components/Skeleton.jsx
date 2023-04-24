import { Grid, Skeleton } from "@mui/material";

export const SubjectsSkeleton = ({ count = 3 }) => {
  return (
    <Grid container spacing={2}>
      {Array.from(new Array(count)).map((_, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <Skeleton height={100} animation="wave" />
          <Skeleton height={25} animation="wave" sx={{ mt: -1 }} />
          <Skeleton height={25} animation="wave" sx={{ mt: -1 }} />
        </Grid>
      ))}
    </Grid>
  );
};

export const VideosSkeleton = ({ count = 3 }) => {
  return (
    <Grid container spacing={2}>
      {Array.from(new Array(count)).map((_, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <Skeleton animation="wave" variant="rounded" height={180} />
          <Skeleton height={30} width="60%" animation="wave" />
          <Skeleton height={25} animation="wave" sx={{ mt: -0.5 }} />
        </Grid>
      ))}
    </Grid>
  );
};

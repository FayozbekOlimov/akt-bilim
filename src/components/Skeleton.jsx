import { Box, Grid, Skeleton } from "@mui/material";

export const SubjectsSkeleton = ({ count = 3 }) => {
  return (
    <Grid container spacing={2}>
      {Array.from(new Array(count)).map((_, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <Skeleton animation="wave" variant="rounded" height={60} />
          <Skeleton animation="wave" height={30} sx={{ mt: 0.5 }} />
          <Skeleton animation="wave" height={30} />
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
          <Skeleton height={30} width="60%" animation="wave" sx={{ mt: 0.5 }} />
          <Skeleton height={25} animation="wave" sx={{ mt: -0.5 }} />
        </Grid>
      ))}
    </Grid>
  );
};

export const SingleVideoSkeleton = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <Skeleton
          animation="wave"
          variant="rounded"
          sx={{
            height: {
              xs: 200,
              sm: 280,
            },
          }}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Skeleton height={30} animation="wave" width="50%" sx={{ mt: -0.5 }} />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <Skeleton height={30} animation="wave" width="70%" />
          <Skeleton height={30} animation="wave" width="30%" />
        </Box>
        <Skeleton
          animation="wave"
          variant="rounded"
          sx={{
            height: {
              xs: 135,
              sm: 215,
            },
            mt: 1,
          }}
        />
      </Grid>
    </Grid>
  );
};

export const SlidesSkeleton = ({ count = 3 }) => {
  return (
    <Grid container spacing={2}>
      {Array.from(new Array(count)).map((_, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <Skeleton animation="wave" variant="rounded" height={180} />
          <Skeleton height={30} width="60%" animation="wave" sx={{ mt: 0.5 }} />
          <Skeleton height={30} animation="wave" sx={{ mt: -0.5 }} />
          <Skeleton height={25} width="30%" animation="wave" />
        </Grid>
      ))}
    </Grid>
  );
};

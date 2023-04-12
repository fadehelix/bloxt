import React from "react";
import { CssBaseline, Grid, Paper, Typography } from "@mui/material";

const CustomGridItem = ({ children }) => (
  <Grid item xs={12} md={6} >
    <Paper sx={{ p: 2, textAlign: "center", width: '90%' }}>
      <Typography variant="h3">Title of the tile</Typography>
      {children}
      
    </Paper>
  </Grid>
);


const TestGrid = ({items}) => {
  return (
    <>
    {/* <CssBaseline /> */}
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{minHeight: "100vh" }}
    >
      <Grid item container spacing={2} justifyContent="center" sx={{width:'auto'}}>
       {items.map((item) => (
            <CustomGridItem key={item}>{item}</CustomGridItem>
       ))}
      </Grid>
    </Grid>
    </>
  );
};

export default TestGrid;

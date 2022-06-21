import { Grid } from "@mui/material";
import Category from "./Category";

const Categories = (props) => {
  return (
    <Grid container>
      {props.categories.map((category) => {

        console.log(category)
        return (<Grid key={category} item xs={12} sm={6} md={4}>
            <Category name={category}/>
        </Grid>)}
    )}
    </Grid>
  );
};

export default Categories;

import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/productsActions";



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const StarshipDetail = () => {
  const classes = useStyles();
  const { starshipId } = useParams();
  let product = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
     console.log("ici",`http://localhost:3000/starship/${id}`)
    const response = await axios
      .get(`http://localhost:3000/starship/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
      
    dispatch(selectedProduct(response.data));
    console.log("here",response.data)
  };

  useEffect(() => {
    if (starshipId && starshipId !== "") fetchProductDetail(starshipId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [starshipId]);

  console.log("product: ",product)

  
  
  return (
    <div className="h-screen">
      
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          <h1 className="font-bold text-white text-4xl text-center ">{product[0].name}</h1>
        <div className="ml-auto mr-auto w-5/12 mt-8">
        <TableContainer  component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        
        <TableBody>
          <TableRow className="bg-gray-600 ">
              <TableCell>Starship ID</TableCell>
              <TableCell >{product[0].id}</TableCell>
          </TableRow>
          <TableRow className="bg-gray-600">
            <TableCell>Model</TableCell>
            <TableCell >{product[0].model}</TableCell>
        
          </TableRow>
          <TableRow className="bg-gray-600">
            <TableCell>Manufacturer</TableCell>
            <TableCell>{product[0].manufacturer}</TableCell>
        
          </TableRow>
          <TableRow className="bg-gray-600">
            <TableCell>Cost</TableCell>
            <TableCell >{product[0].cost_in_credits}</TableCell>
        
          </TableRow>
          
          <TableRow className="bg-gray-600">
            <TableCell>Length</TableCell>
            <TableCell >{product[0].length}</TableCell>
        
          </TableRow>

          <TableRow className="bg-gray-600">
            <TableCell>Starship Class</TableCell>
            <TableCell >{product[0].starship_class}</TableCell>     
          </TableRow>

          <TableRow className="bg-gray-600">
            <TableCell>Crew</TableCell>
            <TableCell >{product[0].crew}</TableCell>     
          </TableRow>

          <TableRow className="bg-gray-600">
            <TableCell>Cargo Capacity</TableCell>
            <TableCell >{product[0].cargo_capacity}</TableCell>     
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
      )}
    </div>
  );
};

export default StarshipDetail;
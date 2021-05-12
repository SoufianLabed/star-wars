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


const PlanetDetail = () => {
  const classes = useStyles();
  const { planetId } = useParams();
  let product = useSelector((state) => state.product);
  
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`http://localhost:3000/planet/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
    
   
  };

  useEffect(() => {
    if (planetId && planetId !== "") fetchProductDetail(planetId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [planetId]);
  return (
    <div className="h-screen">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
        <h1 className="font-bold text-white text-4xl text-center ">{product[0].name}</h1>
      <div className="ml-auto mr-auto w-6/12 mt-8">
      <TableContainer  component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          
          <TableBody>
            <TableRow className="bg-gray-600 ">
                <TableCell>Planet ID</TableCell>
                <TableCell >{product[0].id}</TableCell>
            </TableRow>
            <TableRow className="bg-gray-600">
              <TableCell>Name</TableCell>
              <TableCell >{product[0].name}</TableCell>
          
            </TableRow>
            <TableRow className="bg-gray-600">
              <TableCell>Population</TableCell>
              <TableCell>{product[0].population}</TableCell>
          
            </TableRow>
            <TableRow className="bg-gray-600">
              <TableCell>Diameter</TableCell>
              <TableCell >{product[0].diameter}</TableCell>
          
            </TableRow>
            
            <TableRow className="bg-gray-600">
              <TableCell>Climate</TableCell>
              <TableCell >{product[0].climate}</TableCell>
          
            </TableRow>

            <TableRow className="bg-gray-600">
              <TableCell>Terrain</TableCell>
              <TableCell >{product[0].terrain}</TableCell>
          
            </TableRow>
            <TableRow className="bg-gray-600">
              <TableCell>Rotation Period</TableCell>
              <TableCell >{product[0].rotation_period}</TableCell>
          
            </TableRow>
            <TableRow className="bg-gray-600">
              <TableCell>Orbital Period</TableCell>
              <TableCell >{product[0].orbital_period}</TableCell>
          
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

export default PlanetDetail;
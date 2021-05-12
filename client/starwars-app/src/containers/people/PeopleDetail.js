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


const PeopleDetails = () => {
  const classes = useStyles();
  const { peopleId } = useParams();
  let product = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
     console.log("ici",`http://localhost:3000/people/${id}`)
    const response = await axios
      .get(`http://localhost:3000/people/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
      
    dispatch(selectedProduct(response.data));
    console.log("here",response.data)
  };

  useEffect(() => {
    if (peopleId && peopleId !== "") fetchProductDetail(peopleId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [peopleId]);

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
              <TableCell>Soldat ID</TableCell>
              <TableCell >{product[0].id}</TableCell>
          </TableRow>
          <TableRow className="bg-gray-600">
            <TableCell>Height</TableCell>
            <TableCell >{product[0].height}</TableCell>
        
          </TableRow>
          <TableRow className="bg-gray-600">
            <TableCell>Mass</TableCell>
            <TableCell>{product[0].mass}</TableCell>
        
          </TableRow>
          <TableRow className="bg-gray-600">
            <TableCell>Hair Color</TableCell>
            <TableCell >{product[0].hair_color}</TableCell>
        
          </TableRow>
          
          <TableRow className="bg-gray-600">
            <TableCell>Skin Color</TableCell>
            <TableCell >{product[0].skin_color}</TableCell>
        
          </TableRow>

          <TableRow className="bg-gray-600">
            <TableCell>Eye Color</TableCell>
            <TableCell >{product[0].eye_color}</TableCell>
        
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

export default PeopleDetails;
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useSelector} from "react-redux";




import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  


const StarshipComponent = () => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])
    
    const products = useSelector((state)=> state.allProducts.products);
    console.log("Pro",products)


    const handleChange = (e) => {
        setSearchTerm(e.target.value);
      };

    useEffect(() => {
        const results = products.filter(people =>
            people.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      }, [searchTerm]);

    return (
        <div className="pt-10">

    
        <input className="mb-8 bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Add starship" value={searchTerm} onChange={handleChange}/>
            {searchTerm !== '' ? 
            <div>
                 { searchResults.map((people, i) => (
                <div className="w-1/6 mb-10 ml-12 mr-12 md:inline-flex">
                  <Card className="min-w-full border-solid border-4 border-indigo-900">
                    <CardContent >
                  
                        <Typography className="mb-8" variant="h5" component="h2">
                          {people.name}
                        </Typography>

                        <Typography  variant="body2" component="p">
                            <p  className="font-bold flex">manufacturer </p>
                            {people.manufacturer}
                        </Typography>
                      
                        <Typography c variant="body2" component="p">
                            <p  className="font-bold flex">cost_in_credits </p>
                            {people.cost_in_credits}
                        </Typography>

                        <Typography  variant="body2" component="p">
                            <p  className="font-bold flex">crew </p>
                            {people.crew}
                        </Typography>
                    </CardContent>
                    <CardActions className="text-center justify-center mx-auto">
                        <Link to={`/people/${people.id}`}>
                            <Button  size="small">Learn More</Button>
                        </Link>
                    </CardActions>
                </Card>
             </div>
             )
            )}
            </div>
            :
            <div className="">
            { products.map((people) => (
                <div className="w-1/6  ml-8 mr-8 mb-5 justify-center items-center md:inline-flex">
               
                <Card className="min-w-full border-solid border-4 border-indigo-900">
                    <CardContent >
                  
                        <Typography className="mb-8" variant="h5" component="h2">
                          {people.name}
                        </Typography>

                        <Typography  variant="body2" component="p">
                            <p  className="font-bold flex">manufacturer </p>
                            {people.manufacturer}
                        </Typography>

                        <Typography  variant="body2" component="p">
                            <p  className="font-bold flex">cost_in_credits</p>
                            {people.cost_in_credits}
                        </Typography>
                      
                        <Typography c variant="body2" component="p">
                            <p  className="font-bold flex">crew </p>
                            {people.crew}
                        </Typography>

                    </CardContent>
                    <CardActions className="text-center justify-center mx-auto">
                        <Link to={`/starship/${people.id}`}>
                          <Button variant="outlined" color="secondary">Learn more</Button>
                        </Link>
                    </CardActions>
                </Card>
                 </div>
        ))}

       
            </div>
             }
        </div>
    )
}

export default StarshipComponent
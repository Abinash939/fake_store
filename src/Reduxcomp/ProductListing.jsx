import React , {useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../Redux/actions/ProductAction';
import ProductComponent from './ProductComponent';
import axios from 'axios';

const ProductListing = () => {

const products = useSelector((state) => state);
const dispatch = useDispatch();


const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
        console.log("Err", err);
    });
    dispatch(setProduct (response.data));
}
useEffect(()=>{
    fetchProducts();
},[]);


    return (
        <div>
            <ProductComponent />
        </div>
    );
};

export default ProductListing;
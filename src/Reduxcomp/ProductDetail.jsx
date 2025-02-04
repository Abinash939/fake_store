import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { selectedProduct } from '../Redux/actions/ProductAction';
import { useSelector } from 'react-redux';


const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    // const {image, title, price, category, description} = product;
    // const {id, title, price, image , category} = product;
    const dispatch = useDispatch();
    const {productId} = useParams();
    // console.log(product, "Product");
    console.log(productId, "Product Id");

const fetchSingleProduct = async ()=>{
    const res = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
        console.log("Err", err);
    });
    dispatch(selectedProduct(res.data));
    console.log(res.data, "Res Data");
    
}
useEffect (()=>{
    if (productId && productId !== "")
    fetchSingleProduct();
},[productId]);
console.log(product, "Product");

    return (
        <div>
            {/* <h1>{title}</h1>
            <div>{price}</div>
            <div>{category}</div>
            <div>{description}</div>
            <div>
                <img src={image} alt={title} width={200} height={150} />
            </div> */}
            <h1>Product Detail</h1>
        </div>
    );
};

export default ProductDetail;
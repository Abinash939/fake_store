import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products);
    console.log(products);
    const product = products.map((product) => {
        const { id, title, price, image, category } = product;
        return (
            <div className="card" key={id}>
                <Link to={`/product/${id}`} state={{ textDecoration: "none", color: "inherit" }}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title} width={200} height={150} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div>$ {price}</div>
                                {/* <div>{description}</div> */}
                                <div>{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });

    return (
        <div className='container'>

            {product}
        </div>
    );
};

export default ProductComponent;
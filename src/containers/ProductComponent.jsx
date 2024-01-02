import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <Link to={`/product/${id}`}>
                <div className="card" key={id}>
                    <div className="image">
                        <img className="img" src={image} alt={title} />
                    </div>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="price">$ {price}</div>
                        <div className="category">{category}</div>
                    </div>
                </div>
            </Link>
        );
    });

    return <>{renderList}</>;
};

export default ProductComponent;

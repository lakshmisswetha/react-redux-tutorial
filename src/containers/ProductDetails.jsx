import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts, removeSelectedProducts } from "../redux/actions/productActions";

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log(err);
            });
        dispatch(selectedProducts(response.data));
    };
    useEffect(() => {
        if (productId && productId != "") {
            fetchProductDetail();
        }
        return () => {
            dispatch(removeSelectedProducts());
        };
    }, []);

    return (
        <div className="selected-product-container">
            <div className="selected-image">
                <img className="selected-img" src={image} alt={title} />
            </div>
            <div className="selected-content">
                <div className="selected-title">{title}</div>
                <div className="selected-price">$ {price}</div>
                <div className="selected-category">{category}</div>
                <div className="description">{description}</div>
            </div>
        </div>
    );
};

export default ProductDetails;

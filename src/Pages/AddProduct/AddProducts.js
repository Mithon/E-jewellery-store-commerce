import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProducts.css';

const AddProducts = () => {

    const { register, handleSubmit, } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://pacific-scrubland-75231.herokuapp.com/products', data)
            .then(res => {
                console.log(res);
            })
    }

    return (
        <div className="add-service">
            <h2>Please Add Products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder="image url" />
                <input {...register("productName", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("discription")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;
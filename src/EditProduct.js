import React, { useState } from 'react';

const EditProduct = ({ product, updateProduct }) => {
    const [nom, setNom] = useState(product.nom);
    const [prix, setPrix] = useState(product.prix);
    const [description, setDescription] = useState(product.description);

    const handleUpdate = () => {
        const updatedProduct = {
            ...product,
            nom: nom,
            prix: prix,
            description: description,
        };

        updateProduct(updatedProduct);
    };

    return ( <
        div >
        <
        h3 > Modifier le produit < /h3> <
        form >
        <
        div className = "form-group" >
        <
        label > Nom < /label> <
        input type = "text"
        className = "form-control"
        value = { nom }
        onChange = {
            (e) => setNom(e.target.value) }
        /> <
        /div> <
        div className = "form-group" >
        <
        label > Prix < /label> <
        input type = "number"
        className = "form-control"
        value = { prix }
        onChange = {
            (e) => setPrix(e.target.value) }
        /> <
        /div> <
        div className = "form-group" >
        <
        label > Description < /label> <
        textarea className = "form-control"
        value = { description }
        onChange = {
            (e) => setDescription(e.target.value) }
        /> <
        /div> <
        button type = "button"
        className = "btn btn-primary"
        onClick = { handleUpdate } >
        Enregistrer <
        /button> <
        /form> <
        /div>
    );
};

export default EditProduct;
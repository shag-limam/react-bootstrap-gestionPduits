import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditProduct from './EditProduct';

const ListeProduits = () => {
    const [produits, setProduits] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetchProduits();
    }, []);

    const fetchProduits = async() => {
        try {
            const response = await axios.get('http://localhost:3333/produits');
            setProduits(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const addProduit = async() => {
        const newProduit = {
            nom: 'Nouveau produit',
            prix: 0,
            description: 'Description du nouveau produit',
        };

        try {
            await axios.post('http://localhost:3333/produits', newProduit);
            fetchProduits();
        } catch (error) {
            console.error(error);
        }
    };

    const deleteProduit = async(id) => {
        try {
            await axios.delete(`http://localhost:3333/produits/${id}`);
            fetchProduits();
        } catch (error) {
            console.error(error);
        }
    };

    const showProductDetails = (id) => {
        const product = produits.find((produit) => produit.id === id);
        setSelectedProduct(product);
    };

    const updateProduct = async(updatedProduct) => {
        try {
            await axios.put(
                `http://localhost:3333/produits/${updatedProduct.id}`,
                updatedProduct
            );
            fetchProduits();
            setSelectedProduct(null);
        } catch (error) {
            console.error(error);
        }
    };

    return ( <div >
        <h2 > Liste des produits < /h2> <
        button className = "btn btn-primary mb-2"
        onClick = { addProduit } >
        Ajouter un produit <
        /button> <
        table className = "table" >
        <
        thead >
        <
        tr >
        <
        th > Nom < /th> <
        th > Prix < /th> <
        th > Actions < /th> < /
        tr > <
        /thead> <
        tbody > {
            produits.map((produit) => ( <
                tr key = { produit.id } >
                <
                td > { produit.nom } < /td> <
                td > { produit.prix } < /td> <
                td >
                <
                button className = "btn btn-primary mr-2"
                onClick = {
                    () => showProductDetails(produit.id)
                } >
                Détails <
                /button> <
                button className = "btn btn-info mr-2"
                onClick = {
                    () => setSelectedProduct(produit)
                } >
                Modifier <
                /button> <
                button className = "btn btn-danger"
                onClick = {
                    () => deleteProduit(produit.id)
                } >
                Supprimer <
                /button> < /
                td > <
                /tr>
            ))
        } <
        /tbody> < / table > {
            selectedProduct && ( <
                div >
                <
                h3 > Détails du produit < /h3> <
                p > Nom: { selectedProduct.nom } < /p> <
                p > Prix: { selectedProduct.prix } < /p> <
                p > Description: { selectedProduct.description } < /p> <
                button className = "btn btn-info mr-2"
                onClick = {
                    () => setSelectedProduct(null)
                } >
                Fermer <
                /button> <
                EditProduct product = { selectedProduct }
                updateProduct = { updateProduct }
                /> </div >
            )
        } <
        /div>
    );
};

export default ListeProduits;
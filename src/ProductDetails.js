import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetails = ({ productId }) => {
    const [produit, setProduit] = useState(null);

    useEffect(() => {
        fetchProduit();
    }, []);

    const fetchProduit = async() => {
        try {
            const response = await axios.get(
                `http://localhost:3333/produits/${productId}`
            );
            setProduit(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return ( <
        div > {
            produit ? ( <
                div >
                <
                h2 > Détails du produit < /h2> <
                p > Nom: { produit.nom } < /p> <
                p > Prix: { produit.prix } < /p> <
                p > Description: { produit.description } < /p> <
                /div>
            ) : ( <
                p > Chargement des détails du produit... < /p>
            )
        } <
        /div>
    );
};

export default ProductDetails;
import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import ImageSliders from './ImageSliders';
import Footer from './Footer';

import { Link } from 'react-router-dom';

const Design = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);

   
    const fetchProducts = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const info = await res.json();
            setData(info);
            setFilteredData(info); 
            console.log(info)
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

   
    const handleFilterCategory = async (category) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
            const filteredProducts = await response.json();
            setFilteredData(filteredProducts);
        } catch (error) {
            console.error('Error fetching filtered data:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <Nav />
            <div className="desigm-image">
                <ImageSliders />
            </div>
            <div className="design-filter">
                <div className="design-filter1">
                    <h1 onClick={() => setFilteredData(data)}>All</h1>
                    <h1 onClick={() => handleFilterCategory('animals')}>Animals</h1>
                    <h1 onClick={() => handleFilterCategory('religion')}>Religions</h1>
                    <h1 onClick={() => handleFilterCategory('mythology')}>Mythology</h1>
                    <h1 onClick={() => handleFilterCategory('symbols')}>Symbols</h1>
                </div>
                <div className="design-filter2">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        filteredData.map((item) => (
                            <div key={item.id} className="design-card1">
                                <img src={item.image} alt={item.title} />
                                <h1>Tattoo Name: {item.title}</h1>
                                <h1>Artist Name: {item.author || 'Unknown'}</h1>
                                <h1>Price: ${item.price}</h1>
                                <Link to='/dynamicdesign' state={{ id: item.id }}>
                                    <button>Book Now</button>
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Design;

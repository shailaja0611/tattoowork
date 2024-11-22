import React, { useState, useEffect } from 'react';

const PopularTatoos = () => {
  const [tattoos, setTattoos] = useState([]); // State to store fetched tattoo data
  const [loading, setLoading] = useState(true); // Loading state to show loading indicator
  const [error, setError] = useState(null); // Error state to handle fetch errors

  // Fetch data when component mounts
  useEffect(() => {
    const fetchTattoos = async () => {
      try {
        const response = await fetch('http://localhost:5000/tattooStyles/getTattoo');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTattoos(data); // Update state with fetched tattoo data
      } catch (err) {
        setError(err.message); // Handle error
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchTattoos(); // Call the fetch function
  }, []); // Empty dependency array makes it run once when the component mounts

  // Loading and error handling
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="popular">
      <h1>POPULAR DESIGNS</h1>
      <p>
      I noticed that I got a better space in the line in Starbucks when I had my tattoo. 
      People associate tattoos with<br></br> a certain edge. Then I open my mouth, and something completely different comes out.
      
      </p>
      <div className="main">
        <div className="main2">
          {/* Render the tattoos fetched from API dynamically */}
          {tattoos.map((tattoo) => (
            <div key={tattoo._id} className="Pic1">
              <img
                src={tattoo.image}
                alt={tattoo.style_name}
                className="tattoo-image"
              />
              <h2>{tattoo.style_name}<br />(${tattoo.price})</h2>
              <h6>{tattoo.artist.artist_name}</h6>
            </div>
          ))}
        </div>

        <div className="popularbtn">
          <button>Browse all products</button>
        </div>
      </div>
    </div>
  );
};

export default PopularTatoos;

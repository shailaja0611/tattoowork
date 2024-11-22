import React, { useEffect, useState } from "react";

const TattooArtists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch("http://localhost:5000/artists/getArtist");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        console.log('Data fetched successfully:', jsonData);

        // Format the data without including social media icons
        const formattedData = jsonData.map((artist) => ({
          name: artist.artist_name,
          image: artist.artist_image,
        }));

        // Set the formatted data to state
        setArtists(formattedData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Tattoo Artists</h1>
        <p>Claudette turned her arms upward to show us her tattooed wrists.
           One held the skull and crossbones of the<br></br> Wilted Rose. The other resembled the flag 
           which adorned the mast above us.
          </p>
      </header>
      <div className="artist-grid">
        {artists.map((artist, index) => (
          <div className="artist-card" key={index}>
            <img src={artist.image} alt={artist.name} />
            <h3>{artist.name}</h3> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default TattooArtists;

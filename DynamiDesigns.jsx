import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext"; 

const Productdetails = () => {
  const location = useLocation();
  const { id } = location.state || {}; 

  const [card, setCard] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  const { addToCart } = useCart(); 
  const navigate = useNavigate();  

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setCard(json);
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to load product details.");
          setLoading(false);
        });
    } else {
      setError("Product ID is missing.");
      setLoading(false);
    }
  }, [id]); 

  const handleAddToCart = () => {
    if (card) {
      addToCart(card);  
      navigate("/cart");  
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {card ? (
        <div>
          <div className="DynamicDesign">
            <div className="DynamicDesign1">
              <img src={card.image} alt={card.title} style={{ width: "300px", height: "300px" }} />
              <h1>Category: {card.category}</h1>
            </div>
            <div className="DynamicDesign2">
              <p><strong>{card.title}</strong></p>
              <h1>Artist Name:</h1>
              <h1>Booking Date :</h1>
              <h1>Time Slot Selection :</h1>
              <p><strong>Price: ${card.price}</strong></p>
              <button onClick={handleAddToCart}>Book Now</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default Productdetails;

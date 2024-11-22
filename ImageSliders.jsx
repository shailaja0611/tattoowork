import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageSliders = () => {
  return (
    <div className="container-fluid" style={{ marginTop: '-70px', padding: 0 , }}>
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="2000" 
      >
        
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
          <li data-target="#myCarousel" data-slide-to="4"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
             <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaLiqmKlC7txN-LmuBxcqEf2o_pbgQa_LiuA&s"
              style={{ width: '100%', height: '600px', borderRadius: '0', opacity: '0.85' }}
              alt="Image 1"
            /> 
            <h1 className="carousel-caption" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '90px', marginBottom: '180px' }}>
              "Every tattoo tells a story, what's yours?"
            </h1>
          </div>

          <div className="carousel-item">
            <img
              src="https://t4.ftcdn.net/jpg/05/79/14/61/240_F_579146122_eunQ3pCJLk9nlbKy2yylJOGGGQiM2dNb.jpg"
              style={{ width: '100%', height: '700px', borderRadius: '0', opacity: '0.85' }}
              alt="Image 2"
            />
            <h1 className="carousel-caption" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '90px', marginBottom: '180px', textAlign: 'center' }}>
              "Your Beliefs, Forever in Ink"
            </h1>
          </div>

          <div className="carousel-item">
            <img
              src="https://img.freepik.com/premium-photo/photo-cyberpunk-geometric-patterns-wings-shape-chest-tattoo-black-white-only-straight-shapes_1118791-12059.jpg?ga=GA1.1.898823599."
              style={{ width: '100%', height: '700px', borderRadius: '0', opacity: '0.85' }}
              alt="Image 3"
            />
            <h1 className="carousel-caption" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '90px', marginBottom: '180px', textAlign: 'center' }}>
              "Let your spirit soar as high as an eagle’s wings."
            </h1>
          </div>

          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…2vG_9W2pu_JdBQnu6G6YvfNUfJ3Bkb-E5NjUCCiU&usqp=CAU"
              style={{ width: '100%', height: '700px', borderRadius: '0', opacity: '0.85' }}
              alt="Image 4"
            />
            <h1 className="carousel-caption" style={{ fontFamily: '', fontSize: '90px', marginBottom: '180px', textAlign: 'center' }}>
              "Embrace the Darkness: Tattoos that Haunt"
            </h1>
          </div>

          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/man-doing-tattoo-tattoo-salon_1157-24941.jpg?ga=GA1.1.898823599.1716876559"
              style={{ width: '100vw', height: '700px', borderRadius: '0', opacity: '0.85' }}
              alt="Image 5"
            />
            <h1 className="carousel-caption" style={{ fontFamily: 'Sacramento, cursive', fontSize: '90px', marginBottom: '180px', textAlign: 'center' }}>
              "Crafting Timeless Art"
            </h1>
          </div>
        </div>

        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>

        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>

      </div>
    </div>
  );
};

export default ImageSliders;

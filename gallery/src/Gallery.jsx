import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

function Gallery() {
  const[show,setShow] = useState(true)
    const[showI,setShowI] = useState(false)
    function hideShow(){
    setShow(!show)
    setShowI(!showI)
    }
 const settings = {
       dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
  };
  
  return (
    // <Slider {...settings}>
   <>
 
      {show && <div className= "bg-lime-300 mt-40 pl-10 sm:w-1/2 sm:ml-40 md:w-3/4 md:ml-24 lg:w-1/2 lg:ml-72 pb-10 pt-10 pr-10 rounded shadow-md shadow-black">
      <h1 className="font-serif text-2xl text-blue-900 sm:ml-4 md:ml-24 lg:ml-32">Welcome to my gallary</h1>
      <h2 className="text-md text-red-800 font-semibold mt-4 md:ml-5 lg:ml-6">Enjoy with my photos. press the button to see adorable images.</h2>
      {show&&<button onClick={hideShow} className="bg-yellow-500 text-md px-8 py-1 text-black font-mono font-semibold rounded mt-6 sm:ml-16 md:ml-44 lg:ml-48 ">Start</button>}

    </div>}
     
       {showI && <div >
            <Slider {...settings}>
         {data.map((d)=>(
          <div className="sm:w-3/4  h-96 sm:ml-44 md:w-1/2 lg:ml-96 lg:w-1/3" >
            <img src = {d.image} className="sm:w-1/2 h-96 md:w-3/2 lg:w-1/3 rounded-lg shadow-md shadow-zinc-800"/>
          </div>

         ))}
         </Slider>
        </div>}

    </>
   
    //              <button type="button" data-role="none" class="slick-arrow slick-prev" style="display: block;">next</button>

    
//    </Slider>

  );
}


const data = [
  {
    image: "./image11.avif",
  },

  {
    image: "./image14.avif",
  },
  {
    image: "./image13.avif",
  },
  {
    image: "./image12.avif",
  },
  {
    image: "./pic43.jpg",
  },
  {
    image: "./pic50.jpg",
  },
  {
    image: "./image11.avif",
  },
  {
    image: "./image10.avif",
  },
  {
    image: "./pic48.jpg",
  },
  {
    image: "./pic47.jpg",
  },
  {
    image: "./pic46.jpg",
  },
  {
    image: "./image9.avif",
  },
  {
    image: "./image8.avif",
  },
  {
    image: "./image7.avif",
  },
  {
    image: "./image6.jpg",
  },
  {
    image: "./imagee5.jpg",
  },
  {
    image: "./image4.jpg",
  },
  {
    image: "./image3.jpg",
  },
  {
    image: "./image2.jpg",
  },
  {
    image: "./image1.jpg",
  },
];

export default Gallery;

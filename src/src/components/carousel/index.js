import React from "react";
import Carousel from "react-elastic-carousel";
import './style.css';
import { lembang, gunung, kawah, situ, lembah} from '../../assets/index'
import { ImLocation2 } from "react-icons/im";
const breakPoints = [
    { width: 1, itemsToShow: 1 }, 
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    // { width: 1200, itemsToShow: 4 },
  ];

  function Slider() {
    return (
      <>
        <div className="App">
          <Carousel breakPoints={breakPoints}>
          <div className="card ">
                <div className="card-image">  
                    <img width="500px" src={gunung} />
                </div>
                  <div className="capt" >
                    <h4>Gunung Batu</h4>
                    <ImLocation2 size={30} style={{ colorInterpolation:"white" }} />
                  </div>
                  <div className="title"><p>Dago Pakar</p></div>
            </div>
            <div className="card ">
                <div className="card-image">
                    <img width="400px" height= "250px" src={lembah} />
                </div>
                <div className="capt" >
                    <h4>Lembah Hijau</h4>
                    <ImLocation2 size={30} style={{ colorInterpolation:"white" }} />
                  </div>
                  <div className="title"><p>Ciwidey</p></div>
            </div>
            <div className="card ">
                <div className="card-image">
                    <img width="400px" height= "250px" src={situ} />
                </div>
                <div className="capt" >
                    <h4>Situ Lembang</h4>
                    <ImLocation2 size={30} style={{ colorInterpolation:"white" }} />
                  </div>  
                  <div className="title"><p>Dago Pakar, Lembang</p></div>
            </div>
            <div className="card ">
                <div className="card-image">
                    <img width="400px" height= "250px" src={kawah} />
                </div>
                <div className="capt" >
                    <h4>Kawah Putih</h4>
                    <ImLocation2 size={30} style={{ colorInterpolation:"white" }} />
                  </div>
                  <div className="title"><p>Rancabali</p></div>
            </div>
            <div className="card ">
                <div className="card-image">
                    <img width="400px" height= "250px" src={lembang} />
                </div>
                <div className="capt" >
                    <h4>Lembang</h4>
                    <ImLocation2 size={30} style={{ colorInterpolation:"white" }} />
                  </div>
                  <div className="title"><p>lembang</p></div>
            </div>
          </Carousel>
        </div>
      </>
    );
  }



export default Slider;

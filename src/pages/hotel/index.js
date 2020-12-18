import React, { useState, useEffect } from 'react';
import { auth } from '../../services';
import Cards from '../../components/cards/index';
import './product.css';

const Hotel = () => {
  const [DataHotel, setDataHotel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [display, setDisplay] = useState();

  const [search, setSearch] = useState('');

  const getHotel = (name) => {
    auth
      .getHotel(name)
      .then((res) => {
        console.log(res);
        setDataHotel(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getHotel('');
  }, []);

  return (
    <div>
      {isLoading ? <p>loading...</p> : <h1>Product Page</h1>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getHotel(search);
        }}
      >
        <label htmlFor="user">
          Find Product :
          <input
            className="form-content"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Search" />
      </form>
      <div className="content">
        {DataHotel.slice(0, display).map((data) => {
          return (
            <Cards key={[data.id]}>
              <div className="box">
                <h3 className="Hotel">{data.description}</h3>
                <div>
                  <div className="discount">
                    {/* <p>{price}</p> */}
                  </div>
                  {/* <h4>{data.display_normal_price}</h4> */}
                </div>
                {/* <h5>{data.display_price}</h5>
                <h5 className="unit_price">{data.display_unit_price}</h5> */}
              </div>
            </Cards>
          );
        })}
      </div>
    </div>
  );
};

export default Hotel;

import React from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import { Navbar } from '../../components'

const Table = () => {
    const packages = [
        {no:1, namaHotel: "Lembang", hargaHotel:"Rp.900.000"},
        {no:2, namaHotel: "Dago Pakar", hargaHotel:"Rp.500.000"},
        {no:3, namaHotel: "Ciwidey", hargaHotel:"Rp.400.000"},
        {no:4, namaHotel: "Rancaupas", hargaHotel:"Rp.700.000"},
    ]

    const renderPackages = (packages, index) => {
        return(
            <tr key={index}>
                <td>{packages.no}</td>
                <td>{packages.namaHotel}</td>
                <td>{packages.hargaHotel}</td>
            </tr>
        )
    }
    return (
        <div>
          <Navbar />
          <div  className='listHotel'>
          <h3>List hotel</h3>
            <ReactBootstrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Hotel</th>
                        <th>Harga Hotel</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map(renderPackages)}
                </tbody>
            </ReactBootstrap.Table>
            </div>
        </div>
    )
}

export default Table





// import React, { useState, useEffect } from 'react';
// import { auth } from '../../services';
// import Cards from '../../components/cards/index';
// import './product.css';

// const Hotel = () => {
//   const [dataHotel, setDataHotel] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [display, setDisplay] = useState();

//   const [search, setSearch] = useState('');

//   const getHotel = (name) => {
//     auth
//       .getHotel(name)
//       .then((res) => {
//         console.log(res);
//         setDataHotel(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };

//   useEffect(() => {
//     getHotel('');
//   }, []);

//   return (
//     <div>
//       {isLoading ? <p>loading...</p> : <h1 className='hotelPage'>Hotel Page</h1>}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           getHotel(search);
//         }}
//       >
//         <label htmlFor="user">
//           Find Hotel :
//           <input
//             className="form-content"
//             type="text"
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//             }}
//           />
//         </label>
//         <input type="submit" value="Search" />
//       </form>
//       <div className="content">
//         {dataHotel.slice(0, display).map((data) => {
//           return (
//             <Cards key={[data.id]}>
//               <div className="box">
//                 <h3 className="Hotel">{data.description}</h3>
//                 <div>
//                   <div className="discount">
//                     {/* <p>{data.display_promo_price_percentage}</p> */}
//                   </div>
//                   {/* <h4>{data.display_normal_price}</h4> */}
//                 </div>
//                 {/* <h5>{data.display_price}</h5> */}
//                 {/* <h5 className="unit_price">{data.display_unit_price}</h5> */}
//               </div>
//             </Cards>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Hotel;

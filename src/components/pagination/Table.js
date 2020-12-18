import React from 'react'
import * as ReactBootstrap from 'react-bootstrap';

const Table = () => {
    const packages = [
        {no:1, nama: "Lembang", harga:"Rp.900.000"},
        {no:2, nama: "Dago Pakar", harga:"Rp.500.000"},
        {no:3, nama: "Ciwidey", harga:"Rp.400.000"},
        {no:4, nama: "Rancaupas", harga:"Rp.700.000"},
    ]

    const renderPackages = (packages, index) => {
        return(
            <tr key={index}>
                <td>{packages.no}</td>
                <td>{packages.nama}</td>
                <td>{packages.harga}</td>
            </tr>
        )
    }
    return (
        <div>
            <ReactBootstrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Harga</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map(renderPackages)}
                </tbody>
            </ReactBootstrap.Table>
        </div>
    )
}

export default Table

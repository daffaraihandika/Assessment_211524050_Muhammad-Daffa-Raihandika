import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Table from 'react-bootstrap/Table';

const ListBarang = () => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getBarang();
    }, []);
    
    const getBarang = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/barang`);
            console.log("Data :", response.data.data);
            setData(response.data.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleBtnTambahBarang = () => {
        navigate(``)
    }

    return (
        <div className="flex justify-center items-center p-2">
            <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
                <div className="flex justify-end items-center p-2 mb-4">
                    <button className="btn btn-success">
                        Tambah Organisasi
                    </button>
                </div>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2 w-1/15">No</th>
                            <th className="border px-4 py-2 w-4/15">Kode Barang</th>
                            <th className="border px-4 py-2 w-3/15">Nama Barang</th>
                            <th className="border px-4 py-2 w-2/15">Satuan</th>
                            <th className="border px-4 py-2 w-2/15">Harga Satuan</th>
                            <th className="border px-4 py-2 w-4/15">Stok</th>
                            <th className="border px-4 py-2 w-4/15">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((barang, index) => (
                            <tr key={barang.KodeBarang}>
                                <td className="border px-4 py-2 text-center">{index + 1}</td>
                                <td className="border px-4 py-2">{barang.KodeBarang}</td>
                                <td className="border px-4 py-2">{barang.NamaBarang}</td>
                                <td className="border px-4 py-2">{barang.Satuan}</td>
                                <td className="border px-4 py-2">{barang.HargaSatuan}</td>
                                <td className="border px-4 py-2">{barang.Stok}</td>
                                <td className="border px-4 py-2 text-center">
                                    <div className="flex">
                                        <button className="btn btn-sm btn-success ml-3">
                                            Edit
                                        </button>
                                        <button className="btn btn-sm btn-danger ml-3">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListBarang;

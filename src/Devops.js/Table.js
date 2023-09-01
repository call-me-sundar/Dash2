import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Offcanvas from './Offcanvas/Offcanvas';

export default function Table() {

    const [apiData, setapiData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    let get_data = async () => {
        let res = await axios.get('http://localhost:4000/tabledatas');
        setapiData(res.data);
    };



    useEffect(() => {
        get_data();
    }, []);



    console.log(apiData)


    const keys = apiData.map((key) => console.log(key));



    const filteredData = apiData.filter((value) =>
        value.column_1.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
        value.column_2.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
        value.column_25.toString().toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div>

            <div className='card-body p-5 bg-white rounded-4'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h6 className='mb-1'>Basic Data </h6>
                        <p className='text-muted'>A simple example with no frills.</p>
                    </div>
                    <div
                        className="d-none d-sm-inline-block form-inline ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light shadow-none"
                                placeholder="Search for anything..." aria-label="Search"
                                aria-describedby="basic-addon2" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                            <>
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasWithBothOptions"
                                    aria-controls="offcanvasWithBothOptions"
                                >
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </>

                            {/* <div className="input-group-append">
                                <button className="btn btn-primary" type="button"
                                    onClick={() => {
                                        const filteredData = apiData.filter((value) =>
                                            value.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                            value.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                            value.position.toLowerCase().includes(searchQuery.toLowerCase()));
                                        setapiData(filteredData);
                                    }}>
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {apiData.map((item, index) => (
                                <th key={index}>
                                    Keys:
                                    {Object.keys(item).map((key) => (
                                        <span key={key}>{key}, </span>
                                    ))}
                                    </th>
                                  ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData
                            .map((value, index) =>
                            (
                                <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.column_1}</td>
                                    <td>{value.column_2}</td>
                                    <td>{value.column_25}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            <Offcanvas />
        </div>
    )
}

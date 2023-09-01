import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
    const [data, setData] = useState('');

    let get_data = async () => {
        let res = await axios.get('http://localhost:4000/tabledatas')
        setData(res.data);
    };

    useEffect(() => {
        get_data();
    },[]);

    console.log('data===>',data);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {data.tabledatas?.map((item, index) => (
                       
                            <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.position}</td>
                        </tr>
                      
                       
                    ))}
                </tbody>
            </table>
        </div>
    );
}

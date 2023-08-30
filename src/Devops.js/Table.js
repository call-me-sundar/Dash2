import React from 'react'

export default function Table() {
    return (
        <div>
        <h2  className='data-color'> DataTable</h2>
        
            <div className='card-body p-5 bg-white'>
                <h6 className='mb-1'>Basic Data </h6>
                <p className='text-muted'>A simple example with no frills.</p>
                <div className='data-table-extensions'>
                    <div className='data-table-extension-filter'>
                        <input type="text" name="filterDataTable" class="filter-text" placeholder="Filter Table"></input>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">S.NO</th>
                            <th scope="col">FIRSTNAME</th>
                            <th scope="col">LASTNAME</th>
                            <th scope="col">POSITION</th>
                            <th scope="col">DATE</th>
                            <th scope="col">SALARY</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>sara</td>

                        </tr>
                        <tr>
                            <th >2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@mdo</td>
                            <td>sara</td>
                        </tr>
                        <tr>
                            <th >3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@mdo</td>
                            <td>sara</td>

                        </tr>
                        <tr>
                            <th >4</th>
                            <td >Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@mdo</td>
                            <td>sara</td>
                            <td>sara</td> 


                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

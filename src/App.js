import { BrowserRouter } from 'react-router-dom'
import Navber from './Devops.js/Navber'
import SideNavbar from './Devops.js/SideNavbar'
import Table from './Devops.js/Table'
import Components from './Devops.js/Components'
import Routing from './Routing'



function App() {
  return (
   <div>
    <BrowserRouter>
    <div id="wrapper">
      <SideNavbar/>
      <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Navber/>
        <div className='container-fluid'>
          
        <Routing/>
        

        </div>
      </div>
      </div>
    </div>
    </BrowserRouter>
   </div>
  )
}

export default App
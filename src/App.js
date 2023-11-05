import './App.css';
import Thead from './Thead'
import { FaWindows } from "@react-icons/all-files/fa/FaWindows";
import { FaShoppingBag } from "@react-icons/all-files/fa/FaShoppingBag";
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt";
import { FaBriefcaseMedical } from "@react-icons/all-files/fa/FaBriefcaseMedical";
import { FaFacebookMessenger } from "@react-icons/all-files/fa/FaFacebookMessenger";
import { FaCreditCard } from "@react-icons/all-files/fa/FaCreditCard";
import { IoSettingsSharp } from "@react-icons/all-files/io5/IoSettingsSharp";
import { FiHelpCircle } from "@react-icons/all-files/fi/FiHelpCircle";

function App() {
 
    return (
      <div className='container-fluid'>
        <div className='row '>
          <div className='col-md'>
            <h4>Guvi Saler</h4>
            <li class="active"> <i><FaWindows/></i> Dashboard</li>
            <li> <i><FaShoppingBag/></i> Lab Test</li>
            <li> <i><FaCalendarAlt/></i> Appountment</li>
            <li> <i><FaBriefcaseMedical/></i> Medicine Order</li>
            <li> <i><FaFacebookMessenger/></i> Message</li>
            <li> <i><FaCreditCard/></i> Payment</li>
            <li> <i><IoSettingsSharp/></i> Setting</li>
            <li> <i><FiHelpCircle/></i> help</li>
          </div>
          {/*---------------Main-bar----------------- */}
          <div className='col-md-10'>
            <div id='top-box'>
             <input placeholder='Search' id='input1'/>
             <h4>Sales Information</h4>
             <label>Customes<br/>
               <input placeholder='Enter Customer Name'/>
             </label>
             
             <label>Invouce ID<br/>
               <input placeholder='Enter Invoice ID'/>
             </label>
             
             <label>Start Date<br/>
               <input placeholder='Start Date'/>
             </label>
             
             <label>End Date<br/>
               <input placeholder='End Date'/>
             </label>
            </div>
            {/*--------------Table--------------*/}
            <Thead/>
          </div>
        </div>
      </div>
    );
}

export default App;

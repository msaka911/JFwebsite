import Dropdown from 'react-bootstrap/Dropdown';
import { AiOutlineMenu } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.css';


function DropExample(props) {

    return (
      <Dropdown onSelect={(i,_)=>props.setValue(i)}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <AiOutlineMenu/>
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  
  export default DropExample;
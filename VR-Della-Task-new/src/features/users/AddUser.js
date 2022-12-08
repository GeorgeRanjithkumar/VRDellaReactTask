import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addUser } from "./userSlice"

const AddUser = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errmsg, setErrMsg] = useState('');
  const [values, setValues] = useState({
    name: '',
    email: '',
    contact:'',
    comments:'',
  });
  const validatefield = () => {
    
  }
  const handleAddUser = () => {
    if ((values.name || values.email || values.contact || values.comments) === ''){
      setErrMsg("Fields are Mendatory..!")
    } else {
      setValues({ name: '', email: '',comments:'',contact:'' });
      dispatch(addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
        contact: values.contact,
        comments: values.comments,
      }));
      navigate('/');
    }
   
    
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
    
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Ranjith' }}
      />
        <h3 style={{color:"red"}}>{errmsg}</h3>
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'ranjith@gmail.com' }}
      />
        <h3 style={{color:"red"}}>{errmsg}</h3>
       <br />
      <TextField
        label="Contact"
        value={values.contact}
        onChange={(e) => setValues({ ...values, contact: e.target.value })}
        inputProps={{ type: 'number', placeholder: 'Eg: 9853796900' }}
      />
        <h3 style={{color:"red"}}>{errmsg}</h3>
       <br />
      <TextField
        label="Comments"
        value={values.comments}
        onChange={(e) => setValues({ ...values, comments: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Type anything...' }}
      />
        <h3 style={{color:"red"}}>{errmsg}</h3>
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser
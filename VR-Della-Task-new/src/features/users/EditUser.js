import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editUser } from "./userSlice"

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { name, email, contact, comments } = existingUser[0];
  const [errmsg, setErrMsg] = useState('');
  const [values, setValues] = useState({
    name,
    email,
    contact,
    comments
  });

  const handleEditUser = () => {
    if ((values.name || values.email || values.contact || values.comments) === '') {
      setErrMsg("Fields are Mendatory..!")
    } else {
      setValues({ name: '', email: '', contact: '', comments: '' });
      dispatch(editUser({
        id: params.id,
        name: values.name,
        email: values.email,
        contact: values.contact,
        comments: values.comments
      }));
      navigate('/');
    }
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <h1 className="text-center font-bold text-2xl text-gray-700">Edit your Detail</h1>
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}
      />
      <h3 style={{color:"red"}}>{errmsg}</h3>
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'jhondoe@mail.com' }}
      />
      <h3 style={{color:"red"}}>{errmsg}</h3>
      <br />
      <TextField
        label="contact"
        value={values.contact}
        onChange={(e) => setValues({ ...values, contact: e.target.value })}
        inputProps={{ type: 'number', placeholder: 'Eg : 8780088096' }}
      />
      <h3 style={{color:"red"}}>{errmsg}</h3>
      <br />
      <TextField
        label="comments"
        value={values.comments}
        onChange={(e) => setValues({ ...values, comments: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'type anything...' }}
      />
      <h3 style={{color:"red"}}>{errmsg}</h3>
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}

export default EditUser
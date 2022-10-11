import React from 'react';

const validate = (input) => {
  let error = {}

  if (!input.username) {
    error.username = 'username is required'
  } else if (!/\S+@\S+\.\S+/) {
    error.username = 'username is invalid'
  }

  if (!input.password) {
    error.password = 'password is required'

  } else if (!/(?=.*[0-9])/) {
    error.password = 'password is invalid'
  }
  return error;
}


export default function Form() {


  //const [username, setUsername] = useState('');
  //const [password, setPassword] = useState(''); es lo mismo que la linea de abajo
  const [input, setInput] = React.useState({

    username: '',
    password: ''

  })

  const [error, setError] = React.useState({});

  /*  const handlerUsername = (event) => {
      setUsername(event.target.value)
  
    }
    const handlerPassword = (event) => {
  
      setPassword(password= event.target.value)//una forma de setear
    }
  */


  const handlerInput = (event) => {

    setInput({ ...input, [event.target.name]: event.target.value })


    //event.  -> obj
    //target. -> input
    //name    -> atributo del input
    setError(validate({
      ...input, [event.target.name]: event.target.value
    }));
  }


  
  return (
    <form>
      <label>userName</label>

      <input type="text"
        onChange={handlerInput}
        value={input.username}//otra forma de setear
        name='username'
      ></input >
      {error.username && (<p className='danger'>{error.username}</p>) }
      <hr style={{ borderstyle: 'none' }} />

      <label>Password</label>

      <input type="password"
        onChange={handlerInput}
        name='Password'
        value={input.password}
      ></input>
      <hr style={{ borderstyle: 'none' }} />
      <button>submit</button>
    </form>


  )
}

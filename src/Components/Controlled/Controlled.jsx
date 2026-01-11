import React, { useState } from 'react';

const Controlled = () => {
    const [password, setPassword] = useState('');
    const [passError, setPassError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handelPasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(password.length+1);

        if(password.length+1 < 8){
            setPassError('need more than 8 character!');
        }else{
            setPassError('');
        }
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="name" />
          <br />
          <input
            type="password"
            onChange={handelPasswordChange}
            defaultValue={password}
            name="password"
            placeholder="password"
          />
          <br />

          <br />
          <input type="submit" value="submit" />
        </form>
        <p>
          <small>{passError}</small>
        </p>
      </div>
    );
};

export default Controlled;
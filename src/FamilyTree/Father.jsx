import React from 'react';
import Myself from './Myself';
import Brother from './Brother';

const Father = () => {
    return (
      <div>
        <h1>Father</h1>
        <section className='flex'>
          <Myself></Myself>
          <Brother></Brother>
        </section>
      </div>
    );
};

export default Father;
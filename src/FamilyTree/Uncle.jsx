import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
      <div>
        <h1>uncle</h1>
        <section className='flex'>
          <Cousin cousin="miss.1"></Cousin>
          <Cousin cousin="miss.2"></Cousin>
        </section>
      </div>
    );
};

export default Uncle;
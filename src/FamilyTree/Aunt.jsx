import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <h1>aunt</h1>
            <section className='flex'>
                <Cousin cousin='alibordi khan'></Cousin>
                <Cousin cousin='ghasite begum'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;
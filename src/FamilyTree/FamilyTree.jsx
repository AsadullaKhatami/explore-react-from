import React from 'react';
import Grandparent from './Grandparent';

const FamilyTree = () => {
    return (
        <div className='border'>
            <Grandparent></Grandparent>
        </div>
    );
};

export default FamilyTree;
import React, { useContext } from 'react';
import { GiftContext } from './Context';

const Special = () => {
    const asset = useContext(GiftContext);
    return (
        <div>
            {/* <h3>gift: {asset}</h3>  */}
            {/* props driling */}
            
            <h3>gift: {asset}</h3>

        </div>
    );
};

export default Special;
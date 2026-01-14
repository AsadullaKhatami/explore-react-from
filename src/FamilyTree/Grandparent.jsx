import React, { useState } from 'react';
import Father from './father';
import Uncle from './uncle';
import Aunt from './aunt';
import { GiftContext, MoneyContext } from './Context';

const Grandparent = () => {
    const asset = 'diamond';
    const [money, setMoney] = useState(0);
    return (
      <div>
        <h1>grandparent</h1>
        <h3>
          asset:
          <span style={{ color: "red", margin: "0 20px 0 10px" }}>{asset}</span>
          money: {money}
        </h3>
        <section className="flex">
          <MoneyContext value={[money, setMoney]}>
            <GiftContext.Provider value={asset}>
              <Father></Father>
            </GiftContext.Provider>
            <Uncle></Uncle>
            <Aunt></Aunt>
          </MoneyContext>
        </section>
      </div>
    );
};

export default Grandparent;
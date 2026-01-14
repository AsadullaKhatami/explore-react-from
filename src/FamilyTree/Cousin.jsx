import React, { use } from "react";
import { MoneyContext } from "./Context";

const Cousin = ({ cousin }) => {
    const [money, setMoney] = use(MoneyContext);
    const handelBtn = () => {
        setMoney(money+1000);
    }
  return (
    <div>
      <h3>{cousin}</h3>

      {
        cousin === 'ghasite begum' && <section>
            <p>{money}</p>
            <button onClick={handelBtn}>add 1000 tk</button>
        </section>
      }
    </div>
  );
};

export default Cousin;

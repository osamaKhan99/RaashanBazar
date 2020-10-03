import React, { useEffect, useState } from 'react';

const Client_Total_Capital = ({ contract, web3 }) => {
  const [total, setTotal] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const tA = await contract.methods.totalEthereumBalance().call();
      setTotal(web3.utils.fromWei(tA));
    };
    init();
  }, [total]);
  return (
    <article className='card product-item'>
      <header className='card__header'>
        <h1 className='product__title'>Total Client Capital</h1>
      </header>
      <div className='card__content'>
        <h2 className='product__price'>$ {(total * 344.4).toFixed(6)}</h2>
      </div>
    </article>
  );
};

export default Client_Total_Capital;

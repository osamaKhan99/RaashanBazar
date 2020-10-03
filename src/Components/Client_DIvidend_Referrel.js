import React, { useEffect, useState } from 'react';

const Client_DIvidend_Referrel = ({ contract, web3, account }) => {
  const [dividend, setdividend] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      //With Out Refferral
      const tA = await contract.methods.dividendsOf(account[0]).call();
      const Amount = parseFloat(web3.utils.fromWei(tA)).toFixed(6);
      setdividend(Amount);
    };
    init();
  }, [dividend]);
  return (
    <article className='card product-item'>
      <header className='card__header'>
        <h1 className='product__title'>Your Dividend Earings</h1>
      </header>
      <div className='card__content'>
        <h2 className='product__price'>Value::{dividend} ETH</h2>
      </div>
    </article>
  );
};

export default Client_DIvidend_Referrel;

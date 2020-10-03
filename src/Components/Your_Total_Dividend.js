import React, { useEffect, useState } from 'react';

const Your_Total_Dividend = ({
  contract,
  web3,
  account,
  withDraw,
  reInvest,
}) => {
  const [dividendWithReferral, setRefferal] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      //With Refferral
      const tAD = await contract.methods
        .dividendWithReferral(account[0])
        .call();
      const AmountRef = parseFloat(web3.utils.fromWei(tAD)).toFixed(6);
      setRefferal(AmountRef);
      console.log(dividendWithReferral);
    };
    init();
  }, [dividendWithReferral]);

  //WithDraw Funds
  const withdraw = () => {
    withDraw();
  };

  const reinvest = () => {
    reInvest();
  };
  return (
    <article className='card product-item'>
      <header className='card__header'>
        <h1 className='product__title'>Your Total Dividend</h1>
      </header>
      <div className='card__content'>
        <h2 className='product__price'>Value::{dividendWithReferral} ETH</h2>
        <h2 className='product__price'></h2>
      </div>
      <div className='card__actions'>
        <button className='btn' onClick={() => withdraw()}>
          WithDraw
        </button>
        <button className='btn' onClick={() => reinvest()}>
          Reinvest
        </button>
      </div>
    </article>
  );
};

export default Your_Total_Dividend;

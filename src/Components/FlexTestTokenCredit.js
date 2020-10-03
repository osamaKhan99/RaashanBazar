import React, { useEffect, useState } from 'react';

const FlexTestTokenCredit = ({ web3, contract, account }) => {
  const [total, setTotal] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const tA = await contract.methods.balanceOf(account[0]).call();
      const Amount = parseFloat(web3.utils.fromWei(tA)).toFixed(6);
      setTotal(Amount);
    };
    init();
  }, [total]);

  return (
    <article className='card product-item'>
      <header className='card__header'>
        <h1 className='product__title'>$</h1>
        <h1 className='product__title'>Flex Test Token</h1>
      </header>
      <div className='card__content'>
        <h1 className='product__title'>Your Flex TestToken credit</h1>
        <h2 className='product__price'>Value::{total} Flex Test Token</h2>
      </div>
    </article>
  );
};

export default FlexTestTokenCredit;

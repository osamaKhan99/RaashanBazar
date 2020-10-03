import React, { useEffect, useState } from 'react';

const Buy_Flex_token = ({ contract, web3, buy }) => {
  const [amount, setAmount] = useState(0);
  const [buyPrice, setBuyPrice] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      //With Refferral
      const tAD = await contract.methods.buyPrice().call();
      const AmountRef = parseFloat(web3.utils.fromWei(tAD)).toFixed(6);
      setBuyPrice(AmountRef);
    };
    init();
  }, [buyPrice]);

  const onSubmit = e => {
    e.preventDefault();

    buy(amount, '0x0000000000000000000000000000000000000000');
  };
  return (
    <article className='card product-item'>
      <form onSubmit={e => onSubmit(e)}>
        <header className='card__header'>
          <h1 className='product__title'>Buy Flex Test Token</h1>
          <h1 className='product__title'>(10% Dividend Distribution)</h1>
        </header>
        <div className='card__content'>
          <h2 className='product__price'>Amount Of Ethereum</h2>
          <h2 className='product__price'>
            <input
              className='input'
              type='number'
              min='0.00001'
              max='100'
              step='0.00001'
              placeholder='Amount of Ethereum'
              value={amount}
              onChange={e => setAmount(e.target.value)}
            ></input>
          </h2>
          <h2 className='product__price'>Buy Price</h2>
          <h2 className='product__price'>
            {buyPrice} ETH |{(buyPrice * 344.4).toFixed(4)}$
          </h2>
        </div>
        <div className='card__actions'>
          <button className='btn' type='submit'>
            Buy
          </button>
        </div>
      </form>
    </article>
  );
};

export default Buy_Flex_token;

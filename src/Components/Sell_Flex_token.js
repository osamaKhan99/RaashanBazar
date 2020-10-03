import React, { useEffect, useState } from 'react';

const Sell_Flex_token = ({ contract, web3, Sell }) => {
  const [amount, setAmount] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);

  useEffect(() => {
    const init = async () => {
      //With Refferral
      const tAD = await contract.methods.sellPrice().call();
      const AmountRef = parseFloat(web3.utils.fromWei(tAD)).toFixed(6);
      setSellPrice(AmountRef);
    };
    init();
  }, [sellPrice]);

  const onSubmit = e => {
    e.preventDefault();
    Sell(amount);
  };

  return (
    <article className='card product-item'>
      <form onSubmit={e => onSubmit(e)}>
        <header className='card__header'>
          <h1 className='product__title'>Sell Flex Test Token</h1>
          <h1 className='product__title'>(10% Dividend Distribution)</h1>
        </header>
        <div className='card__content'>
          <h2 className='product__price'>Amount Of Flex Test Token</h2>
          <h2 className='product__price'>
            <input
              className='input'
              type='number'
              min='0.00001'
              max='1000'
              step='0.00001'
              placeholder='Amount of Ethereum'
              value={amount}
              onChange={e => setAmount(e.target.value)}
              required
            ></input>
          </h2>

          <h2 className='product__price'>Sell Price</h2>
          <h2 className='product__price'>
            {sellPrice} ETH |{(sellPrice * 344.4).toFixed(4)}$
          </h2>
        </div>
        <div className='card__actions'>
          <button className='btn' type='submit'>
            Sell
          </button>
        </div>
      </form>
    </article>
  );
};

export default Sell_Flex_token;

import React, { Fragment, useEffect, useState } from 'react';
import ClientCapital from './Components/Client_Total_Capital';
import FlexTestToken from './Components/FlexTestTokenCredit';
import DividendAndReferrel from './Components/Client_DIvidend_Referrel';
import BuyFlexToken from './Components/Buy_Flex_token';
import SellFlexToken from './Components/Sell_Flex_token';
import TotalDividend from './Components/Your_Total_Dividend';
import './App.css';
import Navbar from './Components/Navbar';

const App = ({ contract, web3, accounts }) => {
  const [token, settoken] = useState(undefined);
  const [dividend, setDividend] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [token, dividend]);

  //Buy Tokens Using Ethereum
  const buyTokens = async (amount, address) => {
    const value = web3.utils.toWei(amount);
    console.log(value);
    const add = web3.utils.toChecksumAddress(address);
    console.log(add);

    await contract.methods
      .buy(add)
      .send({ from: accounts[0], value: value })
      .on('receipt', async receipt => {
        setLoading(true);
        console.log(receipt);
        const tA = await contract.methods.balanceOf(accounts[0]).call();
        const Amount = parseFloat(web3.utils.fromWei(tA)).toFixed(6);

        settoken(Amount);
      })
      .on('error', error => {
        console.log(error);
        setLoading(false);
      });
  };

  //Sell Tokens

  const sellTokens = async amount => {
    const value = web3.utils.toWei(amount);
    console.log(value);

    await contract.methods
      .sell(value)
      .send({ from: accounts[0] })
      .on('receipt', async receipt => {
        setLoading(true);
        console.log(receipt);
        const tA = await contract.methods.balanceOf(accounts[0]).call();
        const Amount = parseFloat(web3.utils.fromWei(tA)).toFixed(6);
        settoken(Amount);
        console.log(token);
      })
      .on('error', error => {
        console.log(error);
        setLoading(false);
      });
  };

  //WithDraw Funds

  const withdrawProfit = async () => {
    await contract.methods
      .withdraw()
      .send({ from: accounts[0] })
      .on('receipt', async receipt => {
        setLoading(true);
        console.log(receipt);
        const tAD = await contract.methods
          .dividendWithReferral(accounts[0])
          .call();
        const AmountRef = parseFloat(web3.utils.fromWei(tAD)).toFixed(6);
        console.log(AmountRef);
        setDividend(AmountRef);
      })
      .on('error', error => {
        console.log(error);
        setLoading(false);
      });
  };

  //ReInvest Funds

  const InvestProfit = async () => {
    await contract.methods
      .reinvest()
      .send({ from: accounts[0] })
      .on('receipt', async receipt => {
        setLoading(true);
        console.log(receipt);
        const tAD = await contract.methods
          .dividendWithReferral(accounts[0])
          .call();
        const AmountRef = parseFloat(web3.utils.fromWei(tAD)).toFixed(6);
        console.log(AmountRef);
        setDividend(AmountRef);
      })
      .on('error', error => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <Fragment>
      <Navbar />
      {loading ? (
        <div>
          <h1 className='contant'>Loading....Your Transection is Pending</h1>
        </div>
      ) : (
        <Fragment>
          <div className='grid'>
            <ClientCapital contract={contract} web3={web3} />
            <FlexTestToken contract={contract} web3={web3} account={accounts} />
            <DividendAndReferrel
              contract={contract}
              web3={web3}
              account={accounts}
            />
            <BuyFlexToken contract={contract} web3={web3} buy={buyTokens} />
            <SellFlexToken contract={contract} web3={web3} Sell={sellTokens} />
            <TotalDividend
              contract={contract}
              web3={web3}
              account={accounts}
              withDraw={withdrawProfit}
              reInvest={InvestProfit}
            />
          </div>
          <div>
            <h1 className='product__title'>
              <a className='btn'>HOW IT WORKS</a>
            </h1>
          </div>
          <h1 className='contant'>
            1.First of all, install MetaMask 
            <strong>
              <a href='https://metamask.io/'>here</a> 
            </strong>
            and put some Ether in it.
          </h1>
          <h1 className='contant'>
            2.To buy TX3 Test Token, simply click the "Buy Tokens" button and
            enter the amount of Ether you want to convert to TX3, based on the
            current Buy Price. When confirming the transaction on MetaMask, be
            sure to use a high enough gas price so that the price doesn't change
            drastically while the transaction is in progress. Here you can view
            recommended gas prices. Buying coins will increase both the Buy
            Price and Sell Price with 0.00000001 ETH per bought coin once the
            transaction is complete.
          </h1>
          <h1 className='contant'>
            3.Under "TX3 Token Balance" you can see how many TX3 you currently
            own. Note that when cashing out coins, the Buy Price and Sell Price
            drop afterwards, decreasing the value of your (and everyone else's)
            coins by 0.00000001 ETH per coin.
          </h1>
          <h1 className='contant'>
            4.Every time TX3 are bought or sold, a percentage of the fee from
            the bought/sold coins will be divided under the current TX3 holders
            (Dividends).
          </h1>
          <h1 className='contant'>
            5.You can move your tokens into Dividends which then is stored as
            Ether. To do this click on the "Sell Tokens" button - and your
            tokens will be transferred into Ether based upon the current sell
            price.
          </h1>
          <h1 className='contant'>
            6.To cash out your TX3, click the "Withdraw" button and follow the
            prompts.
          </h1>
        </Fragment>
      )}
    </Fragment>
  );
};

export default App;

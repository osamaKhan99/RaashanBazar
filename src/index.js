import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getContracts, getWeb3 } from './Utils';
import App from './App';

const LoadingContainer = () => {
  const [web3, setWeb3] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [accounts, setAccount] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('web3 changed');
    const init = async () => {
      const web3 = await getWeb3();
      console.log(web3);
      const contract = await getContracts(web3);
      console.log(contract);
      const accounts = await web3.eth.getAccounts();

      setWeb3(web3);
      setContract(contract);
      setAccount(accounts);
      setLoading(false);
    };
    init();
  }, [accounts, web3]);

  return (
    <div>
      {loading ? (
        <div>...Loading</div>
      ) : (
        <App web3={web3} contract={contract} accounts={accounts}></App>
      )}
    </div>
  );
};

ReactDOM.render(<LoadingContainer />, document.getElementById('root'));

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}>
    {({ loading, error, data }) => {
      if (loading) return <p>loading</p>;
      if (error) {
        console.log(error.message);

        return <p>error</p>;
      }
      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ));
    }}
  </Query>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>my first apollo app 🚀</h2>
        <ExchangeRates />
      </header>
    </div>
  );
}
export default App;

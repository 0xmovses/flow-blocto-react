import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const fcl = require("@onflow/fcl");

fcl.config()
// connect to Flow testnet
.put("accessNode.api", "https://access-testnet.onflow.org")
// use Blocto testnet wallet with HTTP/POST
.put(
  "discovery.wallet",
  "https://flow-wallet-testnet.blocto.app/api/flow/authn"
)
.put("discovery.wallet.method", "HTTP/POST")

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


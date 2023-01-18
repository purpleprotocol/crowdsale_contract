require('babel-register');
require('babel-polyfill');
const PrivateKeyProvider = require("truffle-privatekey-provider");

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            gas: 4800000,
            gasPrice: 65000000000,
            network_id: "*" // Match any network id
        },
        goerli: {
            provider: () => {
              return new PrivateKeyProvider(process.env.PRIVATE_KEY, 'https://goerli.infura.io/v3/' + process.env.INFURA_API_KEY)
            },
            network_id: '5', // eslint-disable-line camelcase
            gas: 4800000,
            gasPrice: 4974472480,
        },
        mainnet: {
            provider: () => {
                return new PrivateKeyProvider(process.env.PRIVATE_KEY, 'https://mainnet.infura.io/v3/' + process.env.INFURA_API_KEY)
            },
            gas: 4800000,
            gasPrice: 11897004390,
            network_id: '1'
        }
    },
    compilers: {
        solc: {
            version: "0.4.24",
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
};

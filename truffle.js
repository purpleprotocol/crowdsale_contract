require('babel-register');
require('babel-polyfill');
const PrivateKeyProvider = require("truffle-privatekey-provider");

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            gas: 4780000,
            gasPrice: 65000000000,
            network_id: "*" // Match any network id
        },
        goerli: {
            provider: () => {
              return new PrivateKeyProvider(process.env.PRIVATE_KEY, 'https://goerli.infura.io/v3/' + process.env.INFURA_API_KEY)
            },
            network_id: '5', // eslint-disable-line camelcase
            gas: 4804877,
            gasPrice: 75745851663,
        },
        mainnet: {
            provider: () => {
                return new PrivateKeyProvider(process.env.PRIVATE_KEY, 'https://mainnet.infura.io/v3/' + process.env.INFURA_API_KEY)
            },
            gas: 4804877,
            gasPrice: 20770043900,
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
    },
    plugins: ['truffle-plugin-verify', 'truffle-plugin-stdjsonin'],
    api_keys: {
        etherscan: "8396WAXRHBN4IYSFYE5Y4XPV9RETRAVTKU"
    }
};

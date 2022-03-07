//https://eth-rinkeby.alchemyapi.io/v2/wQdSLbUwf_cfJqjJT3hJFVhnsKF9Auul

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/wQdSLbUwf_cfJqjJT3hJFVhnsKF9Auul',
      accounts: ['your private key here'],
    },
  },
};
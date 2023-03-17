const PurplecoinCrowdsale = artifacts.require("./../contracts/PurplecoinCrowdsale.sol");
const parseConfig = require('../test/helpers/parseConfig');

function getWalletsForNetwork(network, accounts) {
    let wallets = [];
    if (network === "development") {
        wallets[0] = accounts[0];
        wallets[1] = accounts[7];
        wallets[2] = accounts[8];
        wallets[3] = accounts[9];
    }
    if (network === "ropsten") {
        wallets = parseConfig.getWalletAddresses();

    }
    return wallets;
}

module.exports = function (deployer, network, accounts) {
    const RATE = parseConfig.getRate();
    const coins = 113997000;
    const rate = RATE;
    const exponent = Math.pow(10, 18);
    const WAVE_CAPS = parseConfig.getWaveCaps();
    const WAVE_BONUSES = parseConfig.getBonuses();
    let vault;

    if (network === "development") {
        vault = "0x8948F2d65Fa48cB10Aeb2C91930b7f9d28b2E885";
    } else if (network === "goerli") {
        vault = "0x1C01d79740Fd9f3Eb2230e962728ecd196a5FaB1";
    } else {
        vault = "0x130fCeAD624C57aB46EF073bd1a940ACF8Bf2c85";
    }

    console.log('-----> rate:       ', rate.toString());
    console.log('-----> wallet:     ', vault);
    console.log('-----> cap:        ', coins * exponent);
    console.log('-----> waves caps: ', WAVE_CAPS);
    console.log('-----> bonuses:    ', WAVE_BONUSES);

    deployer.deploy(PurplecoinCrowdsale, rate, coins, WAVE_CAPS, WAVE_BONUSES, vault).then(async () => {
        const instance = await PurplecoinCrowdsale.deployed();
        const token = await instance.token.call();

        console.log('-----> Token Address', token);
    }).catch(console.error);
};

const duration = {
    seconds: function (val) {
        return val
    },
    minutes: function (val) {
        return val * this.seconds(60)
    },
    hours: function (val) {
        return val * this.minutes(60)
    },
    days: function (val) {
        return val * this.hours(24)
    },
    weeks: function (val) {
        return val * this.days(7)
    },
    years: function (val) {
        return val * this.days(365)
    }
};

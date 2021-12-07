require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stool response meadow unusual hover arena equal gaze'; 
let testAccounts = [
"0xa1183c22c48a18bd536ff21819d897725c37d620a42f70ce864763d1690e6582",
"0x422329265504f659324878a09dbf341345558caf34c7686439027b2e75b2fa93",
"0xd2dc4235844d712763843d95aedb6544612363ae929da9928ec0ce396b993cc2",
"0x3d6f958a9cb346ef2a29e65a811c2cc9f53f72d41e126098ef7b70bcd1301e10",
"0x97148a56be096ccb36441e871dba9e0312e800da53a6409b78dfbbce63879aad",
"0x01e4722fd5e7cf1290da6b20d51bdafb46dcfbf018ff2c409e07edc21085616f",
"0x52417f037b7e74cd5b1de67c9a71d1f938cc8d1742286d8ce526dd85df04711e",
"0xaaed1b1c726df0f5c9d25c6279155cd6004c850fae2c300a7aa666a3e878d64f",
"0x4e0c9e553206193483713bd6f9d1b51e8d1cfba5cb532cec65762f8c9c9b6741",
"0x9571002ca9a0962267cc90717c8deb58ca0361d7f752e0d6b2d52943e706d3bd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



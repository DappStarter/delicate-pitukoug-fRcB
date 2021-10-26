require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remind artwork inner prize swift turkey'; 
let testAccounts = [
"0x8a396561dcccc00936ced310b014d7d03c371eb421f8c1da3c738ec51f1dadae",
"0x6ba71cbe2034c97b310775920e54af4dd63fa8c9e20cb8194fac5431586aa82a",
"0x31dfa98bd7f69b78d09348d8fc68fd571ae95b58900d2b26672c747c94acaa4a",
"0x3794ffceb718611f6ecaa31179253432c93b2632a28bed5343d1f502a5806334",
"0x7cf40e9f4efba18bb3161eff46a8b62e0630be82d19de238ab1bc614ae73599d",
"0xeb5ac3c3e1975b0caa7f5c67c8f015551dcb77cec8f7e7b4f6fd54167bc2a8dc",
"0xe32125daf6c410600bf907da8b9170a43665e05ce89e31199e93a76592c57197",
"0x04a188bd3e44e11a85dd79e3850ff856f1d4f060da5795e3ec9cbf44e3902723",
"0x6336596460d5d99e1d6b6e04a81a863dbcc59abfa05e8564079bf2fb0a40a34d",
"0xec81d147d038cd2b47fc16e71876b9a01d6e6af621ce587eeffd426557f3a697"
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



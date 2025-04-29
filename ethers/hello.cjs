// import { ethers } from "ethers";
const ethers = require('ethers').ethers;

// const provider = ethers.getDefaultProvider();
// const main = async () => {
//     try {
//         const balance = await provider.getBalance("vitalik.eth");
//         console.log("ETH Balance:", ethers.formatEther(balance));
//     } catch (error) {
//         console.error("Error Details:", {
//             code: error.code,
//             message: error.shortMessage,
//             url: error.request?.url // 显示具体失败的请求
//         });
//     }
// };
// main();

// // import { ethers } from "ethers";
// // const ethers = require('ethers').ethers
// // const provider = ethers.getDefaultProvider();
// // // const provider = new ethers.InfuraProvider("mainnet", "492783a687d74963beda437d37f3f147");
// // console.log(provider);
// // const main = async () => {
// //     const balance = await provider.getBalance(`vitalik.eth`);
// //     console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);
// // }
// // main();


// 利用公共rpc节点连接以太坊网络
// 可以在 https://chainlist.org 上找到
const ALCHEMY_MAINNET_URL = 'https://mainnet.infura.io/v3/492783a687d74963beda437d37f3f147';
const ALCHEMY_SEPOLIA_URL = 'https://sepolia.infura.io/v3/492783a687d74963beda437d37f3f147';
const SEPOLIA_URL = 'sepolia.infura.io'
// 连接以太坊主网
const providerETH = new ethers.JsonRpcProvider(ALCHEMY_MAINNET_URL)
// 连接Sepolia测试网
const providerSepolia = new ethers.JsonRpcProvider(ALCHEMY_SEPOLIA_URL)

// const providerSepoliaTest = new ethers.JsonRpcProvider(SEPOLIA_URL)

// 1. 查询vitalik在主网和Sepolia测试网的ETH余额
console.log("1. 查询vitalik在主网和Sepolia测试网的ETH余额");
const result = async () => {
    try {
        // const sepoliaBalance = await providerSepoliaTest.getBalance('0xa5071F0fCbc2da2f4D35d887c2641d04c0f21B36')
        // console.log(sepoliaBalance);
        const balance = await providerETH.getBalance('vitalik.eth');
        const balanceSepolia = await providerSepolia.getBalance('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045');
        // 将余额输出在console（主网）
        const network = await providerETH.getNetwork();
        console.log(network.toJSON());
        console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);
        // 输出Sepolia测试网ETH余额
        console.log(`Sepolia ETH Balance of vitalik: ${ethers.formatEther(balanceSepolia)} ETH`);
    } catch (error) {
        console.error("Error fetching balances:", error);
    }

}
// result();

const getBalance = async () => {
    const providerETH = new ethers.providers.JsonRpcProvider(ALCHEMY_MAINNET_URL)
    const providerSepolia = new ethers.providers.JsonRpcProvider(ALCHEMY_SEPOLIA_URL)

    try {
        const balance = await providerETH.getBalance('vitalik.eth')
        const balanceSepolia = await providerSepolia.getBalance(
            '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'
        )
        const network = await providerETH.getNetwork()

        console.log(network)
        console.log(`ETH Balance of vitalik: ${ethers.utils.formatEther(balance)} ETH`)
        console.log(`Sepolia ETH Balance of vitalik: ${ethers.utils.formatEther(balanceSepolia)} ETH`)
    } catch (error) {
        console.error('Error fetching balances:', error)
    }
}
getBalance();


// const ethers = require('ethers').ethers;
// // 利用ALCHEMY的rpc节点连接以太坊网络
// // 准备ALCHEMY API Key或者Infura API Key
// const ALCHEMY_ID = '492783a687d74963beda437d37f3f147'
// // 连接以太坊主网
// const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/${ALCHEMY_ID}`)
// const abiWETH = `[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]`;
// const addressWETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2' // WETH Contract
// const contractWETH = new ethers.Contract(addressWETH, abiWETH, provider)

// // 人类可读abi，以ERC20合约为例
// const abiERC20 = [
//     "function name() view returns (string)",
//     "function symbol() view returns (string)",
//     "function totalSupply() view returns (uint256)",
//     "function balanceOf(address) view returns (uint)",
// ];
// const addressDAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract
// const contractDAI = new ethers.Contract(addressDAI, abiERC20, provider)
// const main = async () => {
//     // 1. 读取WETH合约的链上信息（WETH abi）
//     const nameWETH = await contractWETH.name()
//     const symbolWETH = await contractWETH.symbol()
//     const totalSupplyWETH = await contractWETH.totalSupply()
//     console.log("\n1. 读取WETH合约信息")
//     console.log(`合约地址: ${addressWETH}`)
//     console.log(`名称: ${nameWETH}`)
//     console.log(`代号: ${symbolWETH}`)
//     console.log(`总供给: ${ethers.formatEther(totalSupplyWETH)}`)
//     const balanceWETH = await contractWETH.balanceOf('vitalik.eth')
//     console.log(`Vitalik持仓: ${ethers.formatEther(balanceWETH)}\n`)

//     // 2. 读取DAI合约的链上信息（IERC20接口合约）
//     const nameDAI = await contractDAI.name()
//     const symbolDAI = await contractDAI.symbol()
//     const totalSupplDAI = await contractDAI.totalSupply()
//     console.log("\n2. 读取DAI合约信息")
//     console.log(`合约地址: ${addressDAI}`)
//     console.log(`名称: ${nameDAI}`)
//     console.log(`代号: ${symbolDAI}`)
//     console.log(`总供给: ${ethers.formatEther(totalSupplDAI)}`)
//     const balanceDAI = await contractDAI.balanceOf('vitalik.eth')
//     console.log(`Vitalik持仓: ${ethers.formatEther(balanceDAI)}\n`)
// }

// main()
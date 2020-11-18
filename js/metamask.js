// window.addEventListener('load', async () => {
//     // Wait for loading completion to avoid race conditions with web3 injection timing.
//     if (window.ethereum) {
//         const web3 = new Web3(window.ethereum);
//         try {
//             // Request account access if needed
//             await window.ethereum.enable();
//             // Acccounts now exposed
//             return web3;
//         } catch (error) {
//             console.error(error);
//         }
//         // Legacy dapp browsers...
//     } else if (window.web3) {
//         // Use Mist/MetaMask's provider.
//         const web3 = window.web3;
//         console.log('Injected web3 detected.');
//         return web3;
//     } else {
//         const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//         return web3;
//     }
//   })

document.getElementById("connector").addEventListener("click", async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(account)
    localStorage.setItem("address", account);
    document.getElementById("walletaddress").innerHTML=account
})

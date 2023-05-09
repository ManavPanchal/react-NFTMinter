
const contractAddress = "0x2D4Eb37830DC30863bB6eDabd40BB1C5Fd03598A";
const Abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"mintNft","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const tokenAddress = "0x46efD46188Ba03C515dcC84aBd935Ba34008c10C"
export { contractAddress, Abi, tokenAddress}
import { ethers } from "ethers";
import { contractAddress, Abi, tokenAddress } from '../../Data/ContractData';

export const MintNft = async (to, ipfsUri, walletConnection, setOpenWalletBox) => {
    console.log(ipfsUri);
    if (!walletConnection) {
        setOpenWalletBox(true);
        return;
    }
    if (window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const contractInastance = new ethers.Contract(contractAddress, Abi, signer);
        const tx = await contractInastance.mintNft(to, ipfsUri,tokenAddress, { value: ethers.utils.parseEther("0.05") });
        await tx.wait();
    }
}
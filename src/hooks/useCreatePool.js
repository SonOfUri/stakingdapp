import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import {getRewardContract} from "../constants/contracts/rewardToken.js";
import {getStakingContract} from "../constants/contracts/staking.js";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import {ethers} from "ethers";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useCreatePool = (reward) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    const rewardConverted = reward * (10e18) ;

    return useCallback(async () => {
        if (!isSupportedChain(chainId)) {
            toast.error("Wrong network");
            return;
        }

        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getStakingContract(signer);
        const tokenContract = getRewardContract(signer);

        try {
            const tx = await tokenContract.approve(contract.target, rewardConverted);
            await tx.wait();
            toast.success("Token Approved!");

            const poolCreationTx = await contract.createPool(rewardConverted);
            await poolCreationTx.wait();

            toast.success("Pool created!");
        } catch (error) {
            toast.error("Something went wrong");
        }
    }, [rewardConverted, chainId, walletProvider]);
};

export default useCreatePool;
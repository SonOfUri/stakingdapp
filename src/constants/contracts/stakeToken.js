// Importing the ethers object from the ethers.js library.
// ethers is a general-purpose library to interact with the Ethereum blockchain.
import { ethers } from "ethers";

// Importing the ABI (Application Binary Interface) of a smart contract.
// The ABI is a JSON file that describes the smart contract's methods and events.
// It's crucial for interacting with the smart contract from JavaScript.
import Abi from "../stakeTokenAbi.json";

// Exporting a function that creates a new contract instance bound to the smart contract deployed at a specific address.
// The contract instance allows you to interact with the smart contract, to call its methods and listen to its events.
// The function requires a provider or signer that is used to send transactions.
export const getStakeContract = (providerOrSigner) =>
    new ethers.Contract(
        // The address of the deployed smart contract, read from the app's environment variables.
        import.meta.env.VITE_stake_token,
        // The ABI of the contract.
        Abi,
        // The provider or signer.
        providerOrSigner
    );
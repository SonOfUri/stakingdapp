// Importing createWeb3Modal (the function used to create a Web3 Modal, a frontend library to interact with Ethereum blockchain) and defaultConfig (the default configuration object for ethers.js, a library that makes it easier to interact and make requests to Ethereum by wrapping standard JSON-RPC methods with more user-friendly JavaScript methods) from ethers.js react library.
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

// Defining a supported blockchain network using its Chain ID
export const SUPPORTED_CHAIN = 11155111;

// Configuring a custom blockchain network, in this case, Sepolia
const sepolia = {
    chainId: SUPPORTED_CHAIN, // Chain ID of the network
    name: "Sepolia", // Network name
    currency: "ETH", // Primary currency
    explorerUrl: "https://sepolia.etherscan.io", // Explorer URL for network transactions
    rpcUrl: import.meta.env.VITE_rpc_https, // RPC URL for the network
};

// The website metadata.
const metadata = {
    name: "My Website", // Actual Web site name
    description: "My Website description", // Description of the website
    url: "https://mywebsite.com", // The actual URL of your site; it must match your domain and subdomain.
    icons: ["https://avatars.mywebsite.com/"], // icons for your website
};

// Defining a new function configureWeb3Modal, which creates and configures a new Web3 Modal instance using the previously defined network and metadata settings.
export const configureWeb3Modal = () =>
    createWeb3Modal({
        ethersConfig: defaultConfig({ metadata }), // Applying the default Ethers configuration with your website's metadata for this new Web3 Modal instance.
        chains: [sepolia], // The blockchain network(s) the modal will support; here it's only the sepolia network.
        projectId: import.meta.env.VITE_projectId, // The project ID for this instance, fetched from environment variables.
        enableAnalytics: false, // Optional analytics configuration for Web3 Modal; this is defaulted to false.
    });
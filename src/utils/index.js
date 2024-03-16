import { SUPPORTED_CHAIN } from "../connection/configureWeb3Modal.js";

export const isSupportedChain = (chainId) =>
    Number(chainId) === SUPPORTED_CHAIN;

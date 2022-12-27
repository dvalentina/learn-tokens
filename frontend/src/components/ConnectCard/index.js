import React, { useContext } from "react";
import { Container } from "./ConnectCard.styled";
import ConnectWallet from "../ConnectWallet";
import TokenCard from "../Card/TokenCard";
import AccountCard from "../Card/AccountCard";
import { WalletContext } from "../../contexts/WalletContext";
import { GOERLI_CHAIN_ID } from "../../constants";

function ConnectCard() {
  const { account, chainId } = useContext(WalletContext);

  return (
    <Container>
      {account && chainId === GOERLI_CHAIN_ID ? (
        <>
          <AccountCard />
          <TokenCard />
        </>
      ) : (
        <ConnectWallet />
      )}
    </Container>
  );
}

export default ConnectCard;

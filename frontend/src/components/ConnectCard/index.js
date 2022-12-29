import React, { useContext } from "react";
import { Container } from "./ConnectCard.styled";
import ConnectWallet from "../ConnectWallet";
import TokenCard from "../Cards/TokenCard";
import AccountCard from "../Cards/AccountCard";
import { WalletContext } from "../../contexts/WalletContext";
import { GOERLI_CHAIN_ID } from "../../constants";
import GoerliLogo from "../GoerliLogo";

function ConnectCard() {
  const { account, chainId } = useContext(WalletContext);

  return (
    <Container>
      <GoerliLogo />
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

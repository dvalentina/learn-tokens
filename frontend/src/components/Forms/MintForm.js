import React, { useContext } from "react";
import { TokenContext } from "../../contexts/TokenContext";
import Form from "../Form";

function MintForm() {
  const { mint, mintStatus } = useContext(TokenContext);

  return (
    <Form onSubmit={mint} status={mintStatus} name="mint" targetLabel="to" />
  );
}

export default MintForm;
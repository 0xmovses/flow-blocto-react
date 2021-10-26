import React, { useState } from "react";
import styled from "styled-components";
const fcl: any = require("@onflow/fcl");

const Card = styled.div`
  margin: 10px 5px;
  padding: 10px;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
`;
const Code = styled.pre`
  background: #f0f0f0;
  border-radius: 5px;
  max-height: 150px;
  overflow-y: auto;
  padding: 5px;
`;

interface BlockData {
  id: string;
  parentId: string;
  height: number;
  timestamp: {
    wrappers_: null;
    arrayIndexOffset_: number;
    array: [number];
    pivot_: number;
    convertedPrimitiveFields_: {};
    collectionGuarantees: [];
    blockSeal: [
      {
        blockId: string;
        executionReceiptId: string;
        executionReceiptSignatures: [];
        resultApprovalSignatures: [];
      }
    ];
    signatures: [
      {
        [key: string]: number;
      }
    ];
  };
}

const GetLatestBlock = () => {
  const [data, setData] = useState<BlockData | null >();

  const runGetLatestBlock = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const response = await fcl.send([fcl.getLatestBlock()]);

    setData(await fcl.decode(response));
  };

  return (
    <Card>
      <button onClick={(event: React.MouseEvent<HTMLElement>) => runGetLatestBlock}>Get Latest Block</button>
      {data && <Code>{JSON.stringify(data, null, 2)}</Code>}
    </Card>
  );
};

export default GetLatestBlock;

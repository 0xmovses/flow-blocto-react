import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks/store";
import { setLatestBlock } from '../store/reducers/transactionSlice'
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
  const [data, setData] = useState<BlockData | null>();
  const dispatch = useAppDispatch();
  const latestBlock = useAppSelector((state) => state.rootReducer.transaction.latestBlock)
  const runGetLatestBlock = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const response = await fcl.send([fcl.getLatestBlock()]);
    const flowData = await await fcl.decode(response)
    setData(flowData);
    dispatch(setLatestBlock(flowData.id));
  };

  return (
    <Card>
    <p>{JSON.stringify(latestBlock)}</p>
      <button
        onClick={(event: React.MouseEvent<HTMLElement>) =>
          runGetLatestBlock(event)
        }
      >
        Get Latest Block
      </button>
      {data && <Code>{JSON.stringify(data, null, 2)}</Code>}
    </Card>
  );
};

export default GetLatestBlock;

import { BigNumber } from "ethers";
import { Card } from "antd";
import DowgoBalance from "./DowgoBalance";
import USDCBalance from "./USDCBalance";

import "./index-balance.styles.scss";

export const BalancePanel = (
  dowgoBalance: BigNumber,
  usdBalance: BigNumber,
  price: BigNumber
) => {
  return (
    <div
      style={{
        display: "block",
        width: "100%",
      }}
    >
      <h1 className="balance-title-profile">INVEST IN DOWGO FUNDS </h1>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          padding: "10px 0px",
        }}
      >
        <Card
          style={{
            width: "30%",
            backgroundColor: "black",
            borderRadius: "7px",
            boxShadow: "0 0 5px #0ff4e9,inset 0 0 5px #0ff4e9",
            border: "2px solid #0ff4e9",
          }}
          title="DWG1 Balance"
        >
          <div
            style={{
              color: "white",
            }}
          >
            {DowgoBalance(dowgoBalance, price)}
          </div>
        </Card>
        <Card
          style={{
            width: "30%",
            backgroundColor: "black",
            borderRadius: "7px",
            boxShadow: "0 0 5px #0ff4e9,inset 0 0 5px #0ff4e9",
            border: "2px solid #0ff4e9",
          }}
          title="USDC Balance"
        >
          <div
            style={{
              color: "white",
            }}
          >
            {USDCBalance(usdBalance)}
          </div>
        </Card>

        <Card
          style={{
            width: "30%",
            backgroundColor: "black",
            borderRadius: "7px",
            boxShadow: "0 0 5px #0ff4e9,inset 0 0 5px #0ff4e9",
            border: "2px solid #0ff4e9",
          }}
          title="% Variation"
        >
          <div
            style={{
              color: "white",
            }}
          ></div>
        </Card>
      </div>
    </div>
  );
};

import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { TradeButton } from "../../displayComponents/TradeButton";
import { approveUSDAndUpdate } from "../../../actions/contracts/usdtContract/approveUSDAndUpdate";

export function ApproveButton() {
  const { state, dispatch } = useContext(AppContext);

  return TradeButton(() => {
    approveUSDAndUpdate(dispatch, state);
  }, "Approve USDT");
}

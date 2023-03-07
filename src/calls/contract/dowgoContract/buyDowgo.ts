import { EthAddress } from "../../../types/types";

import { DowgoERC20 } from "../../../types/DowgoERC20";
import { BigNumber, ethers } from "ethers";
import { DowgoERC20ABI } from "../../../constants/DowgoERC20ABI";
import { ONE_DOWGO_UNIT, ONE_USDC_UNIT } from "../../../constants";

export const buyDowgo = async (
  dowgoAddress: EthAddress,
  provider: ethers.providers.Web3Provider,
  buyAmount: number
): Promise<void> => {
  try {
    const contract: DowgoERC20 = new ethers.Contract(
      dowgoAddress,
      DowgoERC20ABI,
      provider
    ) as DowgoERC20;
    console.log(Math.floor(buyAmount * Number(ONE_DOWGO_UNIT)));
    const tx = await contract
      .connect(provider.getSigner())
      .buy_dowgo(
        BigNumber.from(
          Math.floor(buyAmount * Number(ONE_DOWGO_UNIT)).toString()
        )
      );
    await tx.wait(6);
  } catch (error) {
    console.error(error);
  }
};

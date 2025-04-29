import { Box, Button } from "@mui/material";
import { useEthersSigner } from "../../hooks/useEthersSigner";
import { useStakeConstruct } from "../../hooks/useContract";
import { useEffect, useState } from "react";
import { parseUnits } from "viem";
import { LoadingButton } from "@mui/lab";
import { sepolia } from "viem/chains";

export default function Page() {
  const signer = useEthersSigner({ chainId: sepolia.id });
  const stakeContract = useStakeConstruct(signer);
  const [end, setEnd] = useState("");
  const [loading, setLoading] = useState(false);

  const handleStake = async () => {
    try {
      setLoading(true);
      const tx = await stakeContract.depositETH({
        value: parseUnits("0.01", 18),
      });
      if (tx.wait) {
        const res = await tx.wait();
        console.log(res, "deposit");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const getStartBlock = async () => {
      const res = await stakeContract.endBlock();
      setEnd(Number(res).toString());
    };
    if (stakeContract) {
      getStartBlock();
    }
  }, [stakeContract.provider]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "20px",
      }}
    >
      <Box>EndBlock:{end}</Box>
      <Box mt="10px">
        <LoadingButton
          loading={loading}
          onClick={handleStake}
          variant="contained"
        >
          Stake 0.001
        </LoadingButton>
      </Box>
    </Box>
  );
}

import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../styles/Home.module.css";
import { Box } from "@mui/material";
import Link from "next/link";

const Header = () => {
  //     const provider = ethers.getDefaultProvider();
  // const main = async () => {
  //     const balance = await provider.getBalance(`vitalik.eth`);
  //     console.log('eth balance of vitalik', ethers.formatEther(balance))
  // }
  // main();
  return (
    <div className={styles.header}>
      <div>Dapp Frontend</div>
      <Box display={"flex"} gap={"20px"} alignItems={"center"}>
        <Link href={"/"}>Home</Link>
        <Link href={"/ethers"}>Ethers</Link>
        <Link href={"/wagmi"}>Wagmi</Link>
        <ConnectButton label="Sign in" />
      </Box>
    </div>
  );
};

export default Header;

import { formatUnits, parseUnits } from "viem";
import { useAccount, useBalance } from  "wagmi";

const Info = () => {
    const { address } = useAccount();
    const { data, error } = useBalance({ address});
    const { data: rccTokenData } = useBalance({ address, token:'0x6FCE5Dd421c88B7df4552E037362Bcea35Ae0AcB'})
    console.log(data,'balance');

    return (
        <div>
            <div>address: {address}</div>
            {
                data && <div>ETH Balance: {data?.formatted}------- formatted{formatUnits(data?.value, 18)}</div>
            }
            <div>RCC Balance: {rccTokenData?.formatted}</div>
        </div>
    )
}

export default Info;
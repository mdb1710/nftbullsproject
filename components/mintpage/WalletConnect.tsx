interface Props {
    signedIn: boolean,
    address: String 
}

const WalletConnect = (props: Props) => {
    const { signedIn, address } = props;
    return(
      <div className='p-2 justify-around flex items-start'>
            {!signedIn ? <button className='bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 mt-5 rounded'>Connect Your MetaMask Wallet</button> : <button className='bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 mt-5 rounded'>Wallet Connected: {address}</button>}
        </div>
    )
}

export default WalletConnect
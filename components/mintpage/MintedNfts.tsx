interface Props {
    signedIn: boolean,
    supply: String
}

const MintedNfts = (props: Props) => {
    const { signedIn, supply } = props
    return(
        <div className='p-2 justify-around flex items-start border-red-500'>
            <span className='text-3xl'>TOTAL JUNGLE POSSE MEMBERS MINTED: <span className='text-3xl'>{!signedIn ? <>-</> : <>{supply}</> } / 1989</span></span>
        </div>
    )
}

export default MintedNfts
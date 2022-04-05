import Head from 'next/head'
import Web3 from 'web3'
import { useState, useEffect } from 'react'


import { TEST_ADDRESS, TEST_ABI } from "../bullsConfig"
import WalletConnect from '../components/mintpage/WalletConnect'
import MintedNfts from '../components/mintpage/MintedNfts'
import GetBullNfts from '../components/mintpage/GetBullNfts'
import MintHeroSection from '../components/mintpage/MintHeroSection'

import NewNavBar from '../components/HomePageNav'

// allow window to fit typescript calls

declare let window: any

const Mint = () => {
    const [signedIn, setSignedIn] = useState(false)
    const [userAddress, setUserAddress] = useState('')
    const [totalSupply, setTotalSupply] = useState(0)
    const [bullContract, setBullContract] = useState('')

    const [how_many_bulls, set_how_many_bulls] = useState(1)

    const [saleStarted, setSaleStarted] = useState(true)

    const [bullPrice, setBullPrice] = useState(0)

    useEffect(() => { 
        (async function signInWallet(){
            await signIn()
         })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // useEffect(() => {
    //     async function signInWallet(){
    //         const response = await signIn()
    //     }
    // })



    async function signIn() {
        if (window.web3 !== 'undefined') {
        // Use existing gateway
        window.web3 = new Web3(window.ethereum);
        
        } else {
        alert("No Ethereum interface injected into browser. Read-only access");
        }

        window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(function (accounts: any) {
            window.web3.eth.net.getNetworkType()
            // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
            .then((network: any) => {console.log(network);if(network != "rinkeby"){alert("You are on " + network+ " network. Change network to rinkeby or you won't be able to do anything here")} });  
            let wallet = accounts[0]
            setUserAddress(wallet)
            setSignedIn(true)
            callContractData(wallet)
            })
            .catch(function (error: any) {
            // Handle error. Likely the user rejected the login
            console.error(error)
            })
    }

    async function signOut() {
        setSignedIn(false)
    }

    async function callContractData(wallet: string) {
        //  let balance = await window.web3.eth.getBalance(wallet);
        // setWalletBalance(balance)
        // console.log(walletBalance)
        console.log("Contract Data Started")
        const nftBullContract = new window.web3.eth.Contract(TEST_ABI, TEST_ADDRESS)
        setBullContract(nftBullContract)
        console.log(nftBullContract)
        // const salebool = await memberContract.methods.saleIsActive().call() 
        // console.log("saleisActive" , salebool)
        // setSaleStarted(salebool)

        const totalSupply = await nftBullContract.methods.totalSupply().call()
        setTotalSupply(totalSupply)
        console.log(totalSupply)

        const nftBullPrice = await nftBullContract.methods.bullPrice().call() 
        setBullPrice(nftBullPrice)
    }

    return(
        <div className="md:container md:mx-auto">
            <Head>
                <title>The Genesis Tapes</title>
                <meta name="description" content="A website dedicated to honor the ongoing legacy of Tupac Shakur" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NewNavBar />
            <main>
                <MintHeroSection />
                <WalletConnect signedIn={signedIn} address={userAddress} />
                <MintedNfts signedIn={signedIn} supply={totalSupply}/>
                <GetBullNfts saleStarted={saleStarted} bullNumber={how_many_bulls} bullPrice={bullPrice} bullContract={bullContract} walletAddress={userAddress}/>
            </main>
        </div>
    )
}

export default Mint
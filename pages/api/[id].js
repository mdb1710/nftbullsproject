import {INFURA_TEST_ADDRESS, TEST_ADDRESS, TEST_ABI} from "../../bullConfig.js"
import Web3 from "web3";

// import the json containing all metadata. not recommended, try to fetch the database from a middleware if possible, I use MONGODB for example
import traits from "../../database/traitsfinal.json";

const infuraAddress = INFURA_TEST_ADDRESS

const nftBullApi = async(req, res) => {

    // SOME WEB3 STUFF TO CONNECT TO SMART CONTRACT
  const provider = new Web3.providers.HttpProvider(infuraAddress)
  const web3infura = new Web3(provider);
  const bullContract = new web3infura.eth.Contract(TEST_ABI, TEST_ADDRESS)
  


  // IF YOU ARE USING INSTA REVEAL MODEL, USE THIS TO GET HOW MANY NFTS ARE MINTED
//   const totalSupply = await bananaContract.methods.totalSupply().call();
//   console.log(totalSupply)
  


// THE ID YOU ASKED IN THE URL
  const query = req.query.id;


  // IF YOU ARE USING INSTA REVEAL MODEL, UNCOMMENT THIS AND COMMENT THE TWO LINES BELOW
//   if(parseInt(query) < totalSupply) {
  const totalBulls = 10000;
  if(parseInt(query) < totalBulls) {


    // CALL CUSTOM TOKEN NAME IN THE CONTRACT
    const tokenNameCall = await bullContract.methods.bullNames(query).call();
    let tokenName = `#${query}${(tokenNameCall === '') ? "" : ` - ${tokenNameCall}`}`

    // IF YOU ARE NOT USING CUSTOM NAMES, JUST USE THIS
    // let tokenName= `#${query}`

    
    
    const signatures = [137,883,1327,1781,2528,2763,3833,5568,5858,6585,6812,7154,8412]
    const trait = traits[parseInt(query)]
    // const trait = traits[ Math.floor(Math.random() * 8888) ] // for testing on rinkeby 

    // CHECK OPENSEA METADATA STANDARD DOCUMENTATION https://docs.opensea.io/docs/metadata-standards
    let metadata = {}
    // IF THE REQUESTED TOKEN IS A SIGNATURE, RETURN THIS METADATA
    if ( signatures.includes( parseInt( query ) ) ) {
    
      metadata = {
        "name": tokenName,
        "description": "NFT Bulls is a collection of 10000 unique bulls living on the Ethereum blockchain.",
        "tokenId" : parseInt(query),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "external_url":"https://www.nftxmas.net",
        "attributes": [   
          {
            "trait_type": "NFT Bulls",
            "value": trait["NFT Bulls"]
          }    
        ]
      }
      // console.log(metadata)
    } else {
    // GENERAL BULL METADATA
      metadata = {
        "name": tokenName,
        "description": "NFT Bulls is a collection of 10000 unique bulls living on the Ethereum blockchain.",
        "tokenId" : parseInt(query),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "external_url":"https://www.nftxmas.net",
        "attributes": [          
            {
              "trait_type": "BACKGROUND",
              "value": trait["BACKGROUND"]
            },
            {
              "trait_type": "BASE",
              "value": trait["BASE"]
            },
            {
              "trait_type": "HORN",
              "value": trait["HORN"]
            },
            {
              "trait_type": "MOUTH",
              "value": trait["MOUTH"]
            },
            {
              "trait_type": "HAIR",
              "value": trait["HAIR"]
            },
            {
              "trait_type": "NOSE",
              "value": trait["NOSE"]
            },
            {
              "trait_type": "EYES",
              "value": trait["EYES"]
            },
        ]
      }
      
      // console.log(metadata)

    }
    
    res.statusCode = 200
    res.json(metadata)
  } else {
    res.statuscode = 404
    res.json({error: "The NFT Bull you requested is out of range"})

  }


  // this is after the reveal

  
}

export default nftBullApi
import Image from 'next/image'
import Link from 'next/link'
import V2Hero from '../public/NFTBullsBanner.jpeg'



const NewHeroSection = () => {
    return(
        <>
          <div className='bg-gray-900 aspect-w-16 aspect-h-9 my-20 relative'>
            <Image
              src={V2Hero}
              layout='responsive'
              alt="Welcome To NFT Bulls"
            />
            <div className='flex flex-row mx-auto py-5 items-center justify-center space-x-10'>
            <div className=" mt-6 relative">
                <Link href="/mint">
                    <a 
                        className="justify-center px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400">
                        Mint Now
                    </a>
                </Link>
            </div>
            <div className="mt-6">
                <a href="https://discord.gg/sRBQyZvSmh"
                    className="justify-center px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400">
                    Join Discord
                </a>
            </div>
            </div>
          </div>
        </>
    )
}

export default NewHeroSection

import Image from 'next/image'
import Sample from '../../public/1.png'
// import Welcome from '../public/heroflashimage.JPEG'
import Link from 'next/link'



const MintHeroSection = () => {
    return(
        <>
    <div className="container bg-red-500 px-6 py-40 mx-auto lg:flex lg:h-128 lg:py-16 ">
        <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
            <Image 
                src={Sample}
                width={400}
                height={400}
                alt='Sample VFT Image'
            />
        </div>
        <div className='flex flex-col items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2'>
            <h1 className="text-5xl font-bold text-white text-center">NFT BULLS</h1>
            <p className="mt-4 text-white text-center text-white">Mint One or More NFT Bulls below!</p>
        </div>
    </div>

          </>
    )
}

export default MintHeroSection
import Image from 'next/image'
import Link from 'next/link'
import V2Hero from '../public/NewBanner.png'



const NewHeroSection = () => {
    return(
        <>
          <div className='relative'>
            <Image
              src={V2Hero}
              layout='responsive'
              alt="Welcome To NFT Bulls"
            />
          </div>
        </>
    )
}

export default NewHeroSection
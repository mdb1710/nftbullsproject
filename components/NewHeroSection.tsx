import Image from 'next/image'
import Link from 'next/link'
import V2Hero from '../public/NewBanner.png'



const NewHeroSection = () => {
    return(
        <>
          <div className='w-auto relative'>
            <Image
              src={V2Hero}
              layout='responsive'
                objectFit='cover'
              alt="Welcome To NFT Bulls"
              sizes='100%'
            />
          </div>
        </>
    )
}

export default NewHeroSection
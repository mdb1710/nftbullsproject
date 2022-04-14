import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/NFTBullsLogo.jpeg'

/*

<a className='inline-flex items-center p-2 mr-4 '>
                              <Image 
                                src={Logo}
                                width={100}
                                height={(100)}
                                alt='Welcome To The Genesis Tapes'
                                />
                        </a>

*/

const HomePageNav = () => {
    return(
        <>
            <nav className='flex items-center justify-between flex-wrap bg-white p-3'>
                <div>
                    <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>
                              <Image 
                                src={Logo}
                                width={100}
                                height={(100)}
                                alt='Welcome To NFT Bulls'
                                />
                        </a>
                    </Link>
                </div>
                <div>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <span className='text-xl text-black font-bold uppercase tracking-wide'>
                            Twitter
                        </span>
                    </a>
                </Link>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <span className='text-xl text-black font-bold uppercase tracking-wide'>
                            Discord
                        </span>
                    </a>
                </Link>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <span className='text-xl text-black font-bold uppercase tracking-wide'>
                            View On OpenSea
                        </span>
                    </a>
                </Link>
                </div>
            </nav>
        </>

    )
}

export default HomePageNav;

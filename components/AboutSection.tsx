import Image from 'next/image'
import HeadImage from '../public/headimage.png'
import NewHeadImage from '../public/1.png'


const AboutSection = () => {
    return(
        <div className='container mx-auto text-center py-4'>
            <h2 className='text-6xl my-4 font-barrio'>ABOUT</h2>
            <p className='text-2xl my-2'>Sub headline to talk about the project</p>
            <p className='text-2xl my-2'>More details in the about section will go here</p>
            <div className='max-w-mid px-20 py-4 my-10'>
                
            </div>
        </div>
    )
}

export default AboutSection

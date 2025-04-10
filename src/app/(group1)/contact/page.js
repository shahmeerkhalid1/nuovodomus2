
import dynamic from 'next/dynamic'
import Image from 'next/image'

import AddressCard from '@/components/ui/cards/addressCard'
import SectionTitle from '@/components/ui/sectionTitle'
import { addressList } from '@/lib/fackData/addressList'
import InputFiled from '@/components/ui/inputFiled'
import TextAreaFiled from '@/components/ui/textAreaFiled'
import RightArrow from '@/assets/icons/rightArrow'
import from_img from "@/assets/images/houses/calliope/3.jpg"
// import from_img from "@/assets/images/contact-image.jpg"
import Feedback from '@/components/section/feedback'
import ButtonOutline from '@/components/ui/buttons/buttonOutline'

const LeafletMap = dynamic(
    () => import('@/components/ui/leafletMap'),
    {
        loading: () => <p>A map is loading</p>,
        ssr: false
    }
)

export const metadata = {
    title: "NuovoDomus -- Contact",
    description: "NuovoDomus is a next js and tailwind css website",
};

const Contact = () => {

    return (
        <>
            {/* ------ address and map start */}
            <section>
                <div className='container-fluid '>
                    <SectionTitle sectionName={"Contact"} sectionTitle={"Your Future Starts Here"} sectionDesc={"This isn’t just about buying a home. It’s about claiming the future. NuovoDomus is your invitation to experience life without limits."} />
                </div>
                <div className='container lg:pt-30 2sm:pt-20 pt-14'>
                    <div className='grid lg:grid-cols-[32%_auto]'>
                        <div className='grid lg:grid-cols-1 2sm:grid-cols-2 grid-cols-1 gap-y-6'>
                            {
                                addressList.map(({ id, address, company, country, email, phone, lat_lng }) => <AddressCard key={id} id={id} address={address} company={company} country={country} email={email} phone={phone} lat_lng={lat_lng} />)
                            }
                        </div>
                        <div className='w-full max-h-[392px] lg:sticky lg:top-20 z-[1] mt-16 lg:mt-0'>
                            <LeafletMap />
                        </div>
                    </div>
                </div>
            </section>
            {/* ------ address and map end */}


            {/* ------ contact form start */}
            <section>
                <div className='container-fluid '>
                    <SectionTitle sectionName={"Inquiry"} sectionTitle={"Are you ready to step into the next era of luxury?"} sectionDesc={"Contact us today. The future is waiting"} />
                </div>
                <div className='container lg:pt-30 2sm:pt-20 pt-14'>
                    <div className='grid lg:grid-cols-2 gap-5'>
                        <Image src={from_img} loading='lazy'  placeholder='blur'    alt='contact-form' className='w-full h-auto' />
                        <form>
                            <InputFiled placeholderc={"Your Name"} type={"text"} className={"mb-[13px]"} />
                            <div className='flex sm:flex-row flex-col gap-x-5'>
                                <InputFiled placeholderc={"Phone Number"} type={"number"} className={"mb-[13px]"} />
                                <InputFiled placeholderc={"Your Email"} type={"email"} className={"mb-[13px]"} />
                            </div>
                            <TextAreaFiled placeholder={'Type your massage'} className={"min-h-[223px] mb-[13px]"} />
                            <div className='flex justify-end'>
                                <ButtonOutline>Send massage <RightArrow height={"22"} width={"35"} /></ButtonOutline>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* ------ contact form end */}
            <Feedback />
        </>
    )
}

export default Contact
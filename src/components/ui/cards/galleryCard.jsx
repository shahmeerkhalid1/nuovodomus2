import { cn } from '@/lib/utils';
import OutlineSvgText from '../outlineSvgText';
import Link from 'next/link';
import Image from 'next/image';

const GalleryCard = ({id, gallery_name, gallery_desc,gallery_img, text_muted, link}) => {
    return (
        <div className='px-3 sm:px-0' key={id}>
            {/* <OutlineSvgText text={id}/> */}
            <Image src={gallery_img} loading='lazy'  width={"auto"} height={"auto"} alt={gallery_name} className='mb-6'/>
          
            <Link href={link} className={cn(`text-primary-foreground font-bold leading-135 md:text-4xl text-3xl hover-underline  ${text_muted}`)}>
            <span>{gallery_name}</span></Link>
            <p className={cn(`font-normal text-primary-foreground ${text_muted}`)}>{gallery_desc}</p>
          
            
        </div>
    )
}

export default GalleryCard
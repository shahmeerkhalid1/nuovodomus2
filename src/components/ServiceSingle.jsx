import Image from 'next/image'
import SectionTitle from '@/components/ui/sectionTitle'
import Title from '@/components/ui/title'
import ServiceSingleSidebar from '@/components/ui/serviceSingleSidebar'
import Feedback from '@/components/section/feedback'

// Define ServiceSingle as a reusable component that accepts props
const ServiceSingle = ({ 
  serviceImage,
  sectionName = "Services",
  serviceTitle,
  serviceDescription,
  overview,
  includedItems = [],
  workProcess = [],
  conclusionText
}) => {
  return (
    <>
      <section>
        <div className='container-fluid'>
          <SectionTitle 
            sectionName={sectionName} 
            sectionTitle={serviceTitle} 
            sectionDesc={serviceDescription} 
          />
        </div>
        <div className='container lg:pt-30 2sm:pt-20 pt-14'>
          <div className='grid lg:grid-cols-[58%_auto] xl:gap-[120px] gap-15 items-start'>
            <div>
              <Image 
                src={serviceImage} 
                loading='lazy' 
                placeholder='blur' 
                alt={`${serviceTitle} service image`} 
              />
              <div className='pt-12.5'>
                <Title title_text={"Overview"} />
                <p className='text-primary-foreground'>
                  {overview}
                </p>
              </div>
              
              {includedItems.length > 0 && (
                <div className='pt-12.5'>
                  <Title title_text={"What's Included"} />
                  <ul>
                    {includedItems.map((item, index) => (
                      <li key={`included-${index}`} className={index > 0 ? 'pt-7.5' : ''}>
                        <h5 className='font-bold'>{item.title}:</h5>
                        <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {workProcess.length > 0 && (
                <div className='pt-12.5'>
                  <Title title_text={"How It Works"} />
                  <ul>
                    {workProcess.map((step, index) => (
                      <li key={`step-${index}`} className={index > 0 ? 'pt-7.5' : ''}>
                        <h5 className='font-bold'>{step.title}:</h5>
                        <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>{step.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {conclusionText && (
                <strong className='mt-12.5 block'>
                  {conclusionText}
                </strong>
              )}
            </div>
            
            <ServiceSingleSidebar />
          </div>
        </div>
      </section>
      <Feedback />
    </>
  )
}

export default ServiceSingle
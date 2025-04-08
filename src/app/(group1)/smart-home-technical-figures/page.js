import TechnicalCardOne from '@/components/ui/cards/technicalCardOne'
import SectionTitle from '@/components/ui/sectionTitle'
import { technicalData } from '@/lib/fackData/technicalData'
import { cardSlideAnimation, cardSlideAnimationDelay, cardSlideAnimationRight, cardSlideAnimationRightDelay } from '@/lib/utils';

export const metadata = {
    title: "NuovoDomus -- Smart Home Technical Figures",
    description: "NuovoDomus is a next js and tailwind css website",
};

const ProjectArchive = () => {
    return (
        <section>
            <div className='container-fluid '>
                <SectionTitle sectionName={"Home"} sectionTitle={"Smart Home Technical Figures"} sectionDesc={"Autonomous Smart Home - Key Technical Figures"} />
            </div>
            <div className='lg:pt-30 2sm:pt-20 pt-14'>
                <div className=''>
                    {
                        technicalData.map(({ id,technical_figure_img,technical_figure_name,technical_figure_table_data  }) => {
                            if (id % 2 === 0) {
                                return (
                                    <TechnicalCardOne
                                        key={id}
                                        technical_figure_name={technical_figure_name}
                                        technical_figure_img={technical_figure_img}
                                        technical_figure_table_data={technical_figure_table_data}
                                        order={'lg:order-1 order-0'}
                                        position={"lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2"}
                                        imageVariants={cardSlideAnimationRight()}
                                        cardVariants={cardSlideAnimationRightDelay()}
                                    />
                                )
                            }
                            else {
                                return (
                                    <TechnicalCardOne
                                         key={id}
                                        technical_figure_name={technical_figure_name}
                                        technical_figure_img={technical_figure_img}
                                        technical_figure_table_data={technical_figure_table_data}
                                        position={"lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2"}
                                        imageVariants={cardSlideAnimation()}
                                        cardVariants={cardSlideAnimationDelay()}
                                    />
                                )
                            }
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ProjectArchive
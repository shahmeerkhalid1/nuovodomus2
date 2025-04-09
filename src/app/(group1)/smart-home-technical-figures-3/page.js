import TechnicalCardThree from '@/components/ui/cards/technicalCardThree';
import SectionTitle from '@/components/ui/sectionTitle'
import { technicalData } from '@/lib/fackData/technicalData2'
import { zoomInAnimation, slideUp3DAnimation } from '@/lib/utils';

export const metadata = {
    title: "NuovoDomus -- Smart Home Technical Figures",
    description: "NuovoDomus is a next js and tailwind css website",
};

const ProjectArchive = () => {
    return (
        <section>
            <div className='container-fluid'>
                <SectionTitle 
                    sectionName={"Home"} 
                    sectionTitle={"Smart Home Technical Figures"} 
                    sectionDesc={"Autonomous Smart Home - Key Technical Figures"} 
                />
            </div>
            <div className='lg:pt-30 2sm:pt-20 pt-14'>
                <div className=''>
                    {
                        technicalData.map(({ id, technical_figure_img, technical_figure_name, technical_figure_table_data }) => (
                            <TechnicalCardThree
                                key={id}
                                technical_figure_name={technical_figure_name}
                                technical_figure_img={technical_figure_img}
                                technical_figure_table_data={technical_figure_table_data}
                                imageVariants={zoomInAnimation()}
                                cardVariants={slideUp3DAnimation()}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ProjectArchive
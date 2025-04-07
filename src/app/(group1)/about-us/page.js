import AboutTwo from '@/components/section/about/aboutTwo'
import Expertise from '@/components/section/expertise'
import Feedback from '@/components/section/feedback'
import TeamCardOne from '@/components/ui/cards/teamCardOne'
import SectionTitle from '@/components/ui/sectionTitle'
import { teamData } from '@/lib/fackData/teamData'
import { cardSlideAnimation } from '@/lib/utils'
import AboutDetailCard from '@/components/ui/cards/aboutDetailCard'

export const metadata = {
  title: "NuovoDomus -- About Us",
  description: "NuovoDomus is a next js and tailwind css website",
};

const cardsData = [
  {
    title: "Bespoke Elegance",
    description: "Every detail is curated. Every finish, a statement. Our homes blend contemporary sophistication with state-of-the-art technology, creating spaces that are as breathtaking as they are intelligent",
    icon:"M12 3L4 9v12h16V9l-8-6zM9 21v-5h6v5M10 13h4",
    isPrimary:false
  },
  {
    title: "Security, Reinvented",
    description: "Peace of mind has never been so effortless. AI-driven security, biometric access, and real-time surveillance ensure that your sanctuary remains untouchable",
    isPrimary:true,
    icon:"M12 2l9 4v6c0 5.25-3.75 10.5-9 12-5.25-1.5-9-6.75-9-12V6l9-4zM8 11l3 3 5-5",
   
  },
  {
    title: "An Effortless Lifestyle",
    description: "From intuitive entertainment systems that set the perfect ambiance to kitchens that prepare themselves for your arrival, life at NuovoDomus is seamless, fluid, and undeniably luxurious",
    isPrimary:false,
    icon:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8 12h8M15 9l3 3-3 3M8 8.5c1.5 1 3.5 1 5 0M8 15.5c1.5-1 3.5-1 5 0",
  }
];

const AboutUs = () => {
  return (
    <>
      <AboutTwo />
      <div className="flex flex-col md:flex-row gap-8 p-6 max-w-[82rem] mx-auto pt-30">
      {cardsData.map((card, index) => (
        <AboutDetailCard 
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon}
          isPrimary={card.isPrimary}
          
        />
      ))}
    </div>
      <Expertise />
      {/* --------- start team section */}
      <section className='pt-20'>
        <div className='container-fluid '>
          <SectionTitle
            sectionName={"Team"}
            sectionTitle={"Architects of NuovoDomus"}
            sectionDesc={"Where Imagination Takes Flight, and Excellence Blossoms"}
            button_text={"All Architects"}
            link={"/team"}
          />
        </div>
        <div className='container lg:pt-[340px] 2sm:pt-20 pt-14'>
          <div className='grid lg:grid-cols-3 2sm:grid-cols-2 gap-7'>
            {
              teamData.map(({ id, img, name, position, social_link }) => <TeamCardOne key={id} img={img} name={name} position={position} social_link={social_link} prantCalss={"team-card"} cardVariants={cardSlideAnimation()} />)
            }
          </div>
        </div>
      </section>
      {/* --------- start team section */}
      <Feedback />
    </>
  )
}

export default AboutUs
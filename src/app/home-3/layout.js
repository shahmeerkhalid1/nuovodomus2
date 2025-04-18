import Footer from '@/components/footer'
import Home3 from './page'
import HeaderTwo from '@/components/header/headerOneTwo'

const LayoutTwo = ({ children }) => {
    return (
        <>
            <HeaderTwo />
                <Home3/>
            <Footer />
        </>
    )
}

export default LayoutTwo
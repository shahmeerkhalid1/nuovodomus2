import Footer from '@/components/footer'
import HeaderOne from '@/components/header/headerOne'
import Home2 from './page'

const LayoutTwo = ({ children }) => {
    return (
        <>
            <HeaderOne />
                <Home2/>
            <Footer />
        </>
    )
}

export default LayoutTwo
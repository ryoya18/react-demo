import {Header,Footer,Discography,ScrollTop} from "../compornents/index"
import { Link as Scroll } from 'react-scroll';

const DiscographyPage = () => {
    return(
        <>
            <header id="top">
            <Header/>
            </header>
            <main>
                <Discography/>
                <ScrollTop/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}
export default DiscographyPage;

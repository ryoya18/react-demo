import {Header,Footer,Biography,ScrollTop} from "../compornents/index"
import { Link as Scroll } from 'react-scroll';

const BiographyPage = () => {
    return(
        <>
            <header id="top">
            <Header/>
            </header>
            <main>
                <Biography/>
                <ScrollTop/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}
export default BiographyPage;

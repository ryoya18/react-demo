import {Header,Footer,Contact,ScrollTop} from "../compornents/index"
import { Link as Scroll } from 'react-scroll';

const ContactPage = () => {
    return(
        <>
            <header id="top">
            <Header/>
            </header>
            <main>
                <Contact/>
                <ScrollTop/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}
export default ContactPage;

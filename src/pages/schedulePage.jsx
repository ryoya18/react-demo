import {Header,Footer,Schedule,ScrollTop} from "../compornents/index"
import { Link as Scroll } from 'react-scroll';

const SchedulePage = () => {
    return(
        <>
            <header id="top">
            <Header/>
            </header>
            <main>
                <Schedule/>
                <ScrollTop/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}
export default SchedulePage;

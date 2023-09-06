import {Header,Footer,Works,ScrollTop} from "../compornents/index"
import { Link as Scroll } from 'react-scroll';

const WorksPage = () => {
    return(
        <>
            <header id="top">
            <Header/>
            </header>
            <main>
                <Works/>
                <ScrollTop/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}
export default WorksPage;

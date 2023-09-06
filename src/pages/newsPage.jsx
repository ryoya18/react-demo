import {Header,Footer,News,ScrollTop} from "../compornents/index"
import { Link as Scroll } from 'react-scroll';

const NewsPage = () => {
    return(
        <>
            <header id="top">
            <Header/>
            </header>
            <main>
                <News/>
                <ScrollTop/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}
export default NewsPage;

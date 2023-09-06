import {Header,Footer,Equipment,ScrollTop} from "../compornents/index"
import { Link as Scroll } from 'react-scroll';

const EquipmentPage = () => {
    return(
        <>
            <header id="top">
            <Header/>
            </header>
            <main>
                <Equipment/>
                <ScrollTop/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}
export default EquipmentPage;

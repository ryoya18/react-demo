import {Header,News,Schedule,Works,Discography,Biography,Equipment,Contact,Footer,ScrollTop} from "../compornents/index"
import { Link as Scroll } from 'react-scroll';

const Home = () => {
  return (
    <>
        <header id="top">
          <Header/>
        </header>
        <div class="main-visual">
          <div class="main-visual-img-01"></div>
          <div class="main-visual-img-02"></div>
          <div class="main-visual-img-03"></div>
        </div>
        <main>
          <News/>
          <Schedule/>
          <Works/>
          <Discography/>
          <Biography/>
          <Equipment/>
          <Contact/>
          <ScrollTop/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </>
  )
}
export default Home;

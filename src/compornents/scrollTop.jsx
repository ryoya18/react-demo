import { Link as Scroll } from 'react-scroll';

const ScrollTop = () => {
    return (
        <>
           <div class="page-top">
                <Scroll
                to="top"
                smooth={true} 
                duration={600}
                class="page-top-link"
                >
                scroll to top
                </Scroll>
            </div>
        </>
    )
}
export default ScrollTop;
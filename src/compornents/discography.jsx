import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

const Discography = () => {
    return(
        <div class="contants" id="discography">
            <h2>DISCOGRAPHY</h2>
            <Splide aria-label="discography">
                <SplideSlide>
                    <img src="./imges/main_visual_1.jpg" alt="Image"/>
                    <div>title1</div>
                </SplideSlide>
                <SplideSlide>
                    <img src="./imges/main_visual_1.jpg" alt="Image"/>
                    <div>title2</div>
                </SplideSlide>
                <SplideSlide>
                    <img src="./imges/main_visual_1.jpg" alt="Image"/>
                    <div>title3</div>
                </SplideSlide>
            </Splide>
            <a href="#" class="button">MORE</a>
        </div>
    )
}
export default Discography;
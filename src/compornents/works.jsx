import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
const Works = () => {
    return(
        <div class="contants works">
            <h2>WORKS</h2>
            <Splide aria-label="discography">
                <SplideSlide>
                    <img src="./imges/main_visual_1.jpg" alt="Image"/>
                    <div>羊たちは夢を語る</div>
                    <div>日向坂46 藤嶌果歩</div>
                </SplideSlide>
                <SplideSlide>
                    <img src="./imges/main_visual_1.jpg" alt="Image"/>
                    <div>君になりたかった</div>
                    <div>Blue Journey</div>
                </SplideSlide>
                <SplideSlide>
                    <img src="./imges/main_visual_1.jpg" alt="Image"/>
                    <div>時の環</div>
                    <div>南壽あさ子</div>
                </SplideSlide>
                <SplideSlide>
                    <img src="./imges/main_visual_1.jpg" alt="Image"/>
                    <div>倒錯するユビキタス</div>
                    <div>yumel</div>
                </SplideSlide>
                <SplideSlide>
                    <img src="./imges/main_visual_1.jpg" alt="Image"/>
                    <div>モーメント</div>
                    <div>_nite,</div>
                </SplideSlide>
            </Splide>
            <a href="#" class="button">MORE</a>
        </div>
    )
}
export default Works;
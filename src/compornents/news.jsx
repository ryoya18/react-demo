import {Article} from "../compornents/index"
const News = () => {
    return (
        <div class="contants news">
            <h2>NEWS</h2>
            <ul class="">
                <Article time="2023.9.3" title="News1" />
                <Article time="2023.9.4" title="News2" />
                <Article time="2023.9.5" title="News3" />
                <Article time="2023.9.6" title="News4" />
                <Article time="2023.9.7" title="News5" />
            </ul>
            <a href="#" class="button">MORE</a>
        </div>
    )
}
export default News;
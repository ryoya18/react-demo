import {Article} from "../compornents/index"
const Schedule = () => {
    return(
        <div class="contants schedule">
            <h2>SCHEDULE</h2>
            <ul class="">
                <Article time="2023.9.3" title="Schedule1" />
                <Article time="2023.9.4" title="Schedule2" />
                <Article time="2023.9.5" title="Schedule3" />
                <Article time="2023.9.6" title="Schedule4" />
                <Article time="2023.9.7" title="Schedule5" />
            </ul>
            <a href="#" class="button">MORE</a>
        </div>
    )
}
export default Schedule;
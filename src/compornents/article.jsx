export const Article = (props) => {
    return(
        <>
            <li>
                <a href="#">
                    <dl>
                        <dd Class="time">
                            {props.time}
                        </dd>
                        <dt>
                            {props.title}
                        </dt>
                    </dl> 
                </a>
            </li>
        </>
    )
}
export const ArticleWorks = (props) => {
    return(
        <>
            <li>
                <a href="#">
                    <dl>
                        <dt>
                            {props.title}
                            <getTags tagName={props.tagName}/>
                        </dt>
                    </dl> 
                </a>
            </li>
        </>
    )
}
export const getTags = (props) => {
    console.log(props);
    switch(props.tagName){
        case "Agt":
            return <div class="tags agt">Agt</div>
        case "Lyric":
            return <div class="tags lyric">Lyric</div>
        case "VocalArrange":
            return <div class="tags vArrange">VocalArrange</div>
    }
}
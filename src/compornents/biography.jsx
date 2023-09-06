import { FaYoutube,FaTwitter,FaInstagramSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
const Biography = () => {
    return (
        <div class="contants biography" id="biography">
            <h2>BIOGRAPHY</h2>
            <div class="">
                <h3>齊藤大輔 -Daisuke Saito-</h3>
                <p class="ability">Acoustic Guitar/Electric Guitar/Vocal/Chorus</p>
                <div class="biography-img"></div>
                <p>
                    1998年1月20日生まれ 千葉県出身<br/>
                    13歳より独学でギターを始める。
                    日本大学芸術学部音楽学科（情報音楽コース）に入学。
                    大学４年字に映画「お母さんの被爆ピアノ」主題歌、南壽あさ子「時の環」にアコースティックギターで参加。
                    卒業後はギタリストとしてアコースティックギターをメインに活動を開始。
                    以後、様々な楽曲のレコーディング等に携わっている。
                    表情豊かなトーンやニュアンスを貴重とし、楽曲や歌い手に合わせたアプローチを得意とする。
                    DTMを中心に作編曲も行う。
                </p>
                <IconContext.Provider value={{ size: "2rem" }}>
                    <ul>
                        <li><div className='snsMessage'>follow me!! →</div></li>
                        <li><a href='#'><FaTwitter color="glay"/></a></li>
                        <li><a href='#'><FaInstagramSquare color="glay"/></a></li>
                        <li><a href='#'><FaYoutube color="glay"/></a></li>
                    </ul>
                </IconContext.Provider>

            </div>
            
            
        </div>
    )
}
export default Biography;
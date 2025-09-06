import bannerGif from "../assets/1660848444_banner_mobile_2.gif"
import "../css/ad2.css"
import "../css/global.css"

function Ad2() {
    return (
        <div className="ad2-container" style={{backgroundImage: `url(${bannerGif})`}}>
            <div className="ad2-close-btn">×</div>
        </div>
    )
}

export default Ad2

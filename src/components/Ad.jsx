import bannerGif from "../assets/1660848444_banner_mobile_2.gif"
import "../css/ad.css"
import "../css/global.css"

function Ad() {
    return (
        <div className="ad-container" style={{backgroundImage: `url(${bannerGif})`}}>
            <div className="ad-close-btn">×</div>
        </div>
    )
}

export default Ad

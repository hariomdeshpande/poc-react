import PlayBtn from "../buttons/play-btn";
import "./banner.css";

export default function Banner(props){
    return(
        <div className="banner">
        <div className="container-fluid banner__container h-100">
            <div className="logo">
                SR
            </div>
            <div className="banner__content">
                <div className="row h-100">
                    <div className="col-12 col-md-5">
                        <div className="banner__content__left">
                            <p className="w-100 w-md-50 border-start ps-3 pt-3">The director is the only person who knows what
                                the film is about.</p>
                            <h1 className="my-5">
                                <p>Shri</p>
                                <div>Satyajit</div>
                                <div>Ray <span>Indian Film <br/> Director</span></div>
                            </h1>
                            <span className="year d-block mt-3 border px-2">1921 - 1992</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 pe-0">
                        <div className="banner__content__right">
                            <PlayBtn innerTriangle="rightTriangle" style={{ bottom:'15px',left: '50%',transform:' translateX(-50%)'}}></PlayBtn>
                            
                            <img src="images/face-banner.png" className="img-fluid face-pic" alt="face-pic"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
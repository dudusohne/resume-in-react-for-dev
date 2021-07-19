import '../SocialContainer/SocialContainer.scss';
import instagram from '../../assets/icons/instagram (1).png';
import linkedin from '../../assets/icons/linkedin (2).png';
import facebook from '../../assets/icons/facebook (1).png';
import github from '../../assets/icons/GitHub-Mark-120px-plus.png';

export function SocialContainer() {
    return (

        <div className="container-colors">
            {/* <canvas id="myCanvas" width="200" height="100"> */}
            <div className="inside-container-colors">
                <a href="https://instagram.com/dudusohne" target="_blank" rel="noreferrer" >
                    <img src={instagram} className="logo-social" alt="instagram" title="instagram-dudusohne" />
                </a>
                <a href="https://www.linkedin.com/in/eduardo-sohne-62a183118/" target="_blank" rel="noreferrer" >
                    <img src={linkedin} className="logo-social" alt="linkedin" title="linkedin-dudusohne" />
                </a>
                <a href="https://www.facebook.com/eduardosohne" target="_blank" rel="noreferrer" >
                    <img src={facebook} className="logo-social" alt="facebook" title="facebook-dudusohne" />
                </a>
                <a href="https://github.com/dudusohne" target="_blank" rel="noreferrer" >
                    <img src={github} className="logo-social" alt="github" title="github-dudusohne" />
                </a>
            </div>

        </div>
    )
}
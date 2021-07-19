import '../SocialContainer/SocialContainer.scss';
import whatsapp from '../../assets/icons/whatsapp.png';

export function ContactContainer() {
    return (

        <div className="container-colors">
            <div className="inside-container-colors">
                <a href="https://api.whatsapp.com/send?phone=TYPE-USER-PHONE-NUMBER-HERE" target="_blank" rel="noreferrer" >
                    <img src={whatsapp} className="logo-social" alt="whatsapp" title="whatsapp-user" />
                </a>
            </div>
        </div>
    )
}
import '../SocialContainer/SocialContainer.scss';
import instagram from '../../assets/icons/instagram (1).png';
import linkedin from '../../assets/icons/linkedin (2).png';
import facebook from '../../assets/icons/facebook (1).png';
import github from '../../assets/icons/GitHub-Mark-120px-plus.png';

import styles from './styles.module.scss';

export function SocialContainer() {
    return (
        <div className={styles.containerColors}>
            <div className={styles.insideContainerColors}>
                <a href="https://instagram.com/dudusohne" target="_blank" rel="noreferrer" >
                    <img src={instagram} className={styles.logoSocial} alt="instagram" title="instagram-dudusohne" />
                </a>
                <a href="https://www.linkedin.com/in/eduardo-sohne-62a183118/" target="_blank" rel="noreferrer" >
                    <img src={linkedin} className={styles.logoSocial} alt="linkedin" title="linkedin-dudusohne" />
                </a>
                <a href="https://www.facebook.com/eduardosohne" target="_blank" rel="noreferrer" >
                    <img src={facebook} className={styles.logoSocial} alt="facebook" title="facebook-dudusohne" />
                </a>
                <a href="https://github.com/dudusohne" target="_blank" rel="noreferrer" >
                    <img src={github} className={styles.logoSocial} alt="github" title="github-dudusohne" />
                </a>
            </div>
        </div>
    )
}
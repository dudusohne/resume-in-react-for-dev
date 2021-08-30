import whatsapp from '../../assets/icons/whatsapp.png';

import styles from './styles.module.scss';

export function ContactContainer() {
    return (

        <div className={styles.containerColors}>
            <div className={styles.insideContainerColors}>
                <a href="https://api.whatsapp.com/send?phone=TYPE-USER-PHONE-NUMBER-HERE" target="_blank" rel="noreferrer" >
                    <img src={whatsapp} className={styles.logoSocial} alt="whatsapp" title="whatsapp-user" />
                </a>
            </div>
        </div>
    )
}
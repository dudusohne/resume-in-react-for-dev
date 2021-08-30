import photo from '../../assets/icons/ed.png';
import '../LeftContent/LeftContent.scss';

import styles from './styles.module.scss';

type LeftContentProps = {
    name: string;
    age: number;
    adress: string;
    city: string;
    phone: string;
}

export function LeftContent(props: LeftContentProps) {
    return (
        <div className={styles.leftContainer}>
           
                <img src={photo} alt="photo1" className={styles.photoImg} />

            <div className={styles.leftContentText}>
                <strong className={styles.strongLeftcontent}>{props.name}</strong>
                <p className={styles.pLeftcontent}>
                    Age: {props.age}y <br></br>
                    Adress: {props.adress} <br></br>
                    City/State: {props.city} <br></br>
                    Phone: {props.phone} <br></br>
                </p>
            </div>

        </div>
    )
}
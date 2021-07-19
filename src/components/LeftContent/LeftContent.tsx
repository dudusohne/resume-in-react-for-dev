import photo from '../../assets/icons/ed.png';
import '../LeftContent/LeftContent.scss';

type LeftContentProps = {
    name: string;
    age: number;
    adress: string;
    city: string;
    phone: string;
}

export function LeftContent(props: LeftContentProps) {
    return (
        <div className="left-container">
           
                <img src={photo} alt="photo1" className="photo-img" />

            <div className="left-content-text">
                <strong className="strong-leftcontent">{props.name}</strong>
                <p className="p-leftcontent">
                    Age: {props.age}y <br></br>
                    Adress: {props.adress} <br></br>
                    City/State: {props.city} <br></br>
                    Phone: {props.phone} <br></br>
                </p>
            </div>

        </div>
    )
}
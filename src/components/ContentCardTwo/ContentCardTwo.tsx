import '../ContentCardTwo/ContentCardTwo.scss';
import skillsIcon from '../../assets/icons/codesign.svg';

type CardProps = {
    title: string;
    subtitle: string;
    subtitle2: string;
    subtitle3: string;
    subtitle4: string;
    subtitle5: string;
    subtitle6: string;
    subtitle7: string;
    subtitle8: string;
    subtitle9: string;

}

export function ContentCardTwo(props: CardProps) {
    return (

        <div className="container-two">
            <div className="separator2-two">
                <h1 className="title-contentcardtwo">{props.title}</h1>
                <img src={skillsIcon} alt="skills-icon" className="skills-icon" />
            </div>
            <div className="inside-container-two">
                <p className="subtitle-contentcardtwo">● {props.subtitle}</p>
                <p className="subtitle-contentcardtwo">● {props.subtitle2}</p>
                <p className="subtitle-contentcardtwo">● {props.subtitle3}</p>
                <p className="subtitle-contentcardtwo">● {props.subtitle4}</p>
                <p className="subtitle-contentcardtwo">● {props.subtitle5}</p>
                <p className="subtitle-contentcardtwo">● {props.subtitle6}</p>
                <p className="subtitle-contentcardtwo">● {props.subtitle7}</p>
                <p className="subtitle-contentcardtwo">● {props.subtitle8}</p>
                <p className="subtitle-contentcardtwo">● {props.subtitle9}</p>
            </div> <br></br>
        </div>
    )
}
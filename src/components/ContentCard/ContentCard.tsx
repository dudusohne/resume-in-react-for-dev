import '../ContentCard/ContentCard.scss';
import profileIcon from '../../assets/icons/profile1.svg';

type CardProps = {
    title: string;
    description: string;
}

export function ContentCard(props: CardProps) {
    return (

        <div className="container">
            <div className="separator2">
                <h2 className="h2-title">
                    {props.title}
                </h2>
                <img src={profileIcon} alt="skills-icon" className="profile-icon"/>
            </div> <br></br>

            <div className="inside-container">
                <p className="inside-container-text">{props.description}</p> <br></br>
            </div>
            
        </div>
    )
}
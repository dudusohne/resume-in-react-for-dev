import '../ContentCardThree/ContentCardThree.scss';
import skillsIcon from '../../assets/icons/suitcase3.svg';

type CardThreeProps = {
    title: string;
    subtitle: {
        employee: string;
        job: string;
        assignments: string;
        period: string;
        datetime: string;
    }
}

export function ContentCardThree(props: CardThreeProps) {
    return (

        <div className="container-three">
            <div className="separator-three">
                <h1 className="title-three">{props.title}</h1>
                <img src={skillsIcon} alt="skills-icon" className="skills-icon" />
            </div>

            <div className="inside-container-three">
                <span className="job-title-three">
                    Employee:
                </span>
                <span className="job-variable-three">
                    {props.subtitle.employee}
                </span>
                
            </div>

            <div className="inside-container-three">
                <span className="job-title-three">
                    Job:
                </span>
                <span className="job-variable-three">
                    {props.subtitle.job}
                </span>
            </div> 

            <div className="inside-container-three">
                <span className="job-title-three">
                Assignments:
                </span>
                <span className="job-variable-three">
                    {props.subtitle.assignments}
                </span>
            </div> 

            <div className="inside-container-three">
                <span className="job-title-three">
                    Period:
                </span>
                <span className="job-variable-three">
                    {props.subtitle.period}
                </span>
            </div> 

            <div className="inside-container-three">
                <span className="job-title-three">
                    Time:
                </span>
                <span className="job-variable-three">
                    {props.subtitle.datetime}
                </span>
            </div> 

        </div>
    )
}
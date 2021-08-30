import skillsIcon from '../../assets/icons/suitcase3.svg';

import styles from './styles.module.scss';

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

        <div className={styles.containerThree}>
            <div className={styles.separatorThree}>
                <h1 className={styles.titleThree}>{props.title}</h1>
                <img src={skillsIcon} alt="skills-icon" className={styles.skillsIcon} />
            </div>

            <div className={styles.insideContainerThree}>
                <span className={styles.jobTitleThree}>
                    Employee:
                </span>
                <span className={styles.jobVariableThree}>
                    {props.subtitle.employee}
                </span>

            </div>

            <div className={styles.jobVariableThree}>
                <span className={styles.jobTitleThree}>
                    Job:
                </span>
                <span className={styles.jobVariableThree}>
                    {props.subtitle.job}
                </span>
            </div>

            <div className={styles.insideContainerThree}>
                <span className={styles.jobTitleThree}>
                    Assignments:
                </span>
                <span className={styles.jobVariableThree}>
                    {props.subtitle.assignments}
                </span>
            </div>

            <div className={styles.insideContainerThree}>
                <span className={styles.jobTitleThree}>
                    Period:
                </span>
                <span className={styles.jobVariableThree}>
                    {props.subtitle.period}
                </span>
            </div>

            <div className={styles.insideContainerThree}>
                <span className={styles.jobTitleThree}>
                    Time:
                </span>
                <span className={styles.jobVariableThree}>
                    {props.subtitle.datetime}
                </span>
            </div>

        </div>
    )
}
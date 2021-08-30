import { LeftContent } from '../components/LeftContent';
import { ContentCard } from '../components/ContentCard/ContentCard';
import { ContentCardTwo } from '../components/ContentCardTwo';
import { ContentCardThree } from '../components/ContentCardThree';
import { ColorContainer } from '../components/ColorContainer/ColorContainer';
import { SocialContainer } from '../components/SocialContainer';
import { ContactContainer } from '../components/ContactContainer/ContactContainer';

import '../styles/content.scss';

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <LeftContent
                    name="User Name"
                    age={99}
                    adress="User Adress"
                    city="User City"
                    phone="(99) 99999-9999"
                />

            </aside>
            <main>
                <div className="second-content">
                    <ContentCardTwo
                        title="Skills"
                        subtitle="html1"
                        subtitle2="html2"
                        subtitle3="html3"
                        subtitle4="html4"
                        subtitle5="html5"
                        subtitle6="html5"
                        subtitle7="html6"
                        subtitle8="html7"
                        subtitle9="html8"
                    />

                    <ColorContainer />
                    <SocialContainer />
                    <ContactContainer />
                </div>
                <div className="main-content">
                    <ContentCard
                        title="Profile"
                        description=""
                    />
                    <ContentCardThree
                        title="Career"
                        subtitle={{
                            employee: "Actual/Last Job",
                            job: "job position",
                            assignments: "all my asignments ..",
                            period: "2021 => present",
                            datetime: "5 months",
                        }}
                    />
                    <ContentCardThree
                        title=""
                        subtitle={{
                            employee: "Actual/Last Job",
                            job: "job position",
                            assignments: "all my asignments ..",
                            period: "2021 => present",
                            datetime: "5 months",
                        }}
                    />
                    <ContentCardThree
                        title=""
                        subtitle={{
                            employee: "Actual/Last Job",
                            job: "job position",
                            assignments: "all my asignments ..",
                            period: "2021 => present",
                            datetime: "5 months",
                        }}
                    />
                    <ContentCardThree
                        title=""
                        subtitle={{
                            employee: "Actual/Last Job",
                            job: "job position",
                            assignments: "all my asignments ..",
                            period: "2021 => present",
                            datetime: "5 months",
                        }}
                    />
                </div>
            </main>
        </div>
    )
}
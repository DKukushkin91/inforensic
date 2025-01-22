import {useState, MouseEvent, Fragment} from 'react';
import {IdentifiedPersons} from '@widgets/identified-persons';
import {InfoAboutCarNumber} from '@widgets/info-about-car-number';
import Button from '@shared/ui/button';
import {ButtonSizes} from '@shared/ui/button/sizes.ts';
import {ButtonTypes} from '@shared/ui/button/types.ts';
import LayoutsSection from '@shared/ui/layouts/section';
import SVGIconsIdentificationCard from '@shared/ui/svg-icons/identification-card.tsx';
import SVGIconsTarget from '@shared/ui/svg-icons/target.tsx';
import styles from './styles.module.scss';

const AnalyticalReportSections = () => {
    const [activeSection, setActiveSection] = useState(0);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setActiveSection(Number(event.currentTarget.name));

        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <LayoutsSection className={styles.analyticalReportSections}>
            <Fragment>
                <nav className={styles.nav}>
                    <ol className={styles.list}>
                        <li>
                            <Button
                                isFullWidth
                                className={styles.navButton}
                                size={ButtonSizes.Large}
                                type={ButtonTypes.Secondary}
                                isActive={activeSection === 0}
                                name={String(0)}
                                onClick={handleClick}
                                text="Информация о госзнаке"
                                icon={(<SVGIconsTarget />)}
                            />
                        </li>
                        <li>
                            <Button
                                isFullWidth
                                className={styles.navButton}
                                size={ButtonSizes.Large}
                                type={ButtonTypes.Secondary}
                                isActive={activeSection === 1}
                                name={String(1)}
                                onClick={handleClick}
                                text="Идентифицированные лица"
                                icon={(<SVGIconsIdentificationCard />)}
                            />
                        </li>
                    </ol>
                </nav>

                {activeSection === 0 ? (
                    <InfoAboutCarNumber />
                ) : (
                    <IdentifiedPersons />
                )}
            </Fragment>
        </LayoutsSection>
    );
};

export default AnalyticalReportSections;

import {Fragment} from 'react';
import {IdentifiedPersonsData} from '@widgets/info-about-car-number/config/identified-persons.ts';
import LayoutRow from '@shared/ui/layouts/row';
import LayoutsSection from '@shared/ui/layouts/section';
import Link from '@shared/ui/link';
import SVGIconsCalendar from '@shared/ui/svg-icons/calendar.tsx';
import TypographyHeading2 from '@shared/ui/typography/heading-2.tsx';
import TypographyTextMediumStandard from '@shared/ui/typography/text-medium-standard.tsx';
import TypographyTextRegularExtraSmall from '@shared/ui/typography/text-regular-extra-small.tsx';
import TextRegularExtraSmall from '@shared/ui/typography/text-regular-extra-small.tsx';
import TypographyTextRegularSmall from '@shared/ui/typography/text-regular-small.tsx';
import TypographyTextRegularStandard from '@shared/ui/typography/text-regular-standard.tsx';
import TextRegularStandard from '@shared/ui/typography/text-regular-standard.tsx';
import styles from './styles.module.scss';

const IdentifiedPersons = () => {
    return (
        <LayoutsSection
            hasBorder={false}
            tag="article"
        >
            <Fragment>
                <TypographyHeading2>
                    Идентифицированные лица
                </TypographyHeading2>

                <TypographyTextMediumStandard
                    tag="strong"
                    className={styles.strong}
                >
                    Идентифицировано 2 лица
                </TypographyTextMediumStandard>

                <ol className={styles.list}>
                    {IdentifiedPersonsData.map((person, index) => (
                        <li key={person.id}>
                            <LayoutRow
                                isHeader={true}
                                description={(
                                    <TextRegularExtraSmall className={styles.rowHeaderText}>
                                        ОБЪЕКТ №
                                        {' '}
                                        {index + 1}
                                        {' '}
                                        ⁄
                                        {' '}
                                        {person.year}
                                    </TextRegularExtraSmall>
                                )}
                            />
                            <LayoutRow
                                term="Полное имя"
                                description={(
                                    <Link
                                        text={person.fullName}
                                        linkAttributes={{
                                            href: String(person.id),
                                            target: '_blank',
                                        }}
                                    />
                                )}
                            />
                            <LayoutRow
                                term="Дата рождения"
                                description={(
                                    <div>
                                        <TextRegularStandard
                                            tag="span"
                                        >
                                            {person.birthDate}
                                        </TextRegularStandard>
                                        <TypographyTextRegularStandard
                                            tag="span"
                                            className={styles.secondaryLightText}
                                        >
                                            {person.age}
                                        </TypographyTextRegularStandard>
                                    </div>
                                )}
                            />
                            <LayoutRow
                                term="Транспортные средства"
                                description={(
                                    <ul className={styles.vehicles}>
                                        {person.vehicles.map((vehicle) => (
                                            <li
                                                key={vehicle.id}
                                                className={styles.vehicle}
                                            >
                                                <div className={styles.vehicleReleaseYear}>
                                                    <SVGIconsCalendar />
                                                    <TypographyTextRegularExtraSmall className={styles.vehicleReleaseYearText}>
                                                        {vehicle.yearOfRelease}
                                                    </TypographyTextRegularExtraSmall>
                                                </div>

                                                <TypographyTextRegularStandard>
                                                    {vehicle.brand}
                                                </TypographyTextRegularStandard>

                                                <TypographyTextRegularSmall className={styles.secondaryText}>
                                                    СТС
                                                    {' '}
                                                    {vehicle.registrationCertificateNumber}
                                                </TypographyTextRegularSmall>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            />
                            <LayoutRow
                                isLastRow
                                term="Записей в базах"
                                description={(
                                    <Link
                                        text={person.databaseEntries}
                                        linkAttributes={{
                                            href: person.databaseEntries ? String(person.databaseEntries) : undefined,
                                            target: '_blank',
                                        }}
                                    />
                                )}
                            />
                        </li>
                    ))}
                </ol>
            </Fragment>
        </LayoutsSection>
    );
};

export default IdentifiedPersons;

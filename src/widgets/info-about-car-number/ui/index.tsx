import {Fragment} from 'react';
import LayoutRow from '@shared/ui/layouts/row';
import LayoutsSection from '@shared/ui/layouts/section';
import Link from '@shared/ui/link';
import {LinkSizes} from '@shared/ui/link/sizes.ts';
import TypographyHeading2 from '@shared/ui/typography/heading-2.tsx';
import TypographyTextMediumStandard from '@shared/ui/typography/text-medium-standard.tsx';
import TextRegularExtraSmall from '@shared/ui/typography/text-regular-extra-small.tsx';
import TypographyTextRegularStandard from '@shared/ui/typography/text-regular-standard.tsx';
import styles from './styles.module.scss';

const IDENTIFIED_PERSONS = Array.from(Array(3).keys());

const InfoAboutCarNumber = () => {
    return (
        <LayoutsSection
            hasBorder={false}
            tag="article"
        >
            <Fragment>
                <TypographyHeading2 className={styles.title}>
                    Информация о госзнаке
                </TypographyHeading2>

                <LayoutRow
                    term="Номер"
                    description={(
                        <TypographyTextRegularStandard>
                            ГРЗ а111нх125
                        </TypographyTextRegularStandard>
                    )}
                />
                <LayoutRow
                    isLastRow
                    term="Выявленные лица"
                    description={(
                        <div>
                            <Link
                                text="Гудимов Павел Александрович, 18.07.1981 г.р."
                                linkAttributes={{
                                    href: '#',
                                    target: '_blank',
                                }}
                            />
                            <TypographyTextRegularStandard
                                tag="span"
                                className={styles.secondaryLightText}
                            >
                                34 года
                            </TypographyTextRegularStandard>
                        </div>
                    )}
                />

                <TypographyTextMediumStandard
                    tag="strong"
                    className={styles.strong}
                >
                    Установленные лица
                </TypographyTextMediumStandard>

                <LayoutRow
                    isHeader={true}
                    className={styles.rowHeader}
                    description={(
                        <TextRegularExtraSmall className={styles.rowHeaderText}>
                            ВНУТРЕННИЕ ПАСПОРТА
                        </TextRegularExtraSmall>
                    )}
                />

                {IDENTIFIED_PERSONS.map((_, index) => (
                    <LayoutRow
                        key={index}
                        isLastRow={IDENTIFIED_PERSONS.length - 1 === index}
                        description={(
                            <Link
                                size={LinkSizes.Small}
                                text="Гудимов Павел Александрович, 18.07.1981 г.р."
                                linkAttributes={{
                                    href: '#',
                                    target: '_blank',
                                }}
                            />
                        )}
                    />

                ))}
            </Fragment>
        </LayoutsSection>
    );
};

export default InfoAboutCarNumber;

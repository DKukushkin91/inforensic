import {Fragment} from 'react';
import LayoutsSection from '@shared/ui/layouts/section';
import TypographyTextMediumLarge from '@shared/ui/typography/text-medium-large.tsx';
import TypographyTextRegularStandard from '@shared/ui/typography/text-regular-standard.tsx';
import styles from './styles.module.scss';

interface IProps {
    carNumber: string;
}

const AnalyticalReportRequestData = ({
    carNumber,
}: IProps) => {
    return (
        <LayoutsSection hasVerticalPaddings>
            <Fragment>
                <TypographyTextMediumLarge>
                    Данные запроса
                </TypographyTextMediumLarge>
                <TypographyTextRegularStandard className={styles.label}>
                    Номер транспортного средства
                </TypographyTextRegularStandard>
                <TypographyTextRegularStandard className={styles.carNumber}>
                    {carNumber}
                </TypographyTextRegularStandard>
            </Fragment>
        </LayoutsSection>
    );
};

export default AnalyticalReportRequestData;

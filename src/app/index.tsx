import AnalyticalReportSections from '@app/components/analytical-report-sections';
import {Fragment, MouseEvent} from 'react';
import {Header} from '@widgets/header';
import {AnalyticalReportRequestData} from '@entities/analytical-report';
import Button from '@shared/ui/button';
import LayoutsSection from '@shared/ui/layouts/section';
import LinkDownload from '@shared/ui/link-download';
import SVGIconsArrowBack from '@shared/ui/svg-icons/arrow-back.tsx';
import styles from './styles.module.scss';

const App = () => {
    const handleClickButton = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        history.back();
    };

    return (
        <Fragment>
            <Header />
            <main>
                <LayoutsSection
                    className={styles.topSection}
                    tag="div"
                >
                    <Fragment>
                        <Button
                            onClick={handleClickButton}
                            icon={(
                                <SVGIconsArrowBack />
                            )}
                            text="Вернуться к отчетам"
                        />
                        <LinkDownload
                            text="Скачать отчет"
                            linkAttributes={{
                                href: '#',
                                download: true,
                            }}
                        />
                    </Fragment>
                </LayoutsSection>
                <AnalyticalReportRequestData carNumber="а111нх125" />
                <AnalyticalReportSections />
                <Button
                    className={styles.footerBackButton}
                    onClick={handleClickButton}
                    icon={(
                        <SVGIconsArrowBack />
                    )}
                    text="Вернуться к отчетам"
                />
            </main>
        </Fragment>
    );
};

export default App;

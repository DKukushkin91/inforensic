import clsx from 'clsx';
import {ReactNode} from 'react';
import TypographyTextRegularSmall from '@shared/ui/typography/text-regular-small.tsx';
import styles from './styles.module.scss';

interface IProps {
    description: ReactNode;
    isHeader?: boolean;
    isLastRow?: boolean;
    term?: ReactNode;
    className?: string;
}

const LayoutRow = ({
    description,
    isHeader,
    isLastRow,
    className,
    term,
}: IProps) => {
    return (
        <div className={clsx(
            styles.layoutsRow,
            className,
            {
                [styles.isLastRow]: isLastRow,
                [styles.isHeader]: isHeader,
                [styles.hasTerm]: Boolean(term),
            },
        )}
        >
            {term ? (
                <TypographyTextRegularSmall className={styles.term}>
                    {term}
                </TypographyTextRegularSmall>
            ) : null}

            {description}
        </div>
    );
};

export default LayoutRow;

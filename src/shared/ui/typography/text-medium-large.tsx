import clsx from 'clsx';
import {ReactNode, createElement} from 'react';
import styles from './styles.module.scss';

interface IProps {
    tag?: string;
    className?: string;
    children: ReactNode;
}

const TypographyTextMediumLarge = ({
    tag = 'div',
    className,
    children,
}: IProps) => {
    const props = {
        className: clsx(className, styles.textMediumLarge),
    };

    return createElement(tag, props, children);
};

export default TypographyTextMediumLarge;

import clsx from 'clsx';
import {ReactNode, createElement} from 'react';
import styles from './styles.module.scss';

interface IProps {
    tag?: string;
    className?: string;
    children: ReactNode;
}

const TypographyHeading2 = ({
    tag = 'h2',
    className,
    children,
}: IProps) => {
    const props = {
        className: clsx(className, styles.heading2),
    };

    return createElement(tag, props, children);
};

export default TypographyHeading2;

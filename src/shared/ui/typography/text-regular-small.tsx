import clsx from 'clsx';
import {ReactNode, createElement} from 'react';
import styles from '@shared/ui/typography/styles.module.scss';

interface IProps {
    tag?: string;
    className?: string;
    children: ReactNode;
}

const TypographyTextRegularSmall = ({
    tag = 'div',
    className,
    children,
}: IProps) => {
    const props = {
        className: clsx(className, styles.textRegularSmall),
    };

    return createElement(tag, props, children);
};

export default TypographyTextRegularSmall;

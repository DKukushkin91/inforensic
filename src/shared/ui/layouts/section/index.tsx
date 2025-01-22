import clsx from 'clsx';
import {ReactElement, createElement} from 'react';
import styles from './styles.module.scss';

interface IProps {
    children: ReactElement;
    hasBorder?: boolean;
    hasVerticalPaddings?: boolean;
    tag?: string;
    className?: string;
}

const LayoutsSection = ({
    children,
    hasVerticalPaddings,
    hasBorder = true,
    tag = 'section',
    className,
}: IProps) => {
    const props = {
        className: clsx(
            styles.layoutSection,
            className,
            {
                [styles.hasVerticalPaddings]: hasVerticalPaddings,
                [styles.hasBorder]: hasBorder,
            },
        ),
    };

    return createElement(tag, props, children);
};

export default LayoutsSection;

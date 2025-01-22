import clsx from 'clsx';
import {DetailedHTMLProps, AnchorHTMLAttributes} from 'react';
import {LinkSizes} from '@shared/ui/link/sizes.ts';
import styles from './styles.module.scss';

interface IProps {
    text: string | number;
    size?: LinkSizes;
    linkAttributes?: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
}

const Link = ({
    text,
    size = LinkSizes.Medium,
    linkAttributes,
}: IProps) => {
    return (
        <a
            {...linkAttributes}
            className={clsx(
                styles.link,
                styles[size],
                {[styles.hasHref]: !linkAttributes?.href},
            )}
        >
            {text}
        </a>
    );
};

export default Link;

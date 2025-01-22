import {DetailedHTMLProps, AnchorHTMLAttributes} from 'react';
import SVGIconsPDF from '@shared/ui/svg-icons/pdf.tsx';
import styles from './styles.module.scss';

interface IProps {
    text: string;
    linkAttributes?: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
}

const LinkDownload = ({
    text,
    linkAttributes = {},
}: IProps) => {
    return (
        <a {...linkAttributes} className={styles.linkDownload}>
            <SVGIconsPDF />
            <span>
                {text}
            </span>
        </a>
    );
};

export default LinkDownload;

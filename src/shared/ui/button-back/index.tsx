import {MouseEvent} from 'react';
import SVGIconsArrowBack from '@shared/ui/svg-icons/arrow-back.tsx';
import styles from './styles.module.scss';

interface IProps {
    text: string;
}

const ButtonBack = ({
    text,
}: IProps) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        history.back();
    };

    return (
        <button
            className={styles.buttonBack}
            onClick={handleClick}
        >
            <SVGIconsArrowBack />
            <span>
                {text}
            </span>
        </button>
    );
};

export default ButtonBack;

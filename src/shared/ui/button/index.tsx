import clsx from 'clsx';
import {ReactElement, MouseEvent} from 'react';
import {ButtonSizes} from './sizes.ts';
import styles from './styles.module.scss';
import {ButtonTypes} from './types.ts';

interface IProps {
    text: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    isFullWidth?: boolean;
    className?: string;
    isActive?: boolean;
    name?: string;
    size?: ButtonSizes;
    type?: ButtonTypes;
    icon?: ReactElement;
}

const Button = ({
    text,
    name,
    isFullWidth,
    className,
    onClick,
    isActive,
    type = ButtonTypes.Primary,
    size = ButtonSizes.Medium,
    icon,
}: IProps) => {
    return (
        <button
            name={name}
            onClick={onClick}
            className={clsx(
                styles.button,
                styles[size],
                styles[type],
                className,
                {
                    [styles.isActive]: isActive,
                    [styles.isFullWidth]: isFullWidth,
                },
            )}
        >
            {icon || null}
            {text}
        </button>
    );
};

export default Button;

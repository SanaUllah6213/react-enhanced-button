// src/CustomButton.tsx
import React from "react";
import { ReactNode, CSSProperties, MouseEventHandler } from "react";
import { Icon } from "@iconify/react";
import { FaSpinner } from "react-icons/fa";
import "./Button.css";

export type CustomButtonProps = {
    children?: ReactNode;
    variant?: "primary" | "secondary" | "default";
    className?: string;
    customStyle?: CSSProperties;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    childClasses?: string;
    showPlusButton?: boolean;
    disabled?: boolean;
    buttonIcon?: string;
    type?: "submit" | "button" | "reset";
    rotateArrowIcon?: boolean;
    loading?: boolean;
    showCrossIcon?: boolean;
    iconStyle?: string;
};

export default function CustomButton({
    children,
    variant = "default",
    className = "",
    customStyle,
    type = 'button',
    onClick,
    childClasses = "",
    disabled = false,
    showPlusButton = false,
    buttonIcon = '',
    rotateArrowIcon = false,
    loading = false,
    showCrossIcon = false,
    iconStyle = "",
}: CustomButtonProps): JSX.Element {
    const buttonClass =
        variant === "primary"
            ? "primary-button"
            : variant === "secondary"
            ? "secondary-button"
            : "default-button";

    return (
        <button
            type={type}
            onClick={onClick}
            style={!children ? { padding: '0px', ...customStyle } : { ...customStyle }}
            className={`${buttonClass} ${className} main-btn`}
            disabled={disabled || loading}
        >
            
            {loading ? <FaSpinner size={20} color="#fff" /> : null}
            {showPlusButton ? <Icon icon="ic:baseline-plus" height="24" /> : null}
            {buttonIcon ? <Icon icon={buttonIcon} className={iconStyle} height="24" /> : null}
            {showCrossIcon ? <Icon icon="akar-icons:cross" height="24" /> : null}
            <span className={`btn-text ${childClasses}`}>{children}</span>
        </button>
    );
}

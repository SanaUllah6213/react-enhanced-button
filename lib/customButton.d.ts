import { ReactNode, CSSProperties, MouseEventHandler } from "react";
import "./Button.scss";
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
export default function CustomButton({ children, variant, className, customStyle, type, onClick, childClasses, disabled, showPlusButton, buttonIcon, rotateArrowIcon, loading, showCrossIcon, iconStyle, }: CustomButtonProps): JSX.Element;

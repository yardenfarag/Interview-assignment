import {ReactComponent as Logout} from '../assets/logout-icon.svg';

interface IconProps {
    className?: string;
    onClick?: () => void;
}

export const LogoutIcon: React.FC<IconProps> = (props) => {
    return (
        <Logout className={props.className} onClick={props.onClick}/>
    )
}
import {ReactComponent as Logout} from '../assets/logout-icon.svg';
import {ReactComponent as Filter} from '../assets/filter-icon.svg';
import {ReactComponent as Chat} from '../assets/chat-icon.svg';
import {ReactComponent as Message} from '../assets/message-icon.svg';

interface IconProps {
    className?: string;
    onClick?: () => void;
}

export const LogoutIcon: React.FC<IconProps> = (props) => {
    return (
        <Logout className={props.className} onClick={props.onClick}/>
    )
}

export const FilterIcon: React.FC<IconProps> = (props) => {
    return (
        <Filter className={props.className} onClick={props.onClick}/>
    )
}

export const ChatIcon: React.FC<IconProps> = (props) => {
    return (
        <Chat className={props.className} onClick={props.onClick}/>
    )
}   

export const MessageIcon: React.FC<IconProps> = (props) => {
    return (
        <Message className={props.className} onClick={props.onClick}/>
    )
}
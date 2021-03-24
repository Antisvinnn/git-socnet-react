import s from './style.module.css';
import { Button as ButtonMain } from 'antd';

const Button = ({ content }) => {
	return <ButtonMain className={s.btn}>{content}</ButtonMain>;
};

export default Button;

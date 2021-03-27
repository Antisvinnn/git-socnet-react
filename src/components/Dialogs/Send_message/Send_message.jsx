import s from './style.module.css';
import React from 'react';
import { Input, Form, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

const Send_message = () => {
	let sendMessage = (values) => {
		alert(values.input);
	};

	return (
		<div className={s.container}>
			<Form name='form' onFinish={sendMessage}>
				<FormItem name='input'>
					<Input placeholder='Type your message' size='large'></Input>
				</FormItem>
				<div className={s.containerToButtons}>
					<FormItem name='button_send'>
						<Button id={s.button_send} type='primary' htmlType='submit'>
							Send
						</Button>
					</FormItem>
					<FormItem name='button_dissmiss'>
						<Button type='default'>Dissmiss</Button>
					</FormItem>
				</div>
			</Form>
		</div>
	);
};

export default Send_message;

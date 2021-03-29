import s from './style.module.css';
import React from 'react';
import { Input, Form, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

const Send_message = (props) => {
	let beforeSendMessage = (values) => {
		props.addMessage(values.input);
	};

	return (
		<div className={s.container}>
			<Form name='form' onFinish={beforeSendMessage} className={s.send_area}>
				<FormItem name='input' className={s.form_item}>
					<Input
						placeholder='Type your message'
						size='middle'
						className={s.input_area}
					></Input>
				</FormItem>
				<FormItem name='button_send' className={s.form_item}>
					<Button
						className={s.button_send}
						type='primary'
						htmlType='submit'
					>
						Send
					</Button>
				</FormItem>
			</Form>
		</div>
	);
};

export default Send_message;

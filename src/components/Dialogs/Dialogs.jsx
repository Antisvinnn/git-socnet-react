import s from './Dialogs.module.css';
import { Link } from 'react-router-dom';

const Dialogs = () => {
	return (
		<div className={s.Dialogs}>
			<div className={s.Dialogs_wrapper}>
				{/* COLUMN 1 */}
				<div className={s.column_1}>
					<div className={s.dialog_item}>
						<Link to='/dialogs/1'>Sveta</Link>
					</div>
					<div className={s.dialog_item}>
						<Link to='/dialogs/2'>Serega</Link>
					</div>
					<div className={s.dialog_item}>
						<Link to='/dialogs/3'>Vitalik</Link>
					</div>
					<div className={s.dialog_item}>
						<Link to='/dialogs/4'>Vladik</Link>
					</div>
					<div className={s.dialog_item}>
						<Link to='/dialogs/5'>Roma</Link>
					</div>
					<div className={s.dialog_item}>
						<Link to='/dialogs/6'>Pavel</Link>
					</div>
				</div>
				{/* COLUMN 2 */}
				<div className={s.column_2}>
					<div className={s.dialog_message}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Ad, maiores. Laborum in labore laboriosam alias.
						</p>
					</div>
					<div className={s.dialog_message}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Ad, maiores. Laborum in labore laboriosam alias.
						</p>
					</div>
					<div className={s.dialog_message}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Ad, maiores. Laborum in labore laboriosam alias.
						</p>
					</div>
					<div className={s.dialog_message}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Ad, maiores. Laborum in labore laboriosam alias.
						</p>
					</div>
					<div className={s.dialog_message}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Ad, maiores. Laborum in labore laboriosam alias.
						</p>
					</div>
					<div className={s.dialog_message}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Ad, maiores. Laborum in labore laboriosam alias.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;

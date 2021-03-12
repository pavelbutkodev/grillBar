import React, { FC } from 'react';

import styles from './styles.module.scss'

const TextArea: FC = () => {
	const handleChange = (e: any) => {
		if (e.which == 9) {
			e.preventDefault();
		}
	}

	return (
			<textarea	onKeyDown={handleChange} className={styles.textarea}/>
	);
}

export {TextArea};
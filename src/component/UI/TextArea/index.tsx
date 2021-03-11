import React, {FC} from 'react';

import styles from './styles.module.scss'

const TextArea: FC = () => {
	return (
			<textarea	className={styles.textarea}/>
	);
}

export {TextArea};
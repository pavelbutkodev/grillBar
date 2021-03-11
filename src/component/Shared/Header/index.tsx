import React, { FC } from 'react';

import styles from './styles.module.scss'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			Grillmaster
		</div>
	);
}

export {Header};
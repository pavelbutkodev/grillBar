import React, {FC, useEffect, useState} from 'react';
import {CodeArea} from "../../component/Shared/CodeArea";
import BasicLayout from "../../component/Shared/GrilArea";
import {useSelector} from "react-redux";

import {getData} from '../../store/core/selector';

import styles from './styles.module.scss';
import {IGrillElement} from "../../store/core/types";

const MainWindow: FC = () => {
	const grillData = useSelector(getData)
	const [loading, setLoading] = useState(false)
	const [state, setState] = useState({
		height: 0,
		width: 0,
		newGrillItems: []
	})

	useEffect(() => {
		setTimeout(() => createGrillData(grillData), 1)
	}, [grillData])

	const createGrillData = (data: { value: string }) => {
		const grillDataObject = JSON.parse(data.value)
		if (grillDataObject) {
			const newGrillItems = grillDataObject.grill.grillItems.sort((a: IGrillElement, b: IGrillElement) => {
				return parseFloat(String(Number(b.width) * Number(b.height))) - parseFloat(String(Number(a.width) * Number(a.height)));
			})
			const heightGrillMaster = grillDataObject.grill.height
			const widthGrillMaster = grillDataObject.grill.width
			setState({height: heightGrillMaster, width: widthGrillMaster, newGrillItems: newGrillItems})
			setLoading(true)

		}
	}
	return (
		<div className={styles.container}>
			<div className={styles.left_content}>
				<div className={styles.grill_area}>
					{loading && <BasicLayout
						height={state.height}
						width={state.width}
						newGrillItems={state.newGrillItems}
					/>}
				</div>
				<div className={styles.code_area}>
					<CodeArea/>
				</div>
			</div>
			<div className={styles.right_content}>
				Item out of grill
			</div>
		</div>
	);
}

export default MainWindow;

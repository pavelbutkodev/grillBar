import React, {FC, useEffect, useState} from 'react';

import styles from './styles.module.scss'
import {useDispatch} from "react-redux";
import {setDataA} from "../../../store/core/actions";

const dataMock = {
	"grill": {
		"width": 500,
		"height": 400,
		"grillItems": [{
			"width": 50,
			"height": 30,
			"count": 15,
			"title": "Steak"
		}, {
			"width": 140,
			"height": 140,
			"count": 2,
			"title": "Sausage"
		}, {
			"width": 130,
			"height": 60,
			"count": 4,
			"title": "Tomato"
		}, {
			"width": 20,
			"height": 10,
			"count": 37,
			"title": "Veal"
		}]
	}
}

const TextArea: FC = () => {
	const dispatch = useDispatch();
	const [data, setData] = useState({
		value: `${JSON.stringify(dataMock)}`
	});
useEffect(()=>{dispatch(setDataA(data))},[])

	const handleInputText = (event: React.ChangeEvent<HTMLTextAreaElement>, target: string) => {
		setData((prevState) => (
			{
				...prevState,
				[target]: event.target.value
			}
		))
		dispatch(setDataA({value: event.target.value}))
	}

	return (
		<textarea
			value={data.value}
			onChange={(e) => handleInputText(e, 'value')}
			className={styles.textarea}
		/>
	);
}

export {TextArea};
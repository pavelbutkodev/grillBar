export interface ICore {
	data: any,
}

export interface IState {
	core: ICore
}

export interface IReducer {
	type: string
	payload: string
}

export interface IGrillElement{
	width: string | number,
	height: string | number,
	count: string | number,
	title: string
}
export interface ICore {
	loading: boolean,
	selectFigure: string
}

export interface IState {
	core: ICore
}

export interface IReducer {
	type: string
	payload: string
}


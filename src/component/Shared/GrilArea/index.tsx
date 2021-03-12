import React from "react";
import _ from "lodash";
import RGL, {WidthProvider} from "react-grid-layout";

import "./style.css"
import {IGrillElement} from "../../../store/core/types";

const ReactGridLayout = WidthProvider(RGL);

interface IProps {
	className: string
	isDraggable: boolean
	isResizable: boolean
	rowHeight: number
	onLayoutChange(layout: any): void
	newGrillItems: IGrillElement[]
	width: number
	height: number
}

interface IFigure {
	x: number,
	y: number,
	w: number,
	h: number,
	i: string,
	perimeterX: number[],
	perimeterY: number[],
}

export default class NoDraggingLayout extends React.Component<IProps> {
	static defaultProps = {
		className: "layout",
		isDraggable: false,
		isResizable: false,
		rowHeight: 5,
		onLayoutChange: function () {
		}
	};
	size: { width: string; height: string; };
	colsSize: number;
	countGrill: number;

	constructor(props: IProps) {
		super(props);
		const layout = this.generateLayout();
		const count = props.newGrillItems.reduce(
			(countGrill, item) => countGrill + Number(item.count),
			0
		);
		this.state = {layout};
		this.size = {
			width: `${props.width}px`,
			height: `${props.height + 50}px`
		}
		this.colsSize = props.width / 10
		this.countGrill = count
	}

	generateDOM() {
		return _.map(_.range(this.countGrill), function (i) {
			return (
				<div key={i} style={{background: 'rgb(34,139,34)', borderRadius: '10%'}}>
					<span className="text"/>
				</div>
			);
		});
	}

	createPerimeter = (first: number, last: number, i: number) => {
		const perimeter = []
		while (i < last) {
			perimeter.push(first)
			first++
			i++
		}
		return perimeter
	}

	createFigure = ({x, y, w, h, i, perimeterX, perimeterY}: IFigure) => ({
		x,
		y,
		w,
		h,
		i,
		perimeterX,
		perimeterY,
	})

	generateLayout() {
		const newLayouts: IFigure[] = [];
		const grills = this.props.newGrillItems
		let xMax = (this.props.width / 10) + 1;
		let globalLastY = 0;
		let countGeneral = 0;


		grills.map((grill) => {
			let lastY = globalLastY

			for (let count = 0; count < grill.count; count++) {

				const serchedElements = newLayouts.length > 0 && newLayouts
					.filter((el) => el.perimeterY
						.includes(lastY)
					)
					.map((el) =>
						el.perimeterX[el.perimeterX.length - 1]
					)
					.sort((a, b) => a - b)
				const lastX = (typeof serchedElements !== 'boolean' && serchedElements[Number(serchedElements.length) - 1] + 1) || 0

				if (lastX + Number(grill.width) / 10 < xMax) {

					const width = Number(grill.width) / 10
					const height = Number(grill.height) / 10

					newLayouts.push(
						this.createFigure({
							x: lastX,
							y: lastY,
							w: width,
							h: height,
							i: countGeneral.toString(),
							perimeterX: this.createPerimeter(lastX, width, 0),
							perimeterY: this.createPerimeter(lastY, height, 0)
						})
					)
					countGeneral++;
				} else {
					lastY++
					countGeneral++;
				}
			}
		})
		console.log('===>newLayouts', newLayouts);
		this.countGrill = newLayouts.length
		return newLayouts;
	}

	onLayoutChange(layout: any) {
		this.props.onLayoutChange(layout);
	}

	render() {

const{layout}:any = this.state
		return (
			<ReactGridLayout
				layout={layout}
				// onLayoutChange={(layout)=>this.onLayoutChange(layout)}
				style={this.size}
				cols={this.colsSize}
				{...this.props}
			>
				{this.generateDOM()}
			</ReactGridLayout>
		);
	}
}

// @ts-ignore
if (process.env.STATIC_EXAMPLES === true) {
	import("./test-hook.js").then(fn => fn.default(NoDraggingLayout));
}

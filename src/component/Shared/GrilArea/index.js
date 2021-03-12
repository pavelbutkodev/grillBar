import React from "react";
import _ from "lodash";
import RGL, {WidthProvider} from "react-grid-layout";

import "./style.css"

const ReactGridLayout = WidthProvider(RGL);

export default class NoDraggingLayout extends React.PureComponent {
	static defaultProps = {
		className: "layout",
		isDraggable: false,
		isResizable: false,
		rowHeight: 5,
		items: 15,
		onLayoutChange: function () {
		}
	};

	constructor(props) {
		super(props);
		const layout = this.generateLayout();
		this.state = {layout};
		this.countGrill = props.newGrillItems.length
		this.size = {
			width: `${props.width}px`,
			height: `${props.height + 50}px`
		}
		this.colsSize = props.width / 10
	}

	generateDOM() {
		return _.map(_.range(this.props.items), function (i) {
			return (
				<div key={i} style={{background: 'rgb(34,139,34)', borderRadius: '10%'}}>
					<span className="text"/>
				</div>
			);
		});
	}

	generateLayout() {
		// const p = this.props;
		// return _.map(new Array(p.items), function(item, i) {
		// 	var y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
		// 	console.log('===>i', i);
		// 	return {
		// 		x: (i * 2) % 50,
		// 		y: Math.floor(i / 6) * y,
		// 		w: 30,
		// 		h: 10,
		// 		i: i.toString()
		// 	};
		// });
		const newFigures = [];

		const bigCube = this.props.newGrillItems
		let xMax = (this.props.width / 10) + 1;
		let xCurrent = 0;
		let yMax = this.props.height / 10;
		let yCurrent = 0;
		let countGeneral = 0;

		console.log('===>xMax', xMax);
		console.log('===>xCurrent', xCurrent);
		console.log('===>go');

		bigCube.map((item, i) => {
			for (let c = 0; c < item.count; c++) {
				console.log('===>item', item);
				if (xMax - item.width / 10 > 0) {

					console.log('===>xMax', xMax);
					console.log('===>yMax', yMax);
					console.log('===>item.width', item.width / 10);
					console.log('===>item.height', item.height / 10);

					newFigures.push({
						x: xCurrent,
						y: yCurrent,
						w: item.width / 10,
						h: item.height / 10,
						i: countGeneral.toString()
					})

					countGeneral += 1
					xMax = xMax - item.width / 10
					xCurrent = xCurrent + item.width / 10;
				}
			}
			
		})
		console.log('===>newFigures', newFigures);
		return newFigures;
	}

	onLayoutChange(layout) {
		this.props.onLayoutChange(layout);
	}

	render() {
		console.log('===>layout', this.state.layout);
		console.log('===>this.props', this.props);
		return (
			<ReactGridLayout
				layout={this.state.layout}
				onLayoutChange={this.onLayoutChange}
				style={this.size}
				cols={this.colsSize}
				{...this.props}
			>
				{this.generateDOM()}
			</ReactGridLayout>
		);
	}
}

if (process.env.STATIC_EXAMPLES === true) {
	import("./test-hook.js").then(fn => fn.default(NoDraggingLayout));
}

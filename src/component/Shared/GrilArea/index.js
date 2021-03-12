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
		items: 1,
		rowHeight: 5,
		onLayoutChange: function () {
		}
	};

	constructor(props) {
		super(props);
		const layout = this.generateLayout();
		this.state = {layout};
		this.size = {
			width: `${props.width}px`,
			height: `${props.height}px`
		}
		this.colsSize = this.props.width / 10
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
		const bigCube = this.props.newGrillItems
		// bigCube.map((item, i) => {
		// 	console.log('===>item', item, i);
			return [{
				x: 0,
				y: 0,
				w: bigCube[1].width / 10,
				h: bigCube[1].height / 10,
				i: '0'
			}]
	}

	onLayoutChange(layout) {
		this.props.onLayoutChange(layout);
	}

	render() {
		console.log('===>layout', this.state.layout);
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

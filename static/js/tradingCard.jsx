class TradingCard extends React.Component {
	render() {
		return (
			<div className="card">
				<h2>Name: {this.props.name}</h2>
				<img src={this.props.imgUrl} />
				<h2>Skill: {this.props.skill}</h2>
			</div>
		);
	}
}

ReactDOM.render(
	<TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />, 
	document.getElementById('balloonicorn') 
);

ReactDOM.render(
	<TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
	document.getElementById('float')
);

ReactDOM.render(
	<TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
	document.getElementById('llambda')
);

ReactDOM.render(
	<TradingCard name="Short Stack" skill="making pancakes" imgUrl="/static/img/shortstack-overflow.jpg" />,
	document.getElementById('shortstack')
);

ReactDOM.render(
	<TradingCard name="Seedpy" skill="being cute" 
	imgUrl="/static/img/seedpy.jpg" />,
	document.getElementById('seedpy')
);

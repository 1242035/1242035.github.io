(function(){
	var Footer = React.createClass({
		render: function() {
		    return (
			      React.createElement('footer', {className: "footer"},
			        "Footer"
			      )
		    );
		}
	});
	var NavBar = React.createClass({
		render: function(){
			return (
				React.createElement('nav', {className: "nav"},
			        "Navigation"
			    )
			);
		}
	});
	var ContentBox = React.createClass({
	  render: function() {
	    return (
	      	React.createElement('div', {className: "container"},
			    "ContentBox"
			)
	    );
	  }
	});
	var Body = React.createClass({
		render: function(){
			return (
				<NavBar />
			  	<ContentBox />
			  	<Footer />
			);
		}
	});
	ReactDOM.render(
		<Body />,
		document.getElementTagName('body')[0]
	);
})();
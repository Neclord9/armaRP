'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FancyButton = function (_React$Component) {
	_inherits(FancyButton, _React$Component);

	function FancyButton() {
		_classCallCheck(this, FancyButton);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	FancyButton.prototype.render = function render() {
		// Mask id and styling
		// need unique id's for multiple buttons
		var maskId = 'mask_1';
		var maskStyle = '#fancy-masked-element_' + maskId + ' { mask: url(#' + maskId + '); -webkit-mask: url(#' + maskId + ')}';

		var buttonStyle = {
			width: this.props.width,
			height: this.props.height
		};

		var fancyFrontStyle = {
			transform: 'rotateX(0deg) translateZ(' + this.props.height / 2 + 'px )'
		};

		var fancyBackStyle = {
			transform: 'rotateX(90deg) translateZ( ' + this.props.height / 2 + 'px )'
		};

		// SVG attributes
		var textTransform = 'matrix(1 0 0 1 ' + this.props.width / 2 + ' ' + this.props.height / 1.6 + ')';
		var viewBox = '0 0 ' + this.props.width + ' ' + this.props.height;

		return React.createElement(
			'div',
			{ className: 'fancy-button',
				style: buttonStyle,
				ref: 'fancyButton' },
			React.createElement(
				'div',
				{ className: 'fancy-flipper' },
				React.createElement(
					'div',
					{ className: 'fancy-front', style: fancyFrontStyle },
					React.createElement(
						'svg',
						{
							height: this.props.height,
							width: this.props.width,
							viewBox: viewBox },
						React.createElement(
							'defs',
							null,
							React.createElement(
								'mask',
								{ id: maskId },
								React.createElement('rect', { width: '100%', height: '100%', fill: '#FFFFFF' }),
								React.createElement(
									'text',
									{ className: 'mask-text button-text', fill: '#000000', transform: textTransform, fontFamily: '\'intro_regular\'', fontSize: this.props.fontSize, width: '100%', textAnchor: 'middle', letterSpacing: '1' },
									this.props.buttonText
								)
							)
						),
						React.createElement(
							'style',
							null,
							maskStyle
						),
						React.createElement('rect', { id: 'fancy-masked-element_' + maskId, fill: this.props.color, width: '100%', height: '100%' })
					)
				),
				React.createElement(
					'div',
					{ className: 'fancy-back', style: fancyBackStyle },
					React.createElement(
						'svg',
						{
							height: this.props.height,
							width: this.props.width,
							viewBox: viewBox },
						React.createElement('rect', { stroke: this.props.color,
							strokeWidth: this.props.borderWidth,
							fill: 'transparent',
							width: '100%',
							height: '100%' }),
						React.createElement(
							'text',
							{ className: 'button-text', transform: textTransform, fill: this.props.color, fontFamily: '\'intro_regular\'', fontSize: this.props.fontSize, textAnchor: 'middle', letterSpacing: '1' },
							this.props.buttonText
						)
					)
				)
			)
		);
	};

	return FancyButton;
}(React.Component);

FancyButton.defaultProps = {
	color: '#FFFFFF',
	width: 410,
	height: 100,
	fontSize: 40,
	borderWidth: 15,
	buttonText: 'Logviewer'
};

React.render(React.createElement(FancyButton, null), document.getElementById('app2'));

var FancyButton2 = function (_React$Component2) {
	_inherits(FancyButton2, _React$Component2);

	function FancyButton2() {
		_classCallCheck(this, FancyButton2);

		return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	}

	FancyButton2.prototype.render = function render() {
		// Mask id and styling
		// need unique id's for multiple buttons
		var maskId = 'mask_2';
		var maskStyle = '#fancy-masked-element_' + maskId + ' { mask: url(#' + maskId + '); -webkit-mask: url(#' + maskId + ')}';

		var buttonStyle = {
			width: this.props.width,
			height: this.props.height
		};

		var fancyFrontStyle = {
			transform: 'rotateX(0deg) translateZ(' + this.props.height / 2 + 'px )'
		};

		var fancyBackStyle = {
			transform: 'rotateX(90deg) translateZ( ' + this.props.height / 2 + 'px )'
		};

		// SVG attributes
		var textTransform = 'matrix(1 0 0 1 ' + this.props.width / 2 + ' ' + this.props.height / 1.6 + ')';
		var viewBox = '0 0 ' + this.props.width + ' ' + this.props.height;

		return React.createElement(
			'div',
			{ className: 'fancy-button',
				style: buttonStyle,
				ref: 'fancyButton' },
			React.createElement(
				'div',
				{ className: 'fancy-flipper' },
				React.createElement(
					'div',
					{ className: 'fancy-front', style: fancyFrontStyle },
					React.createElement(
						'svg',
						{
							height: this.props.height,
							width: this.props.width,
							viewBox: viewBox },
						React.createElement(
							'defs',
							null,
							React.createElement(
								'mask',
								{ id: maskId },
								React.createElement('rect', { width: '100%', height: '100%', fill: '#FFFFFF' }),
								React.createElement(
									'text',
									{ className: 'mask-text button-text', fill: '#000000', transform: textTransform, fontFamily: '\'intro_regular\'', fontSize: this.props.fontSize, width: '100%', textAnchor: 'middle', letterSpacing: '1' },
									this.props.buttonText
								)
							)
						),
						React.createElement(
							'style',
							null,
							maskStyle
						),
						React.createElement('rect', { id: 'fancy-masked-element_' + maskId, fill: this.props.color, width: '100%', height: '100%' })
					)
				),
				React.createElement(
					'div',
					{ className: 'fancy-back', style: fancyBackStyle },
					React.createElement(
						'svg',
						{
							height: this.props.height,
							width: this.props.width,
							viewBox: viewBox },
						React.createElement('rect', { stroke: this.props.color,
							strokeWidth: this.props.borderWidth,
							fill: 'transparent',
							width: '100%',
							height: '100%' }),
						React.createElement(
							'text',
							{ className: 'button-text', transform: textTransform, fill: this.props.color, fontFamily: '\'intro_regular\'', fontSize: this.props.fontSize, textAnchor: 'middle', letterSpacing: '1' },
							this.props.buttonText
						)
					)
				)
			)
		);
	};

	return FancyButton2;
}(React.Component);

FancyButton.defaultProps = {
	color: '#FFFFFF',
	width: 410,
	height: 100,
	fontSize: 40,
	borderWidth: 15,
	buttonText: 'GetRelyBot Panel'
};

React.render(React.createElement(FancyButton, null), document.getElementById('app'));
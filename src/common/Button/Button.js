import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export class Button extends Component {
    constructor(props) {
      super(props);

	}
	
    onClickFunc = () => {
      this.props.btnClick(this.props.content);
	};
	
    render() {
    const {btnSm, btnBig, btnWhite, btnRed, btnGrey, btnBold, btnTransp, btnTranspRed, btnUC} = this.props;
    const {id, content} = this.props;
    let itemClass = classNames({
      'btn': true,
      'btn-sm': btnSm,
      'btn-big': btnBig,
      'btn-white': btnWhite,
      'btn-red': btnRed,
      'btn-grey': btnGrey,
      'btn-bold':  btnBold,
      'btn-transp': btnTransp,
      'btn-transp-red': btnTranspRed,
      'btn-UC': btnUC
	});
	
    return ( 
		<div className={ itemClass } onClick={ this.onClickFunc } id={ id }>
      		{ content }
		</div>
	);
  }
}

Button.defaultProps = {
  btnSm: false,
  btnBig: false,
  btnWhite: false,
  btnRed: false,
  btnGrey: false,
  btnBold: false,
  btnTransp: false,
  btnTranspRed: false,
  btnUC: false,
  content: 'Button',
  id: ''
};
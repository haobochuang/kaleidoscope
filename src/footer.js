import React, { Component } from 'react';
import styleCSS from './index.scss';

//personal information
class Footer extends React.Component{
	render(){
		return(
			<div className={styleCSS.footer}>
				<div>Jackie Chuang</div>
				<div>haobo.chuang@gamil.com</div>
			</div>
		);
	}
}
export default Footer;
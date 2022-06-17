import NavBar from './navbar';
import Smallf from './mini-footer';
import Display from './display';

import React,{Component } from 'react';
		class MenuPg extends Component{
            state = {
                displays:[
                {id:1,food:"Chicken Masala",price:1000, srcimg:"https://images.herzindagi.info/image/2019/Jan/chiken-benefits-for-health.jpg"},
                {id:6,food:"Chiken Steak",price:800, srcimg:"https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg"}
            ]
                };
		 render() {
		 	const{food,price,src}=this.state;
		 return (
            <div id='menu-page'>
            <NavBar />
            <div id='display-content'>
            {this.state.displays.map(display=>
            <Display key={display.id} display={display}/>)}
            </div>
            <Smallf />
        </div>
		)
		 }
		}
		export default MenuPg;
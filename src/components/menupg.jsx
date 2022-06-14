import NavBar from './navbar';
import Smallf from './mini-footer';
import Display from './display';

import React,{Component } from 'react';
		class MenuPg extends Component{
            state = {
                displays:[
                {id:1,food:"Chicken Masala",price:1000, srcimg:"https://www.shorturl.at/img/shorturl-icon.png"},
                {id:6,food:"Chiken Steak",price:800, srcimg:"https://miro.medium.com/max/566/1*j3xVt5zsYuAB19-QATkk_w.png"}
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
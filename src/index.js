"use strict";

import uniqueRandomArray from 'unique-random-array';
import emots             from './emots.json';
import _                 from 'lodash';

let getRandomItem     = uniqueRandomArray(all());

module.exports = {
	all,    
	random, 
	get,
	parse    
}


function all(){

	var all = [];

	_.forEach(emots, function(v,i){
		all.push(v);
	})

	return all;
}

function random(number){

	if(number === undefined){
		return getRandomItem();
	}
	else{
		let randomItems = [];

		for (let i = 0; i <number ;i++) {
			randomItems.push(getRandomItem());
		}

		return randomItems;
	}
}

function get(emot){

	let find = emots[emot];

	if(find === undefined){
		return getRandomItem();
	}
	
	return find;
	
}

function parse(string){
	let re = /\:(.*?)\:/i; 
	let str = string;
	let m;

	while ((m = re.exec(str)) !== null) {
	    str = str.replace(m[0],get(m[1]));
	}

	return str;
}

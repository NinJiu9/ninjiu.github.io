//let myHeading=document.querySelector('h1');
//myHeading.textContent='Hello World';
//document.querySelector('h1').onclick = function() {
//    alert('别戳我，我怕疼。');
//}
let myImage= document.querySelector('img');

myImage.onclick=function(){
	let mySrc=myImage.getAttribute('src');
	if(mySrc==='img/雪糕.png'){
		myImage.setAttribute('src','img/寿司.png');
	}else{
		myImage.setAttribute('src','img/雪糕.png');
	}
	
}

let myButton =document.querySelector('button');
let myHeading=document.querySelector('h2');

function setUserName(){
	let myName=prompt('请输入你的名字');
	if(!myName){
		setUserName();
	}else{
		localStorage.setItem('name',myName);
		myHeading.textContent='你好呀！'+myName;
	}
	//localStorage.setItem('name',myName);
	//myHeading.textContent='Mozilla,'+myName;
}

myButton.onclick=function(){
	//alert('切换');
	setUserName();
}

if(!localStorage.getItem('name')){
	setUseName();
}else{
	let storedName=localStorage.getItem('name');
	myHeading.textContent='Mozilla,'+storedName;
}



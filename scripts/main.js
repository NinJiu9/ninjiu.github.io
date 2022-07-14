let myImage= document.querySelector('img');

myImage.onclick=function(){
	let mySrc=myImage.getAttribute('src');
	if(mySrc==='img/雪糕.png'){
		myImage.setAttribute('src','img/寿司.png');
	}else{
		myImage.setAttribute('src','img/雪糕.png');
	}
	
}

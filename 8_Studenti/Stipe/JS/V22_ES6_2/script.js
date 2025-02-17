//function getX() {
	//return Math.random() >= 0.5;
//}


const getX = () => Math.random() >= 0.5;

//console.log(getX());

const prom = new Promise((resolve, reject)=>{

    const x = getX();

    if (x){

       return setTimeout(()=> resolve(),1000);
    }

    return setTimeout(() => reject(),1000);



});

prom.then(()=>console.log('Yay')).catch(()=>console.log('Oh, no!'));


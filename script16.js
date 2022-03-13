function tabuada (){
    let i = prompt (`Digite um número`);  
    let numero = parseInt (i);
    let p = 1;
   
    if(i<=10){
        console.log(`Número dentro do intervalo`);
        do{
           let produto = i*p; 
           p++;
           console.log(produto);
        } while(p<=10);
    }
    else {
        console.log(`Número fora do intervalo`);
    };
   
}

tabuada();
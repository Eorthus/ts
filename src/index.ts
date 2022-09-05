const getArgs=():number|undefined=>{
   const arg = +process.argv.slice(2);

   if (arg){
    return arg
   } 
    return undefined;
}

const minus=(arg:number|undefined)=>{
if (arg){
    arg--;
    console.log(arg);
    return (arg)
} else{
    return undefined;
}

}

const main=()=>{
    let arg=getArgs();
    if (arg){
                let  timer:NodeJS.Timer = setInterval(()=>{
            if (arg==0) clearInterval(timer)
            else{
              arg = minus(arg);
            }
          
        },1000);
    } else{
        console.log('Введите числоe');
    }
}
main();







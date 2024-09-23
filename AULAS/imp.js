//1. Implicação (p->q)
function implies (p, q){
    return !p || q;
    }
    
    //teste da função
    console.log(implies(true, true)); //true
    console.log(implies(true, false)); //false
    console.log(implies(false, true)); //true
    console.log(implies(false, false)); //true
    
const receivesAFunction = function (arbFunc){
    return arbFunc()

}

const returnsANamedFunction = function(){
    return receivesAFunction;
}

const returnsAnAnonymousFunction = function(){
    return () => console.log('Hello')
}
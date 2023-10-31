function receivesAFunction(namedFunction) {
    namedFunction();
}

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
    };
}
const toString = Object.prototype.toString;

export function type(x) {
    if(x === null){
        return 'null';
    }

    const t= typeof x;

    if(t !== 'object'){
        return t;
    }

    let c;
    try {
        c = toString.call(x).slice(8, -1).toLowerCase();
    } catch(exp) {
        return 'object';
    }

    if(c !== 'object'){
        return c;
    }

    if(x.constructor == Object){
        return c;
    }

    return 'unknown';
}

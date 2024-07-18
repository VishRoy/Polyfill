const person1 = {
    firstName: 'Vishakha',
    lastName: 'Roy',
}

const person2= {
    firstName: 'Amit',
    lastName: 'Kumar',
}

const person3 = {
    firstName: 'Anahita',
    lastName: 'Pandey',
}

function getDetails(hometown, state){
    return `${this.firstName} ${this.lastName} from ${hometown}, ${state}`
}

console.log('Bind :' ,getDetails.bind(person1)())
Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + "cannot be bound");
    }

    context.fn = this;
    return function(...args2){
        return context.fn(...args, ...args2)
    }
}

const initPerson = getDetails.myBind(person2)
console.log(initPerson('Lucknow', 'UP'))


Function.prototype.myCall = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + "cannot be bound");
    }

    context.fn = this;
    context.fn(...args)
}

console.log(getDetails.call(person1, 'Kolkata', 'WB'))


Function.prototype.myApply = function(context = {}, args=[]){
    if(typeof this !== 'function'){
        throw new Error(this + "cannot be bound");
    }
    if (!Array.isArray(args)) {
        throw new TypeError('Not an array')
    }
    context.fn = this;
    context.fn(...args)
}

console.log(getDetails.myApply(person1, ['Kolkata', 'WB']))
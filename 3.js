function Sum(a) { // Функция-родитель
    return function (b) { // Функция-потомок
        result = a + b;
        return console.log(result);
    }
}

const myfunc = Sum(7);
myfunc(2);
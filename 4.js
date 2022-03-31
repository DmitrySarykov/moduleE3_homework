function same (start, end) {
    let i = start; // Определение начального числа

    setTimeout(function(){ // Остановка счетчика
        clearInterval(interid); 
    }, (end - start + 2) * 1000); 
    // Прибавление 2 т.к учитывается начальное и конечное число интервала
    
    const interid = setInterval(function(){ // вывод числа i с увеличением на 1 в теч. 1 сек.
        console.log(i++); 
    }, 1000);
}

same(5, 15); // Вызов функции

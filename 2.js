function SimpleNumber(num){
    if (num > 0 && num < 1000){
        /* 
        Простое число делится само на себя и на 1 без остатка
        simple - кол-во полноценных делений (должно быть 2) 
        */
        let simple = 0;
        for (let i = num; i <= num; i--) { // Перебор все чисел до заданного числа
            if (i > 0){
                //console.log(num + " % " + i + " = " + (num % i))
                if (num % i == 0){ // Проверка на деление без остатка
                    simple = simple + 1; // Считаем кол-во таких делений
                    // т.е i должно быть либо 1 либо самим числом (num)
                }    
            } else{ 
                break; // Выход из цикла если число меньше 0
            }   
        }
        if (simple == 2){  // Проверка кол-ва полноценных делений
            return console.log("Число простое"); 
        }else{
            return console.log("Число непростое");
        }
    } else{
        return console.log("Данные неверны");
    }
}

SimpleNumber(8);
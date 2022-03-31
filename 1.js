var arr = [5,"asd",22,"..",6,",",7,0,"8","",null];

function Elements(){
    const countA = 0, countB = 0, countC = 0;
    /*
    countA - кол-во четных чисел
    countB - кол-во нечетных чисел
    countC - кол-во нулевых чисел
    */

    arr.map(function(item, index, array){ // Перебор массива
        if (item > 0 && typeof item == "number"){ // Проверяем если число > 0 и оно является числом
            if (item % 2 == 0){
                countA = countA + 1; // Кол-во четных элементов

            } else if (item % 2 == 1){
                countB = countB + 1; // Кол-во нечетных элементов

            }
        } else if (item === 0){
            countC = countC + 1; // Кол-во нулей

        }
    });

    console.log(arr);
    console.log("Кол-во четных: " + countA);
    console.log("Кол-во нечетных: " + countB);
    console.log("Кол-во нулевых: " + countC);

}

Elements();
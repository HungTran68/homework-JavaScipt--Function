//  Bai 1
const checkMark = (mark) => {
    if (mark >= 85) {
        console.log('A');
    }
    else if (mark >= 70 && mark < 85) {
        console.log('B');
    }
    else if (mark >= 40 && mark < 70) {
        console.log('C');
    }
    else {
        console.log('D');
    }
}

checkMark(90);
// Bai 2:

const findNumber = (a, b) => {
    if (a > b) {
        console.log('số lớn là', a);
    }
    else {
        console.log('số lớn là ', b);
    }
}

findNumber(71, 555);

// Bai 3

const checkNumber = (number) => {
    if (number > 0) {
        console.log(`số ${number} là số dương`);
    }
    else if (number == 0) {
        console.log('đây là số 0');
    }
    else {
        console.log(`số ${number} là số âm`);
    }
}

checkNumber(11);

// Bai 4: check so chan so le

const findOddEvenNumber = (number) => {
    if (number % 2 == 0) {
        console.log(`số ${number} là số chẵn`);
    }
    else {
        console.log(`số ${number} là số lẻ`);
    }
}

findOddEvenNumber(23);

// Bai 5

const fifthWork = (number) => {
    if (number % 3 == 0 && number % 5 ==0) {
        console.log(`${number} đây là số chia hết cho cả 3 và 5`);
    }
    else{
        console.log(`${number} số này khôgn chia hết cho 3 và 5`);
    }
}

fifthWork(31);

// Bai 6:

const checkVariable = (a,b,c) => {
    if (a + b == c) {
        console.log ('a + b = c');
    }
    else {
        console.log ('a + b không bằng c !');
    }
}

checkVariable(1,2,5);

// Vong lap 
console.log('---Vong lap---')

const firstWorkWithLoop = (input) => {
    let result = "";
    
    for (let i = 0 ; i < 10; i++){
        result = result + input;
        
    }
    console.log(result);
}

firstWorkWithLoop('b');

// Bai 2
const secondWorkWithLoop = (input) => {
    let result = "";
    
    for (let i = 0 ; i < 10; i++){
        result = result + '-' + input;
        
    }
    console.log(result);

}

secondWorkWithLoop('b')

//Bai 3

const thirdthWork = (a, n) => {
    let result = "";
    for (let i = 0; i <= n ; i++){
        result += a+'-'; 
    }
    console.log(result);
}

thirdthWork('c',3);

// Bai 4: Tinh tong so chia het cho 5 tu 0-100

const forthWork = () => {
    let result = 0;
    for ( let i = 0 ; i <=100 ; i++){
        if (i % 5 == 0 ){
            result += i;
        }
    }
    console.log('tổng số chia hết cho 5 0- 100 là :', result);

}
forthWork();

// Bai 5 : The tich hinh cau

const theTichHinhCau = (bankinh) => {
   
    return (4 * 3.14 * bankinh)/3;
}

console.log(theTichHinhCau(3));

// Bai 6: Bài 6: Viết hàm function vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

// Note : Kết quả xuôi và ngược là như nhau

// Ví dụ :

// sum(3,8) = 22
// sum(8,3) = 22

const sixthWork = (a,b) => {
    let result = 0;
    if (a < b) {
        for (let i = b + 1; i < a-1 ; i++){
            result += i;
        }
        console.log(result);
    }
    
}

// sixthWork(6,2); = >> cchua lam dc\


// Bai 7 : Tim so nguyen to =>> chua lam dc

const sevenWork = (number) => {
    if (number % 1 == 0 && number % number == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(sevenWork(1));

// Bai 8 :  Cho 1 số nguyên dương bất kỳ. Viết function tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

const eighthWork = (number) => {
    let result = 0;

    for ( let i = 0; i <= number ; i++){
        result += i;
    }

    console.log(result);
}

eighthWork(3);

// Bai 9 : Tim uoc so cua 1 tham so dau vao

const ninethWork = (number) => {
    let result = 0;
    
    let arrayNumber = [];
    if ( number ) 
}

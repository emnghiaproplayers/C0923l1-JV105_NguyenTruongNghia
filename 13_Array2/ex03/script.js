function lonHon10(){
    let arr = [];
    let arr2 = [];
    for (let i = 0 ; i < 10 ; i++){
        let n = parseInt(prompt("Nhap so nguyen"));
        arr.push(n);
    }
    for (let j = 0 ; j < arr.length ; j++){
        if (arr[j] >= 10){
            arr2.push(arr[j]);
        }
    }
    alert(arr2);
}

function maxIndex(){
    let arr = [];
    let max = 0;
    let maxIndex = 0;
    for (let i = 0 ; i < 10 ; i++){
        let n = parseInt(prompt("Nhap so nguyen"));
        arr.push(n);
    }
    for (let j = 0 ; j < arr.length ; j++){
        if (arr[j] > max){
            max = arr[j];
            maxIndex = j;
        }
    }
    alert("Số nguyên lớn nhất là "+ max + " nằm ở vị trí arr[" + maxIndex +"]");
}

function averageArray(){
    let arr = [];
    let max = 0;
    let avg = 0;
    for (let i = 0 ; i < 10 ; i++){
        let n = parseInt(prompt("Nhap so nguyen"));
        arr.push(n);
    }
    for (let j = 0 ; j < arr.length ; j++){
        if (arr[j] > max){
            max = arr[j];
        }
        avg += arr[j];
    }
    avg = avg / arr.length;
    alert("Số lớn nhất là "+ max +" Giá trị trung bình là "+ avg);
}

function reverseArray(){
    let arr = [];
    for (let i = 0 ; i < 10 ; i++){
        let n = parseInt(prompt("Nhap so nguyen"));
        arr.push(n);
    }
    alert(arr.reverse());
}

function negativeNumber(){
    let arr = [];
    let arr2 = [];
    for (let i = 0 ; i < 10 ; i++){
        let n = parseInt(prompt("Nhap so nguyen"));
        arr.push(n);
    }
    for (let j = 0 ; j < arr.length ; j++){
        if (arr[j] < 0){
            arr2.push(arr[j]);
        }
    }
    alert(arr2);
}

function findNumber(){
    let arr = [];
    let mess = '';
    let bool = false;
    for (let i = 0 ; i < 10 ; i++){
        let n = parseInt(prompt("Nhap so nguyen"));
        arr.push(n);
    }
    do{
        v = parseInt(prompt(arr +"\n Nhập số: "));
        for (let j = 0 ; j <= arr.length; j++){
            if (arr[j] === v){
                mess = v+ " có trong chuỗi và nằm ở vị trí arr["+j +"]";
                bool = true;
                break;
            }else{
                mess = v +" không có trong chuỗi!!!";
            }
        }
        alert(mess);
    } while(!bool);
}

function deleteNumber(){
    let arr = [];
    let bool = false;
    for (let i = 0 ; i < 10 ; i++){
        let n = parseInt(prompt("Nhap so nguyen"));
        arr.push(n);
    }
        v = parseInt(prompt(arr +"\n Nhập số: "));
        for (let j = 0 ; j <= arr.length; j++){
            if (arr[j] === v){
               arr.splice(j,1);
            }
        }
        alert(arr);
}

function sortArray(){
    let arr = [];
    for (let i = 0 ; i < 10 ; i++){
        let n = parseInt(prompt("Nhap so nguyen"));
        arr.push(n);
    }
    arr.sort(function (a, b){
        return a - b;
    });
    alert(arr);
}
function concatArray(){
    let arr1 = [1,2,3,4,5,6,7,8,9,10];
    let arr2 = [11,12,13,14,15,16,17,18,19,20];
    let arr3 = arr1.concat(arr2);
    alert(arr3);
}
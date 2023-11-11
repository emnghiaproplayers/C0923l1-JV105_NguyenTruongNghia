function mang2Chieu(){
    let a = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];
    for (let i = 0 ; i < a.length ; i++){
        document.write("row "+i +"<br>");
        for (let j = 0 ; j < a[i].length; j++){
           document.write(a[i][j] +"<br>") ;
        }
    }
}
function reverse(){
    let a =  [ 'c', 's', 'c', '2', '6', '1' ];
    document.write(a.reverse());
}

function checkNumber(){
    let n = parseInt(prompt("Nhập số lượng phần tử"));
    let a = [];
    let a2 = [];
    for (let i = 0 ; i < n ; i++){
        let input = prompt("Nhập phần tử thứ " + (i+1));
        a.push(input);
    }
    for (let j = 0 ; j <= a.length ; j++){
        if (!isNaN(a[j])){
            a2.push(a[j]);
        }
    }
    alert(a2);
}
function checkChar(){
    let n = parseInt(prompt("Nhập số lượng phần tử"));
    let a = [];
    let a2 = [];
    for (let i = 0 ; i < n ; i++){
        let input = prompt("Nhập phần tử thứ " + (i+1));
        a.push(input);
    }
    for (let j = 0 ; j <= a.length ; j++){
        if (isNaN(a[j])){
            a2.push(a[j]);
        }
    }
    alert("Có tất cả "+ a2.length + " string trong mảng");
}

function checkChuoi(){
    let n = parseInt(prompt("Nhập số lượng phần tử"));
    let a = [];
    let a2 = [];
    let mess ='';
    for (let i = 0 ; i < n ; i++){
        let input = prompt("Nhập phần tử thứ " + (i+1));
        a.push(input);
    }
    for (let j = 0 ; j < n ; j++){
        let input2 = prompt("Nhập phần tử thứ " + (j+1));
        a2.push(input2);
    }
    for (let i = 0 ; i < n ; i++){
        if (a[i] === a2[i]){
            mess ="Giống nhau";
        }else {
            mess ="Khác nhau";
        }
    }
    alert(mess);
}

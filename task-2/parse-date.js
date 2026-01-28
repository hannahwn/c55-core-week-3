function parseDateString(dateString) {
    let parts = dateString.split("");

    let format =parts[0];
    let datePart = parts[1];


    let numbers = datePart.split("-");

    let first = Number(numbers[0]);
    let second = Number(numbers[1]);
    let third = Number(numbers[2]);

    let day;
    let month;
    let year = third;

    if(format ==="MDY"){
         month = first;
         day = second;
    }


    )
}
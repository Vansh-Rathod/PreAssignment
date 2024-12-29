const day = new Date().getDay();

console.log(day);

switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}

switch(day){
    case 0:
    case 6:
        console.log("It is weekend");
        break;
    case 5:
        console.log("Have a good weekend");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("It is working day");
    default:
        console.log("It's Invalid Day");
}
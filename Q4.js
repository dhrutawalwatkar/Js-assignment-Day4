document.write("welcome to calculater");

let option = prompt("Please choose one option 0. Addition 1.subtraction 2.multiplication 3.Division 4.sqRoot 5.percentage(a=number,b=percent)");
    let no1=prompt("enter no1");
    let no2=prompt("enter no2");
    let c,d;
    let a=Number(no1);
    let b=Number(no2);
    

switch(option){
    case "0":
        c=a+b;
        console.log(c);
        break;
    case "1":
        c=a-b;
        console.log(c);
        break;
    case "2":
        c=a*b;
        console.log(c);
        break;

    case "3":
        c=a/b;
        console.log(c);
        break;
  
    case "4":
        c=Math.sqrt(a);
        d=Math.sqrt(b);
        console.log(c);
        console.log(d);

        break;
    case "5":
        c=(a/100)*b;
        console.log(c);
        break;
}
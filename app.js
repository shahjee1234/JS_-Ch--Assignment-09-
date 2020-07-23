//CHAPTER # 01 [ALERTS]

//QUES 1

//alert('Welcome to our website!!!');

//QUES 2

//alert('Error! Please enter a valid password.');

//QUES 3

//alert('Welcome to JS land...\nHappy Coding!')

//QUES 4

//alert('Welcome to JS land...');
//alert('Happy Coding!');


//QUES 5

//alert('Hello...I can run JS through my web browser console');


//CHAPTER # 02  [VARIABLES FOR STRINGS]

//QUES 1


//let username;

//QUES 2

//let myName=prompt("Enter Your Name;");
//alert(myName);
//document.write(myName);

//QUES 3

//let message="Hello World"
//alert(message);

//QUES 4

// let stdName = prompt("Enter your Name:");
// alert(stdName);
// let stdAge = prompt("Enter your age");
// alert(stdAge);
// let stdCourse = prompt("Enter Your Course Name");
// alert(stdCourse);

//QUES 5

//alert("                                                      PIZZA\n                                                      PIZZ\n                                                      PIZ\n                                                      PI\n                                                      P");

//QUES 6

//let email=prompt("Enter your email");
//alert('My Email address is ' + email);

//QUES 7

// let book =  "A smarter way to learn JavaScript."
// alert('I am trying to learn from the Book '+book);

//QUES 8

//document.write("Yah! I can write HTML content through JavaScript");

//QUES 9

// let designPattern = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(designPattern);

//CHAPTER # 03 [VARIABLES FOR NUMBERS ]

//QUES 1

// let age = 20;
// alert('I am '+age+' years old');

//QUES 2

// let visitors = 13;
// alert('You have visited this site '+visitors+' times');

//QUES 3

// let birthYear = "My birth year is 1999";
// document.write(birthYear);
// let doc = 'Data type of my declared variable is number';
// document.write(doc);

//QUES 4


// let visitorName = "John Doe";
// let order = "5 T-Shirt(s)";
// let website = "XYZ Clothing store";
// document.write(visitorName + ' ordered '+order+' on '+website);


//CHAPTER # 04 [VARIABLE NAMES: LEGAL & ILLEGAL ]


//QUES 1

// let variable1 = "Hello World!",
//     variable2 = "Testing...",
//     variable3 = 52;


//QUES 2

// Legal Variable

// let a="abc";
// let b="123";
// let c="_ddd";
// let d="a_s";
// let e="a-s";

// Illegal Variable

// let f="!";
// let g="@";
// let h="123qws";
// let i="^";
// let j="&";

//QUES 4

//document.write(<h1>"Rules for naming JS variables"</h1>);

//CHAPTER # 05 [MATH EXPRESSIONS]

//QUES 1

// let a = 3;
// let b = 5;
// let c = a+b;
// document.write('Sum of 3 and 5 is ' +c);

//QUES 2

// let a = 5;
// let b = 3;
// let c = a - b;
// let d = a * b;
// let e = a % b;
// document.write('Subtraction :'+c);
// document.write('<br>Multiplication :'+d);
// document.write('<br>Modulus :'+e);

//QUES 3

// let a = "Value after variable declaration is undefined";
// let ini = 5;
// let inc =++int;
// let addVar = 7;
// let afterAdd = addVar + inc;
// let decVar = --afterAdd;
// let rem = decVar % 3;

// document.write(a);
// document.write('<br>Initial Value :'+ini);
// document.write('<br>Value after increment is :'+inc);
// document.write('<br>Value after addition is :'+addVar);
// document.write('<br>Value after decrement is :'+decVar);
// document.write('<br>The remainder is :'+rem);


//QUES 4


// let ticket = 600;
// let moreTicket = ticket * 5;
// document.write('Total cost to buy 5 tickets to a movie is '+moreTicket+ 'PKR');


//QUES 5

// var rows = prompt("How many rows for your multiplication table?");
//     var cols = prompt("How many columns for your multiplication table?");
//     if(rows == "" || rows == null)
//    		 rows = 10;
//     if(cols== "" || cols== null)
//    		 cols = 10;
//     createTable(rows, cols);
//     function createTable(rows, cols)
//     {
//       var j=1;
//       var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
//       for(i=1;i<=rows;i++)
//       {
//     	output = output + "<tr>";
//         while(j<=cols)
//         {
//   		  output = output + "<td>" + i*j + "</td>";
//    		  j = j+1;
//    		}
//    		 output = output + "</tr>";
//    		 j = 1;
//     }
//     output = output + "</table>";
//     document.write(output);
//     }





//QUES 6

// let C = 25;
// let out  =  (F-32) * 5 / 9;
// let F = 70;
// let out1 =  (C * 9/5)+ 32;
// document.write('25 degree C is '+out1);
//document.write('<br> 70 degree F is '+out);


//QUES 7

// document.write("<h1>Shopping Cart </h1>");
// let a = 650;
// let b = 3;
// let c = 100;
// let d = 7;
// let e = 100;
// let f = a * b;
// let g = c * d;
// let h = f + g + e;
// document.write('Price of item 1 is '+a);
// document.write('<br>Quantity of item 1 is '+b);
// document.write('<br>Price of item 2 is '+c);
// document.write('<br> Quantity of item 2 is '+d);
// document.write('<br> Shipping charges '+e);
// document.write('<br><br>Total cost of your order is '+h);

//QUES 8

// document.write("<h1> Mark Sheet </h1>");
// let totalMarks = 980;
// let marksObt = 804;
// let percent = (marksObt/totalMarks) * 100;
// document.write('Total Marks : '+totalMarks);
// document.write('<br>Marks Obtained : '+marksObt);
// document.write('<br>Percentage : '+percent);


//QUES 9

// document.write("<h1> Currency in PKR </h1>");
// let US = 10 * 104.80;
// let S = 25 * 28;
// let sum = US + S;
// document.write('Total Currency in PKR : '+sum);


//QUES 10

// let a = 5;
// let b = a * 10;
// let c = b / 2;
// document.write('Add : '+a+'<br>Multiply : '+b+'<br>Divide : '+c);


//QUES 11



// document.write("<h1>Age Calculator</h1>");
// let current = 2017;
// let birth  = 1993;
// let age = current - birth;
// document.write('Current Year : '+current);
// document.write('<br>Birth Year : '+birth);
// document.write('<br>Your Age : '+age);

// QUES 12

// document.write("<h1>The Geometrizer</h1>");
// let r = 20;
// let circum = 2 * 3.142 * r;
// let area = 3.142 * (r*r);
// document.write('Radius of a circle : '+r);
// document.write('<br>The circumference is : '+circum);
// document.write('<br>The area is : '+area);



// QUES 13

// document.write("<h1>The Lifetime Supply Calculator</h1>");
// let  f = "chocolate chip";
// let  a = 15;
// let  m = 100;
// let  s =  5;
// let mi = m - a;
// let fi = mi * s;
// document.write('Favourite Snack : '+f);
// document.write('<br>Current Age : '+a);
// document.write('<br>Estimated Maximum Age : '+m);
// document.write('<br>Amount of Snacks perday : '+s);
// document.write('<br>You will need '+fi+' chocolate chip to last you until the ripe old age of 100');  



//CHAPTER # 06 to 09 [MATH EXPRESSIONS ]


//QUES 1

// document.write('Result:')
// let a = 10;
// document.write('<br> The value of a is : '+a);
// document.write('<br>------------------------------');
// let b = ++a;
// let c = b;
// document.write('<br>The value of ++a is : '+b);
// document.write('<br>Now the value of a is : '+c);


// let d = a++;
// document.write('<br><br>The value of a++ is :'+d);

// let e = ++d;
// document.write('<br>Now the value of a is :'+e);

// let f = --e;

// document.write('<br><br>The value of --a is :'+f);

// document.write('<br>Now the value of a is :'+e);

// document.write('<br><br>Now the value of a-- is :'+e);

// let g = --e;
// document.write('<br>Now the value of a is :'+g);


//QUES 3

// let name = prompt("Enter your Name:");
// document.write(name+' Welcome to our website!!!!');



//[CHAPTER # 21 to 25]    (STRING METHODS)

 

//Ques # 01;

// var firstName = prompt("Enter a first Name :");
// var lastName  = prompt("Enter a last Name :");
// var fullName  = firstName +  lastName;
// alert("Welcome back "+fullName);

//Ques # 02;

// var mobile = prompt("Describe about favourite mobile phone");
// var a = mobile.length;
// document.write("My favourite phone is : "+mobile);
// document.write("<br><br>The length of string is: " +a);

//Ques # 03;

// var a ="Pakistani"
// var b = a.indexOf("n");
// document.write("String : "+a);
// document.write("<br>Inde of 'n' : "+b);

//Ques # 04;

// var c ="Hello World"
// var d = c.lastIndexOf("l");
// document.write("String : "+c);
// document.write("<br>Last index of 'l' : "+d);

//Ques # 05;

// var p ="Pakistani";
// var ch = p.charAt(3)
// document.write("String : "+p);
// document.write("<br>Character at index 3 : "+ch);

//Ques # 06;

// var firstName = prompt("Enter a first Name :");
// var lastName  = prompt("Enter a last Name :");
// alert(firstName.concat(' ', lastName));

//Ques # 07;

// var city = 'Hyderabad';
// var wordReplace = city.replace("Hyder", "Islam");
// document.write("City : "+city);
// document.write("<br>After Replacement : "+wordReplace);

//Ques # 08;

// var text = "Ali and Sami are best friends.They play cricket and football together";
// var textReplace = text.replace(/and/g,"&");
// document.write(textReplace);

//Ques # 10;


// var a = prompt("Enter a Letter :");
// var b = a.toUpperCase();
// document.write("User Inputs : "+a);
// document.write("<br>Upper Case : "+b);

//Ques # 11;

// var a = prompt("Enter a Letter :");
// var b = a.toLowerCase()
// document.write("User Inputs : "+a);
// document.write("<br>Title Case : "+b);

//Ques # 12;

// const num = 35.36;
// const without = num.toString().replace(".", ""); 
// document.write(without);

//Ques # 16;

// var university = "University of Karachi";
// var convert = university.split();
// document.write(convert);

//Ques # 17;

// var a = "Pakistan";
// var b = a.lastIndexOf("n");
// document.write(b);


//Ques # 18;

// function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }

//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }
 
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));



//[CHAPTER # 26 to 30]    (MATH METHODS)

//Ques # 01;

// var a = 3.142222;
// var b = Math.round(a);
// var c = Math.floor(a);
// var d = Math.ceil(a);
// document.write("number : "+a);
// document.write("<br>round off value : "+b);
// document.write("<br>floor value : "+c);
// document.write("<br>Ceil value : "+d);



//Ques # 02;


// var a = -2.673;
// var b = Math.round(a);
// var c = Math.floor(a);
// var d = Math.ceil(a);
// document.write("number : "+a);
// document.write("<br>round off value : "+b);
// document.write("<br>floor value : "+c);
// document.write("<br>Ceil value : "+d);

//Ques # 03;

// var a = -4;
// var b = Math.abs(a);
// document.write("Absolute value of -4 is "+b);

//Ques # 04;

// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write("Random diced value : "+diceRoll);

//Ques # 05;

// var headuser = prompt("Enter head user name");
// var tailuser = prompt("Enter tail user name");
// var toss = Math.random() * 2;
// var floor = Math.random(toss)
// if (floor === 0){
//     document.write("Heads "+headuser+ " win the toss")
// }else{
//     document.write("Tails "+tailuser+ " win the toss")

// }

//Ques # 06;

// var a = Math.floor(Math.random() * 101); 
// document.write("Random number between 1 and 100 are : "+a);





//Ques # 07;

// alert =(prompt("Enter your weiht in killograms"));
// document.write("The weight of user is "+alert+ " kilograms");


//Ques # 08;

// alert =(prompt("Enter a number between 1 and 10"));
// var a = Math.floor(Math.random() * 10);
// if(alert===a){
//     document.write("Congratulations")
// } else{
// document.write("Try Again");
// }


//[CHAPTER # 31 to 34]    (DATE METHODS)

//Ques # 01;

// var rightNow = new Date();
// document.write(rightNow);

//Ques # 02;

// var d = new Date();
// var currentMonth = d.getMonth();
// document.write("Current Month : "+currentMonth);


// var d = new Date();
// var e = d.slice(0,3);
// alert(e);








           
           
           //                  [Chapter 38 - 42]   

            //  (FUNCTIONS, SWITCH STATEMENTS, WHILE DOWHILE LOOPS)

// QUES 01;




// var a;
// var b;

//       var i,p=1;
//       for(i=1;i<=b;i++)
//             p*=a;
//       return p;

// function main()
// {
//       var x,n,p;
     
//       document.write("\nEnter the Value of 'x' : ");
      
//      document.write("\nEnter the Value of 'n' : ");
     
//       p=power(x,n);
//       document.write("\nPower : %d",p);
     
// }


// QUES 02;


// var leapYear = prompt("Enter a leap year :");
// if (leapYear ===2012 ||leapYear ===2016 || leapYear ===2020 || leapYear ===2024 ) {
//      alert("It's a leap year!");
//      }
//      else if (leapYear === 2011) {
//      alert("Not a Leap Year!");
//      }
//      alert("Enter a day"+leapYear)


// QUES 03;


// If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
// var a = prompt("Enter Length of triangle :")
// var b = prompt("Enter Length of triangle :")
// var c = prompt("Enter Length of triangle :")
// var S = (a+b+c)/2

// alert(" The Length of triangle : " +S );
// var area = S(S-a)(S-b)(S-c)
// alert(" The Area of triangle : " +area );


//QUES # 04


// function average(){
//     var sub1 = 100;
//     var sub2 = 70;
//     var sub3 = 80;
//     var a =(sub1+sub2+sub3)/3
//     alert("The average no: "+a);
// }
// function perc(){
//     var p = (a/300)*100
//     alert("The Percentage: "+p);
// }

// function main(){
//     average()
//     perc()
// }



//QUES # 06


// function sumDigProd(arr) {
//     let ans = arr.split(" ");
//     let array = [];
//     for (i = 0; i < ans.length; i++) {
//       for (j = 0; j < ans[i].length; j++) {
//         var vowelAtLast;
//         if (
//           ans[i][j].toLowerCase() == "a" ||
//           ans[i][j].toLowerCase() == "e" ||
//           ans[i][j].toLowerCase() == "i" ||
//           ans[i][j].toLowerCase() == "o" ||
//           ans[i][j].toLowerCase() == "u"
//         ) {
//           vowelAtLast = ans[i][j];
//         }
//       }
//       var idex = ans[i].lastIndexOf(vowelAtLast);
//       console.log(idex,ans[i],ans[i][idex]);
//       ans[i].replace(ans[i][idex],'')
//       array.push(ans[i])
//       console.log(ans)
//     }
//     console.log(ans)
//     return array.join(" ");
//   }
  
//   console.log(sumDigProd("youuo goalo people."));



//QUES # 08


// var city1 = 10;
// var city2 = 30;
// var cityDis = city2 - city1
// document.write("One city distance :" +city1 +" km")
// document.write("<br>Another city distance :" +city2 + " km")
// document.write("<br>The distance between two cities in km: " +cityDis + " km");
// var meter = cityDis * 1000
// document.write("<br>The distance between two cities in meter: " +meter + " m");
// var feet = cityDis * 3280.84
// document.write("<br>The distance between two cities in feet: " +meter + " f");
// var inches = cityDis * 39370.08
// document.write("<br>The distance between two cities in inches: " +meter + " in");
// var centimeter = cityDis * 1000 * 100
// document.write("<br>The distance between two cities in centimeter: " +meter + " cm");





          //                [Chapter 43 - 48]   

         //                     (EVENTS)


//QUES # 01

// function popup(message) {
//      alert(message);
//      }



//QUES # 02
    
{/* <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1529653762956-b0a27278529c%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fmobile&tbnid=fPR7XVsFSh8XsM&vet=12ahUKEwi_nIz6jdfqAhUM8IUKHeqjCVkQMygCegUIARDXAQ..i&docid=4imoj4lYh6dFWM&w=1000&h=667&q=mobile%20pic&ved=2ahUKEwi_nIz6jdfqAhUM8IUKHeqjCVkQMygCegUIARDXAQ" onClick="alert('Thanx for purchasing a phone from us!');"></img>
<img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1529653762956-b0a27278529c%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fmobile&tbnid=fPR7XVsFSh8XsM&vet=12ahUKEwi_nIz6jdfqAhUM8IUKHeqjCVkQMygCegUIARDXAQ..i&docid=4imoj4lYh6dFWM&w=1000&h=667&q=mobile%20pic&ved=2ahUKEwi_nIz6jdfqAhUM8IUKHeqjCVkQMygCegUIARDXAQ" onClick="alert('Thanx for purchasing a phone from us!');"></img>
<img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1529653762956-b0a27278529c%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fmobile&tbnid=fPR7XVsFSh8XsM&vet=12ahUKEwi_nIz6jdfqAhUM8IUKHeqjCVkQMygCegUIARDXAQ..i&docid=4imoj4lYh6dFWM&w=1000&h=667&q=mobile%20pic&ved=2ahUKEwi_nIz6jdfqAhUM8IUKHeqjCVkQMygCegUIARDXAQ" onClick="alert('Thanx for purchasing a phone from us!');"></img>
<img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1529653762956-b0a27278529c%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fmobile&tbnid=fPR7XVsFSh8XsM&vet=12ahUKEwi_nIz6jdfqAhUM8IUKHeqjCVkQMygCegUIARDXAQ..i&docid=4imoj4lYh6dFWM&w=1000&h=667&q=mobile%20pic&ved=2ahUKEwi_nIz6jdfqAhUM8IUKHeqjCVkQMygCegUIARDXAQ" onClick="alert('Thanx for purchasing a phone from us!');"></img>
 */}




 //QUES # 03


//  function SomeDeleteRowFunction(btndel) {
//     if (typeof(btndel) == "object") {
//         $(btndel).closest("tr").remove();
//     } else {
//         return false;
//     }
// }

//QUES # 04


// $('#imageid').hover(function() {
//     $(this).attr('src', '/folder/image2.jpg');
//   }, function() {
//     $(this).attr('src', '/folder/image1.jpg');
//   });




//QUES # 05



// let count = 0;
// function myFunction() {
//   count+=1;
//   document.getElementById("btn").innerHTML = count;

//  }


//                          [Chapter 49 - 52]   

//                               (EVENTS)


//QUES # 01

// function checkAddress(fieldId) {
//      if (document.getElementById(fieldId).value === "") {
//      alert("Username is required.");
//      }
//      }


//QUES # 02

//  function expandLoris() {
//      var expandedParagraph = "Sting is available in three flavours, such as original Gold Rush, Gold (with Ginseng), Power Pacq (Gold Rush with Malunggay), Power Lime (Kiwifruit/Lime) and Berry Blast (Strawberry)."
//     document.getElementById("slowLoris").innerHTML = expandedParagraph;
//     }


//QUES # 03





// var arrHead = new Array();
//     arrHead = ['', 'Student Name', 'Department', 'Age']; // table headers.

//     // first create a TABLE structure by adding few headers.
//     function createTable() {
//         var empTable = document.createElement('table');
//         empTable.setAttribute('id', 'empTable');  // table id.

//         var tr = empTable.insertRow(-1);

//         for (var h = 0; h < arrHead.length; h++) {
//             var th = document.createElement('th'); // the header object.
//             th.innerHTML = arrHead[h];
//             tr.appendChild(th);
//         }

//         var div = document.getElementById('cont');
//         div.appendChild(empTable);    // add table to a container.
//     }

//     // function to add new row.
//     function addRow() {
//         var empTab = document.getElementById('empTable');

//         var rowCnt = empTab.rows.length;    // get the number of rows.
//         var tr = empTab.insertRow(rowCnt); // table row.
//         tr = empTab.insertRow(rowCnt);

//         for (var c = 0; c < arrHead.length; c++) {
//             var td = document.createElement('td');          // TABLE DEFINITION.
//             td = tr.insertCell(c);

//             if (c == 0) {   // if its the first column of the table.
//                 // add a button control.
//                 var button = document.createElement('input');

//                 // set the attributes.
//                 button.setAttribute('type', 'button');
//                 button.setAttribute('value', 'Remove');

//                 // add button's "onclick" event.
//                 button.setAttribute('onclick', 'removeRow(this)');

//                 td.appendChild(button);
//             }
//             else {
//                 // the 2nd, 3rd and 4th column, will have textbox.
//                 var ele = document.createElement('input');
//                 ele.setAttribute('type', 'text');
//                 ele.setAttribute('value', '');

//                 td.appendChild(ele);
//             }
//         }
//     }

//     // function to delete a row.
//     function removeRow(oButton) {
//         var empTab = document.getElementById('empTable');
//         empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr
//     }

//     // function to extract and submit table data.
//     function submit() {
//         var myTab = document.getElementById('empTable');
//         var arrValues = new Array();

//         // loop through each row of the table.
//         for (row = 1; row < myTab.rows.length - 1; row++) {
//             // loop through each cell in a row.
//             for (c = 0; c < myTab.rows[row].cells.length; c++) {
//                 var element = myTab.rows.item(row).cells[c];
//                 if (element.childNodes[0].getAttribute('type') == 'text') {
//                     arrValues.push("'" + element.childNodes[0].value + "'");
//                 }
//             }
//         }
        
//         // finally, show the result in the console.
//         console.log(arrValues);
//     }




//                          [Chapter 58 - 67]   

//                               (DOMS)



// var list = document.getElementById("list");
// var list = document.getElementById("list");
// var list = document.getElementById("list");
// var list = document.getElementById("list");
// var list = document.getElementById("list");


// function addTodo(){
//     var first_name = document.getElementById("first-name");
//     var last_name = document.getElementById("last-name");
//     var emails = document.getElementById("email");
//     var Country = document.getElementById("country");
//     var Contact = document.getElementById("contact");
//     var li = document.createElement('li')
//     var li = document.createElement('li')
//     var li = document.createElement('li')
//     var li = document.createElement('li')
//     var li = document.createElement('li')
//     var liText = document.createTextNode(first_name.value)
//     var liText = document.createTextNode(last_name.value)
//     var liText = document.createTextNode(emails.value)
//     var liText = document.createTextNode(Country.value)
//     var liText = document.createTextNode(Contact.value)
//     li.appendChild(liText)
//     li.appendChild(liText)
//     li.appendChild(liText)
//     li.appendChild(liText)
//     li.appendChild(liText)
//     list.appendChild(li)
//     list.appendChild(li)
//     list.appendChild(li)
//     list.appendChild(li)
//     list.appendChild(li)
//     first_name.value = ""
//     last_name.value = ""
//     emails.value = ""
//     Country.value = ""
//     Contact.value = ""
//     console.log(li)
//     console.log(li)
//     console.log(li)
//     console.log(li)
//     console.log(li) 



// }






    
    





    
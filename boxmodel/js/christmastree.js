 let rows = 5;
 for (let i = 1; i <= rows; i++) {
     for (let j = 1; j <= rows - i; j++) {
         document.write("&nbsp;");
     }
     for (let j = 1; j <= 2 * i - 1; j++) {
         document.write("*");
     }
     document.write("<br>");
 }
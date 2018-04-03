# SimpleAssertionTool
A simple and lightweight tool to perform simple unit-testing.

## How to use:

  * Clone this repository to your local machine and place `assert.js` and `assert.css` wherever you are feeling comfy to place it; 

  * Add the `<script>` into the `<head>` of your HTML page:
  
     ```<script src="path/to/assert.js"></script>```
     
  * Link your page to `assert.css` stylesheet, in `<head>` as well:
  
     ```<link rel="stylesheet" href="path/to/assert.css">```
     
  * Add a `<div class="assert">` into your HTML body, and specify this `div` with `id`:
  
     ```<div class="assert" id="my-test"></div>```
     
  * Then you are to link your test with `div` created above. In your script store a variable that contains `new Assert()` and the `id` of `div` created above as first argument, and the name (heading) of your test as second one:
  
     ```let testAssert = new Assert('my-test', 'Test Assertion');```
     
  * Now you're completely ready to perform tests! Use `.assert()` method to the variable you've stored above, and pass `statement` (the function that returns anything or simply an expression) as the first argument, and string `"message"` with your expectations as second one:
  
     ```javascript
     testAssert.assert((yourFunc(yourArgs) === expected value), 'Returns true value!');
     testAssert.assert((yourFunc(yourArgs) === not expected value), "Doesn't return false value!");
     testAssert.assert((2 + 2 === 4), "Simple Expression Test That Passes");
     testAssert.assert((2 + 2 !== 4), "Simple Expression Test That Fails");
     ```
       
### An easy example

There is the way I've tested the workability of this all:

   ```javascript
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <title>Document</title>
     <link rel="stylesheet" href="assert.css">
     <script src="assert.js"></script>
   </head>
   <body>
     <div class="assert" id="sum"></div>
     <script>    
         const sum = (a, b) => a + b;
         let sumAssert = new Assert('sum', 'Test Sum Function');
         sumAssert.assert((sum(2, 2) === 4), 'Returns 4 - true value!');
         sumAssert.assert((sum(2, 2) === 5), "Doesn't return false value!");
         sumAssert.assert((2 + 2 !== 4), "Simple Expression Test");
     </script>
   </body>
   </html>
   ```
   
### Some Screenshots: 

![screenshot1](https://pp.userapi.com/c844724/v844724148/1971f/C2GRvDXKgag.jpg)
![screenshot2](https://pp.userapi.com/c844724/v844724148/19729/SIP1dzSxEqo.jpg)
![screenshot3](https://pp.userapi.com/c844724/v844724148/196f1/0MKk57nCYYM.jpg)

## You are absolutely free to use it without any restrictions!

If there is anything you want to change, please PR.

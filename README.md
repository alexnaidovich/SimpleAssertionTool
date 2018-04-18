# SimpleAssertionTool
A simple and lightweight tool to perform simple unit-testing and visualize it into your browser.

## How to use:

  * Clone this repository to your local machine and place `assert.js` and `assert.css` wherever you are feeling comfy to place it; 

  * Add the `<script>` into the `<head>` of your HTML page:
  
     ```<script src="path/to/assert.js"></script>```
     
  * Link your page to `assert.css` stylesheet, in `<head>` as well:
  
     ```<link rel="stylesheet" href="path/to/assert.css">```
     
  * **OR** you can use CDN with those links:
  
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alexnaidovich/SimpleAssertionTool@0.1/assert.min.css">
  <script src="https://cdn.jsdelivr.net/gh/alexnaidovich/SimpleAssertionTool@0.1/assert.js"></script>
  ```
     
  * Add a `<div class="assert">` into your HTML body, and specify this `div` with `id`:
  
     ```<div class="assert" id="my-test"></div>```
     
  * Then you are to link your test with `div` created above. In your script store a variable that contains `new Assert()` and pass the `id` of `div` created above as first argument, and the name (heading) of your test as second one:
  
     ```let testAssert = new Assert('my-test', 'Test Assertion');```
     
  * Now you're completely ready to perform tests! Use `.assert()` method with two arguments to the variable you've stored above. At the first `{Boolean} statement` argument you are to compare the returned value of function (or expression) you are testing with the value expected. And as the second `message` argument you pass a `{String}` with ongoing message:
  
     ```javascript
     testAssert.assert((yourFunc(yourArgs) === expectedValue), 'Returns true value!');
     testAssert.assert((yourFunc(yourArgs) === notExpectedValue), "Doesn't return false value!");
     testAssert.assert((2 + 2 === 4), "Simple Expression Test That Passes");
     testAssert.assert((2 + 2 !== 4), "Simple Expression Test That Fails");
     ```
     
     In your browser it is going to result in something like this:
     
     ![result](https://pp.userapi.com/c846020/v846020346/153c9/BXeUoBPvXfU.jpg)
     
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
         const sum = (a, b) => a + b; // the function to test; the same as " function sum(a,b){return a+b} "
         let sumAssert = new Assert('sum', 'Test Sum Function');
         sumAssert.assert((sum(2, 2) === 4), 'Returns 4 - true value!');
         sumAssert.assert((sum(2, 2) === 5), "Doesn't return false value!");
         sumAssert.assert((2 + 2 !== 4), "Simple Expression Test");
     </script>
   </body>
   </html>
   ```

## Known Conveinence Issue

```javascript
// FIXME
```

When you use your tests a lot of times at one and the same HTML page, you are going to meet an unpleasant thing: you are overflowing the scope. It probably will make a mess with variable names (especially, when you store the new variable with the name you've already used). Plus, it is going to make you some troubles while debugging. It looks like this (pay attention to the "Scopes" bar at the right side of browser):

![scope owerflow](https://pp.userapi.com/c834404/v834404295/109b0a/CNTSRpYJUMI.jpg)

The problem is about to be solved when you close the scope. One of the ways to do that is to wrap all your JS code of current test into IIFE (Immideately Invoked Function Expression). The way to do this: 

```javascript
<!--  rezig-test01  -->

    <div class="assert" id="rezig1"></div>
    <script>
    (function () { // ES5 way
        let text = "Domo Arigato!"
        const useless = ninjaCallback => ninjaCallback();
        
        let ninja001 = new Assert('rezig1', 'Useless Ninja Callback Test');
        ninja001.assert(useless(() => text) === text, "The useless function works! " + text)
    })(); 
    </script>    
    
<!--    fillarr test  -->
   
   <div class="assert" id="fill-arr"></div>
   <script>
   (() => { // ES6 way
       let arr = new Array(5).fill('content');
       
       let arrTest = new Assert('fill-arr', 'Filling New Array');
       arrTest.assert(arr[2] === 'content', 'That works fine - you filled array made by constructor in one line!');
   })();  
   </script>
```

Look at the scopes bar now:

![clear scope](https://pp.userapi.com/c834404/v834404295/109b32/HEJCVCospIE.jpg)

I tagged this issue as `// FIXME` because I still don't know how to make it more convenient for you. Wrapping your test into IIFE really works, but it means more of typing. I am thinking over how to redo that for the case of speed and convenience, and if you have ideas for that, please PR. 
For now, the only thing I can offer in this case, is... *(see below)*

### Amateur Tip
*(definitely not a PRO tip)*

You can bind a snippet to call everything you need by one trigger-combo-word! I use "Brackets" IDE and [Brackets Snippets](https://github.com/chuyik/brackets-snippets) extension for that. I've heard, it is easy to bind a snippet for Sublime Text. And I'm sure about the other popular IDEs can offer this option.

![snippet screenshot](https://pp.userapi.com/c834404/v834404493/102cac/rFXxFNI1uC4.jpg)
[![snippet video](https://pp.userapi.com/c845220/v845220461/1e049/XQEgXXciaK0.jpg)](https://youtu.be/a_URWi8qQZo)

## Some Screenshots: 

![screenshot1](https://pp.userapi.com/c844724/v844724148/1971f/C2GRvDXKgag.jpg)
![screenshot2](https://pp.userapi.com/c844724/v844724148/19729/SIP1dzSxEqo.jpg)
![screenshot3](https://pp.userapi.com/c844724/v844724148/196f1/0MKk57nCYYM.jpg)

## Terms of use

You are absolutely free to use it without any restrictions!
If there is anything you want to change, please PR.

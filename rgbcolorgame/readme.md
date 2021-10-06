2. Github repository : https://github.com/nishantnksingh/nishantnksingh.github.io/tree/master/jsanimation1
4. Hosted Link : https://nishantnksingh.online/rgbcolorgame/
5. 
a) JavaScript games are fun when we have some idea. So to learn RGB colours output I built a game in which we guess the output color according to the randomly generated RGB value and if we select the right colour the game ends and the whole background gets the same colour inherited.
b) I used mostly HTML, CSS, JavaScript, jQuery and Bootstrap as framework
c) This game is built on HTML, CSS and Javascript and it provided the game in three levels. Player needs to select the correct palatte for the given RGB code to win the game. This game will help the player learn RGB codes easily through playing.
Features : Reset, Easy, Medium and Hard Level, Responsive, RGB learning
Used : HTML , CSS, JavaScript, Bootstrap, jQuery, Visual Studio Code
<!DOCTYPE html>
<html>
<head>
   <link rel="stylesheet" href="colorgame.css" type="text/css">
</head>
<body>
 <h1>First Game Project <br/> 
     <span class="selectrgb">RGB</span><br/>
     Select the Correct Color Square</h1>
    
<div class="whiteln">
    <button class="btn">Change Colors</button>
    <span class="result"> </span> 
    <button class="btn">Easy</button>
    <button class="btn">Medium</button>
    <button class="btn sbtn">Hard</button>
</div>
    
<div class="container">
    <div class="sq"></div>
    <div class="sq"></div>
    <div class="sq"></div>
    <div class="sq"></div>
    <div class="sq"></div>
    <div class="sq"></div>
    <div class="sq"></div>
    <div class="sq"></div>
    <div class="sq"></div>
</div>  
<script src="colorgame.js" type="text/javascript"></script>    
</body>
</html>

jQuery(document).ready(function () {//Make sure you put this in your document.ready function. However if your importing pictures with the same script 
    //file you may need to put this into a jQuery(window).load(function () {});

    //Do not change these variables. Add the classes to the class attribute of the elements, and create a internal style sheet and assign the ID
    var timer;//This creates a timer object, that we will clear out every time we do a change.
    var $targetSwapPseudoSelectors = $('#PseudoSelectorBypass');//The ID of the Internal Style Sheet in the page. We need this to target pseudo selectors with Javascript.
    var $targetFontColor = $('.ft-color-switch');//You need to put this class in all the elements you want to have the font color switching on
    var $targetBgColor = $('.bg-color-switch');//You need to put this class in all the elements you want to have background color switching on
    var $targetBorderColor = $('.brdr-color-switch');//You need to put this class in all the elements you want to have the border color switching on



    //You may change these variables to your liking.
    var fadeTimer = 500;//This controls the timing for fading through the colors.
    var timeOut = 3000;//This controls how quickly the colors cycle
    var firstColor = "#CC0000;";//FirstColor we will start with. Also needs to be the color of element by default.
    var secondColor = "#2ACC00;";//Second color
    var thirdColor = "#2278CC;";//Third color
    //You can have as many colors as you want. All you would need to do is create a new function for them and daisychain them correctly.



    firstColorSwitch(); // This initializes the script by starting the chain of functions. Since our functions are all linked, For any of them to run.
    //We need to run atleast one of them once.

    function firstColorSwitch() {
        clearTimeout(timer)// This clears out the timer so the timeout doesn't compound.

        $targetFontColor.animate({
            "color": firstColor
        }, fadeTimer)//This is using the jQuery animate keyword to change the color attribute of our targetFontColor element. 
        //So any element with the class of .ft-color-switch

        $targetBgColor.animate({
            "background-color": firstColor
        })//Same thing but with background color

        $targetBorderColor.animate({
            "border-color": firstColor
        }, 500)//Same thing but with border color

        $targetSwapPseudoSelectors.remove();//This removes the current style sheet to prevent memory leaks/etc other wise this code would simply add a bunch
        //of internal style sheets
        //This creates a new style sheet  and appends it to the head
        var jsIntStyleSheet = $(
          '<style id = "PseudoSelectorBypass">' +
          //This is where you put your Pseudo selectors if you want the color of your sites nav:hovers for example to change colors
          '#hoverTarget:hover {' +
          'background-color: ' + firstColor + //You can add as many styles as you want. You can even select other things aside from pseudo selectors 
          //as this is just creating a style sheet inside your head tag on what ever page this is running on.
          '}  </style>'
          ).appendTo('head');
        //This will set our timer variable to cause a time out event where we daisy chain the next function we're running. 
        //It will automatically play the second cycle when the timer times out.
        timer = setTimeout(function () {
            secondColorSwitch();
        }, timeOut);
    }


    function secondColorSwitch() {
        clearTimeout(timer)// This clears out the timer so the timeout doesn't compound.

        $targetFontColor.animate({
            "color": secondColor
        }, fadeTimer)//This is using the jQuery animate keyword to change the color attribute of our targetFontColor element. 
        //So any element with the class of .ft-color-switch

        $targetBgColor.animate({
            "background-color": secondColor
        })//Same thing but with background color

        $targetBorderColor.animate({
            "border-color": secondColor
        }, 500)//Same thing but with border color

        $targetSwapPseudoSelectors.remove();//This removes the current style sheet to prevent memory leaks/etc other wise this code would simply add a bunch
        //of internal style sheets
        //This creates a new style sheet  and appends it to the head
        var jsIntStyleSheet = $(
          '<style id = "PseudoSelectorBypass">' +
          //This is where you put your Pseudo selectors if you want the color of your sites nav:hovers for example to change colors
          '#hoverTarget:hover {' +
          'background-color: ' + secondColor + //You can add as many styles as you want. You can even select other things aside from pseudo selectors 
          //as this is just creating a style sheet inside your head tag on what ever page this is running on.
          '}  </style>'
          ).appendTo('head');
        //This will set our timer variable to cause a time out event where we daisy chain the next function we're running. 
        //It will automatically play the next cycle when the timer times out.
        timer = setTimeout(function () {
            thirdColorSwitch(); //So this goes to the third
        }, timeOut);
    }
    function thirdColorSwitch() {
        clearTimeout(timer)// This clears out the timer so the timeout doesn't compound.

        $targetFontColor.animate({
            "color": thirdColor
        }, fadeTimer)//This is using the jQuery animate keyword to change the color attribute of our targetFontColor element. 
        //So any element with the class of .ft-color-switch

        $targetBgColor.animate({
            "background-color": thirdColor
        })//Same thing but with background color

        $targetBorderColor.animate({
            "border-color": thirdColor
        }, 500)//Same thing but with border color

        $targetSwapPseudoSelectors.remove();//This removes the current style sheet to prevent memory leaks/etc other wise this code would simply add a bunch
        //of internal style sheets
        //This creates a new style sheet  and appends it to the head
        var jsIntStyleSheet = $(
          '<style id = "PseudoSelectorBypass">' +
          //This is where you put your Pseudo selectors if you want the color of your sites nav:hovers for example to change colors
          '#hoverTarget:hover {' +
          'background-color: ' + thirdColor + //You can add as many styles as you want. You can even select other things aside from pseudo selectors 
          //as this is just creating a style sheet inside your head tag on what ever page this is running on.
          '}  </style>'
          ).appendTo('head');
        //This will set our timer variable to cause a time out event where we daisy chain the next function we're running. 
        //It will automatically play the next cycle when the timer times out.
        timer = setTimeout(function () {
            firstColorSwitch();//And this goes back to the first
        }, timeOut);
    }
});

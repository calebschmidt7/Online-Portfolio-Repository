

$(function() {

  
   var $sitePreview = $(".sitePreview");
   var $exampleSlider = $sitePreview.find(".exampleSlider");
   var $slides = $exampleSlider.find(".slide");
   var $toggleRight = $(".arrowRight");
   var $toggleLeft = $(".arrowLeft");

   var width = $sitePreview.width();
   var animationSpeed = 1500;
   var pause = 3000;
   var currentSlide = 1;

                 

    $toggleLeft.click(function(){
        if (currentSlide === 1) {
            currentSlide = $slides.length;
            $exampleSlider.css({'margin-left': '-'+width*($slides.length-1)+'px'});
            $exampleSlider.animate({'margin-left': '+='+width}, animationSpeed, function() {
                currentSlide--;
            });
        } else {
            $exampleSlider.animate({'margin-left': '+='+width}, animationSpeed, function(){
                currentSlide--;
            });
        }
        return false
    });
    $toggleRight.click(function(){
        $exampleSlider.animate({'margin-left': '-='+width}, animationSpeed, function(){
            currentSlide++;
            if (currentSlide === $slides.length) {
                currentSlide = 1;
                $exampleSlider.css('margin-left', 0);
            }
        });
        return false
    });
    
});
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).next().attr('value');
      $(this).html("Alarm Level: Low");

    });

    range.on('input', function(){
     

      if(this.value == 0){
        $("#alarm").empty();
        $(this).prev(value).html("Alarm Level: Low");
        $("#alarm").append("<img id='alarm' src='assets/img/lowalarm.png' class='adb-logo animated bounceIn' style='margin-top: 10%; height: 120px;'>");
      }else if(this.value == 1){
        $("#alarm").empty();
        $(this).prev(value).html("Alarm Level: Medium");
        $("#alarm").append("<img id='alarm' src='assets/img/midalarm.png' class='adb-logo animated shake' style='margin-top: 10%; height: 120px;'>");
      }else if(this.value == 2){
        $("#alarm").empty();
        $(this).prev(value).html("Alarm Level: High");
        $("#alarm").append("<img id='alarm' src='assets/img/alarm.png' class='adb-logo animated wobble' style='margin-top: 10%; height: 120px;'>");
      }
    });

    
  });
};

rangeSlider();
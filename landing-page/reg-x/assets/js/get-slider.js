

/* range slider */

$(document).ready(function(){   

    var temp = new rSlider({
        target: '#temp_length_display',
        values: {min: 125, max: 140},
        step: 5,
        range: true,
        set: [125, 130],
        scale: true,
        labels: false
    });

    var depth = new rSlider({
        target: '#depth_display',
        values: {min: 26, max: 40},
        step: 1,
        range: true,
        set: [26, 30],
        scale: true,
        labels: false
    });

    var eyeSize = new rSlider({
        target: '#eye_size_display',
        values: {min: 43, max: 45},
        step: 1,
        range: true,
        set: [43, 44],
        scale: true,
        labels: false
    });

    var bridge = new rSlider({
        target: '#bridge_size_display',
        values: {min: 14, max: 18},
        step: 1,
        range: true,
        set: [14, 18],
        scale: true,
        labels: false
    });

});
  
/* End of range slider */
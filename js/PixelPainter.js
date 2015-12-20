$(init);


// var init = function () {
//   //var pixelPainterContainer = document.getElementById('pixelPainter');
//   var pixelPainterContainer = $('#pixelPainter'); //if you provide a hashtag jquery will find it
//   pixelPainterContainer.text('Hello');//setter with jquery
//   pixelPainterContainer.addClass('container');
//   console.log(pixelPainterContainer.text());//getter with jquery
// };

// var createSidebar = function () {
//   console.log('create sidebar');
// };
// $(createSidebar);

var selectedColor ;

var pixelPainterContainer;

function init () {
  pixelPainterContainer = $('#pixelPainter');
  //drawSwatches(swatches);
 
  drawGrid(10, 10);
  swatchGrid(3, 3);
  pickColor();
  draw();
}


var swatches = ['#16556F', '#DA0F30', '#1E88EA', '#DA18AC', '#A518DA', '#0FB5E0', '#0FE0DB', '#13F52A', '#F55613' ];


//accept an array of colors to generate our swatches
// function drawSwatches (swatches) {
//   //get my swatch color
//   var swatch = swatches[0];
//  //create a div for my swatch
//   var swatchElement = $('<div class = "swatch"></div>');//creating element
//   //set my swatch background color
//   swatchElement.css('background-color', swatch);

//   //create click handler for this swatch
//   swatchElement.on('click', function (event) {
//     var targetColor = swatchElement.css('background-color');
//     $('.cell').css('background-color', targetColor);
//   });



//   //append swatch to the pixel painter container
//   pixelPainterContainer.append(swatchElement);
// }


function swatchGrid (height, width) {
  
  var swatchContainer = $('<div/>');
  swatchContainer.attr('id', 'swatchContainer');
  swatchContainer.addClass('swatchContainer');
  var i = 0;
  for (var column = 0; column < width; column++) {
    var swatchRowContainer = $('<div/>');
    
    
    for (var row = 0; row < width; row++) {
      var swatchCellElement = $('<div/>');
      swatchCellElement.addClass('swatchCell');
      
      swatchCellElement.css('background-color', swatches[i]);
      i++;
      
      swatchRowContainer.append(swatchCellElement);
    }
    swatchContainer.append(swatchRowContainer);
  }

  pixelPainterContainer.append(swatchContainer);
}



function drawGrid (x, y) {


  var gridContainer = $('<div/>');
  gridContainer.attr('id', 'grid');
  gridContainer.addClass('container');

  // var painter = $('#grid');
  //   painter.click(function(event) {
  //   console.log(event);
  //   var target = $(event.target);
  //     if (target.hasClass('cell')) {
  //       target.css('background-color', selectedColor);
  //     }
  //   });

  for (var column=0; column < y; column++) {
  var i = 1; 
    var rowContainer = $('<div/>');
    for (var row=0; row < x; row++) {
      var cellElement = $('<div/>');
      cellElement.addClass('cell');

      cellElement.attr('id', i);
      i++;
     
      rowContainer.append(cellElement);
    }
   
    gridContainer.append(rowContainer);
  }

   

  $('#grid').click(function (event) {
    console.log("foo");
  });


  pixelPainterContainer.append(gridContainer);
}



function pickColor () {
  selectedColor = $(this).css('background-color');
}


function draw () {
  $(this).css('background-color', selectedColor);
}





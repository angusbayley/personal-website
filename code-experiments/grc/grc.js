// TESTS \\
//$(document).ready(function() {
//    $("#footer").append("<p>jQuery is working</p>");
//});


//function jsTest() {
//    opener = document.getElementById("footer");
//    opener.innerHTML = "<span style='color:green'>JS working!</span>";
//}

//window.onload=jsTest;



// EVERYTHING ELSE \\

window.onload=function() {


    // HELP STUFF \\

    var walkthrough = true;

    $('#introMessage').delay(1000).fadeTo(300, 0.6);

    $('#mouseCapture').mouseleave(function() {
        $('#helpDropdown').fadeTo(200, 0);
    });

    var faded = false;

    $('.fa-question-circle').click(function() {
        console.log(faded);
        $('#entireWrapper').fadeTo(400, 0.3);
        $('#about').css("z-index", 4).fadeTo(400, 0.9, function() {
        //    setTimeout("faded = true; console.log('set to true')", 50);
            faded = true;
        });
        console.log(faded);
    });

    $('#aboutText span').click(function(faded) {
        exitAbout(faded);
        walkthrough = true;
        $('#introMessage').delay(500).fadeTo(300, 0.6);        
    });

    $('#entireWrapper').click(function () {
        console.log("clicked, faded = " + faded);
        exitAbout();
        //faded = false;
    });

    function exitAbout() {
        if (faded) {
            $('#about').fadeTo(400, 0).css("z-index", -1);
            $('#entireWrapper').fadeTo(400, 1);
            faded = false;
            console.log("faded set to false");
        }
    }

    // INTRO MESSAGE \\

    $(".radio").click(function() {
        if (walkthrough == true) {
            $("#introMessage").animate({top: "178px"}, 1000, function(){})
            .fadeTo(500, 0, function() {
                $("#introWords").html("enter some gear sizes <span id='exampleGears'>Example</span>");
                $(this).fadeTo(500, 0.6);
            })
            .dequeue();
        }
    });

    $("#introWords").on('click', '#exampleGears', function() {
        console.log("clicked");
        $('#front1').val(25);
        $('#front2').val(32);
        $('#front3').val(39);
        $('#rear1').val(9);
        $('#rear2').val(10);
        $('#rear3').val(11);
        $('#rear4').val(12);
        $('#rear5').val(13);
        $('#rear6').val(14);
        $('#rear7').val(16);
        $('#rear8').val(18);
        $('#rear9').val(20);
        textChanger(coeff);
    });

    var opCount = 0;

    $('#rearGearInputContainer input').change(function() {
        if (walkthrough == true) {
            if (frontCheck()) {
                textChanger(coeff);
            }
        }
    });

    $('#frontGearInputContainer input').change(function() {
        if (walkthrough == true) {
            if (rearCheck()) {
                textChanger(coeff);
            }
        }
    });

    frontCheck = function() {
        if ($('#front1').val() != 0||$('#front2').val() != 0||$('#front3').val() != 0) {
            return true;
        }
        else {return false;}
    }

    rearCheck = function () {
        if ($('#rear1').val() != "" || $('#rear2').val() != "" || $('#rear3').val() != "" || $('#rear4').val() != "" || $('#rear5').val() != "" || $('#rear6').val() != "" || $('#rear7').val() != "" || $('#rear8').val() != "" || $('#rear9').val() != "" || $('#rear10').val() != "" || $('#rear11').val() != "" || $('#rear12').val() != "") {
            return true;
        }
        else {return false;}
    }

    textChanger = function(coeff) {
         switch (coeff) {
            case 0:
                break;
            case 1:
                var top = 257;
                changeTextToCalculate(top);
                break;
            case 2:
                var top = 412;
                changeTextToCalculate(top);
                break;
            case 3: 
                var top = 357;
                changeTextToCalculate(top);
                break;
        }
    }

    changeTextToCalculate = function(top) {
        if (opCount==0) {
            $("#introMessage").animate({top: top+"px"}, 1000, function(){})
            .fadeTo(500, 0, function() {
                $("#introWords").html("when you're ready, hit calculate");
                $(this).fadeTo(500, 0.6);
            })
            .dequeue();
        }
        opCount ++;
    }


    // LEFTBAR BUTTONS \\

    var coeff = 0;

    $(".radio").mouseenter(function(event) {
        if($(event.target).is('#button1')) {
            $('#GearR').css("z-index", 3).fadeTo(100, 1);
        }
        if($(event.target).is('#button2')) {
            $('#speed').css("z-index", 3).fadeTo(100, 1);
        }
        if($(event.target).is('#button3')) {
            $('#GainR').css("z-index", 3).fadeTo(100, 1);
        }
    });
    $(".radio").mouseleave(function(event) {
        if($(event.target).is('#button1')) {
            $('#GearR').fadeTo(100, 0, function() {
                $('#GearR').css("z-index", 0);
            });
        }
        if($(event.target).is('#button2')) {
            $('#speed').fadeTo(100, 0, function() {
                $('#speed').css("z-index", 0);    
            });
        }
        if($(event.target).is('#button3')) {
            $('#GainR').fadeTo(100, 0, function() {
                $('#GainR').css("z-index", 0);    
            });
            
        }
    });

    $(".radio").click(function(event) {
        $('.radio').css("border", "1px solid #dcdcdc");
        if($(event.target).is('#button1')) {
            $('.radio').removeClass('selected');
            $(this).addClass('selected');
            $('#crankLengthSliderBox').slideUp(500);
            $('#rpmSliderBox').slideUp(500);
            $('#wheelRadiusBox').slideUp(500);
            $('#units').slideUp(500);
            coeff = 1;
        }
        if($(event.target).is('#button2')) {
          $('.radio').removeClass('selected');
            $(this).addClass('selected');
            $('#crankLengthSliderBox').slideUp(500);
            $('#rpmSliderBox').slideDown(500);
            $('#wheelRadiusBox').slideDown(500);
            $('#units').slideDown(500);
            coeff = 2;
        }

        if($(event.target).is('#button3')) {
           $('.radio').removeClass('selected');
            $(this).addClass('selected');
            $('#crankLengthSliderBox').slideDown(500);
            $('#rpmSliderBox').slideUp(500);
            $('#wheelRadiusBox').slideDown(500);
            $('#units').slideUp(500);
            coeff = 3;
        }
    });

    var units = "kph";

    $(".radio2").click(function(event) {
        if($(event.target).is('#kph')) {
            $('.radio2').removeClass('selected');
            $(this).addClass('selected');
            units = "kph";
        }
        if($(event.target).is('#mph')) {
            $('.radio2').removeClass('selected');
            $(this).addClass('selected');
            units = "mph";
        }
    });

    $('input').change(function() {
        if (frontCheck()) {
            console.log("front ok");
            $('#frontGearInputContainer input').css("border", "1px solid #ccc");
        }
        if (rearCheck()) {
            $('#rearGearInputContainer input').css("border", "1px solid #ccc");
        }
    });

    // SLIDERS \\

    var crankLength = 160;

    $(function() {
        $( "#crankLengthSlider" ).slider({
            range: "min",
            value: 160,
            step: 0.5,
            min: 150,
            max: 200,
            slide: function( event, ui ) {
                $( "#crankLength" ).val( ui.value + "mm" );
                crankLength = ui.value;
            }
        });
        $( "#crankLength" ).val($( "#crankLengthSlider" ).slider( "value" ) + "mm" );
    });

    var rpm = 100;

    $(function() {
        $( "#rpmSlider" ).slider({
            range: "min",
            value: rpm,
            step: 1,
            min: 50,
            max: 200,
            slide: function( event, ui ) {
                $( "#rpm" ).val( ui.value + " rpm" );
                rpm = ui.value;
            }
        });
        $( "#rpm" ).val($( "#rpmSlider" ).slider( "value" ) + " rpm" );
    });

    // INTERFACING BETWEEN HTML INPUTS/OUTPUTS AND THE CALCULATION \\

    // Variables 

    var data = [0,1,2], data1 = [3,4,5], data2 = [6,7,8];
    var oldData = data, oldData1 = data1, oldData2 = data2; // will update after lines drawn, so that objects can be redrawn in old postn before transition

    var tempFronts = [];

    $( "#calculateThis" ).click(function(){
        if (frontCheck() && rearCheck() && coeff != 0) {
            if ($('#introMessage').length) {
                $('#introMessage').fadeTo(100,0, function() {
                    $(this).remove();
                    $('#resultsStack').fadeTo(300,0.9);
                });
            }
            else {
                $('#resultsStack').fadeTo(300,0.9);
            }
            var frontGears = [];                           // creates empty arrays for final front and back gears
            var rearGears = [];
            var front = [];                                // creates empty array to fill with values from inputs
            var tempFront0 = $("#front1").val();                 // inserts values from inputs into array
            var tempFront1 = $("#front2").val();
            var tempFront2 = $("#front3").val();
            tempFronts = [tempFront2, tempFront1, tempFront0];
            console.log(tempFronts);
            tempFronts.sort(function(a,b) {return (a-b)});
            if (!tempFronts[0]) {tempFronts.push(tempFronts.shift());}      // later we'll need the zero elements at the end of the array
            if (!tempFronts[0]) {tempFronts.push(tempFronts.shift());}
            console.log(tempFronts);
            front[0] = tempFronts[0];
            front[1] = tempFronts[1];
            front[2] = tempFronts[2];
            var rear = [];                                 // same process for rear gears
            rear[0] = $("#rear1").val();
            rear[1] = $("#rear2").val();
            rear[2] = $("#rear3").val();
            rear[3] = $("#rear4").val();
            rear[4] = $("#rear5").val();
            rear[5] = $("#rear6").val();
            rear[6] = $("#rear7").val();
            rear[7] = $("#rear8").val();
            rear[8] = $("#rear9").val();
            rear[9] = $("#rear10").val();
            rear[10] = $("#rear11").val();
            rear[11] = $("#rear12").val();
            for (i=0; i<front.length; i++){                // puts non-zero values from front into frontGears
                if(front[i] > 0){                          
                    frontGears.push(front[i]);
                }
            }
            for (i=0; i<rear.length; i++){                // repeat for rearGears
                if(rear[i] > 0){
                    rearGears.push(rear[i]);
                }
            }
            var result = fullCalc(frontGears,rearGears);  // calls fullCalc for ratios of frontGears and rearGears
            $("#result").html(result);                    // updates the html
            var ratios = result;                          // takes calculated ratios and uses them for tableCreate
            var resultsTable = tableCreate(frontGears,rearGears,ratios); // calls tableCreate
            updateGraph(ratios, rearGears);
        }
        else {
            if (!rearCheck()) {
                $('#rearGearInputContainer input').css("border", "1px solid #FF6666");
            }
            if (!frontCheck()) {
                $('#frontGearInputContainer input').css("border", "1px solid #FF6666");
            }
            if (coeff == 0) {
                $('.radio').css("border", "1px solid #FF6666");
            }
        }
    });

    // CALCULATIONS \\
    $(function() {    
        $('#wheelType').change(function(){
            $('.tyre').hide();
            $('#wheel' + $(this).val()).show();
        });
    });
    
    
    function fullCalc(a,b) {                                  // a = front, b = back
        var rim = $('#wheelType').val();
        var wheelType = document.getElementById("wheel"+rim);
        var wheelRadius = wheelType.options[wheelType.selectedIndex].value/2;
        var convFac;
        if (units=="kph") {
            convFac = 3.6;
        }
        if (units=="mph") {
            convFac = 2.2369;
        }
        var ratios = new Array (a.length);                    // creates new array with length front
        for (i=0; i<a.length; i++) {                      // loops through all front chainrings
            ratios[i] = new Array(b.length);                 // creates array of length rear inside front[i]
            for (j=0; j<b.length; j++) {                 // loops over length of rear
                switch (coeff) {
                    case 1:                              // calculate gear ratio
                        var calc = a[i]/b[j];
                        break;
                    case 2:                              // calculate velocity
                        calc = (rpm/60)*(a[i]/b[j])*2*Math.PI*wheelRadius*convFac;
                        break;
                    case 3:                              // calculate gain ratio
                        calc = (wheelRadius*a[i])/((crankLength/1000)*b[j]);
                        break;
                }
                calc = sigFigs(calc, 3);                 // 3sf
                var z = isNaN(calc);
                if (z === true){                              // checks for NaN, infinity or 0 values
                    ratios[i][j] = " ";                       // replaces with " " if found
                }
                else if (calc === Infinity){
                    ratios[i][j] = " ";
                }
                else if (calc === 0){
                    ratios[i][j] = " ";
                }
                else{
                    ratios[i][j]=calc; 
                }                                       // inserts rounded answer into 2D array
            }
        }
        return ratios;
    }

    function sigFigs(n, sig) {
        var mult = Math.pow(10, sig - Math.floor(Math.log(n) / Math.LN10) - 1);
        return Math.round(n * mult) / mult;
    }

    function tableCreate(a, b, c) {    
        $(".result1").eq(0).fadeOut('fast');    //NEW
        var tbl = document.createElement('table');         // creates variable for table
        var tbdy = document.createElement('tbody');        // creates variable for body of table
        tbl.style.width = '100%';                          // sets width
        tbl.setAttribute('border', '0');                   // sets border
        //tbl.setAttribute("id", "result1");                 // sets id to "result1"

        for (var i = 0; i < a.length + 1; i++) {           // creates number of rows length frontGears +1
            var tr = document.createElement('tr');
            tr.setAttribute('id', "tablerow" + i);
            for (var j = 0; j < b.length + 1; j++) {       // creates number of columns length rearGears +1
                var td = document.createElement('td');
                if (i >= 1 && j === 0) {
                    var frontText = document.createTextNode(a[i-1]); // determines and inserts correct element
                    td.appendChild(frontText);
                    var frontId = "fronttable"+i;
                    td.setAttribute('id', frontId);                  // sets unique id for rows, ratios etc.
                } else if (i === 0 && j >= 1) {
                    var rearText = document.createTextNode(b[j-1]);
                    td.appendChild(rearText);
                    td.setAttribute('id', "reartable");
                }
                    else if ( i === 0 && j ===0){
                    var gearText = document.createTextNode("Gears");
                    td.appendChild(gearText);
                    td.setAttribute('id', "geartable");
                } else {
                    var ratioText = document.createTextNode(c[i-1][j-1]);
                    td.appendChild(ratioText);
                    var ratioClass = "ratiotable"+i;
                    td.setAttribute('class', ratioClass);
                    td.setAttribute("onmouseover", "darken("+i+","+j+")");
                    td.setAttribute("onmouseout", "lighten("+i+","+j+")");   
                }
                tr.appendChild(td);                                  // puts table together
            }
            tbdy.appendChild(tr);
        }
        
        tbl.appendChild(tbdy);
        $(".result1").eq(0).hide().html(tbl).fadeIn('slow');   //CHANGE            // replaces result1 with new table
    }
    //End copy & paste from George's version

    // D3 CHART DISPLAY STUFF \\

    // CREATING THE FIRST CHART \\

    var chartContW = 380,    // container width
        chartContH = 265;    // container height
    var xOff = 42,  // x offset
        yOff = 40;  // y offset
    var w = chartContW-xOff;    // chart width
    var h = chartContH-yOff;    // chart height
    var rect1Width = 0.8;    // width scaling factors for different bars in bar chart
    var rect2Width = 0.9;
    var rect3Width = 1;

    var y = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([h, 0]);        

    var x = d3.scale.linear()        // comes into play when we have dynamic x-scaling
        .domain([0, data.length])
        .range([0, w]);

    var svg = d3.select('svg').append("g")
        .attr("transform", "translate("+xOff+","+yOff+")");


    svg.append("text")
        .attr("class", "chainrings")
        .attr("x", 10)
        .attr("y", -15)
        .text("Chainrings:");

    svg.append("text")
        .attr("class", "keyText")
        .attr("x", 101)
        .attr("y", -15)
        .text("");
    svg.append("text")
        .attr("class", "keyText")
        .attr("x", 180)
        .attr("y", -15)
        .text("");
    svg.append("text")
        .attr("class", "keyText")
        .attr("x", 260)
        .attr("y", -15)
        .text("");

    svg.selectAll(".yAxisLabel")
        .data([""])
        .enter().append("text")
            .attr("class", "yAxisLabel")
            .attr("x", 0)
            .attr("y", h/2)
            .attr("text-anchor", "middle")
            .attr("font-size", "0.9em")
            .attr("transform", "rotate(-90 -15,"+(15+h/2)+")")
            .text(String);    

    // UPDATING THE CHART\\

    var oldSpacing, spacing;    // for use in the HMTicks function to figure out whether there's been a spacing change

    //$("input").change(function() {
    updateGraph = function(ratios, rGs) {   
        data = ratios[0];               //updating the data array
        data1 = ratios[1];
        data2 = ratios[2];
        var maxima = [Math.max.apply(Math, data), Math.max.apply(Math, data1), Math.max.apply(Math, data2)];
        var max = Math.max.apply(Math, maxima);
        var oldMaxima = [Math.max.apply(Math, oldData), Math.max.apply(Math, oldData1), Math.max.apply(Math, oldData2)];
        var oldMax = Math.max.apply(Math, oldMaxima);
        
        y = d3.scale.linear()               //updating the chart scaling function
            .domain([0, max])
            .range([h, 0]);
        
        var yOld = d3.scale.linear()        //keep a log of the old scaling function for drawing stuff before transitions
        .domain([0, oldMax])
        .range([h, 0]); 

        //updating y axis label
        var labels = ["Gear Ratio", "Velocity", "Gain Ratio"];
        var chosen = labels[coeff-1];
        if (chosen=="Velocity") {chosen = chosen + " (" + units + ")";}
        svg.selectAll(".yAxisLabel")
            .data([chosen])
                .text(String);
        switch (coeff) {
            case 1: 
                $('.resultsTitle').eq(0).html(chosen);
                break;
            case 2:
                $('.resultsTitle').eq(0).html(chosen + " @ " + rpm + " rpm");
                break;
            case 3:
                $('.resultsTitle').eq(0).html(chosen + ", " + crankLength + "mm Cranks");
                break;
        }

        //updating x axis label
        svg.selectAll(".xAxisLabel")
            .data(["Rear sprocket (no. teeth)"])
            .enter().append("text")
                .attr("class", "xAxisLabel")
                .attr("x", w/2)
                .attr("y", h)
                .attr("dy", 33)
                .attr("text-anchor", "middle")
                .attr("font-size", "0.9em")
                .text(String);
        
        //updating the y scale (lines & ".rule" ticks)
        var HMTicksOutput = HMTicks(10, max);
        var tickArray = HMTicksOutput.tickY;
        var log = HMTicksOutput.log;        // tells us whether the tick spacing has changed
        var ySpacing = HMTicksOutput.spacing;
        
        switch(log) {
            case 0:                                       // no change in spacing
                svg.selectAll("line").data(tickArray)            // LINES
                    .enter().append("line")
                        .attr("x1", 0)
                        .attr("x2", w)
                        .attr("y1", function(d) {return (yOld(d));})
                        .attr("y2", function(d) {return (yOld(d));})
                        .style("stroke", "white");
                svg.selectAll("line").data(tickArray)
                    .exit().remove();
                svg.selectAll("line")
                    .transition()
                        .duration(1000)
                        .attr("y1", function(d) {return (y(d));})
                        .attr("y2", function(d) {return (y(d));});

                svg.selectAll(".rule").data(tickArray)            // TICKS
                    .enter().append("text")
                        .attr("class", "rule")
                        .attr("y", function(d) {return (yOld(d));})
                        .attr("x", 0)
                        .attr("dx", -13)    
                        .attr("dy", 5)
                        .attr("text-anchor", "middle")
                        .attr("font-size", "0.8em")
                        .text(String);
                svg.selectAll(".rule").data(tickArray)
                    .exit().remove();
                svg.selectAll(".rule")
                    .transition()
                        .duration(1000)
                        .attr("y", function(d,i) {return (y(d));})
                        .text(String);             
            break;
            default:                                    // the spacing changed
                svg.selectAll("line").remove();                    // LINES
                svg.selectAll("line").data(tickArray)
                    .enter().append("line")                            // all new lines made on old scale
                        .attr("x1", 0)
                        .attr("x2", w)
                        .attr("y1", function(d) {return (yOld(d));})
                        .attr("y2", function(d) {return (yOld(d));})
                        .style("stroke", "#ccc")
                      .transition()
                        .duration(1000)
                        .attr("y1", function(d) {return (y(d));})
                        .attr("y2", function(d) {return (y(d));});
                
                svg.selectAll(".rule").remove();                   // TICKS
                svg.selectAll(".rule").data(tickArray)
                    .enter().append("text")
                        .attr("class", "rule")
                        .attr("y", function(d) {return (yOld(d));})
                        .attr("x", 0)
                        .attr("dx", -13)    
                        .attr("dy", 5)
                        .attr("text-anchor", "middle")
                        .attr("font-size", "0.8em")
                        .text(String)
                      .transition()
                        .duration(1000)
                        .attr("y", function(d) {return (y(d));})
                        .text(String);
        }
        

        //updating the chart's key
        if (tempFronts[0]) {
            var keyText1 = tempFronts[0].toString() + " teeth";
            svg.selectAll(".key1").data([tempFronts[0]])
                .enter().append("rect")
                    .attr("class", "key1")
                    .attr("x", 80)
                    .attr("y", -30)
                    .attr("height", 15)
                    .attr("width", 15);
        }
        else {
            var keyText1 = ""; 
            svg.selectAll(".key1").remove();
        }
        if (tempFronts[1]) {
            var keyText2 = tempFronts[1].toString() + " teeth";
            svg.selectAll(".key2").data([tempFronts[1]])
                .enter().append("rect")
                    .attr("class", "key2")
                    .attr("x", 160)
                    .attr("y", -30)
                    .attr("height", 15)
                    .attr("width", 15);
        } 
        else {
            var keyText2 = "";
            svg.selectAll(".key2").remove();
        }
        if (tempFronts[2]) {
            var keyText3 = tempFronts[2].toString() + " teeth";
            svg.selectAll(".key3").data([tempFronts[2]])
                .enter().append("rect")
                    .attr("class", "key3")
                    .attr("x", 240)
                    .attr("y", -30)
                    .attr("height", 15)
                    .attr("width", 15);
        }
        else {
            var keyText3 = "";
            svg.selectAll(".key3").remove();
        }
        var keyTexts = [keyText1, keyText2, keyText3];
        svg.selectAll(".keyText").data(keyTexts)
            .text(String);

        //updating the data bars FRONTGEAR3
        svg.selectAll(".rect3").remove();
        if (ratios[2]) {
            svg.selectAll(".rect3").data(oldData2)
                .enter().append("rect")
                    .attr("class", "rect3")
                    .attr("y", function(d, i) {return (h-yOld(oldMax-d));})     //weird maths changes orientation
                    .attr("height", function(d, i) {return (yOld(oldMax-d));})  //weird maths changes orientation
                    .attr("width", rect3Width*w/oldData.length)
                    .attr("x", function(d, i) {return (((1-rect3Width)/2)*w/(oldData.length)+(i*w/oldData.length));})
                    .attr("onmouseover", function(d,i) {return "darken('.rect3',"+i+")";})
                    .attr("onmouseout", function(d,i) {return "lighten('.rect3',"+i+")";});
            svg.selectAll(".rect3").data(data2)
              .exit().remove();
            svg.selectAll(".rect3").data(data2)
                .enter().append("rect")
                    .attr("class", "rect3")
                    .attr("y", function(d, i) {return (h-yOld(oldMax-d));})     //weird maths changes orientation
                    .attr("height", function(d, i) {return (yOld(oldMax-d));})  //weird maths changes orientation
                    .attr("width", rect3Width*w/oldData.length)
                    .attr("x", function(d, i) {return (((1-rect3Width)/2)*w/(oldData.length)+(i*w/oldData.length));})
                    .attr("onmouseover", function(d,i) {return "darken('.rect3',"+i+")";})
                    .attr("onmouseout", function(d,i) {return "lighten('.rect3',"+i+")";});
            svg.selectAll(".rect3").data(data2)
              .transition()
                .duration(1000)
                .attr("y", function(d, i) {return (h-y(max-d));})
                .attr("x", function(d, i) {return (((1-rect3Width)/2)*w/(data.length)+(i*w/data.length));})
                .attr("width", rect3Width*w/data.length)
                .attr("height", function(d, i) {return (y(max-d));});
        }
        
        //updating the bar text value FRONTGEAR3
        svg.selectAll(".barText3").remove();
        if (ratios[2]) {
            svg.selectAll(".barText3").data(oldData2)
              .enter().append("text")
                .attr("class", "barText3")
                .attr("x", function(d,i) {return (i*w/oldData.length);})
                .attr("y", function(d,i) {return (yOld(d));})
                .attr("dy", 14)
                .attr("dx", w/(2*oldData.length))
                .attr("text-anchor", "middle")
                .attr("fill", "steelblue")
                .attr("font-size", "0.8em")
                .attr("onmouseover", function(d,i) {return "darken('.rect3',"+i+")";})
                .attr("onmouseout", function(d,i) {return "lighten('.rect3',"+i+")";})        
                .text(String);
            svg.selectAll(".barText3").data(data2)
              .exit().remove();
            svg.selectAll(".barText3").data(data2)
              .enter().append("text")
                .attr("class", "barText3")
                .attr("x", function(d,i) {return (i*w/oldData.length);})
                .attr("y", function(d,i) {return (yOld(d));})
                .attr("dy", 14)
                .attr("dx", w/(2*oldData.length))
                .attr("text-anchor", "middle")
                .attr("fill", "steelblue")
                .attr("font-size", "0.8em")
                .attr("onmouseover", function(d,i) {return "darken('.rect3',"+i+")";})
                .attr("onmouseout", function(d,i) {return "lighten('.rect3',"+i+")";})        
                .text(String);
            svg.selectAll(".barText3").data(data2)
              .transition()
                .duration(1000)
                .attr("x", function(d,i) {return (i*w/data.length);})
                .attr("y", function(d,i) {return (y(d));})
                .attr("dx", w/(2*data.length))
                .text(String);
        }
      
        //updating the data bars FRONTGEAR2
        svg.selectAll(".rect2").remove();
        if (ratios[1]) {
            svg.selectAll(".rect2").data(oldData1)
                .enter().append("rect")
                    .attr("class", "rect2")
                    .attr("y", function(d, i) {return (h-yOld(oldMax-d));})     //weird maths changes orientation
                    .attr("height", function(d, i) {return (yOld(oldMax-d));})  //weird maths changes orientation
                    .attr("width", rect2Width*w/oldData.length)
                    .attr("x", function(d, i) {return (((1-rect2Width)/2)*w/(oldData.length)+(i*w/oldData.length));})
                    .attr("onmouseover", function(d,i) {return "darken('.rect2',"+i+")";})
                    .attr("onmouseout", function(d,i) {return "lighten('.rect2',"+i+")";});
            svg.selectAll(".rect2").data(data1)
              .exit().remove();
            svg.selectAll(".rect2").data(data1)
                .enter().append("rect")
                    .attr("class", "rect2")
                    .attr("y", function(d, i) {return (h-yOld(oldMax-d));})     //weird maths changes orientation
                    .attr("height", function(d, i) {return (yOld(oldMax-d));})  //weird maths changes orientation
                    .attr("width", rect2Width*w/oldData.length)
                    .attr("x", function(d, i) {return (((1-rect2Width)/2)*w/(oldData.length)+(i*w/oldData.length));})
                    .attr("onmouseover", function(d,i) {return "darken('.rect2',"+i+")";})
                    .attr("onmouseout", function(d,i) {return "lighten('.rect2',"+i+")";});
            svg.selectAll(".rect2").data(data1)
              .transition()
                .duration(1000)
                .attr("y", function(d, i) {return (h-y(max-d));})
                .attr("x", function(d, i) {return (((1-rect2Width)/2)*w/(data.length)+(i*w/data.length));})
                .attr("width", rect2Width*w/data.length)
                .attr("height", function(d, i) {return (y(max-d));});
        }

        //updating the bar text value FRONTGEAR2
        svg.selectAll(".barText2").remove();
        if (ratios[1]) {
            svg.selectAll(".barText2").data(oldData1)
              .enter().append("text")
                .attr("class", "barText2")
                .attr("x", function(d,i) {return (i*w/oldData.length);})
                .attr("y", function(d,i) {return (yOld(d));})
                .attr("dy", 14)
                .attr("dx", w/(2*oldData.length))
                .attr("text-anchor", "middle")
                .attr("fill", "white")
                .attr("font-size", "0.8em")
                .attr("onmouseover", function(d,i) {return "darken('.rect2',"+i+")";})
                .attr("onmouseout", function(d,i) {return "lighten('.rect2',"+i+")";})
                .text(String);
            svg.selectAll(".barText2").data(data1)
              .exit().remove();
            svg.selectAll(".barText2").data(data1)
              .enter().append("text")
                .attr("class", "barText2")
                .attr("x", function(d,i) {return (i*w/oldData.length);})
                .attr("y", function(d,i) {return (yOld(d));})
                .attr("dy", 14)
                .attr("dx", w/(2*oldData.length))
                .attr("text-anchor", "middle")
                .attr("fill", "white")
                .attr("font-size", "0.8em")
                .attr("onmouseover", function(d,i) {return "darken('.rect2',"+i+")";})
                .attr("onmouseout", function(d,i) {return "lighten('.rect2',"+i+")";})
                .text(String);
            svg.selectAll(".barText2").data(data1)
              .transition()
                .duration(1000)
                .attr("x", function(d,i) {return (i*w/data.length);})
                .attr("y", function(d,i) {return (y(d));})
                .attr("dx", w/(2*data.length))
                .text(String);
        }
       
        //updating the data bars FRONTGEAR1
        svg.selectAll(".rect1").remove();
        svg.selectAll(".rect1").data(oldData)
            .enter().append("rect")
                .attr("class", "rect1")
                .attr("y", function(d, i) {return (h-yOld(oldMax-d));})     //weird maths changes orientation
                .attr("height", function(d, i) {return (yOld(oldMax-d));})  //weird maths changes orientation
                .attr("width", rect1Width*w/oldData.length)
                .attr("x", function(d, i) {return (((1-rect1Width)/2)*w/(oldData.length)+(i*w/oldData.length));})
                .attr("onmouseover", function(d,i) {return "darken('.rect1',"+i+")";})
                .attr("onmouseout", function(d,i) {return "lighten('.rect1',"+i+")";});
        svg.selectAll(".rect1").data(data)
          .exit().remove();
        svg.selectAll(".rect1").data(data)
            .enter().append("rect")
                .attr("class", "rect1")
                .attr("y", function(d, i) {return (h-yOld(oldMax-d));})     //weird maths changes orientation
                .attr("height", function(d, i) {return (yOld(oldMax-d));})  //weird maths changes orientation
                .attr("width", rect1Width*w/oldData.length)
                .attr("onmouseover", function(d,i) {return "darken('.rect1',"+i+")";})
                .attr("onmouseout", function(d,i) {return "lighten('.rect1',"+i+")";})
                .attr("x", function(d, i) {return (((1-rect1Width)/2)*w/(oldData.length)+(i*w/oldData.length));});
        svg.selectAll(".rect1").data(data)
          .transition()
            .duration(1000)
            .attr("y", function(d, i) {return (h-y(max-d));})
            .attr("x", function(d, i) {return (((1-rect1Width)/2)*w/(data.length)+(i*w/data.length));})
            .attr("width", rect1Width*w/data.length)
            .attr("height", function(d, i) {return (y(max-d));});

        
        //updating the bar text value FRONTGEAR1
        svg.selectAll(".barText1").remove();
        svg.selectAll(".barText1").data(oldData)
          .enter().append("text")
            .attr("class", "barText1")
            .attr("x", function(d,i) {return (i*w/oldData.length);})
            .attr("y", function(d,i) {return (yOld(d));})
            .attr("dy", 14)
            .attr("dx", w/(2*oldData.length))
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .attr("font-size", "0.8em")
            .attr("onmouseover", function(d,i) {return "darken('.rect1',"+i+")";})
            .attr("onmouseout", function(d,i) {return "lighten('.rect1',"+i+")";})
            .text(String);
        svg.selectAll(".barText1").data(data)
          .exit().remove();
        svg.selectAll(".barText1").data(data)
          .enter().append("text")
            .attr("class", "barText1")
            .attr("x", function(d,i) {return (i*w/oldData.length);})
            .attr("y", function(d,i) {return (yOld(d));})
            .attr("dy", 14)
            .attr("dx", w/(2*oldData.length))
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .attr("font-size", "0.8em")
            .attr("onmouseover", function(d,i) {return "darken('.rect1',"+i+")";})
            .attr("onmouseout", function(d,i) {return "lighten('.rect1',"+i+")";})    
            .text(String);
        svg.selectAll(".barText1").data(data)
          .transition()
            .duration(1000)
            .attr("x", function(d,i) {return (i*w/data.length);})
            .attr("y", function(d,i) {return (y(d));})
            .attr("dx", w/(2*data.length))
            .text(String);

        //updating the X-axis label
        svg.selectAll(".rearGear").remove();
        if (rGs.length<5) {
            svg.selectAll(".rearGear").data(rGs)
            .enter().append("text")
                .attr("class", "rearGear")
                .attr("x", function(d,i) {return (i*w/oldData.length);})
                .attr("y", h)
                .attr("dy", 14)
                .attr("dx", w/(2*oldData.length))
                .attr("text-anchor", "middle")
                .attr("font-size", "0.8em")
                .text(function(d,i) {return (d+ " teeth");});
        }
        else {
            svg.selectAll(".rearGear").data(rGs)
            .enter().append("text")
                .attr("class", "rearGear")
                .attr("x", function(d,i) {return (i*w/oldData.length);})
                .attr("y", h)
                .attr("dy", 14)
                .attr("dx", w/(2*oldData.length))
                .attr("text-anchor", "middle")
                .attr("font-size", "0.8em")
                .text(function(d,i) {return (d);});
        }
        svg.selectAll(".rearGear").data(data)
          .transition()
            .duration(1000)
            .attr("x", function(d,i) {return (i*w/data.length);})
            .attr("dx", w/(2*data.length));
        
        oldData = data;
        if (ratios[1]) {oldData1 = data1;}
        else {
            oldData1 = [];
            for (i=0; i<data.length+1; i++) {
                oldData1.push(0);
            }
        }
        if (ratios[2]) {oldData2 = data2;}
        else {
            oldData2 = [];
            for (i=0; i<data.length+1; i++) {
                oldData2.push(0);
            }
        }
    };

    function HMTicks(numTicks, dRange) {        //HomeMade ticks (No. ticks, data range), makes array of y positions of ticks
        var allowedSpacings = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50];
        var spacingOptions = Array();
        var output = {
            tickY: Array(),    //array of all tick y values
            log: 0,            //log of whether a scaling change just occured, and whether it was an increase or decrease
            spacing: 0         //current y tick spacing
        };
        for (i=0; i<allowedSpacings.length; i++) {
            if ((dRange/allowedSpacings[i])>=(numTicks/3) && (dRange/allowedSpacings[i])<=(numTicks)) {
                spacingOptions.push(allowedSpacings[i]);
            }
        }
        output.spacing = Math.min.apply(null,spacingOptions);        // now we've selected the tick spacing we want
        if (output.spacing != oldSpacing) {    //spacing changed
            if (output.spacing<oldSpacing) {output.log = -1;}
            if (output.spacing>oldSpacing) {output.log = 1;}
        }

        oldSpacing = output.spacing;
        
        for (i=0; i*output.spacing<=dRange; i++) {
            output.tickY.push(Math.round(100*i*output.spacing)/100);
        }                             // now we've got an array with all the y values to draw ticks & gridlines at
        return (output);
    }


    // HOVER EFFECT ACROSS TABLE AND CHART \\

    lighten = function(element, index) {
        switch(element) {
            case ".rect1":
                document.getElementsByClassName("rect1")[index].style.fill="#7EA8CA";
                document.getElementsByClassName("ratiotable1")[index].style.backgroundColor="#7EA8CA";
            break;
            case ".rect2":
                document.getElementsByClassName("rect2")[index].style.fill="#A7D9F1";
                document.getElementsByClassName("ratiotable2")[index].style.backgroundColor="#A7D9F1";
            break;
            case ".rect3":
                document.getElementsByClassName("rect3")[index].style.fill="white";
                document.getElementsByClassName("ratiotable3")[index].style.backgroundColor="white";
            break;
            default:         // i.e. if element is a number i.e. if you are hovering over the table not the chart
                switch(element) {
                    case 1:
                        document.getElementsByClassName("rect1")[index-1].style.fill="#7EA8CA";
                        document.getElementsByClassName("ratiotable1")[index-1].style.backgroundColor="#7EA8CA";
                    break;
                    case 2:
                        document.getElementsByClassName("rect2")[index-1].style.fill="#A7D9F1";
                        document.getElementsByClassName("ratiotable2")[index-1].style.backgroundColor="#A7D9F1";
                    break;
                    case 3:
                        document.getElementsByClassName("rect3")[index-1].style.fill="white";
                        document.getElementsByClassName("ratiotable3")[index-1].style.backgroundColor="white";
                    break;
                }
        }
    };

    darken = function(element, index) {
        switch(element) {
            case ".rect1":
                document.getElementsByClassName("rect1")[index].style.fill="steelblue";
                document.getElementsByClassName("ratiotable1")[index].style.backgroundColor="steelblue";
            break;
            case ".rect2":
                document.getElementsByClassName("rect2")[index].style.fill="#6CBFE8";
                document.getElementsByClassName("ratiotable2")[index].style.backgroundColor="#6CBFE8";
            break;
            case ".rect3":
                document.getElementsByClassName("rect3")[index].style.fill="#DFF4FF";
                document.getElementsByClassName("ratiotable3")[index].style.backgroundColor="#DFF4FF";
            break;
            default:         // i.e. if element is a number i.e. if you are hovering over the table not the chart
                switch(element) {
                    case 1:
                        document.getElementsByClassName("rect1")[index-1].style.fill="steelblue";
                        document.getElementsByClassName("ratiotable1")[index-1].style.backgroundColor="steelblue";
                    break;
                    case 2:
                        document.getElementsByClassName("rect2")[index-1].style.fill="#6CBFE8";
                        document.getElementsByClassName("ratiotable2")[index-1].style.backgroundColor="#6CBFE8";
                    break;
                    case 3:
                        document.getElementsByClassName("rect3")[index-1].style.fill="#DFF4FF";
                        document.getElementsByClassName("ratiotable3")[index-1].style.backgroundColor="#DFF4FF";
                    break;
                }
        }
    };

    //SAVING, AND DELETING SAVES\\

    $("#save").click(function(){
        $('#resultsStack').clone()
            .css("opacity", "0")
            .attr("class", "stack")
            .attr("id", "newStack")
            .insertAfter('#resultsStack');
        $('#newStack').find("rect").removeAttr("onmouseover");
        $('#newStack').find("text").removeAttr("onmouseover");
        $('#newStack').find("td").removeAttr("onmouseover");
        $('#newStack').find("h3").after("<span class='fa fa-times fa-lg'></span>");
        $('#newStack').fadeTo(300, 0.65, function() {
            $('#newStack').animate({marginLeft: 7}, 1000, function() {
                 $('#newStack').removeAttr("id");
            });
        });
    });

    $("#stacks").on("click", ".fa-times", function(){
        console.log("clicked");
        console.log($(this).parents(".stack"));
        $(this).parents(".stack").fadeTo(300, 0, function() {
            $(this).animate({marginLeft: "-416px"}, function() {
                $(this).remove();
            })
        });
    });
};

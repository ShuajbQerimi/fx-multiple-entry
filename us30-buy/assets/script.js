$('input').keyup(function(){ // run anytime the value changes
    var balance  = Number($('#balance').val());
    var us30riskinpercentage  = Number($('#us30riskinpercentage').val());
    var us30profitinpercentage  = Number($('#us30profitinpercentage').val());
    var us30totallosing  = Number($('#us30totallosing').val());
    var us30totalprofit  = Number($('#us30totalprofit').val());
    var us30totallotsize  = Number($('#us30totallotsize').val());

    // AUD USD BUY
    var us30entry1  = Number($('#us30entry1').val());
    var us30stoploss1  = Number($('#us30stoploss1').val());
    var us30takeprofit1  = Number($('#us30takeprofit1').val());
    var us30lotsize1  = Number($('#us30lotsize1').val());

    var us30entry2  = Number($('#us30entry2').val());
    var us30stoploss2  = Number($('#us30stoploss2').val());
    var us30takeprofit2  = Number($('#us30takeprofit2').val());
    var us30lotsize2  = Number($('#us30lotsize2').val());

    var us30entry3  = Number($('#us30entry3').val());
    var us30stoploss3  = Number($('#us30stoploss3').val());
    var us30takeprofit3  = Number($('#us30takeprofit3').val());
    var us30lotsize3  = Number($('#us30lotsize3').val());

    var us30entry4  = Number($('#us30entry4').val());
    var us30stoploss4  = Number($('#us30stoploss4').val());
    var us30takeprofit4  = Number($('#us30takeprofit4').val());
    var us30lotsize4  = Number($('#us30lotsize4').val());

    var us30entry5  = Number($('#us30entry5').val());
    var us30stoploss5  = Number($('#us30stoploss5').val());
    var us30takeprofit5  = Number($('#us30takeprofit5').val());
    var us30lotsize5  = Number($('#us30lotsize5').val());

    us30entry1 = us30entry1 * 10;
    us30entry2 = us30entry2 * 10;
    us30entry3 = us30entry3 * 10;
    us30entry4 = us30entry4 * 10;
    us30entry5 = us30entry5 * 10;

    us30stoploss1 = us30stoploss1 * 10;
    us30stoploss2 = us30stoploss2 * 10;
    us30stoploss3 = us30stoploss3 * 10;
    us30stoploss4 = us30stoploss4 * 10;
    us30stoploss5 = us30stoploss5 * 10;

    us30takeprofit1 = us30takeprofit1 * 10;
    us30takeprofit2 = us30takeprofit2 * 10;
    us30takeprofit3 = us30takeprofit3 * 10;
    us30takeprofit4 = us30takeprofit4 * 10;
    us30takeprofit5 = us30takeprofit5 * 10;

    us30lotsize1 = us30lotsize1 * 10;
    us30lotsize2 = us30lotsize2 * 10;
    us30lotsize3 = us30lotsize3 * 10;
    us30lotsize4 = us30lotsize4 * 10;
    us30lotsize5 = us30lotsize5 * 10;

    var us30entry = us30entry1 + us30entry2 + us30entry3 +us30entry4 +us30entry5;
    var us30stoploss = us30stoploss1 + us30stoploss2 + us30stoploss3 + us30stoploss5 + us30stoploss5;
    var us30takeprofit = us30takeprofit1 + us30takeprofit2 + us30takeprofit3 + us30takeprofit4 + us30takeprofit5;
    var us30lotsize =us30lotsize1 + us30lotsize2 + us30lotsize3 + us30lotsize4 + us30lotsize5;




    var us30stoplosstotal= (us30entry - us30stoploss) * us30lotsize1;
    us30stoplosstotal = us30stoplosstotal/100;

    var us30takeprofittotal= (us30takeprofit - us30entry) * us30lotsize;
    us30takeprofittotal = us30takeprofittotal/100;

    us30lotsize = us30lotsize/100;

    
    us30riskinpercentage= (us30stoplosstotal *100) / balance;
    us30profitinpercentage= (us30takeprofittotal *100) / balance;

    
    document.getElementById('us30riskinpercentage').value = "-" + us30riskinpercentage.toFixed(2) + "%";
    document.getElementById('us30profitinpercentage').value = "+" + us30profitinpercentage.toFixed(2) + "%";
    document.getElementById('us30totallosing').value = "-" + us30stoplosstotal.toFixed(2) + "$";
    document.getElementById('us30totalprofit').value = "+" + us30takeprofittotal.toFixed(2) + "$";
    document.getElementById('us30totallotsize').value =   us30lotsize.toFixed(2)  ;
// add them and output it
});
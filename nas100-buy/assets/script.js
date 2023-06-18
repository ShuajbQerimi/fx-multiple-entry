$('input').keyup(function(){ // run anytime the value changes
    var balance  = Number($('#balance').val());
    var nas100riskinpercentage  = Number($('#nas100riskinpercentage').val());
    var nas100profitinpercentage  = Number($('#nas100profitinpercentage').val());
    var nas100totallosing  = Number($('#nas100totallosing').val());
    var nas100totalprofit  = Number($('#nas100totalprofit').val());
    var nas100totallotsize  = Number($('#nas100totallotsize').val());

    // AUD USD BUY
    var nas100entry1  = Number($('#nas100entry1').val());
    var nas100stoploss1  = Number($('#nas100stoploss1').val());
    var nas100takeprofit1  = Number($('#nas100takeprofit1').val());
    var nas100lotsize1  = Number($('#nas100lotsize1').val());

    var nas100entry2  = Number($('#nas100entry2').val());
    var nas100stoploss2  = Number($('#nas100stoploss2').val());
    var nas100takeprofit2  = Number($('#nas100takeprofit2').val());
    var nas100lotsize2  = Number($('#nas100lotsize2').val());

    var nas100entry3  = Number($('#nas100entry3').val());
    var nas100stoploss3  = Number($('#nas100stoploss3').val());
    var nas100takeprofit3  = Number($('#nas100takeprofit3').val());
    var nas100lotsize3  = Number($('#nas100lotsize3').val());

    var nas100entry4  = Number($('#nas100entry4').val());
    var nas100stoploss4  = Number($('#nas100stoploss4').val());
    var nas100takeprofit4  = Number($('#nas100takeprofit4').val());
    var nas100lotsize4  = Number($('#nas100lotsize4').val());

    var nas100entry5  = Number($('#nas100entry5').val());
    var nas100stoploss5  = Number($('#nas100stoploss5').val());
    var nas100takeprofit5  = Number($('#nas100takeprofit5').val());
    var nas100lotsize5  = Number($('#nas100lotsize5').val());

    nas100entry1 = nas100entry1 * 10;
    nas100entry2 = nas100entry2 * 10;
    nas100entry3 = nas100entry3 * 10;
    nas100entry4 = nas100entry4 * 10;
    nas100entry5 = nas100entry5 * 10;

    nas100stoploss1 = nas100stoploss1 * 10;
    nas100stoploss2 = nas100stoploss2 * 10;
    nas100stoploss3 = nas100stoploss3 * 10;
    nas100stoploss4 = nas100stoploss4 * 10;
    nas100stoploss5 = nas100stoploss5 * 10;

    nas100takeprofit1 = nas100takeprofit1 * 10;
    nas100takeprofit2 = nas100takeprofit2 * 10;
    nas100takeprofit3 = nas100takeprofit3 * 10;
    nas100takeprofit4 = nas100takeprofit4 * 10;
    nas100takeprofit5 = nas100takeprofit5 * 10;

    nas100lotsize1 = nas100lotsize1 * 10;
    nas100lotsize2 = nas100lotsize2 * 10;
    nas100lotsize3 = nas100lotsize3 * 10;
    nas100lotsize4 = nas100lotsize4 * 10;
    nas100lotsize5 = nas100lotsize5 * 10;

    var nas100entry = nas100entry1 + nas100entry2 + nas100entry3 +nas100entry4 +nas100entry5;
    var nas100stoploss = nas100stoploss1 + nas100stoploss2 + nas100stoploss3 + nas100stoploss5 + nas100stoploss5;
    var nas100takeprofit = nas100takeprofit1 + nas100takeprofit2 + nas100takeprofit3 + nas100takeprofit4 + nas100takeprofit5;
    var nas100lotsize =nas100lotsize1 + nas100lotsize2 + nas100lotsize3 + nas100lotsize4 + nas100lotsize5;




    var nas100stoplosstotal= (nas100entry - nas100stoploss) * nas100lotsize;
    nas100stoplosstotal = nas100stoplosstotal/100;

    var nas100takeprofittotal= (nas100takeprofit - nas100entry) * nas100lotsize;
    nas100takeprofittotal = nas100takeprofittotal/100;

    nas100lotsize = nas100lotsize/100;

    
    nas100riskinpercentage= (nas100stoplosstotal *100) / balance;
    nas100profitinpercentage= (nas100takeprofittotal *100) / balance;

    
    document.getElementById('nas100riskinpercentage').value = "-" + nas100riskinpercentage.toFixed(2) + "%";
    document.getElementById('nas100profitinpercentage').value = "+" + nas100profitinpercentage.toFixed(2) + "%";
    document.getElementById('nas100totallosing').value = "-" + nas100stoplosstotal.toFixed(2) + "$";
    document.getElementById('nas100totalprofit').value = "+" + nas100takeprofittotal.toFixed(2) + "$";
    document.getElementById('nas100totallotsize').value =   nas100lotsize.toFixed(2)  ;
// add them and output it
});
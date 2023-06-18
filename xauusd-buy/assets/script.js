$('input').keyup(function(){ // run anytime the value changes
    var balance  = Number($('#balance').val());
    var xauusdriskinpercentage  = Number($('#xauusdriskinpercentage').val());
    var xauusdprofitinpercentage  = Number($('#xauusdprofitinpercentage').val());
    var xauusdtotallosing  = Number($('#xauusdtotallosing').val());
    var xauusdtotalprofit  = Number($('#xauusdtotalprofit').val());
    var xauusdtotallotsize  = Number($('#xauusdtotallotsize').val());

    // AUD USD BUY
    var xauusdentry1  = Number($('#xauusdentry1').val());
    var xauusdstoploss1  = Number($('#xauusdstoploss1').val());
    var xauusdtakeprofit1  = Number($('#xauusdtakeprofit1').val());
    var xauusdlotsize1  = Number($('#xauusdlotsize1').val());

    var xauusdentry2  = Number($('#xauusdentry2').val());
    var xauusdstoploss2  = Number($('#xauusdstoploss2').val());
    var xauusdtakeprofit2  = Number($('#xauusdtakeprofit2').val());
    var xauusdlotsize2  = Number($('#xauusdlotsize2').val());

    var xauusdentry3  = Number($('#xauusdentry3').val());
    var xauusdstoploss3  = Number($('#xauusdstoploss3').val());
    var xauusdtakeprofit3  = Number($('#xauusdtakeprofit3').val());
    var xauusdlotsize3  = Number($('#xauusdlotsize3').val());

    var xauusdentry4  = Number($('#xauusdentry4').val());
    var xauusdstoploss4  = Number($('#xauusdstoploss4').val());
    var xauusdtakeprofit4  = Number($('#xauusdtakeprofit4').val());
    var xauusdlotsize4  = Number($('#xauusdlotsize4').val());

    var xauusdentry5  = Number($('#xauusdentry5').val());
    var xauusdstoploss5  = Number($('#xauusdstoploss5').val());
    var xauusdtakeprofit5  = Number($('#xauusdtakeprofit5').val());
    var xauusdlotsize5  = Number($('#xauusdlotsize5').val());

    xauusdentry1 = xauusdentry1 * 100;
    xauusdentry2 = xauusdentry2 * 100;
    xauusdentry3 = xauusdentry3 * 100;
    xauusdentry4 = xauusdentry4 * 100;
    xauusdentry5 = xauusdentry5 * 100;

    xauusdstoploss1 = xauusdstoploss1 * 100;
    xauusdstoploss2 = xauusdstoploss2 * 100;
    xauusdstoploss3 = xauusdstoploss3 * 100;
    xauusdstoploss4 = xauusdstoploss4 * 100;
    xauusdstoploss5 = xauusdstoploss5 * 100;

    xauusdtakeprofit1 = xauusdtakeprofit1 * 100;
    xauusdtakeprofit2 = xauusdtakeprofit2 * 100;
    xauusdtakeprofit3 = xauusdtakeprofit3 * 100;
    xauusdtakeprofit4 = xauusdtakeprofit4 * 100;
    xauusdtakeprofit5 = xauusdtakeprofit5 * 100;

    xauusdlotsize1 = xauusdlotsize1 * 100;
    xauusdlotsize2 = xauusdlotsize2 * 100;
    xauusdlotsize3 = xauusdlotsize3 * 100;
    xauusdlotsize4 = xauusdlotsize4 * 100;
    xauusdlotsize5 = xauusdlotsize5 * 100;

    var xauusdentry = xauusdentry1 + xauusdentry2 + xauusdentry3 +xauusdentry4 +xauusdentry5;
    var xauusdstoploss = xauusdstoploss1 + xauusdstoploss2 + xauusdstoploss3 + xauusdstoploss5 + xauusdstoploss5;
    var xauusdtakeprofit = xauusdtakeprofit1 + xauusdtakeprofit2 + xauusdtakeprofit3 + xauusdtakeprofit4 + xauusdtakeprofit5;
    var xauusdlotsize =xauusdlotsize1 + xauusdlotsize2 + xauusdlotsize3 + xauusdlotsize4 + xauusdlotsize5;




    var xauusdstoplosstotal= (xauusdentry - xauusdstoploss) * xauusdlotsize1;
    xauusdstoplosstotal = xauusdstoplosstotal/100;

    var xauusdtakeprofittotal= (xauusdtakeprofit - xauusdentry) * xauusdlotsize;
    xauusdtakeprofittotal = xauusdtakeprofittotal/100;

    xauusdlotsize = xauusdlotsize/100;

    
    xauusdriskinpercentage= (xauusdstoplosstotal *100) / balance;
    xauusdprofitinpercentage= (xauusdtakeprofittotal *100) / balance;

    
    document.getElementById('xauusdriskinpercentage').value = "-" + xauusdriskinpercentage.toFixed(2) + "%";
    document.getElementById('xauusdprofitinpercentage').value = "+" + xauusdprofitinpercentage.toFixed(2) + "%";
    document.getElementById('xauusdtotallosing').value = "-" + xauusdstoplosstotal.toFixed(2) + "$";
    document.getElementById('xauusdtotalprofit').value = "+" + xauusdtakeprofittotal.toFixed(2) + "$";
    document.getElementById('xauusdtotallotsize').value =   xauusdlotsize.toFixed(2)  ;
// add them and output it
});
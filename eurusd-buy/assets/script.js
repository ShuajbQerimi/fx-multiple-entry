$('input').keyup(function(){ // run anytime the value changes
    var balance  = Number($('#balance').val());
    var eurusdriskinpercentage  = Number($('#eurusdriskinpercentage').val());
    var eurusdprofitinpercentage  = Number($('#eurusdprofitinpercentage').val());
    var eurusdtotallosing  = Number($('#eurusdtotallosing').val());
    var eurusdtotalprofit  = Number($('#eurusdtotalprofit').val());
    var eurusdtotallotsize  = Number($('#eurusdtotallotsize').val());

    // AUD USD BUY
    var eurusdentry1  = Number($('#eurusdentry1').val());
    var eurusdstoploss1  = Number($('#eurusdstoploss1').val());
    var eurusdtakeprofit1  = Number($('#eurusdtakeprofit1').val());
    var eurusdlotsize1  = Number($('#eurusdlotsize1').val());

    var eurusdentry2  = Number($('#eurusdentry2').val());
    var eurusdstoploss2  = Number($('#eurusdstoploss2').val());
    var eurusdtakeprofit2  = Number($('#eurusdtakeprofit2').val());
    var eurusdlotsize2  = Number($('#eurusdlotsize2').val());

    var eurusdentry3  = Number($('#eurusdentry3').val());
    var eurusdstoploss3  = Number($('#eurusdstoploss3').val());
    var eurusdtakeprofit3  = Number($('#eurusdtakeprofit3').val());
    var eurusdlotsize3  = Number($('#eurusdlotsize3').val());

    var eurusdentry4  = Number($('#eurusdentry4').val());
    var eurusdstoploss4  = Number($('#eurusdstoploss4').val());
    var eurusdtakeprofit4  = Number($('#eurusdtakeprofit4').val());
    var eurusdlotsize4  = Number($('#eurusdlotsize4').val());

    var eurusdentry5  = Number($('#eurusdentry5').val());
    var eurusdstoploss5  = Number($('#eurusdstoploss5').val());
    var eurusdtakeprofit5  = Number($('#eurusdtakeprofit5').val());
    var eurusdlotsize5  = Number($('#eurusdlotsize5').val());

    eurusdentry1 = eurusdentry1 * 100000;
    eurusdentry2 = eurusdentry2 * 100000;
    eurusdentry3 = eurusdentry3 * 100000;
    eurusdentry4 = eurusdentry4 * 100000;
    eurusdentry5 = eurusdentry5 * 100000;

    eurusdstoploss1 = eurusdstoploss1 * 100000;
    eurusdstoploss2 = eurusdstoploss2 * 100000;
    eurusdstoploss3 = eurusdstoploss3 * 100000;
    eurusdstoploss4 = eurusdstoploss4 * 100000;
    eurusdstoploss5 = eurusdstoploss5 * 100000;

    eurusdtakeprofit1 = eurusdtakeprofit1 * 100000;
    eurusdtakeprofit2 = eurusdtakeprofit2 * 100000;
    eurusdtakeprofit3 = eurusdtakeprofit3 * 100000;
    eurusdtakeprofit4 = eurusdtakeprofit4 * 100000;
    eurusdtakeprofit5 = eurusdtakeprofit5 * 100000;

    eurusdlotsize1 = eurusdlotsize1 * 100000;
    eurusdlotsize2 = eurusdlotsize2 * 100000;
    eurusdlotsize3 = eurusdlotsize3 * 100000;
    eurusdlotsize4 = eurusdlotsize4 * 100000;
    eurusdlotsize5 = eurusdlotsize5 * 100000;

    var eurusdentry = eurusdentry1 + eurusdentry2 + eurusdentry3 +eurusdentry4 +eurusdentry5;
    var eurusdstoploss = eurusdstoploss1 + eurusdstoploss2 + eurusdstoploss3 + eurusdstoploss5 + eurusdstoploss5;
    var eurusdtakeprofit = eurusdtakeprofit1 + eurusdtakeprofit2 + eurusdtakeprofit3 + eurusdtakeprofit4 + eurusdtakeprofit5;
    var eurusdlotsize =eurusdlotsize1 + eurusdlotsize2 + eurusdlotsize3 + eurusdlotsize4 + eurusdlotsize5;




    var eurusdstoplosstotal= (eurusdentry - eurusdstoploss) * eurusdlotsize;
    eurusdstoplosstotal = eurusdstoplosstotal/100000;

    var eurusdtakeprofittotal= (eurusdtakeprofit - eurusdentry) * eurusdlotsize;
    eurusdtakeprofittotal = eurusdtakeprofittotal/100000;

    eurusdlotsize = eurusdlotsize/100000;

    
    eurusdriskinpercentage= (eurusdstoplosstotal *100) / balance;
    eurusdprofitinpercentage= (eurusdtakeprofittotal *100) / balance;

    
    document.getElementById('eurusdriskinpercentage').value = "-" + eurusdriskinpercentage.toFixed(2) + "%";
    document.getElementById('eurusdprofitinpercentage').value = "+" + eurusdprofitinpercentage.toFixed(2) + "%";
    document.getElementById('eurusdtotallosing').value = "-" + eurusdstoplosstotal.toFixed(2) + "$";
    document.getElementById('eurusdtotalprofit').value = "+" + eurusdtakeprofittotal.toFixed(2) + "$";
    document.getElementById('eurusdtotallotsize').value =   eurusdlotsize.toFixed(2)  ;
// add them and output it
});
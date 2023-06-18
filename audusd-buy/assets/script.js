$('input').keyup(function(){ // run anytime the value changes
    var balance  = Number($('#balance').val());
    var audusdriskinpercentage  = Number($('#audusdriskinpercentage').val());
    var audusdprofitinpercentage  = Number($('#audusdprofitinpercentage').val());
    var audusdtotallosing  = Number($('#audusdtotallosing').val());
    var audusdtotalprofit  = Number($('#audusdtotalprofit').val());
    var audusdtotallotsize  = Number($('#audusdtotallotsize').val());

    // AUD USD BUY
    var audusdentry1  = Number($('#audusdentry1').val());
    var audusdstoploss1  = Number($('#audusdstoploss1').val());
    var audusdtakeprofit1  = Number($('#audusdtakeprofit1').val());
    var audusdlotsize1  = Number($('#audusdlotsize1').val());

    var audusdentry2  = Number($('#audusdentry2').val());
    var audusdstoploss2  = Number($('#audusdstoploss2').val());
    var audusdtakeprofit2  = Number($('#audusdtakeprofit2').val());
    var audusdlotsize2  = Number($('#audusdlotsize2').val());

    var audusdentry3  = Number($('#audusdentry3').val());
    var audusdstoploss3  = Number($('#audusdstoploss3').val());
    var audusdtakeprofit3  = Number($('#audusdtakeprofit3').val());
    var audusdlotsize3  = Number($('#audusdlotsize3').val());

    var audusdentry4  = Number($('#audusdentry4').val());
    var audusdstoploss4  = Number($('#audusdstoploss4').val());
    var audusdtakeprofit4  = Number($('#audusdtakeprofit4').val());
    var audusdlotsize4  = Number($('#audusdlotsize4').val());

    var audusdentry5  = Number($('#audusdentry5').val());
    var audusdstoploss5  = Number($('#audusdstoploss5').val());
    var audusdtakeprofit5  = Number($('#audusdtakeprofit5').val());
    var audusdlotsize5  = Number($('#audusdlotsize5').val());

    audusdentry1 = audusdentry1 * 100000;
    audusdentry2 = audusdentry2 * 100000;
    audusdentry3 = audusdentry3 * 100000;
    audusdentry4 = audusdentry4 * 100000;
    audusdentry5 = audusdentry5 * 100000;

    audusdstoploss1 = audusdstoploss1 * 100000;
    audusdstoploss2 = audusdstoploss2 * 100000;
    audusdstoploss3 = audusdstoploss3 * 100000;
    audusdstoploss4 = audusdstoploss4 * 100000;
    audusdstoploss5 = audusdstoploss5 * 100000;

    audusdtakeprofit1 = audusdtakeprofit1 * 100000;
    audusdtakeprofit2 = audusdtakeprofit2 * 100000;
    audusdtakeprofit3 = audusdtakeprofit3 * 100000;
    audusdtakeprofit4 = audusdtakeprofit4 * 100000;
    audusdtakeprofit5 = audusdtakeprofit5 * 100000;

    audusdlotsize1 = audusdlotsize1 * 100000;
    audusdlotsize2 = audusdlotsize2 * 100000;
    audusdlotsize3 = audusdlotsize3 * 100000;
    audusdlotsize4 = audusdlotsize4 * 100000;
    audusdlotsize5 = audusdlotsize5 * 100000;

    var audusdentry = audusdentry1 + audusdentry2 + audusdentry3 +audusdentry4 +audusdentry5;
    var audusdstoploss = audusdstoploss1 + audusdstoploss2 + audusdstoploss3 + audusdstoploss5 + audusdstoploss5;
    var audusdtakeprofit = audusdtakeprofit1 + audusdtakeprofit2 + audusdtakeprofit3 + audusdtakeprofit4 + audusdtakeprofit5;
    var audusdlotsize =audusdlotsize1 + audusdlotsize2 + audusdlotsize3 + audusdlotsize4 + audusdlotsize5;




    var audusdstoplosstotal= (audusdentry - audusdstoploss) * audusdlotsize;
    audusdstoplosstotal = audusdstoplosstotal/100000;

    var audusdtakeprofittotal= (audusdtakeprofit - audusdentry) * audusdlotsize;
    audusdtakeprofittotal = audusdtakeprofittotal/100000;

    audusdlotsize = audusdlotsize/100000;

    
    audusdriskinpercentage= (audusdstoplosstotal *100) / balance;
    audusdprofitinpercentage= (audusdtakeprofittotal *100) / balance;

    
    document.getElementById('audusdriskinpercentage').value = "-" + audusdriskinpercentage.toFixed(2) + "%";
    document.getElementById('audusdprofitinpercentage').value = "+" + audusdprofitinpercentage.toFixed(2) + "%";
    document.getElementById('audusdtotallosing').value = "-" + audusdstoplosstotal.toFixed(2) + "$";
    document.getElementById('audusdtotalprofit').value = "+" + audusdtakeprofittotal.toFixed(2) + "$";
    document.getElementById('audusdtotallotsize').value =   audusdlotsize.toFixed(2)  ;
// add them and output it
});
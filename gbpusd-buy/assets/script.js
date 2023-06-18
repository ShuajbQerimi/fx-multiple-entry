$('input').keyup(function(){ // run anytime the value changes
    var balance  = Number($('#balance').val());
    var gbpusdriskinpercentage  = Number($('#gbpusdriskinpercentage').val());
    var gbpusdprofitinpercentage  = Number($('#gbpusdprofitinpercentage').val());
    var gbpusdtotallosing  = Number($('#gbpusdtotallosing').val());
    var gbpusdtotalprofit  = Number($('#gbpusdtotalprofit').val());
    var gbpusdtotallotsize  = Number($('#gbpusdtotallotsize').val());

    // AUD USD BUY
    var gbpusdentry1  = Number($('#gbpusdentry1').val());
    var gbpusdstoploss1  = Number($('#gbpusdstoploss1').val());
    var gbpusdtakeprofit1  = Number($('#gbpusdtakeprofit1').val());
    var gbpusdlotsize1  = Number($('#gbpusdlotsize1').val());

    var gbpusdentry2  = Number($('#gbpusdentry2').val());
    var gbpusdstoploss2  = Number($('#gbpusdstoploss2').val());
    var gbpusdtakeprofit2  = Number($('#gbpusdtakeprofit2').val());
    var gbpusdlotsize2  = Number($('#gbpusdlotsize2').val());

    var gbpusdentry3  = Number($('#gbpusdentry3').val());
    var gbpusdstoploss3  = Number($('#gbpusdstoploss3').val());
    var gbpusdtakeprofit3  = Number($('#gbpusdtakeprofit3').val());
    var gbpusdlotsize3  = Number($('#gbpusdlotsize3').val());

    var gbpusdentry4  = Number($('#gbpusdentry4').val());
    var gbpusdstoploss4  = Number($('#gbpusdstoploss4').val());
    var gbpusdtakeprofit4  = Number($('#gbpusdtakeprofit4').val());
    var gbpusdlotsize4  = Number($('#gbpusdlotsize4').val());

    var gbpusdentry5  = Number($('#gbpusdentry5').val());
    var gbpusdstoploss5  = Number($('#gbpusdstoploss5').val());
    var gbpusdtakeprofit5  = Number($('#gbpusdtakeprofit5').val());
    var gbpusdlotsize5  = Number($('#gbpusdlotsize5').val());

    gbpusdentry1 = gbpusdentry1 * 100000;
    gbpusdentry2 = gbpusdentry2 * 100000;
    gbpusdentry3 = gbpusdentry3 * 100000;
    gbpusdentry4 = gbpusdentry4 * 100000;
    gbpusdentry5 = gbpusdentry5 * 100000;

    gbpusdstoploss1 = gbpusdstoploss1 * 100000;
    gbpusdstoploss2 = gbpusdstoploss2 * 100000;
    gbpusdstoploss3 = gbpusdstoploss3 * 100000;
    gbpusdstoploss4 = gbpusdstoploss4 * 100000;
    gbpusdstoploss5 = gbpusdstoploss5 * 100000;

    gbpusdtakeprofit1 = gbpusdtakeprofit1 * 100000;
    gbpusdtakeprofit2 = gbpusdtakeprofit2 * 100000;
    gbpusdtakeprofit3 = gbpusdtakeprofit3 * 100000;
    gbpusdtakeprofit4 = gbpusdtakeprofit4 * 100000;
    gbpusdtakeprofit5 = gbpusdtakeprofit5 * 100000;

    gbpusdlotsize1 = gbpusdlotsize1 * 100000;
    gbpusdlotsize2 = gbpusdlotsize2 * 100000;
    gbpusdlotsize3 = gbpusdlotsize3 * 100000;
    gbpusdlotsize4 = gbpusdlotsize4 * 100000;
    gbpusdlotsize5 = gbpusdlotsize5 * 100000;

    var gbpusdentry = gbpusdentry1 + gbpusdentry2 + gbpusdentry3 +gbpusdentry4 +gbpusdentry5;
    var gbpusdstoploss = gbpusdstoploss1 + gbpusdstoploss2 + gbpusdstoploss3 + gbpusdstoploss5 + gbpusdstoploss5;
    var gbpusdtakeprofit = gbpusdtakeprofit1 + gbpusdtakeprofit2 + gbpusdtakeprofit3 + gbpusdtakeprofit4 + gbpusdtakeprofit5;
    var gbpusdlotsize =gbpusdlotsize1 + gbpusdlotsize2 + gbpusdlotsize3 + gbpusdlotsize4 + gbpusdlotsize5;




    var gbpusdstoplosstotal= (gbpusdentry - gbpusdstoploss) * gbpusdlotsize1;
    gbpusdstoplosstotal = gbpusdstoplosstotal/100000;

    var gbpusdtakeprofittotal= (gbpusdtakeprofit - gbpusdentry) * gbpusdlotsize;
    gbpusdtakeprofittotal = gbpusdtakeprofittotal/100000;

    gbpusdlotsize = gbpusdlotsize/100000;

    
    gbpusdriskinpercentage= (gbpusdstoplosstotal *100) / balance;
    gbpusdprofitinpercentage= (gbpusdtakeprofittotal *100) / balance;

    
    document.getElementById('gbpusdriskinpercentage').value = "-" + gbpusdriskinpercentage.toFixed(2) + "%";
    document.getElementById('gbpusdprofitinpercentage').value = "+" + gbpusdprofitinpercentage.toFixed(2) + "%";
    document.getElementById('gbpusdtotallosing').value = "-" + gbpusdstoplosstotal.toFixed(2) + "$";
    document.getElementById('gbpusdtotalprofit').value = "+" + gbpusdtakeprofittotal.toFixed(2) + "$";
    document.getElementById('gbpusdtotallotsize').value =   gbpusdlotsize.toFixed(2)  ;
// add them and output it
});
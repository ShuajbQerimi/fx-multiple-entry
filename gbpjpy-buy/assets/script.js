$('input').keyup(function(){ // run anytime the value changes
    var balance  = Number($('#balance').val());
    var gbpjpyriskinpercentage  = Number($('#gbpjpyriskinpercentage').val());
    var gbpjpyprofitinpercentage  = Number($('#gbpjpyprofitinpercentage').val());
    var gbpjpytotallosing  = Number($('#gbpjpytotallosing').val());
    var gbpjpytotalprofit  = Number($('#gbpjpytotalprofit').val());
    var gbpjpytotallotsize  = Number($('#gbpjpytotallotsize').val());

    // AUD USD BUY
    var gbpjpyentry1  = Number($('#gbpjpyentry1').val());
    var gbpjpystoploss1  = Number($('#gbpjpystoploss1').val());
    var gbpjpytakeprofit1  = Number($('#gbpjpytakeprofit1').val());
    var gbpjpylotsize1  = Number($('#gbpjpylotsize1').val());

    var gbpjpyentry2  = Number($('#gbpjpyentry2').val());
    var gbpjpystoploss2  = Number($('#gbpjpystoploss2').val());
    var gbpjpytakeprofit2  = Number($('#gbpjpytakeprofit2').val());
    var gbpjpylotsize2  = Number($('#gbpjpylotsize2').val());

    var gbpjpyentry3  = Number($('#gbpjpyentry3').val());
    var gbpjpystoploss3  = Number($('#gbpjpystoploss3').val());
    var gbpjpytakeprofit3  = Number($('#gbpjpytakeprofit3').val());
    var gbpjpylotsize3  = Number($('#gbpjpylotsize3').val());

    var gbpjpyentry4  = Number($('#gbpjpyentry4').val());
    var gbpjpystoploss4  = Number($('#gbpjpystoploss4').val());
    var gbpjpytakeprofit4  = Number($('#gbpjpytakeprofit4').val());
    var gbpjpylotsize4  = Number($('#gbpjpylotsize4').val());

    var gbpjpyentry5  = Number($('#gbpjpyentry5').val());
    var gbpjpystoploss5  = Number($('#gbpjpystoploss5').val());
    var gbpjpytakeprofit5  = Number($('#gbpjpytakeprofit5').val());
    var gbpjpylotsize5  = Number($('#gbpjpylotsize5').val());

    gbpjpyentry1 = gbpjpyentry1 * 100;
    gbpjpyentry2 = gbpjpyentry2 * 100;
    gbpjpyentry3 = gbpjpyentry3 * 100;
    gbpjpyentry4 = gbpjpyentry4 * 100;
    gbpjpyentry5 = gbpjpyentry5 * 100;

    gbpjpystoploss1 = gbpjpystoploss1 * 100;
    gbpjpystoploss2 = gbpjpystoploss2 * 100;
    gbpjpystoploss3 = gbpjpystoploss3 * 100;
    gbpjpystoploss4 = gbpjpystoploss4 * 100;
    gbpjpystoploss5 = gbpjpystoploss5 * 100;

    gbpjpytakeprofit1 = gbpjpytakeprofit1 * 100;
    gbpjpytakeprofit2 = gbpjpytakeprofit2 * 100;
    gbpjpytakeprofit3 = gbpjpytakeprofit3 * 100;
    gbpjpytakeprofit4 = gbpjpytakeprofit4 * 100;
    gbpjpytakeprofit5 = gbpjpytakeprofit5 * 100;

    gbpjpylotsize1 = gbpjpylotsize1 * 100;
    gbpjpylotsize2 = gbpjpylotsize2 * 100;
    gbpjpylotsize3 = gbpjpylotsize3 * 100;
    gbpjpylotsize4 = gbpjpylotsize4 * 100;
    gbpjpylotsize5 = gbpjpylotsize5 * 100;

    var gbpjpyentry = gbpjpyentry1 + gbpjpyentry2 + gbpjpyentry3 +gbpjpyentry4 +gbpjpyentry5;
    var gbpjpystoploss = gbpjpystoploss1 + gbpjpystoploss2 + gbpjpystoploss3 + gbpjpystoploss5 + gbpjpystoploss5;
    var gbpjpytakeprofit = gbpjpytakeprofit1 + gbpjpytakeprofit2 + gbpjpytakeprofit3 + gbpjpytakeprofit4 + gbpjpytakeprofit5;
    var gbpjpylotsize =gbpjpylotsize1 + gbpjpylotsize2 + gbpjpylotsize3 + gbpjpylotsize4 + gbpjpylotsize5;




    var gbpjpystoplosstotal= (gbpjpyentry - gbpjpystoploss) * gbpjpylotsize1;
    gbpjpystoplosstotal = (gbpjpystoplosstotal/100)*7.0503500;

    var gbpjpytakeprofittotal= (gbpjpytakeprofit - gbpjpyentry) * gbpjpylotsize;
    gbpjpytakeprofittotal = (gbpjpytakeprofittotal/100)*7.0503500;

    gbpjpylotsize = gbpjpylotsize/100;

    
    gbpjpyriskinpercentage= (gbpjpystoplosstotal *100) / balance;
    gbpjpyprofitinpercentage= (gbpjpytakeprofittotal *100) / balance;

    
    document.getElementById('gbpjpyriskinpercentage').value = "-" + gbpjpyriskinpercentage.toFixed(2) + "%";
    document.getElementById('gbpjpyprofitinpercentage').value = "+" + gbpjpyprofitinpercentage.toFixed(2) + "%";
    document.getElementById('gbpjpytotallosing').value = "-" + gbpjpystoplosstotal.toFixed(2) + "$";
    document.getElementById('gbpjpytotalprofit').value = "+" + gbpjpytakeprofittotal.toFixed(2) + "$";
    document.getElementById('gbpjpytotallotsize').value =   gbpjpylotsize.toFixed(2)  ;
// add them and output it
});
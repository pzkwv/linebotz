
var linebot = require('linebot');
var express = require('express');

var bot = linebot({
    channelId: '1535638171',
    channelSecret: 'a18a11d5dbb43545cdd0a3b09f6fc694',
    channelAccessToken: 'rG7mdNUio6XgPflYVmEE8IiAS5VrEDKtlVIbOUYA+hDW40mczFESzAzO9kEiazIl7Q9kA8c+s/XlkD7yx8XdJ/dlMkBX30vawQZ7NLcCulguDPwCFqtzQsTGWFO9fPm72RLGl/8UDoWhyGT4dRNI/wdB04t89/1O/w1cDnyilFU='
});
var data = [];

data['ajax'] = {
    txt:'url for ajax',
    a:[]
};
    data['ajax'].a['bridge'] = {
        txt:'cross-domain on ie9',
        code:
`//必要參數: url (若要發 ajax 的網址有使用 url 參數，則原本的 url 改成 tourl 即可)
$.ajax({
    url:'http://www.content.ad2iction.com/tools/urlBridge.php',
    data:{
        type:'原本的type'
        tourl:'url'
    }
});`
    }
    data['ajax'].a['fb'] = {
        txt:'儲存任何活動使用者fb id',
        code:
`//儲存任何活動使用者fb id 會在由後端取得使用者目前可以存取的資料 必須先去Add source後台建立source名稱
$.ajax({
    url: "http://fbapi.ad2iction.com/about_me",
    data:{
        fb_id: 'id',
        access_token: 'token',
        source: 'SourceName'
    },
    dataType: "jsonp",
    success: function(data){

    }
});`
    }
    data['ajax'].a['form'] = {
        txt:'儲存任何表單類型資料',
        code:
`var iname = id('iName');
var iphone = id('iPhone');
var imail = id('iMail');
var iread = $('#iRead');
var read = false;
String.prototype.isEmpty = function() {return (this.length === 0 || !this.trim());};
$('#iSend').click(function (){
    gs('/表單/點擊');
    if(iname.value.isEmpty()){
        alert('請輸入姓名');
        return
    }
    if(iphone.value.isEmpty()){
        alert('請輸入電話');
        return
    }
    if(imail.value.isEmpty()  || imail.value.split('@').length != 2 ){
        alert('請輸入Email');
        return
    };
    if(!iread.prop('checked')){
        alert('請先同意授權個資使用');
        return;
    };
    gs('/表單/送出');
    loading.show();
    $.ajax({
        url:'https://form.ad2iction.com/api/form.json',
        type:'POST',
        data:{
            source:'test',
            name:iname.value,
            phone:iphone.value,
            mail:imail.value
        },
        success:function (r){
            console.log('form');
            console.log(r);
            if(r.message == 'ok'){
                gs('/表單/送出/成功');
                alert('資料送出成功');

            } else {
                gs('/表單/送出/失敗');
                gs('/表單失敗/'+r.message);
                alert(r.message);
            }
            loading.hide();
        }
    });
});`
    }
    data['ajax'].a['gif'] = {
        txt:'動態文字圖片合成',
        code:
`/*
x (type string)         x軸位置（座標從左上角起始，限制格式為正整數）
y (type string)         y軸位置
fontSize (type integer)     字型大小
fontTypeIndex (type integer)    字型樣式
text (type string)      留言文字（後端有驗證不可輸入特殊字元\/"'）
videoIndex (type integer)   背景影片代碼（每個專案有不同的固定區間）
caseName (type string)  專案名稱（每個專案有不同的固定名稱）
*/
$.ajax({
    url:'https://gifc.ad2iction.com/roar/app.php',
    type:'POST',
    data:{
        x:0,
        y:0,
        fontSize:10,
        fontTypeIndex:1,
        text:'123',
        videoIndex:1,
        caseName:'test'
    },
    dataType:'json',
    success:function (r){
        //r.message == "ok"
        //r.result = {fileName:'url'}
        //r.message == "system error"
        //r.result = {exception:'connection error'}
    }
});
`
    }
    data['ajax'].a['upload'] = {
        txt:'base64圖片轉存url',
        code:
`
$.ajax({
    url:'http://compaignapi.ad2iction.com/api/v1/image/upload',
    type:'POST',
    data:{
        imgurl://base64 string or img url
    },success:function(r){
        //r.image_url;
    }
});
`
    }
    data['ajax'].a['time'] = {
        txt:'取得標準時間',
        code:
`//offset: (type integer)
$.ajax({
    url:'https://compaignapi.ad2iction.com/api/v1/image/now',
    data:{
        offset:8
    },success:function(r){
        //message :  ok
        //day: (type integer)
        //hour: (type integer)
        //min : (type integer)
        //month : (type integer)
        //second : (type integer)
        //weekday : (type integer)
        //year: (type integer)
    }
});
`
    }
    data['ajax'].a['weather'] = {
        txt:'天氣資訊',
        code:
`
$.ajax({
    url:'http://api.superweather.tw/get_weather_from_latlng',
    data:{
        lat:24.846,
        lng:121.208
    },success:function(r){
    }
});
`
    }
    data['ajax'].a['youtube'] = {
        txt:'取得影片網址',
        code:
`//url: (type string)
$.ajax({
    url:'https://compaignapi.ad2iction.com/api/v1/image/youtube',
    type:'POST'
    data:{
        url:'xxx'
    },success:function(r){
        //message :  ok
        /*
            result:{
                1280x720:'url',
                640x360:'url'
            }
        */
        
    }
});
`
    }
    

data['fb'] = {
    txt:'fb api',
    a:[]
};
    data['fb'].a['code'] = {
        txt:'fb init',
        code:
`
var appKey = 'xxx';
FB.init({
    appId      : appKey,
    status     : true,
    cookie     : true,
    xfbml      : true,
    oauth      : true,
    version    : 'v2.10'
});`
    }
    data['fb'].a['feed'] = {
        txt:'feed dialog',
        code:
`
function feed(){
    var hastouch = 'ontouchstart' in window ? true : false;
    var s = {
        method:'feed',
        link:'xxx',
        touch:hastouch?'&display=touch':'',
        red:'xxx'
    };
    var uaa = navigator.userAgent.toLowerCase();
    if(uaa.split('fb').length > 2){
        if(warning && warning.show)warning.show();
        gs('/開警告');
    } else {
        gs('/fb分享');
        location.href = 
    'https://www.facebook.com/dialog/feed?app_id='+appKey+'&link='+encodeURIComponent(s.link)+s.display+'&redirect_uri='+s.red; 
    }
}`
    }
    data['fb'].a['login'] = {
        txt:'login api',
        code:
`//js api
FB.login(function(response) {
    if (response.authResponse) {
        //in
    } else {
        //out
    }
}, {scope: 'email'});
//url redirect
https://www.facebook.com/v2.10/dialog/oauth?client_id=xxxx&scope=email&redirect_uri=xxxx
`
    }
    data['fb'].a['profile'] = {
        txt:'fb大頭照',
        code:
`
https://graph.facebook.com/xxxxx/picture?width=100&height=100
`
    }
    data['fb'].a['share'] = {
        txt:'share dialog',
        code:
`
function share(){
    var hastouch = 'ontouchstart' in window ? true : false;
    var s = {
        method:'share',
        href:'xxx',
        hashtag:'#123',
        red:'xxx'
    };
    var uaa = navigator.userAgent.toLowerCase();
    if(uaa.split('fb').length > 2){
        if(warning && warning.show)warning.show();
        gs('/開警告');
    } else {
        gs('/fb分享');
        location.href = 
    'https://www.facebook.com/dialog/share?app_id='+appKey+'&href='+encodeURIComponent(s.href)+'&hashtag='+encodeURIComponent(s.hashtag)+'&redirect_uri='+s.red;    
    }
}`
    }
    data['fb'].a['status'] = {
        txt:'get login status',
        code:
`
FB.getLoginStatus(function(response) {
    if (response.authResponse) {
        //logged
    } else {
        //not logged
    };
});`
    }
    

data['ga'] = {
    txt:'ga code',
    a:[]
};
    data['ga'].a['content'] = {
        txt:'ga for content',
        code:
`
var _gaq = _gaq || [];
_gaq.push(
    ['_setAccount', 'UA-44763510-23'],
    ['_trackPageview'],
    ['b._setAccount', 'xxxx'],
    ['b._trackPageview']
);
(function() {
    var ga = document.createElement('script'); ga.async = true;
    ga.src = 'https://stats.g.doubleclick.net/dc.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
var gs;
(function (){
    var proName = 'xxxx';
    gs = function (s){
        console.log('ga:',s);
        _gaq.push(['_trackEvent',proName,s,s]);
        _gaq.push(['b._trackEvent',proName,s,s]);
    };
})();`
    }
    data['ga'].a['inapp'] = {
        txt:'ga for content',
        code:'<script src="http://test.ads.ad2iction.com/m/adUrl/custom/gframe/utmgif.js" id="fxGA" fname="test" fserial="" pname=""></script>'
    }

data['mraid'] = {
    txt:'mraid api',
    a:[]
};
    data['mraid'].a['battery'] = {
        txt:'電量',
        code:
`//狀態state分為四種，以字串型態傳入：full, charging, unplugged, unknown, nocharging(Android only)。電量level傳入值介於0.00~1.00。
function batteryInfo(){
   mraid.addEventListener('batteryInfo',function(state,level){
       var elem = document.getElementById("battery");
       elem.innerHTML = "狀態:"+state+",電量:"+level;
   });
   mraid.extBatteryInfo();
}`
    }
    data['mraid'].a['bright'] = {
        txt:'取得/設定螢幕亮度',
        code:
`//亮度值介於0.000~1.000之間
function brightnessInfo(){
   mraid.addEventListener('brightness',function(level){
       var elem = document.getElementById("brightness");
       elem.innerHTML = "亮度:"+level;
   });
   mraid.extGetScreenBrightness();
}
function setBrightness(){
   mraid.extSetScreenBrightness(0.3);
   brightnessInfo();
}`

    }
    data['mraid'].a['calendar'] = {
        txt:'存日曆到手機',
        code:
`
var cal = {};
cal.desc = "GlobalFestival2013";
cal.location = "everywhere";
cal.start = "2013-12-21T00:00-05:00";
cal.end = "2013-12-21T00:00-05:00";
if (mraid.supports("calendar")){
    mraid.createCalendarEvent(cal);
}else{ 
    console.log('calendar not support!');
}`
    }
    data['mraid'].a['face'] = {
        txt:'臉部辨識',
        code:
`//傳入base64圖片（可透過手機相機或相簿或是直接由網路取得）。
//回傳辨識結果陣列物件。
<input type="file" accept="image/*" onchange="fileget(this);"/>
function fileget(imgfile) {
   if(!imgfile.files.length) return;
   var file=imgfile.files[0];
   var fr=new FileReader();
   fr.onload=function(evt) {
       document.getElementById("base64area").innerHTML=evt.target.result;
   }
   fr.readAsDataURL(file);
}
function detectFace(){
   var image = document.getElementById("base64area").innerHTML;
   mraid.addEventListener('faceDetected',function(features){
       document.getElementById("faceInfo").innerHTML = JSON.stringify(features);
   });
   mraid.extDetectFace(image);
}`
    }
    data['mraid'].a['fb'] = {
        txt:'內建的Facebook分享',
        code:
`//呼叫內建的Facebook分享UI，包含text，URL，image(base64)三個參數。
//注意當使用者有安裝Facebook APP時，text預設輸入會無效。
//且URL和image參數同次呼叫只能使用一個，兩個同時傳的話只會分享圖片。
function shareFacebook(){
   mraid.addEventListener('facebookShareEvent',function (result) {
       if(result){
           alert('done');
       }else{
           alert('canceled');
       }
   });
   //參數依序為:text, url, image
   mraid.extShareFacebook('分享測試','http://www.ad2iction.com','');
}
function shareFacebookWithImage(){
   mraid.addEventListener('facebookShareEvent',function (result) {
       if(result){    
           alert('done');
       }else{
           alert('canceled');
       }  
   });
   mraid.extShareFacebook('分享測試','','data:image/jpeg;base64,圖片base64字串');
}`
    }
    data['mraid'].a['full'] = {
        txt:'展開成全畫面/縮回原大小',
        code:
`
mraid.expand(); //開
mraid.close(); //關
`
    }
    data['mraid'].a['light'] = {
        txt:'開啟/關閉手機手電筒',
        code:
`
mraid.extLightOn();//開啟手電筒
mraid.extLightOff();//關閉手電筒
`
    }
    data['mraid'].a['mic'] = {
        txt:'錄音功能',
        code:
`//透過手機麥克風錄製一段簡短的錄音檔案(base64 aiff格式)
<audio controls src="" id="audioplay" />
<input type="button" onclick="startAudioRecord();" value="Record"/>
<input type="button" onclick="stopAudioRecord();" value="Stop"/>
<textarea id="base64areaForAudio">base64</textarea>

function startAudioRecord(){
   mraid.addEventListener('authorizeChange', function (state, target) {
       if (state && target == 'microphone'){
           //使用者允許麥克風權限
           mraid.addEventListener('recordComplete', function (data) {
               //錄音完成，取得base64音檔
               var elem = document.getElementById("base64areaForAudio");
               elem.innerHTML = data;
               var audioplay = document.getElementById("audioplay");
               audioplay.src = "data:audio/aiff;base64,"+data;
               audioplay.play();
           });
           var elem = document.getElementById("base64areaForAudio");
           elem.innerHTML = "錄音中...";
           mraid.extStartRecord();
       }else{
           //使用者不允許權限
           alert("User not authorized");
       }
   });
   mraid.extAuthorizeMicrophone(); //要求開啟麥克風權限
}

function stopAudioRecord(){
   mraid.extStopRecord(); //停止錄音，並回傳base64錄音檔案(aiff格式)
}`
    }
    data['mraid'].a['motion'] = {
        txt:'監看即時行動狀態',
        code:
`//行動狀態分成六類，以字串表示：”stationary”, “walking”, “running”, “automotive”, “cycling”, “unknown”
function startActivityMonitor(){
   mraid.addEventListener('motionActivityChange', function (activity) {
       //取得步數資訊
       var elem = document.getElementById("activityData");
       elem.innerHTML = activity;
   });
   mraid.extStartMotionActivityMonitor();
}

function stopActivityMonitor(){
   mraid.extStopMotionActivityMonitor();
}`
    }
    data['mraid'].a['pedoget'] = {
        txt:'取得計步器過去累計資料',
        code:
`//取得從現在往回推一段時間的計步器資料，透過事件回傳計步器資訊物件
function queryPedometer(){
   mraid.addEventListener('pedometerChange', function (data) {
       //取得步數資訊
       var elem = document.getElementById("pedoData");
       elem.innerHTML = JSON.stringify(data);
   });
   mraid.extQueryPedometer(864000); //last 10 days
}`

    }
    data['mraid'].a['pedowatch'] = {
        txt:'監看計步器即時資訊',
        code:
`//透過事件回傳計步器資訊物件
function startPedometer(){
   mraid.addEventListener('pedometerChange', function (data) {
       //取得步數資訊
       var elem = document.getElementById("pedoData");
       elem.innerHTML = JSON.stringify(data);
   });
   mraid.extStartPedometerUpdates();
}

function stopPedometer(){
   mraid.extStopPedometerUpdates();
}`
    }
    data['mraid'].a['pressure'] = {
        txt:'氣壓資訊',
        code:
`//取出目前手機偵測到的氣壓值，不支援的氣壓計的手機將回傳0：
function getPressure(){
   mraid.addEventListener('pressureChange',function (pressure) {
       var elem = document.getElementById("pressureData");
       elem.innerHTML = pressure;
   });
   mraid.extGetPressure();
}`
    }
    data['mraid'].a['proximity'] = {
        txt:'光源感測器(偵測手/頭是否靠近)',
        code:
`
mraid.addEventListener('proximity', function(proximityState){
   if(proximityState == true){
       //接近
       mraid.extCancelMonitorProximity();//停止偵測
   }else{
       //遠離
   }
   alert("proximityState:"+proximityState); 
});
mraid.extMonitorProximity(); //開始偵測
//android需要配viewableChange在加上setTimeout 0 才可以正常運做
mraid.addEventListener('viewableChange', function (e){
    if(e == 'true' || e){
        setTimeout(function (){
            mraid.addEventListener('proximity', function(proximityState){
                log.innerHTML = proximityState;
                if(proximityState == true){
                    mraid.extCancelMonitorProximity();
                }else{
                }
            });
            mraid.extMonitorProximity();
        }, 0);
    } else {

    }
},false);`
    }
    data['mraid'].a['screen'] = {
        txt:'廣告前之畫面截圖(screen shot)',
        code:
`//可用來做動態轉場效果，或將截圖應用到廣告內容
mraid.addEventListener('screenshot', function(data,w,h){
    //data參數為Base64截圖資料 
    alert("screenshot:"+w+":"+h); 
    var bg = new Image();
    bg.src = 'data:image/png;base64,' + data;
});

mraid.addEventListener('viewableChange', function (e){
    if(e == 'true'){
        //在廣告顯示時呼叫取得截圖
        mraid.extScreenShot(); 
    }
},false);`
    }
    data['mraid'].a['speech'] = {
        txt:'語音辨識 ios10+',
        code:
`//此功能目前iOS10.0以上版本才支援。

//啟動語音辨識
function startSR(){
   mraid.addEventListener('authorizeChange', function (state, target) {
       if (state && target == 'speech'){
           //使用者允許語音辨識權限
           mraid.addEventListener('speechRecognized', function (state, text) {
               var elem = document.getElementById("info");
               if (state){
                   //辨識成功，同一次錄音可能會回送多次辨識成功事件（每次回送文字內容可能略有不同）
                   elem.innerHTML = text;
               }else{
                   //辨識失敗
                   elem.innerHTML = "Error";
               }
           });
           var elem = document.getElementById("info");
           elem.innerHTML = "辨識中...";
           mraid.extStartSR("zh-TW");
       }else{
           //使用者不允許權限
           alert("User not authorized");
       }
   });
   mraid.extAuthorizeSR();
}

//關閉語音辨識，在辨識完成或廣告消失時必須呼叫關閉
mraid.extStopSR();`
    }
    data['mraid'].a['sound'] = {
        txt:'感測音量大小',
        code:
`//音量大小介於0（最大聲）~ -160（最安靜）之間

function startSoundPicker(){
   mraid.addEventListener('authorizeChange', function (state, target) {
       if (state && target == 'microphone'){
            //使用者允許麥克風權限
            mraid.addEventListener('soundDetected', function (level) {
                //偵測到聲音，取得音量數值
                var elem = document.getElementById("soundlevel");
                elem.innerHTML = level;
            });
            var elem = document.getElementById("soundlevel");
            elem.innerHTML = "偵測中...";
            mraid.extStartSoundPicker(-160.0); //數值範圍：-160(無聲) ~ 0(非常大聲)
       }else{
           //使用者不允許權限
           alert("User not authorized");
       }
   });
   mraid.extAuthorizeMicrophone();
}

function stopSoundPicker(){
   mraid.extStopSoundPicker(); //停止取樣
}`
    }
    data['mraid'].a['store'] = {
        txt:'存圖片到手機內',
        code:
`
if (!mraid.supports("storePicture")){
           console.log('not support!');
}else{
mraid.storePicture("http://106.187.44.17/m/pic-sample11.jpg");
}`
    }
    data['mraid'].a['safari'] = {
        txt:'指定safari開啟網址',
        code:
`
function goUrl(url){
    if(typeof mraid != 'undefined' && (/iphone|ipod|ipad/i.test(navigator.userAgent))){
        location.href ='ad2ictionnativebrowser://navigate?url='+ encodeURIComponent(url);
    } else {
        location.href = url;
    }
};`
    }
    data['mraid'].a['vibrate'] = {
        txt:'震動',
        code:
`//動態插頁內專屬的javascript參數 可以使用特殊事件
if (typeof mraid !== "undefined") {
    if ('extCanVibrate' in mraid) {
        mraid.extVibrate(0.6);
    }
}
//可否震動
mraid.extCanVibrate();
//啟動震動
mraid.extVibrate(seconds);
//取消
mraid.extCancelVibrate();

if (typeof mraid !== "undefined" && 'extCanVibrate' in mraid) {
    mraid.addEventListener('stateChange',function (e){
        if(e == 'hidden'){

        }
    }, false);
}`
    }
    data['mraid'].a['viewable'] = {
        txt:'廣告 顯示/關閉',
        code:
`
mraid.addEventListener('viewableChange', function (e){
    if(e == true){
    } else {
    }
},false);`
    }

data['share'] = {
    txt:'social share api',
    a:[]
};
    data['share'].a['fb'] = {
        txt:'fb feed',
        code:
`
fb-feed
fb-share
`
    }
    data['share'].a['line'] = {
        txt:'line share uri',
        code:
`//%0D%0A 換行
"http://line.naver.jp/R/msg/text/?xxxxxx %0D%0A http://www.www.com"
`
    }

data['url'] = {
    txt:'list of tools',
    a:[]
};
    data['url'].a['aws'] = {
        txt:'aws clean cache',
        code:'http://www.content.ad2iction.com/tools/aws/'
    }
    data['url'].a['inapp'] = {
        txt:'Camp ID 設定頁面 （可隨時更換測試網址）',
        code:'http://admanage.ad2iction.com/toolbox/intersSetter.html'
    }
    data['url'].a['view'] = {
        txt:'各式窗瀏覽模式',
        code:'http://wwwcontent.ad2iction.com/c/adview/'
    }

data['youtube'] = {
    txt:'youtube api/iframe',
    a:[]
};
    data['youtube'].a['api'] = {
        txt:'youtubeIframeApi',
        code:
`
<script>
window.onYouTubeIframeAPIReady = function (){
    var nowVideo = new YT.Player(yt, {
        height: '100%',
        width: '100%',
        videoId: 'Dl_ZxIiqwDc',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'rel' : 0
        },
        events:{
            'onReady':function (){
                nowVideo.addEventListener('onStateChange', stateEvt);
            },
            'onSateChange':stateEvt
        }
    });
    var yd = {
        p30:true,
        p50:true,
        p70:true,
        p90:true,
        end:true,
        play:true,
    };
    var now;
    var total;
    var per;
    var pre = '';
    var timer;
    function scanner(){
        now = nowVideo.getCurrentTime();
        if(!total) total = nowVideo.getDuration();
        per = now/total*100;
        if(yd.p30 && per >= 30){
            yd.p30=false;
            gs(pre+'/video/p30');
        }
        if(yd.p50 && per >= 50){
            yd.p50=false;
            gs(pre+'/video/p50');
        }
        if(yd.p70 && per >= 70){
            yd.p70=false;
            gs(pre+'/video/p70');
        }
        if(yd.p90 && per >= 90){
            yd.p90=false;
            gs(pre+'/video/p90');
        }
        if(yd.end && now > total-2){
            yd.end=false;
            gs(pre+'/video/end');
        }
    }
    var stateEvt = function (ev){
        console.log(ev.data);
        //log.innerHTML = ev.data;
        switch(ev.data){
            case 0:
                if(yd.end && now > total-2){
                    yd.end=false;
                    gs(pre+'/video/end');
                }
                clearInterval(timer);
                break;
            case 1:
                if(yd.play){
                    yd.play=false;
                    gs(pre+'/video/play');
                }
                timer =setInterval(scanner, 500);
                break;
            case 2:
                clearInterval(timer);
                //gs('/video/pause');
                break;
            case 3:
                break;
            case 4:
                break;
        }
    };
}
</script>
<script type="text/javascript" src="https://www.youtube.com/iframe_api" id="ytScriptTag"></script>
`
    }
    data['youtube'].a['iframe'] = {
        txt:'iframe + ga',
        code:
`
//video - youtube 的 id
//name - ga 熱門事件的分類名子
//ga - ga 序號
<iframe src="https://content.ad2iction.com/tools/youtube/?video=xxx&name=test&ga=xxx" frameborder="0" allowfullscreen></iframe>

`
    }

bot.on('message', function(e) {
    if(!e.source.groupId || e.source.groupId){

    }
    if(e.type == 'message' && e.message.type == 'text'){
        var txt = e.message.text.toLowerCase();
        var q = e.reply;

        if(txt.indexOf('/cl ') == 0){
            //console.log('no command');
            var s = txt.replace('/cl ','');
            s= eval(s) + '';
            q(s);
            return;
        };


        if(txt.indexOf('/') != 0){
            //console.log('no command');
            return;
        };
        //console.log(txt);
        var txt = txt.slice(1).split('-');
        var prefix = txt[0];
        var suffix = txt[1];
        //console.log(prefix,suffix);
        
        
        var s = [];

        if(!suffix){
            //no suffix
            if(prefix == 'help'){
                for (var e in data) {
                    //console.log(e,data[e].txt);
                    s.push('/'+e + '   ' + data[e].txt);
                };
                q(s.join('\n'));
            } else if(data[prefix]){
                for (var e in data[prefix].a) {
                    //console.log(e,data['mraid'].a[e].txt);
                    s.push('/'+prefix+'-'+e + '   ' + data[prefix].a[e].txt);
                };
                q(s.join('\n'));
            }
        } else {
            if(data[prefix] && data[prefix].a[suffix]){
                s.push(data[prefix].a[suffix].code);
                q(s.join(''));
            }
        }
    }

});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
console.log('robot start');


// {
//     type: 'message',
//     replyToken: '4a1e4195bdeb4515b68b7ca0178db883',
//     source: 
//         { userId: 'Ud0ad16cde89d20964bec951d174b7e0d',
//         type: 'user',
//         profile: [Function] },
//     timestamp: 1505641415844,
//     message: 
//         { type: 'text',
//         id: '6709785507649',
//         text: 'try',
//         content: [Function] },
//     reply: [Function] 
// }


// {
//     type: 'message',
//     replyToken: 'c4a8a662e5e04920bd8da97748e5ce57',
//     source: {
//         groupId: 'C90b1262f17f31ddfd778b6c930717377',
//         userId: 'Ud0ad16cde89d20964bec951d174b7e0d',
//         type: 'group',
//         profile: [Function]
//     },
//     timestamp: 1505642628993,
//     message: { type: 'image', id: '6709870643803', content: [Function] },
//     reply: [Function]
// }
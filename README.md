deviceshake.js
===============

何これ？
--------
devicemotionイベントを使って、デバイスを振った時にイベントを起こすためのJavaScriptライブラリです。  
特定のJavaScriptライブラリに依存しません。このファイル単体で利用可能です。

devicemotionイベントについては以下を参照
http://www.w3.org/TR/orientation-event/


使い方
------
deviceshake.jsを読み込むと、windowオブジェクトに次のイベントが追加されます。

* devicesway
  端末を弱く振ると発生します。

* deviceshake
  端末を強く振ると発生します。

これらのイベントに対して、任意の処理を割り当てることができます。


* Vanilla JS（≒他のJavaScriptライブラリに依存しない書き方）
```javascript
window.addEventListener('deviceshake', function(){
    //do something
});
```

* jQuery 1.7+
```javascript
$(window).on('deviceshake', function(){
    //do something
});
```


動作確認済み環境
----------------
* Android 4.0+ Browser
* Google Chrome for Android
* iOS 5.0+ Safari 
* Google Chrome for iOS

Android 2.x系のブラウザは、そもそも devicemotion イベントに対応していないので動作しません。


ライセンス
----------
This is MIT LICENSE :)


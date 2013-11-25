deviceshake.js
===============

何これ？
--------
devicemotionイベントを使って、スマートフォン/タブレット端末を振った時にイベントを起こすためのJavaScriptライブラリです。

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
	//
});
```


* jQuery 1.7+
```javascript
$(window).on('deviceshake', function(){
	//
});
```


This is MIT LICENSE :)


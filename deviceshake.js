/**
 * deviceshake.js
 * https://github.com/tekiton/deviceshake.js
 * 
 * @author tekiton
 * @license MIT LICENSE :)
 */
;(function(){
	
	var dispatchInterval = 200;
	
	var devicesway  = {
		eventName: 'devicesway',
		threshold: 0.5
	};
	
	var deviceshake = {
		eventName: 'deviceshake',
		threshold: 7
	};
	
	var accelerationIncludingGravity     = { x:0, y:0, z:0 };
	var accelerationIncludingGravityDiff = { x:[0], y:[0], z:[0] };
	
	window.addEventListener('devicemotion', function(e){
		
		var g = e.accelerationIncludingGravity;
		
		var x = Math.abs(accelerationIncludingGravity.x - g.x) / 3;
		var y = Math.abs(accelerationIncludingGravity.y - g.y) / 3;
		var z = Math.abs(accelerationIncludingGravity.z - g.z) / 3;
		
		accelerationIncludingGravity.x = g.x;
		accelerationIncludingGravity.y = g.y;
		accelerationIncludingGravity.z = g.z;
		
		accelerationIncludingGravityDiff.x.push(x);
		accelerationIncludingGravityDiff.y.push(y);
		accelerationIncludingGravityDiff.z.push(z);
		
	});
	
	var timer = setInterval(function(){
		
		var x = Math.max.apply(null, accelerationIncludingGravityDiff.x);
		var y = Math.max.apply(null, accelerationIncludingGravityDiff.y);
		var z = Math.max.apply(null, accelerationIncludingGravityDiff.z);
		
		if( x>devicesway.threshold || y>devicesway.threshold ){
			var swayEvent = document.createEvent('HTMLEvents');
			swayEvent.initEvent(devicesway.eventName, false, false);
			window.dispatchEvent(swayEvent)
		}
		
		if( x>deviceshake.threshold || y>deviceshake.threshold ){
			var shakeEvent = document.createEvent('HTMLEvents');
			shakeEvent.initEvent(deviceshake.eventName, false, false);
			window.dispatchEvent(shakeEvent)
		}
		
		accelerationIncludingGravityDiff.x = [0];
		accelerationIncludingGravityDiff.y = [0];
		accelerationIncludingGravityDiff.z = [0];
		
	}, dispatchInterval);
	
}).call(this);

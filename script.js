// ==UserScript==
// @name        slitherio plugin
// @namespace   tonyjiang.me
// @description Plugin for slither.io
// @include     http://slither.io/*
// @include     https://slither.io/*
// @version     1.13
// @grant       none
// ==/UserScript==

function updateElem() {
  currServ = bso ? bso.ip + ':' + bso.po : 'None';
  var x = snake ? parseInt(snake.xx) : 0;
  var y = snake ? parseInt(snake.yy) : 0;
  topElem.textContent = 'Server: ' + currServ + ', ' + 'X: ' + x + ', Y: ' + y;
}

function force(elem) {
  var splitArr = elem.value.split(':');
  if (splitArr.length > 1) forceServer((splitArr[0] || ''), (splitArr[1] || ''));
}

var topElem = document.createElement('span');
(function(w) {
    function zoom(e) {
        if (!w.gsc) {
            return;
        }
        w.gsc *= Math.pow(0.9, e.wheelDelta / -120 || e.detail || 0);
    }
    document.body.onmousewheel = zoom;
    topElem.style.position = 'fixed';
    topElem.style.zIndex = '666';
    topElem.style.top = '5px';
    topElem.style.textAlign = 'center';
    topElem.style.width = '100%';
    topElem.style.fontSize = '20px';
    topElem.style.fontFamily = 'Verdana';
    topElem.style.color = '#FFF';
    document.body.appendChild(topElem);

    var parent = document.getElementById('playh');
    var div = document.createElement('div');
    var input = document.createElement('input');
    var currServ = 'None';

    div.style.width = '244px';
    div.style.margin = '14px auto';
    div.style.background = '#4c447c none repeat scroll 0% 0%';
    div.style.boxShadow = '0px 6px 50px rgb(0, 0, 0)';
    div.style.border = '2px solid rgba(0, 0, 0, 1)';
    div.style.borderRadius = '29px';
    div.style.display = 'block';
    div.style.padding = '5px';
    div.style.fontFamily = 'Verdana';
    div.style.position = 'relative';

    input.type = 'text';
    input.placeholder = 'IP-Address:Port';
    input.style.margin = '2px';
    input.style.background = 'rgba(0, 0, 0, 0) none repeat scroll 0 0';
    input.style.border = '0 none';
    input.style.color = '#e0e0ff';
    input.style.fontSize = '15px';

    play = document.getElementById("playh");
    play.onclick = function() { force(input); };

    div.appendChild(input);

    parent.appendChild(div);
    timerID = setInterval(function () {
        updateElem();
    }, 1000);
})(window);

document.getElementById('top2-1-p').innerText = genRepeatString(43, '前端');
document.getElementById('top2-2-p').innerText = genRepeatString(43, '前端');
document.getElementById('top2-3-p').innerText = genRepeatString(13, '前端');

function genRepeatString(times, str) {
  var x = "",
    i = 0;
  while (i < times) {
    x = x + str;
    i++;
  }
  return x;
}

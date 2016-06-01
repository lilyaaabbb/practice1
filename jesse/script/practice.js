document.getElementById('top2-1-td').innerHTML = genRepeatString(87, '前端');
document.getElementById('top2-2-td').innerHTML = genRepeatString(70, '前端');
document.getElementById('top2-3-td').innerHTML = genRepeatString(13, '前端');

function genRepeatString(times, str) {
  var x = "<p>",
    i = 0;
  while (i < times) {
    x = x + str;
    i++;
  }
  return x + "</p>";
}

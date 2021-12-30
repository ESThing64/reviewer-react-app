process.stdin.resume();
process.stdin.setEncoding('utf8');

const chunk = [
    'Apple', 'One',
    ' ',     'Apple',
    'TWO',   ' ',
    'APPLE', 'three'
  ]
  
var stdin = '';
process.stdin.on('data', function (chunk) {
  stdin += chunk;
}).on('end', function() {
  var lines = stdin.trim().split('\n');
  for(var i=0; i<lines.length; i++) {
      console.log(chunk)



    process.stdout.write(lines[i]);
  }
});


var spawn = require('child_process').spawn;

var mochaVersion = 'mocha@4.1.0'
if(process.version < 'v4.0.0'){
  mochaVersion = 'mocha@1.0.0'
}

//check if `cnpm` exist? forget it!
//This will not run when `npm install buffer-factory`
var npm = spawn('npm', ['install', mochaVersion, "-D"], {
  cwd: process.cwd()
  , stdio: 'inherit'
})

// npm.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// npm.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });

// npm.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

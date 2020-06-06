const fs = require('fs');

var finder = require('findit')('.');
var path = require('path');
var pattern = process.argv[2].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "$";

finder.on('directory', function (dir, stat, stop) {
    var base = path.basename(dir);
    if (base === '.git' || base === 'node_modules') stop()
});
 
finder.on('file', function (file, stat) {
    if(file.match(pattern)){
        let source = file;
        let target = source.replace(/^src/, "dist");
        fs.copyFile(source, target, function(){
            console.log(`copy ${source} -> ${target}`);
        }); 
    }
});
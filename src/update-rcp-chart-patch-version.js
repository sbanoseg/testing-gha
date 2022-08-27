const yaml = require('js-yaml');
const fs   = require('fs');
const path = require('path');
console.log(__dirname);

// let filename = path.join(__dirname,'../../.chart-rcp/Chart.yaml')
let filename = path.join(__dirname,'../.chart-rcp/Chart.yaml')
let fileContent = fs.readFileSync(filename,'utf8');
let data = yaml.load(fileContent)

console.log(data);

let {version} = data;
let semanticVersion = version.split('.')
console.log(semanticVersion);
let currentPatchVersion = parseInt(semanticVersion[2])
console.log(currentPatchVersion);
newPatchVersion = currentPatchVersion + 1;
console.log(newPatchVersion);
semanticVersion[2] = newPatchVersion


data.version = semanticVersion.join('.')


fs.writeFile(filename, yaml.dump(data), (err) => {
    if (err) {
        console.log(err);
    }
});
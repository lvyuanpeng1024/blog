const fs = require('fs');
const path = require('path');
const os = require('os');

console.log(
  'begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'
);
console.log('');

const docPath = path.resolve(__dirname, './docs');
const menuFile = path.resolve(__dirname, './readme.md');
let fiels;
try {
  files = fs.readdirSync(docPath);
} catch (err) {
  console.log(err);
}
let state = fs.exists(menuFile);
if (state) {
  fs.unlink(menuFile);
  fs.unlinkSync(menuFile);
}
// 创建输入流
let ws = fs.createWriteStream(menuFile, {
  flags: 'w+',
  encoding: 'utf8',
  fd: null,
  mode: 0o666,
  autoClose: true,
});
ws.write(
  `# 目录${os.EOL}${os.EOL} |标题|详情|${os.EOL}|---|---|${os.EOL}`,
  () => {
    generator(files);
  }
);

function generator(fileList, index = 0) {
  if (!fileList[index]) {
    ws.write(`${os.EOL}${os.EOL}一共 ${index - 1} 篇文章`);
    ws.end();
    console.log(`all success,一共 ${index - 1} 篇文章`);
    return false;
  }
  let realPath = path.resolve(docPath, './' + fileList[index] + '/index.md');
  console.log(realPath);
  fs.readFile(realPath, 'utf8', (err, data) => {
    let title = data.match(/^#\ (.*)/g);
    if (!title) {
      console.log(`${realPath}文件中未找到标题`);
    } else {
      if (title) {
        title = title[0].replace('# ', '');
        // console.log(title);
        let wsData = `|${title}|[详情](./docs/${fileList[index]}/index.md)|${
          os.EOL
        }`;
        ws.write(wsData, (err, data) => {
          if (err) {
            throw new Error(`write function failed at ${file[index]}`);
            return false;
          }
          // console.log(`${fileList[index]} generator success`);
          generator(fileList, ++index);
        });
      }
    }
  });
}

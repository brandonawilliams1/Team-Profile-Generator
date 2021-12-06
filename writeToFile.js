const fs = require('fs');

function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
      if (err) {
        reject(err); 
        return;
      }

      resolve({
        ok: true,
      });
      console.log('index.html created successfully. Please check the output folder!');
    });
  });
};

module.exports = writeToFile;
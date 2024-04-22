const fs = require('fs');
const path = require('path');

const filePath = './week-2/01-async-js/medium/file.txt';

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Remove extra spaces using regular expression
  const cleanedContent = data.replace(/\s+/g, ' ').trim();

  // Write the cleaned content back to the file
  fs.writeFile(filePath, cleanedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
      return;
    }
    console.log('File cleaned successfully');
  });
});

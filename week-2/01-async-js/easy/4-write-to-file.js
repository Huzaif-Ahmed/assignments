const fs=require('fs')


fs.writeFile('./01-async-js/easy/file.txt', 'i am huzaif', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File written successfully');
    }
);

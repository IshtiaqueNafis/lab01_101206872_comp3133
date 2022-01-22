const csv = require('csv-parser');
const fs = require('fs');
const paths = ['USA.txt', "canada.txt"];

try {
    for (const pathsKey of paths) {
        fs.unlinkSync(pathsKey); // checking the path and deleting them.

    }
} catch (e) {
    console.log(e);

}


fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (row) => {

        if (row.country == "Canada") {
            let data = JSON.stringify(row);
            data += "\n";
            fs.appendFile('canada.txt',data , () => {

            })

        }
        if (row.country == "United States") {
            let data = JSON.stringify(row);
            data += "\n";
            fs.appendFile('USA.txt',data , () => {

            })
        }
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });
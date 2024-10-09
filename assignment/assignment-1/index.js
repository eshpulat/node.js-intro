const fs = require("fs");

class Data {
    read(fileUrl) {
        return fs.readFileSync(fileUrl, "utf-8");
    }

    parse(content) {
        return content.split("\n");
    }

    parseRow(row) {
        return row.split(",");
    }

    format(fileUrl) {
        const content = this.read(fileUrl);

        const all = this.parse(content);

        const header = this.parseRow(all[0]);

        const rows = all.slice(1);

        const formettedData = rows.map((row) => {
            const personArr = this.parseRow(row);
            const personObject = {};

            for (let i = 0; i < header.length; i++) {
                const label = header[i];
                const value = personArr[i];

                personObject[label] = value;
            }

            return personObject;
        });
        return formettedData;
    }
}

const dataProcessor = new Data();
const result = dataProcessor.format("data.csv");
console.log(result);

// Reading a CSV File with fs

// In this scenario, we have a CSV file called data.csv that contains a list of people with their Age, Name, ID, and Profession. Here’s a brief look at the file content:

// Age,Name,ID,Profession
// 25,John Smith,12345,Engineer
// 32,Alice Williams,67890,Teacher
// 41,Bob Johnson,11223,Doctor
// 23,Claire Brown,44556,Artist

const fs = require("fs");

class Data {
    // Method to read the file from the provided file path
    read(fileUrl) {
        // fs.readFileSync reads the file content synchronously, and 'utf-8' ensures it reads as a string
        return fs.readFileSync(fileUrl, "utf-8");
    }

    // Method to split the file content by newline to separate each row
    parse(content) {
        // Splits the CSV content at each newline (\n), turning it into an array of rows
        return content.split("\n");
    }

    // Method to split each row into individual columns (Age, Name, etc.)
    parseRow(row) {
        // Splits each row string by commas, turning it into an array of values (Age, Name, etc.)
        return row.split(",");
    }

    // Central method to format the CSV content into an array of objects
    format(fileUrl) {
        // Read the entire CSV file as a string
        const content = this.read(fileUrl);

        // Parse the content into an array of rows
        const all = this.parse(content);

        // Extract the first row (the header), which contains the column names
        const header = this.parseRow(all[0]);

        // Exclude the header and process only the data rows
        const rows = all.slice(1);

        // Map over each row, converting it into an object
        const formattedData = rows.map((row) => {
            const personArr = this.parseRow(row); // Parse the row into an array
            const personObj = {}; // Create an empty object to hold the person's data

            // Loop through each column in the header and assign values to the object
            for (let i = 0; i < header.length; i++) {
                const label = header[i]; // Get the column name (e.g., Age, Name)
                const value = personArr[i]; // Get the corresponding value from the row (e.g., 25, John Smith)
                personObj[label] = value; // Add the key-value pair to the object
            }

            return personObj; // Return the final object for this row
        });

        return formattedData; // Return the array of objects
    }
}

// Usage Example:
const dataProcessor = new Data();
const result = dataProcessor.format("data.csv");
console.log(result);

// Used to read and write data to JSON file
import fs from 'node:fs';
import path from 'node:path';

function getPath(file) {
    return path.join('data', file.concat('.json'));
}

class DB {
        /**
     * Reads a file and returns JSON as JS Object.
     * 
     * @param {string} file - file to read (full path)
     * @returns {Object} content - JSON converted to JS Object
     */
    readJSON(file) {
        const content = fs.readFileSync(getPath(file));
        return JSON.parse(content);
    }
    /**
     * Writes information to a specified JSON file.
     * @param {string} file - file to be written to
     * @param {any} data - Data to be written to the JSON file
     */
    writeJson(file, data) {
        fs.writeFileSync(getPath(file), JSON.stringify(data));
    }
    /**
     * Appends information to a already existing file
     * @param {string} file 
     * @param {any} data 
     */
    appendJson(file, data) {
        fs.appendFileSync(getPath(file), JSON.stringify(data));
    }
}

export { DB };
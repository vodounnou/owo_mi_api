import { v4 as uuidv4 } from 'uuid';
import { createHash } from "crypto";

function generateId(){
    const uniqueId = uuidv4();
    return uniqueId;

}

function hashpass(password) {
    return createHash('sha1').update(password).digest('hex');
}

function generateUniqueCode() {
    let code = "";
    while (code.length < 5) {
        const digit = Math.floor(Math.random() * 10);
        if (code.indexOf(digit.toString()) === -1) {
            code += digit.toString();
        }
    }
    return code;
}
export {generateId, hashpass, generateUniqueCode};
const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    const data = JSON.parse(event.body);
    const { username, telegramId, svg } = data;

    // Путь к файлу person.json
    const filePath = path.resolve(__dirname, '../../person.json');
    console.log('filePath:', filePath);

    let existingData = [];

    try {
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            existingData = JSON.parse(fileContent);
        }
    } catch (error) {
        console.error('Error reading person.json:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: 'Error reading person.json', error: error.message }),
        };
    }

    // Добавление новых данных
    existingData.push({ username, telegramId, svg });

    // Сохранение данных в JSON файл
    try {
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } catch (error) {
        console.error('Error writing to person.json:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: 'Error saving avatar', error: error.message }),
        };
    }
};

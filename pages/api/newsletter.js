const fs = require('fs');

const { google } = require('googleapis');
const { DateTime } = require('luxon');

const patterns = {
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
}

async function authenticate() {
    const credentials = JSON.parse(fs.readFileSync('components/chave-gcp.json'));
  
    const auth = new google.auth.GoogleAuth({
        credentials: credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
  
    return auth;
}

export default async function handler(req, res) {
    const body = { ...req.body };
    var errors = [];

    var { email } = body;

    if (!patterns.email.test(email) && contact == 'email') {            
        errors.push('email');
    }

    if (errors.length > 0) {
        res.status(400).json(errors);
        return;
    }    

    let timestamp = DateTime.now()
        .setZone('America/Sao_Paulo')
        .toFormat('dd/MM/yyyy HH:mm');

    try {    
        const auth = await authenticate();
        const sheets = google.sheets({ version: 'v4', auth });

        const spreadsheetId = '1enUVWNn7bY9Cv9fAY8lGDlsrlK8VVpHSPVsMUUB4dAE';
        const range = 'Folha_2!A:B';
        const values = [[email, timestamp]];

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'RAW',
            insertDataOption: 'INSERT_ROWS',
            requestBody: { values },
        });

        console.log('Lead adicionado a planilha.', response.data);

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Erro ao adicionar lead a planilha.', error.message);

        res.status(500).json({ success: false, error: error.message });
    }
}

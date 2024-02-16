const fs = require('fs');

const { google } = require('googleapis');
const { DateTime } = require('luxon');


const patterns = {
    phone: /^\([0-9]{2}\)\s[0-9]{4,5}-[0-9]{4}$/,
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

    var {
        name,
        email,
        phone,
        select,
        contact
    } = body;

    if (!patterns.email.test(email) && contact == 'email') {            
        errors.push('email');
    }

    if (!patterns.phone.test(phone) && ['phone', 'whatsapp'].includes(contact)) {
        errors.push('phone');
    }

    if (!select || select == '' ) {
        errors.push('select');
    }

    if (name.length < 3) {
        errors.push('name');
    }

    if (errors.length > 0) {
        res.status(400).json(errors);
        return;
    }    

    let timestamp = DateTime.now()
        .setZone('America/Sao_Paulo')
        .toFormat('dd/MM/yyyy HH:mm');

    switch (select) {
        case 'rolo-screen':
            select = 'Persiana Rolô Screen';
            break;
    
        case 'rolo-blackout':
            select = 'Persiana Rolô Blackout';
            break;

        case 'rolo-double-vision':
            select = 'Persiana Rolô Double Vision';
            break;
        
        case 'horizontal':
            select = 'Persiana Horizontal';
            break;
        
        case 'vertical':
            select = 'Persiana Vertical';
            break;
        
        case 'romana':
            select = 'Persiana Romana';
            break;
        
        default:
            select = 'Outra'
            break;
    }

    switch (contact) {
        case 'email':
            contact = 'E-mail';
            break;
    
        case 'phone':
            contact = 'Telefone';
            break;

        case 'whatsapp':
            contact = 'WhatsApp';
            break;
        
        default:
            contact = 'Outro'
            break;
    }

    try {    
        const auth = await authenticate();
        const sheets = google.sheets({ version: 'v4', auth });

        const spreadsheetId = '1enUVWNn7bY9Cv9fAY8lGDlsrlK8VVpHSPVsMUUB4dAE';
        const range = 'Folha_1!A:F';
        const values = [[name, email, phone, select, contact, timestamp]];

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

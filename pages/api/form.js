const patterns = {
    phone: /^\([0-9]{2}\)\s[0-9]{4,5}-[0-9]{4}$/,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
}

export default function handler(req, res) {
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
    
    res.status(200).send('Sucesso!');
}
  
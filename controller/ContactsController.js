const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey:'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'});

const ContactsGet = function (req, res) {
    res.render('contacts')
}

const ContactsPost = async function(req,res) {
    try {
        const info = "Tendo em conta que és um assistente virtual de um ginasio de MMA e vais fornecer informações para pessoas. "+
        "Fica a saber das seguinter informações: Localização:St. Saint Andrew , email:mmaclub@gmail , telefone: +351 920 000 000, telefone fixo:291 500 600."+"Existem 3 planos de subscrição: ";
        
            const planos = " 1ºPlano - 'Aulas de MMA' -  que inclui avaliação, estacionamento gratis, aulas de MMA 3 vezes por semana e torneios, custa 19,99€/mês."+
        " 2º Plano - 'Aulas de MMA + ginasio' - que inclui avaliação, estacionamento grátis, aulas de MMA 3 vezes por semana, torneios e acesso completo ao ginasio, custa 39,99€/mês."+
        " 3º Plano - 'Ginasio' - Possui avaliação, estacionamento gratis e acesso completo ao ginasio, custa 29,99€/mês."+
        " Duvida: ";

        const request = req.body.duvida;
        const mensagem = info + planos + request; 

        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: mensagem }],
            model: "gpt-3.5-turbo", max_tokens: 500,temperature:1,
        });
        
        const respostaIa = completion.choices[0];

        res.render('contacts', { resposta: respostaIa });
        console.log(respostaIa);

    } catch (error) {
        console.log(error);
    }
}

module.exports = {ContactsPost,ContactsGet}
const Agenda = require('../models/AgendaModel.js');
const Phone = require('../models/PhoneModel.js');

const getAll = async (req, res) => {
    try{
        const agenda = await Agenda.findAll({
            include: [Phone]
        });
        res.json(agenda);
    }catch(error){
        console.error(error);
        res.status(500).send('Erro ao Buscar Informões de Contato.');
    }
};

const post = async (req, res) => {
    try{
        const {
            name,
            sector,
            phone
        } = req.body

        const agenda = await Agenda.create({
            name,
            sector,
        });

        if(phone?.length){
            const phoneData = phone.map(item => ({
                number: item.number,
                type: item.type,
                agendaId: agenda.id,
            }));
            await Phone.bulkCreate(phoneData);
        }

        res.status(200).send();
    }catch(error){
        console.error(error);
        res.status(500).send('Erro ao adicionar.');
    }
}

const deleteAgenda = async (req, res) => {
    try{
        const id = req.params.id;
        const agenda = await Agenda.findByPk(id);
        agenda.destroy({ where: {id: id}});
        res.status(200).send('Deletado');
    }catch(error){
        res.status(500).send('Erro ao deletar');
    }
};


module.exports = {
    getAll,
    post,
    deleteAgenda
}
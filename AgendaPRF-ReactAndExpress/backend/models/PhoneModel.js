const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const AgendaModel = require('./AgendaModel.js');

const PhoneModel = sequelize.define('PhoneModel', {
    number: DataTypes.STRING,
    type: DataTypes.STRING,
    agendaId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'PhoneVoips'
}
);

PhoneModel.belongsTo(AgendaModel, {
    foreignKey: 'agendaId',
    onDelete: 'CASCADE'
});

AgendaModel.hasMany(PhoneModel, {
    foreignKey: 'agendaId'
});

module.exports = PhoneModel;
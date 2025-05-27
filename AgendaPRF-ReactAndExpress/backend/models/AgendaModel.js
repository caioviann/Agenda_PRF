const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const AgendaModel = sequelize.define('AgendaModel', {
    sector: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'AgendaVoips'
}
);

module.exports = AgendaModel;
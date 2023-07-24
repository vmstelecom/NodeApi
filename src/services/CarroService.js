const db = require('../db.js');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros', (error, results) => {
                if(error) { rejeitado(error); return;}
                aceito(results);
            });
        });
    }
};
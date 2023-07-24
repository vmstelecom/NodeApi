const CarroService = require('../services/CarroService.js');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error: '', result: []};
        let carros = await CarroService.buscarTodos();

        for (let i in carros) {
            json.result.push({
                id: carros[i].id,
                dcad: carros[i].dcad,
                modelo: carros[i].modelo,
                marca: carros[i].marca,
                placa: carros[i].placa,
                km: carros[i].km,
                data: carros[i].data,
                valor_litro: carros[i].valor_litro,
                valor_total: carros[i].valor_total,
                litros: carros[i].litros,
                consumo: carros[i].consumo
            });          
        }
        return res.json(json);
    },
    buscarUm: async (req, res) => {
        let json = {error: '', result: {}};
        let codigo = req.params.codigo;
        let carro = await CarroService.buscarUm(codigo);

        if(carro){
            json.result = carro;
        }
        res.json(json);
    }
}
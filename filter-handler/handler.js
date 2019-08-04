'use strict';

const filterService = require('./services/filterService');

module.exports.filter = async event => {
  console.log("Evento SNS", JSON.stringify(event))

  await filterService.filter(event);

  return {
    message: 'Filtro Gerado com sucesso!',
    event
  };
};


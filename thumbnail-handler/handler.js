'use strict';

const thumbnailService = require('./services/thumbnailService');

module.exports.thumbnail = async event => {
  console.log("Evento SNS", JSON.stringify(event))

  await thumbnailService.thumbnail(event);

  return {
    message: 'Thumbnail Gerado com sucesso!',
    event
  };
};

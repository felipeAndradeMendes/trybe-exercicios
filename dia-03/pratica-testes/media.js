function calculaMedia(media) {
  if (media >= 7) {
    return 'aprovação';
  }

  return 'reprovação';
};

module.exports = { calculaMedia };
function validationErrorMessages(err) {
  const errorMessages = err.errors.map((element) => {
    return element.message;
  });
  return errorMessages;
}

module.exports = validationErrorMessages;

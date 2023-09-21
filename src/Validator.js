class Validator {

  validateUsername(str) {
    return /^([^0-9]|-|_)([a-z]|-|_|[0-9]{0,3})([^0-9]|-|_)$/.test(str)
  }

}
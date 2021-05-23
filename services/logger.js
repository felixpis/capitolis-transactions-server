function log(label, req, res = {}) {
  console.log(label, 'req: ' + JSON.stringify(req), 'res: ' + JSON.stringify(res));
}

module.exports = {
  log
}
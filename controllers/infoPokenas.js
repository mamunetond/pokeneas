module.exports = function (req, res){
  const number = Math.floor(Math.random() * 7);
  res.send(pokenea[number].slice(0, 4)+"\n - Container Id: "+os.hostname())
}

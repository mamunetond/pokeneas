module.exports = function (req,res) {
const number = Math.floor(Math.random() * 7);
res.send(pokenea[number].slice(4, 5)+"\n - Container Id: "+os.hostname())
}
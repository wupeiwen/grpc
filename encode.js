const NodeRSA = require('node-rsa')
const key = new NodeRSA()

const keyData = `-----BEGIN RSA PRIVATE KEY-----
MIIBOwIBAAJBAL54Jf8r/VTYQf7aMgM8UIo5QVLH3uwYaMOZF3FI9uKxyTKakExU
BAytdO5/ZlWpzgKYQ+wwNJ2D+Q5l+xLCMXUCAwEAAQJBAI6v44ctpTKSb55ER4M1
BAEIs28YXF/ySUl+vpkXWByqV5NVEyshA2K2cpqwaaT7Bn3IPQDB5EEsR8Niuj/Y
k2ECIQDt5VWhwVd4Kmri+bMFmYFu5bFqCNF+HMXvusN0q3hP4wIhAMz22txFYqum
jrZolMq+jYKmMJZZAn+XTpI8AvsF3wjHAiBiR+OHrvt27nc4DBaUkqVxbj1MZBZA
NpzjfFHxakGLJwIhAJDV88xpv5L6bKibeGFYjBkBpR3pIinVWvFdNOH7wSKrAiBZ
rcDlw3OkzIlGGrKQrqazfSycP1HJzOgBPm58S6+HKg==
-----END RSA PRIVATE KEY-----`

key.importKey(keyData)

function encode(machineId) {
  const encodeMachineId = key.encryptPrivate(machineId, 'base64')
  return encodeMachineId
}

module.exports.encode = encode
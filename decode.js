const NodeRSA = require('node-rsa')
const key = new NodeRSA()

const keyData = `-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAL54Jf8r/VTYQf7aMgM8UIo5QVLH3uwY
aMOZF3FI9uKxyTKakExUBAytdO5/ZlWpzgKYQ+wwNJ2D+Q5l+xLCMXUCAwEAAQ==
-----END PUBLIC KEY-----`

key.importKey(keyData)

function decode(cdkey) {
  const machineId = key.decryptPublic(cdkey, 'utf8')
  return machineId
}

module.exports.decode = decode

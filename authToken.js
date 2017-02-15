const crc = require('./lib/crc16-ccitt').crc16;
const CryptoJS = require('crypto-js');
const key = '4CBB56AA780000C365FFEF4423122C2C';
//const eas = require('./lib/eas');
const iv = '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0';
module.exports.getToken = function(pid){
	code = dwh(dechex(new Date().getTime()))+'640000'+dwh(dechex(pid))+"0000"; 
	code += crc(code).toString().substr(0,4);
	console.log(code);
	code = CryptoJS.AES.encrypt(code, key, { iv: iv }).toString();
	//code = eas.DefEncryptBlock(eas.hex2str(code));
	console.log(code);
	code = new Buffer(code).toString('base64');
	code = code.replace(/=/g,'_').replace(/\//g,']').replace(/\+/g,'[');
	console.log(code);
	return code;	
}
function dwh(h)
{
	h = "0000000"+h
	s = h.substr(-8); 
    s = s.substr(6,2)+s.substr(4,2)+s.substr(2,2)+s.substr(0,2);
	return s;
}
function dechex(number)
{
	if (number < 0) {
		number = 0xFFFFFFFF + number + 1;
	}
	return parseInt(number, 10).toString(16);
}

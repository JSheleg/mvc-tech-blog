const{ User} = require('../models');

const userData =[

{"username":"ogingle0","email":"gcash0@netvibes.com","password":"2rHWqV"},
{"username":"mwrenn1","email":"fbenardeau1@bing.com","password":"yb2ljl8mqeS0"},
{"username":"rsuett2","email":"tconningham2@wikimedia.org","password":"RsuMaV1D3Z"},
{"username":"jcordero3","email":"gweich3@joomla.org","password":"mstJiqy"},
{"username":"dmonument4","email":"cjeste4@nsw.gov.au","password":"CM0mtwG0H"},
{"username":"lakaster5","email":"cpeepall5@time.com","password":"VJROBpo8x"},
{"username":"cjuszczak6","email":"rlutton6@addtoany.com","password":"5OairtK"},
{"username":"isuccamore7","email":"wewings7@amazon.com","password":"RpFsmtpL5o"},
{"username":"spitrasso8","email":"wmurrell8@artisteer.com","password":"YdNUsmFyhdfH"},
{"username":"eganders9","email":"amilliere9@netscape.com","password":"0Q8qkZ0dP"}

]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers
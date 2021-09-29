const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')



const simih = async (text) => {
	try {
		const sami = await fetch(`https://api.zeks.me/api/simi?apikey=ardanfajars&text=${text}`, {method: 'GET'})
		const res = await sami.result
		return res.success
	} catch {
		return 'Simi ga tau apa yang anda ngomong, bahasa alien yah kak?'
	}
}
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}





module.exports = { simih, getRandom }
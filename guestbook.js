let amount = 0

const getGuests = (req, res) => {
   amount++
   res.send(JSON.stringify('du är besökare nummer:' + ' ' +amount))
}

module.exports = getGuests
const express = require('express'),
    router = express.Router(),
    config = require('config'),
    fs = require('file-system');

router.get('/api/cartoons', (req, res) => res.send(getDbCartoons()));

function getDbCartoons() {
    return JSON.parse(fs.readFileSync(config.get('database.cartoons'), 'utf8'));

}
module.exports = router;
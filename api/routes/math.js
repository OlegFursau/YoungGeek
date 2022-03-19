const express = require('express'),
    router = express.Router(),
    config = require('config'),
    fs = require('file-system');

router.get('/api/math', (req, res) => res.send(getDbMath()));

function getDbMath() {
    return JSON.parse(fs.readFileSync(config.get('database.math'), 'utf8'));
}

module.exports = router;
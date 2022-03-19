const express = require('express'),
    router = express.Router(),
    config = require('config'),
    fs = require('file-system');

router.get('/api/english', (req, res) => res.send(getDbEnglish()));


function getDbEnglish() {
    return JSON.parse(fs.readFileSync(config.get('database.english'), 'utf8'));

}

module.exports = router;
const express = require('express');
const searchController = require('searchController');

const router = express.Router();

router.get('/search', searchController.searchResults);

module.exports = router;

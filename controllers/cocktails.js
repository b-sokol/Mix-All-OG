const Cocktail = require('../models/cocktail');
const request = require('request');
const key = process.env.COCKTAIL_KEY;
const base = process.env.COCKTAIL_HOST;
const root = 'https://www.thecocktaildb.com/api/json/v1/1';

module.exports = {
  index,
  getAllFilters,
  getAllIngredients,
  getAllGlasses,
  getAllCategories,
  searchByIngredient,
};

function index(req, res) {
  const cocktails = [];
  request(options[0], function (err, res, body) {
    if (err) throw new Error(err);
    console.log(body);
    cocktails.push(JSON.parse(body));
  });
  res.render('cocktails/index', { title: 'All Cocktails', cocktails });
}

function searchByIngredient(req, res) {
  request(
    {
      method: 'GET',
      url: `https://${base}/filter.php`,
      qs: { i: ing },
      headers: {
        'x-rapidapi-host': `${base}`,
        'x-rapidapi-key': `${key}`,
        useQueryString: true,
      },
    },
    function (err, response, body) {
      if (err) throw new Error(err);

      console.log(body);
    }
  );
}

const options = [
  {
    method: 'GET',
    url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
    qs: { c: 'Cocktail' },
    headers: {
      'x-rapidapi-host': `${base}`,
      'x-rapidapi-key': `${key}`,
      useQueryString: true,
    },
  },
  {
    method: 'GET',
    url: `https://${base}/list.php`,
    qs: { a: 'list' },
    headers: {
      'x-rapidapi-host': `${base}`,
      'x-rapidapi-key': `${key}`,
      useQueryString: true,
    },
  },
  {
    method: 'GET',
    url: `https://${base}/list.php`,
    qs: { i: 'list' },
    headers: {
      'x-rapidapi-host': `${base}`,
      'x-rapidapi-key': `${key}`,
      useQueryString: true,
    },
  },
  {
    method: 'GET',
    url: `https://${base}/list.php`,
    qs: { g: 'list' },
    headers: {
      'x-rapidapi-host': `${base}`,
      'x-rapidapi-key': `${key}`,
      useQueryString: true,
    },
  },
  {
    method: 'GET',
    url: `https://${base}/list.php`,
    qs: { c: 'list' },
    headers: {
      'x-rapidapi-host': `${base}`,
      'x-rapidapi-key': `${key}`,
      useQueryString: true,
    },
  },
];

function getAllFilters(req, res) {
  request(
    {
      method: 'GET',
      url: `https://${base}/list.php`,
      qs: { a: 'list' },
      headers: {
        'x-rapidapi-host': `${base}`,
        'x-rapidapi-key': `${key}`,
        useQueryString: true,
      },
    },
    function (err, response, body) {
      if (err) throw new Error(err);
      const filters = JSON.parse(body);
      console.log(body);
    }
  );
}

function getAllIngredients(req, res) {
  request(
    {
      method: 'GET',
      url: `https://${base}/list.php`,
      qs: { i: 'list' },
      headers: {
        'x-rapidapi-host': `${base}`,
        'x-rapidapi-key': `${key}`,
        useQueryString: true,
      },
    },
    function (err, response, body) {
      if (err) throw new Error(err);
      const ingredeients = JSON.parse(body);
      console.log(body);
    }
  );
}

function getAllGlasses(req, res) {
  request(
    {
      method: 'GET',
      url: `https://${base}/list.php`,
      qs: { g: 'list' },
      headers: {
        'x-rapidapi-host': `${base}`,
        'x-rapidapi-key': `${key}`,
        useQueryString: true,
      },
    },
    function (err, response, body) {
      if (err) throw new Error(err);
      const glasses = JSON.parse(body);
      console.log(body);
    }
  );
}
function getAllCategories(req, res) {
  request(
    {
      method: 'GET',
      url: `https://${base}/list.php`,
      qs: { c: 'list' },
      headers: {
        'x-rapidapi-host': `${base}`,
        'x-rapidapi-key': `${key}`,
        useQueryString: true,
      },
    },
    function (err, response, body) {
      if (err) throw new Error(err);
      const categories = JSON.parse(body);
      console.log(body);
    }
  );
}

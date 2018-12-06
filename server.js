const React = require('react');
require('node-jsx').install({
    harmony: true,
    extension: '.jsx'
});
const App = React.createFactory(require('./client/src/components/App'));
express = require('express');
router = express('router');

router.get('/', (req, res) => {
    const markup = React.renderToString(
        App()
    );
    res,render('index', {
        markup: markup
    });
});

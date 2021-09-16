'use strict'

const cart = require('./cart');

const actions = {
    add: cart.add,
    change: cart.change,
    remove: cart.remove
};

const handler = (req, res, action, file) => {
    Fs.readFile(file, 'utf8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            let newCart  = actions[action](JSON.parse(data), req);
            Fs.writeFile(file, newCart, (err) => {
                if(err){
                    res.send(JSON.stringify({result: 0, text: err}));
                } else{
                    res.send(JSON.stringify({result: 1, text: 'Success'}));
                }
            });
        }
    })
};

module.exports = handler;
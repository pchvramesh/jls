const e = require('express')(), r= require('http'), u= require('url'), p = 1314, ls = 'http://xidea.online';
e.get('*', function (req, res) {const x = u.resolve(ls, req.url).toString();r.get(x, function (a) {res.headers = a.headers;let b = '';a.on('data', function (c) {b+= c;});a.on('end', function () {res.send(b);});})});
e.listen(p, function () {console.log('server started', p);});
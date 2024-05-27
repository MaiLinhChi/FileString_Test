class General {
    home(req, res) {
        res.status(200).send('<h1>Welcome to my test. <a href="/documentations">Documentations</a></h1>');
    }

    notFound(req, res) {
        res.status(404).send('Not found');
    }
}

module.exports = new General
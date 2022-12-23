const router = require('express').Router();

const { Film } = require('../../db');

router.get('/', async (req, res) => {
    const films = await Film.findAll();
    res.json(films);
});

router.post('/', async (req, res) => {
    try{
        const film = await Film.create(req.body);
        res.json(film);
    }
    catch{
        res.json('no');
    }
});

router.put('/:filmId', async (req, res) => {
    await Film.update(req.body, {
        where: { id: req.params.filmId }
    });
    res.json({ success: 'Se ha modificado' })
});

router.delete('/:filmId', async (req, res) => {
    await Film.destroy({
        where: { id: req.params.filmId}
    });
    res.json( { success: 'Se ha borrado' });
})


module.exports = router;
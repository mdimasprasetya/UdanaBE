var express = require("express");
var router = express.Router();
const Validator = require("fastest-validator");

const { Pekerjaan } = require('../models');

const v = new Validator();


//get
router.get('/', async (req, res) => {
    const pekerjaan = await Pekerjaan.findAll();
    return res.json(pekerjaan)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const pekerjaans = await Pekerjaan.findByPk(id);
    return res.json(pekerjaans || {})
})


//post
router.post("/", async (req, res) => {
  const schema = {
    name: "string",
    pekerjaan: "string",
    description: "string|optional",
  }

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const pekerjaan = await Pekerjaan.create(req.body);

  res.json(pekerjaan);

//   res.send("OK");
});

//put

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    
    let pekerjaan = await Pekerjaan.findByPk(id);

    if(!pekerjaan){
        return res.json({
            message: 'pekerjaan not found'
        })
    }

    
    const schema = {
        name: "string|optional",
        pekerjaan: "string|optional",
        description: "string|optional",
      }
    
      const validate = v.validate(req.body, schema);
      
      if (validate.length) {
        return res.status(400).json(validate);
      }

      pekerjaan = await pekerjaan.update(req.body);
      res.json(pekerjaan);
});


//delete
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    
    const pekerjaan = await Pekerjaan.findByPk(id);

    if(!pekerjaan){
        return res.json({
            message: 'pekerjaan not found'
        })
    }

    await pekerjaan.destroy();
    res.json({
        message: 'Pekerjaan di hapus'
    })
})

module.exports = router;

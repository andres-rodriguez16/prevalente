require('dotenv').config();

const { Router } = require("express")
const router = Router();
const { Empresa } = require("../db")


router.get("/", async (req, res) => {
  try {
    const getEmpresa = await Empresa.findAll()
    res.json(getEmpresa)
  } catch (error) {
   throw error
  }
})

module.exports = router;


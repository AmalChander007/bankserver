//import
const {register,login,getBalance,moneyTransfer,passBook, deleteUser} = require ('../controllers/logic')
const express = require('express')
const { jwtmiddleware } = require('../middlewares/jwtmiddleware')


//router object
const router = new express.Router()

// create ac - signup
router.post('/bankuser/create_acc',register)

// login
router.post('/bankuser/login',login)

// balance check
router.get('/bankuser/balance/:acno',jwtmiddleware,getBalance)

// money transfer
router.post('/moneytransfer',jwtmiddleware,moneyTransfer)

// account statement
router.get('/bankuser/passbook/:acno',jwtmiddleware,passBook)

// delete account
router.delete('/bankuser/delete/:acno',jwtmiddleware,deleteUser)

// export
 module.exports=router
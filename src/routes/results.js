import express from 'express'
import { connectionMysql } from '../config/mysql_config.js'

const router = express.Router()

router.post('/', (req, res) => {
    const { firstName, lastName, mothersLastName, fathersLastName, birthDate, email, phone } = req.body

    // create a new result in the database for the users_test_kevindm table
    const sql = `INSERT INTO users_test_kevindm (first_name, last_name, mothers_last_name, fathers_last_name, birthday_date, email, phone, created_at, updated_at) VALUES ("${firstName}", "${lastName}", "${mothersLastName}", "${fathersLastName}", "${birthDate}", "${email}", "${phone}", NOW(), NOW())`;

    connectionMysql.query(sql, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send('Internal server error')
        }

        console.log(result)
        res.status(200).send('User created')
    })
})

export default router
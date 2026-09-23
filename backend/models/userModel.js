const db = require("../database/db");


const User = {


    async getAll(){

        const [rows] = await db.query(
            "SELECT * FROM users"
        );

        return rows;

    },


    async getById(id){

        const [rows] = await db.query(
            "SELECT * FROM users WHERE id=?",
            [id]
        );

        return rows[0];

    },


    async create({name,email}){

        const [result] = await db.query(
            "INSERT INTO users (name,email) VALUES (?,?)",
            [
                name,
                email
            ]
        );


        return {
            id: result.insertId,
            name,
            email
        };

    },


    async update(id,data){

        const [result] = await db.query(
            "UPDATE users SET ? WHERE id=?",
            [
                data,
                id
            ]
        );

        return result.affectedRows > 0;

    },


    async delete(id){

        const [result] = await db.query(
            "DELETE FROM users WHERE id=?",
            [id]
        );


        return result.affectedRows > 0;

    }


};


module.exports = User;
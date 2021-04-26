/**
 * user Model
 */

const connection = require("../database/connection_database.js")

/** GET ALL */
exports.getAll = () => {
    return connection.then((conn) => {
        return conn.query(`
            SELECT *
            FROM user
        `)
    })
}

/*
/!** GET ONE *!/
exports.getOne = (id) => {
    return connection.then((conn) => {
        return conn.query(`
            SELECT beingid, fname, lname, race, P.name, force_sensitive
            FROM BEING B
                     INNER JOIN PLANET P on B.homeworld = P.planetid
            WHERE beingid = ?;
        `, id)
    })
}

/!** CREATE *!/
exports.create = (body) => {
    return connection.then((conn) => {
        return conn.query("INSERT INTO BEING SET ?", {
            fname: body.fname,
            lname: body.lname,
            race: body.race,
            homeworld: body.homeworld,
            force_sensitive: body.force
        })
    })
}

/!** UPDATE *!/
exports.update = (body, id) => {
    return connection.then((conn) => {
        return conn.query("UPDATE BEING SET ? WHERE beingid = ?", [
            {
                fname: body.fname,
                lname: body.lname,
                race: body.race,
                homeworld: body.homeworld,
                force_sensitive: body.force
            }
            , id
        ])
    })
}

/!** DELETE *!/
exports.delete = (id) => {
    return connection.then((conn) => {
        return conn.query("DELETE FROM BEING WHERE beingid = ?", [id])
    })
}*/

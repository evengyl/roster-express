/**
 * user Model
 */

/*
const connection = require("./../database/conn_db")

/!** GET ALL *!/
exports.getAll = () => {
    return connection.then((conn) => {
        return conn.query(`
            SELECT user_id, fname, lname, race, force_sensitive, name
            FROM user A
                     INNER JOIN BEING B on A.beingid = B.beingid
                     INNER JOIN FACTION F on A.factionid = F.factionid
        `)
    })
}

/!** GET ONE *!/
exports.getOne = (id) => {
    return connection.then((conn) => {
        return conn.query(`
            SELECT allegianceid, fname, lname, race, force_sensitive, name
            FROM ALLEGIANCE A
                     INNER JOIN BEING B on A.beingid = B.beingid
                     INNER JOIN FACTION F on A.factionid = F.factionid
            WHERE allegianceid = ?
        `, id)
    })
}

/!** CREATE *!/
exports.create = (body) => {
    return connection.then((conn) => {
        return conn.query("INSERT INTO ALLEGIANCE set ?", {
            beingid: body.beingid,
            factionid: body.factionid
        })
    })
}

/!** UPDATE *!/
exports.update = (body, id) => {
    return connection.then((conn) => {
        return conn.query("UPDATE ALLEGIANCE SET ? WHERE allegianceid = ?", [
            {
                beingid: body.beingid,
                factionid: body.factionid
            }
            , id
        ])
    })
}

/!** DELETE *!/
exports.delete = (id) => {
    return connection.then((conn) => {
        return conn.query("DELETE FROM ALLEGIANCE WHERE allegianceid = ?", id)
    })
}*/

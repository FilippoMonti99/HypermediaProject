import express from "express"
import { DataTypes, Sequelize } from "sequelize"
import cors from "cors"

import { fileURLToPath } from "url"
import path from "path"

import dbInitialization from "./dbInit.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite")
})

// This fixes the CORS error. This allows only request from the set origin to communicate with the server
const corsOptions = {
    origin: "http://localhost:3000" // The link of your project when run locally
}
const app = express()
app.use(express.json())
app.use(cors(corsOptions))

async function initDB() {
    const models = {}

    await db.authenticate()

    models.person = db.define('person', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    models.project = db.define('project', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        field: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        most: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        area_selection: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    })

    models.Area = db.define('area', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    models.project.belongsTo(models.person)
    models.person.hasMany(models.project)
    models.project.belongsTo(models.Area)
    models.Area.hasMany(models.project)
    

    await db.sync({ force: true })

    await dbInitialization(models)

    return models
}

async function initServer() {
    const models = await initDB()

    app.get('/people', async (req, res) => {
        const data = await models.person.findAll();

        res.status(200).json(data)
    })

    app.get('/people/:id', async (req, res) => {
        const data = await models.person.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.project
                }
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.get('/projects', async (req, res) => {
        const data = await models.project.findAll();

        res.status(200).json(data)
    })

    app.get('/projects/:id', async (req, res) => {
        const data = await models.project.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.person
                    
                },
                {
                    model: models.Area
                }
            ]
          
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.get('/areas', async (req, res) => {
        const data = await models.Area.findAll();

        res.status(200).json(data)
    })

    app.get('/areas/:id', async (req, res) => {
        const data = await models.Area.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.project
                }
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })


    // Using a different port
    app.listen(3001, () => {
        console.log("Listening on port 3001")
    })
}

initServer();
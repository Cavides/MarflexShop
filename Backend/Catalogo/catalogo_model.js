
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const catalogoScheme = new Schema(
    {
        code: {
            type: Number,
            required:true,
            unique: true,
        },
        title:{
            type: String,
            require: true,
        },
        type:{
            type: String,
            required: true,
        },
        category:{
            type: String,
            required: true,
        },
        desc:{
            type: String,
            required: true,
        },
        descripcion:{
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        medidas:{
            type: Number,
            required: true,
        },
        material:{
            type: String,
            required: true,
        },
        garantia:{
            type: String,
            required: true,
        },
        armado:{
            type: String,
            required: true,
        },
        recomendaciones:{
            type: String,
            required: true,
        },
        imagen:{
            type: String,
            required: true,
        }

    }
)

const Catalogo = model("Catalogo", catalogoScheme);

module.exports = Catalogo;
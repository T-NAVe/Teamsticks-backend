'use strict'

var Match = require ('../models/project');


var controller = {

    getMatch: function(req, res){

        var projectId = req.params.id;

        if(projectId == null) return res.status(404).send({message: "No ha ingresado un ID"});

        Match.findById(projectId, (err, project) =>{            
            if (err) return res.status(500).send({message: "Error al devolver los datos."});
            if (!project) return res.status(404).send({message: "El proyecto no existe."});
            return res.status(200).send({project});
        });
    },

    getMatchs: async function (req, res){

        Match.find({}).sort('-year').exec((err, matchs)=>{
            if(err) return res.status(500).send({message: "Error al devolver los datos."});
            if(!matchs) return res.status(404).send({message: "No hay partidas disponibles."});
            return res.status(200).send({matchs});
        });
        
    },

    getSummoners: function (req, res){
        let summonerId = parseInt(req.params.id);
        Match.find({'game.participantIdentities.player.currentAccountId': summonerId }).sort('-year').exec((err, matchs)=>{
            if(err) return res.status(500).send({message: "Error al devolver los datos"});
            if(!matchs) return res.status(404).send({message: "No hay summoners con ese criterio"});
            return res.status(200).send({matchs});
        })
    }

}

module.exports = controller;
'use strict';

let Models = require('../models');

const getTags = (res) => {
    // get all tags from database
    Models.CategoryTag.find({})
    .then((data) => {
        res.send({result: 200, data: data })
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send({ result: "Internal Server Error", data: err.message });
    })
}

const getTagByName = async (req, res) => {
    // get tag by tagName, exact match
    try {
        const tagName = req.query.name;

        if (!tagName) {
            res.status(400).send({ result: "Tag name is required" });
            return;
        }

        const matchedTag = await Models.CategoryTag.findOne({ tagName: tagName }).lean();

        if (!matchedTag) {
            res.status(204).send({ result: "No tag found with the specified name" });
            return;
        }

        res.status(200).send({ result: "Tag successfully retrieved", data: matchedTag });
    } catch (err) {
        console.error(err);
        res.status(500).send({ result: "Internal Server Error", error: err.message });
    }
};


const addTag = async (req, res) => {
    try {
        const tagName = req;
        // Validate tag input
        if (!tagName ) {
            res.status(400).send({ result: "Tag name is required" }); // code 400, 'Bad Request'
            return; // when sending responses and finishing early, manually return or end the function to stop further processing
        }

    // Validate if tag exists in database
    const oldTag = await Models.CategoryTag.findOne({ tagName: { tagName } });

    if (oldTag) {
        res.status(409).send({ result: "Tag already exists." }); // code 409, 'Conflict'
        return;
    }

    // Create tag in database
    const newTag = new Models.CategoryTag(req);
    const savedTag = await newTag.save(); // get just the tag fields, no extra sequelize metadata

    // return new tag
    res.send({ result: "Tag successfully added", data: savedTag });
    } catch (err) {
    console.log(err);
    res.status(500).send({ result: "Internal Server Error", error: err.message });
    }
};

const updateTag = (req, res) => {
    Models.CategoryTag.findByIdAndUpdate(req.params.id, req.body, {new: true} 
        ).then((data) => {
        res.send({result: 'Tag updated successfully', data: data })
        }).catch(err => {
            res.status(500).send({ result: "Internal Server Error", error: err.message });
    })
}

const deleteTag = (req, res) => {
    Models.CategoryTag.findByIdAndDelete(req.params.id
    ).then((data) => {
        res.send({ result: 'Tag deleted successfully', data: data })
    }).catch(err => {
        res.status(500).send({ result: "Internal Server Error", error: err.message });
    })
}

module.exports = {
    getTags,
    getTagByName,
    addTag,
    updateTag,
    deleteTag,
}
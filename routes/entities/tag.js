const path = require("path");
const { logger } = require("../../logger");
const db = require("../../models/index");

module.exports = function (fastify, opts, done) {
  // TO DO : Add auth middleware

  fastify.get(
    "/",
    {
      schema: {},
    },
    async (req, reply) => {
      try {
        const { sort, limit } = req.query;

        // On récupère toutes les propriétés du modèle pour filtrer les éventuels filtres reçus en query param
        const allPropertiesFromTag = Object.keys(db.Tag.rawAttributes);

        // Préparer la requete
        let filters = {};

        if (allPropertiesFromTag.includes(sort)) {
          filters.order = [[sort, "DESC"]];
        }
        if (limit && +limit < MAX_PAGINATION) {
          filters.limit = +limit;
        } else {
          filters.limit = MAX_PAGINATION;
        }

        const tag = await db.Tag.findAll(filters);

        reply.code(200).send(tag);

      } catch (error) {
        logger.log("error", "Error while searching for all Tags :" + error);
        reply.code(500).send(error);
      }
      return;
    }
  );

  fastify.get(
    "/:id",
    {
      schema: {},
    },
    async (req, reply) => {
      try {
        const tag = await db.Tag.findOne({
          where: {
            id: req.params.id,
          },
        });
        if (tag) {
          reply.code(200).send(tag);
        } else {
          reply.code(404).send("tag non trouvé.");
        }
      } catch (error) {
        logger.log("error", "Error while searching for all Tags :" +error);
        reply.code(500).send(error);
      }

      return;
    }
  );

  fastify.put(
    "/:id",
    {
      schema: {
        body: {
          type: "object",
          required: ["name"],
          properties: {
            name: { type: "string" },
          },
        },
      },
    },
    async (req, reply) => {
      const tag = await db.Tag.findOne({
        where: {
          id: req.params.id,
        },
      });

      try {
        // change object, save it
        for (const prop in req.body) {
          tag[prop] = req.body[prop];
        }

        const savedTag = await tag.save();

        reply.code(200).send(savedTag);
        return;
      } catch (e) {
        logger.log("error", "Error while searching forTag : "+e);
        reply.code(500).send("Error when editing a tag");
      }
    }
  );
  fastify.post(
    "/",
    {
      schema: {
        body: {
          type: "object",
          required: ["name"],
          properties: {
            name: { type: "string" },
          },
        },
      },
    },
    async (req, reply) => {
      try {
        const newTag = {
          name: req.body.name,
        };

        const savedTag = await db.Tag.create(newTag);

        reply.code(200).send(savedTag);
        return;
      } catch (e) {
        logger.log("error", "Error while creating a Tag :" +e);
        reply.code(500).send("Error when creating a tag");
      }
      return;
    }
  );

  fastify.delete(
    "/:id",
    {
      schema: {
        body: {},
      },
    },
    async (req, reply) => {
      const tag = await db.Tag.findOne({
        where: {
          id: req.params.id,
        },
      });

      try {
        //Delete
        const deletedTag = await tag.destroy();
        reply.code(200).send(deletedTag.dataValues);

        return;
      } catch (e) {
        logger.log("error", "Error while deleting tag :" +e);
        reply.code(500).send("Error when editing a tag");
      }
    }
  );

  done();
};


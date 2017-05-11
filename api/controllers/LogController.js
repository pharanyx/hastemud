module.exports = {
  seed: function(req, res) {
    sails.models.log.create({
      title: 'TestLog',
      contents: '<h4>Martin is a foo bar.</h4>',
      description: 'Testing log functionality.'
    }).then(q => {
      res.send('success');
    });
  },

  // Restful Calls
  find: function(req, res) {
    sails.models.log.find().then(logs => {
      res.send(logs);
    });
  },
  findOne: function(req, res) {
    const id = req.params.id;
    sails.models.log.find({ id }).then(logs => {
      res.send(logs[0]);
    });
  },
  create: function(req, res) {
    sails.models.log.create(req.body).then((err, record) => {
      if (err) return res.serverError(err);
      return res.ok();
    });
  },
  update: function(req, res) {
    sails.models.log.update(req.body).then((err, record) => {
      if (err) return res.serverError(err);
      return res.ok();
    });
  },
  destroy: function(req, res) {

  }
}
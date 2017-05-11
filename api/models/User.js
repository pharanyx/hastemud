module.exports = {
  attributes: {
    // Properties
    username: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    password: {
      type: 'password'
    },

    // Associations
    logs: {
      collection: 'log',
      via: 'author'
    }
  }
}

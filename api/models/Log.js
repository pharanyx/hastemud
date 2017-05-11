module.exports = {
  attributes: {
    // Properties
    title: {
      type: 'string',
      minLength: 4
    },
    contents: {
      type: 'longtext'
    },
    description: {
      type: 'string'
    },
    // Associations
    author: {
      model: 'user'
    }
  },

}

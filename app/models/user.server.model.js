var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
  	type: String,
  	index: true,
  	match: /.+\@.+\..+/
  },
  username: {
  	type: String,
  	trim: true,
  	unique: true,
  	required: true
  },
  password: String,
  website: {
  	type: String,
  	get: function(url) {
  	  if (!url) {
  	  	return url;
  	  } else {
  	  	if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
  	  		url = 'http://' + url;
  	  	}

  	  	return url;
  	  }
  	}
  },
  created: {
  	type: Date,
  	default: Date.now
  }
});

UserSchema.set('toJSON', { getters: true });

mongoose.model('User', UserSchema);
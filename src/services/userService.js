"const User = require('../models/user');\n\nexports.createUser = async (userData) => {\n  const user = new User(userData);\n  await user.save();\n  return user;\n};" 

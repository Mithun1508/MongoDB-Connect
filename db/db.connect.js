const mongoose = require("mongoose")

// TODO: move to .env/sec
// TODO: use async await instead of then/catch
function initializeDBConnection() {
  // Connecting to DB
  mongoose.connect("INSERT MONGODB", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
    .then(() => console.log("successfully connected. Your MongoDB has passed!"))
    .catch(error => console.error("mongoose connection failed.. Check if it's up and running. An Error should show below this message.", error))
}

module.exports = { initializeDBConnection }


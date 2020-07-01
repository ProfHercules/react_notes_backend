// const mongoose = require("mongoose");

// if (process.argv.length < 3) {
//   console.log(
//     "Please provide the password as an argument: node mongo.js <password>"
//   );
//   process.exit(1);
// }

// const password = process.argv[2];
// const db_name = "react_notes";

// const url = `mongodb://react_notes:${password}@fullstackopen-part3c-shard-00-00.mctod.mongodb.net:27017,fullstackopen-part3c-shard-00-01.mctod.mongodb.net:27017,fullstackopen-part3c-shard-00-02.mctod.mongodb.net:27017/${db_name}?ssl=true&replicaSet=atlas-h252h3-shard-0&authSource=admin&retryWrites=true&w=majority`;

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// const noteSchema = new mongoose.Schema({
//   content: String,
//   date: Date,
//   important: Boolean,
// });

// const Note = mongoose.model("Note", noteSchema);
// Note.find({}).then((result) => {
//   result.forEach((note) => {
//     console.log(note);
//   });
//   mongoose.connection.close();
// });
// // const note = new Note({
// //   content: "HTML is Easy",
// //   date: new Date(),
// //   important: true,
// // });

// // note.save().then((result) => {
// //   console.log("note saved!");
// //   mongoose.connection.close();
// // });

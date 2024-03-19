import mongoose from 'mongoose'
const bookSchema = mongoose.Schema(
    {
       
      task : String
    }
)


export const Book = mongoose.model('TODO',bookSchema);



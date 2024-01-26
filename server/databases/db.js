
import mongoose from 'mongoose'

const Connection = async ()=>{
    const URL = 'mongodb+srv://user1:Rizz1234@docs-editor.z1pohry.mongodb.net/FILE-EDITOR?retryWrites=true&w=majority';

    try {
       await  mongoose.connect(URL, {
        //   useUnifiedTopology:true,
        //   useNewUrlParser:true;    
       });

       console.log('Database connected Successfully')
        
    } catch (error) {
        console.log('Error while connecting with the database', error)
    }

}

export default Connection;

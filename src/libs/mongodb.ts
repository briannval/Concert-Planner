import mongoose from "mongoose"
import logger from "./winston"

const MONGURI:string = process.env.MONGDB_URI as string

const connectMongoose = () => {
    try{
        mongoose.connect(MONGURI)
        logger.info("Connected to MongoDB!")
    }
    catch(error){
        logger.error(error)
    }
}
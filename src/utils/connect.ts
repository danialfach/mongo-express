import mongoose from "mongoose";
import config from "config";

export default async function connect(){
    const dbUri = config.get<string>("dbUri");

    try {
        await mongoose.connect(dbUri);
        console.log("DB connected.")
    } catch (error) {
        console.error("Could not connect to db");
        process.exit(1);
    }
}
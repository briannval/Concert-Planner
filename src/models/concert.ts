import { Schema , model } from "mongoose"

// Concert Interface
import { Concert } from "@/interfaces/interface"

// Concert Schema
const concertSchema = new Schema<Concert>({
    artist: { type: String, required: true},
    location: { type: String, required: true},
    hour: { type: Number, required: true},
    minute: { type: Number, required: true},
    month: { type: Number, required: true},
    day: { type: Number, required: true},
    avatar: String,
    background: String

})


// Concert Model


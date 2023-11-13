import mongoose , { Schema , model } from "mongoose"

// Concert Interface
interface Concert {
    artist: string;
    location: string;
    hour: number;
    minute: number;
    month: number;
    day: number;
    avatar?: string;
    background?: string;
}

// Concert Schema
export const ConcertModel = new Schema<Concert>({
    artist: { type: String, required: true},
    location: { type: String, required: true},
    hour: { type: Number, required: true},
    minute: { type: Number, required: true},
    month: { type: Number, required: true},
    day: { type: Number, required: true},
    avatar: String,
    background: String

})

// Promise
mongoose.Promise = global.Promise

// Concert Model
export const Concert = mongoose.models.Concert || mongoose.model<Concert>('Concert',ConcertModel)


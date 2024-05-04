import mongoose from 'mongoose';

let cached = global.mongoose;
const Schema = mongoose.Schema;

if (!cached) {
    const connect = mongoose.connect(process.env.MONGODB_URI);
    cached = global.mongoose = { conn: connect };
}


mongoose.Promise = global.Promise;

export const db = {
    User: userModel()
};

// mongoose models with schema definitions

function userModel() {
    const schema = new Schema({
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true }
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.hash;
        }
    });

    return mongoose.models?.users || mongoose.model('users', schema);
}

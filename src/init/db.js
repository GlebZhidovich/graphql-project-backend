import mongoose from 'mongoose';

const server = 'lab.lectrum.io';
const port = 37019;
const database = void 0; // Put your own DB name, it can be any name

class Database {
    constructor() {
        this._verify();
        this._connect();
    }

    _verify() {
        if(!database) {
            throw new Error('You should specify DB name');
        }
    }

    _connect() {
        mongoose.connect(`mongodb://${server}:${port}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('🚀 Database connection successful');
            })
            .catch((err) => {
                console.error(`❌ Database connection error: ${err.message}`);
            });
        mongoose.set('useCreateIndex', true);
    }
}

new Database();
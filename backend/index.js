require('dotenv').config();
const DB_URI = process.env.DB_URI;

// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect(
    DB_URI,
    {
        dbName: 'PSUhack',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) =>
        err ? console.log(err) : console.log('Connected to PSUhack database')
);

// Schema for users
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    privelege: {
        type: Boolean,
        required: true,
    },
    event_ids: {
        type: Array,
        required: true,
    },
    club_ids: {
        type: Array,
        required: true,
    },
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

// Schema for events
const EventSchema = new mongoose.Schema({
    event_id: {
        type: Number,
        required: true,
        unique: true,
    },
    is_official: {
        type: Boolean,
        required: true,
    },
    club_id: {
        type: Number,
    },
    user_email: {
        type: String,
    },
    start_time: {
        type: Date,
        required: true,
    },
    end_time: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
});
const Event = mongoose.model('events', EventSchema);
Event.createIndexes();

// Schema for clubs
const ClubSchema = new mongoose.Schema({
    club_id: {
        type: Number,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    club_name: {
        type: String,
        required: true,
    },
    club_description: {
        type: String,
        required: true,
    },
});
const Club = mongoose.model('clubs', ClubSchema);
Club.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const { ListGroup } = require('react-bootstrap');
const cors = require('cors');
console.log('App listen at port 5000');
app.use(express.json());
app.use(cors());
app.get('/', (req, resp) => {
    resp.send('App is Working');
});

// Endpoints
app.post('/register/user', async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log('User already register');
        }
    } catch (e) {
        resp.send('Something Went Wrong');
    }
});

app.post('/register/club', async (req, resp) => {
    try {
        const club = new Club(req.body);
        let result = await club.save();
        result = result.toObject();
        if (result) {
            resp.send(req.body);
            console.log(result);
        } else {
            console.log('Club already register');
        }
    } catch (e) {
        resp.send('Something Went Wrong');
    }
});

app.post('/createEvent', async (req, resp) => {
    try {
        const event = new Event(req.body);
        let result = await event.save();
        result = result.toObject();
        if (result) {
            resp.send(req.body);
            console.log(result);
        } else {
            console.log('Something Went Wrong');
        }
    } catch (e) {
        resp.send('Something Went Wrong');
    }
});

app.listen(5000);

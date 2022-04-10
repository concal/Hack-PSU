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
    club_name: {
        type: String,
    },
    user_email: {
        type: String,
    },
    date: {
        type: String,
        required: true,
    },
    start_time: {
        type: String,
        required: true,
    },
    end_time: {
        type: String,
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
    owner_email: {
        type: String,
        required: true,
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
            resp.send(req.body);
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
        console.log(req.body);
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

app.post('/login', async (req, resp) => {
    try {
        const email = req.body.email;
        const inputPassword = req.body.password;
        const result = await User.find({ email });
        if (result.length == 0) {
            resp.send(false);
        } else {
            correct_password = result[0].password;
            console.log(email);
            console.log(inputPassword);
            console.log(correct_password);
            if (result) {
                resp.send(correct_password == inputPassword);
                console.log(correct_password);
            }
        }
    } catch (e) {
        console.log(e);
        resp.send('Something Went Wrong');
    }
});

app.get('/newEventID', async (req, resp) => {
    try {
        const result = await Event.findOne().sort('-event_id');
        resp.send({ event_id: result.event_id + 1 });
    } catch (e) {
        console.log(e);
        resp.send('Something Went Wrong');
    }
});

app.get('/newClubID', async (req, resp) => {
    try {
        const result = await Club.findOne().sort('-club_id');
        resp.send({ club_id: result.club_id + 1 });
    } catch (e) {
        console.log(e);
        resp.send('Something Went Wrong');
    }
});

app.get('/events', async (req, resp) => {
    try {
        // filters
        // pages
        const result = await Event.find();
        console.log(result);
        resp.send(result);
    } catch (e) {
        console.log(e);
        resp.send('Something Went Wrong');
    }
});

app.post('/clubs', async (req, resp) => {
    try {
        const email = req.body.email;
        const result = await Club.find({ owner_email: email });
        resp.send(result);
    } catch (e) {
        console.log(e);
        resp.send('Something Went Wrong');
    }
});

app.post('/clubs/name', async (req, resp) => {
    try {
        const club_id = req.body.club_id;
        const result = await Club.findOne({ club_id: club_id });
        console.log(result.club_name);
        resp.send({ club_name: result.club_name });
    } catch (e) {
        console.log(e);
        resp.send('Something Went Wrong');
    }
});

app.post('/users/events', async (req, resp) => {
    try {
        const email = req.body.email;
        const user_info = await User.findOne({ email });
        const event_ids = user_info.event_ids;
        const result = await Event.find({ event_id: event_ids });
        resp.send(result);
    } catch (e) {
        console.log(e);
        resp.send('Something Went Wrong');
    }
});

app.post('/users/update/favorites', async (req, resp) => {
    try {
        const email = req.body.email;
        const event_id = req.body.event_id;
        const user_info = await User.findOne({ email });
        favorites = user_info.event_ids;
        if (favorites.includes(event_id)) {
            favorites.remove(event_id);
        } else {
            favorites.push(event_id);
        }
        const response = await User.updateOne(
            { email },
            { event_ids: favorites }
        );
        resp.send({ response });
    } catch (e) {
        console.log(e);
        resp.send('Something Went Wrong');
    }
});

app.post('/users/info', async (req, resp) => {
    try {
        const email = req.body.email;
        const user_info = await User.findOne({ email });
        resp.send(user_info);
    } catch (e) {
        console.log(e);
        resp.send('Something Went Wrong');
    }
});

app.listen(5000);

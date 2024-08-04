import express from "express";
import axios from "axios";

const router = express.Router();
const apiKey = demo_api_key;

router.get('/phases', async (req, res) => {
    const {date} = req.query;
    try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
        res.json(response.data);
    }
    catch (error){
        console.log("Error occurred: ", error.message);
        res.status(500).json({message: 'Error fetching lunar phase data'});
    }
});
export default router;

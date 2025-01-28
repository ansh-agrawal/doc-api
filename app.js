const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// In-memory database with default values
const doctorsDb = {
    1: { id: 1, name: "Dr. John Doe", specialization: "Cardiology" },
    2: { id: 2, name: "Dr. Jane Smith", specialization: "Dermatology" },
    3: { id: 3, name: "Dr. Alan Turing", specialization: "Neurology" },
};
let doctorIdCounter = 4; // Start ID counter from 4

// Add a new doctor
app.post("/add_doctor", (req, res) => {
    const { name, specialization } = req.body;

    if (!name || !specialization) {
        return res.status(400).json({ error: "Name and specialization are required." });
    }

    const doctor = {
        id: doctorIdCounter,
        name,
        specialization,
    };

    doctorsDb[doctorIdCounter] = doctor;
    doctorIdCounter++;

    res.status(201).json({ message: "Doctor added successfully!", doctor });
});

// Get all doctors
app.get("/get_doctors", (req, res) => {
    res.status(200).json(Object.values(doctorsDb));
});

// Get a doctor by ID
app.get("/get_doctor/:id", (req, res) => {
    const doctorId = parseInt(req.params.id);
    const doctor = doctorsDb[doctorId];

    if (!doctor) {
        return res.status(404).json({ error: "Doctor not found." });
    }

    res.status(200).json(doctor);
});

// Delete a doctor by ID
app.delete("/delete_doctor/:id", (req, res) => {
    const doctorId = parseInt(req.params.id);

    if (!doctorsDb[doctorId]) {
        return res.status(404).json({ error: "Doctor not found." });
    }

    delete doctorsDb[doctorId];
    res.status(200).json({ message: `Doctor with ID ${doctorId} deleted successfully.` });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

import express from 'express';
import cors from 'cors';
import DB_connection from './db';
import Contact from './schema';

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory storage for contacts
const contactsData = [];

// Routes
app.get('/', (req, res) => {
  res.send('Contact API is running');
});

app.post('/contacts', (req, res) => {
  try {
    console.log("\n--- New Contact Request ---");
    console.log("Received request body:", req.body);
    console.log("Headers:", req.headers);

    const { name, phone, email } = req.body;

    // Validate input
    if (!name || !phone || !email) {
      console.log("Error: Missing required fields");
      throw new Error("Missing required fields");
    }

    const newContact = { name, phone, email };
    contactsData.push(newContact);

    console.log("Added new contact:", newContact);
    console.log("Updated contacts list:", contactsData);
    console.log("--- End of Request ---\n");

    res.status(201).json({
      "status-code": 201,
      "message": "Contact added successfully",
      "contact": newContact
    });
  } catch (error) {
    console.error("Error in /contacts POST:", error);
    res.status(400).json({
      "status-code": 400,
      "message": "Error adding contact",
      "error": error.message
    });
  }
});

// Get all contacts (for testing purposes)
app.get('/contacts', (req, res) => {
  console.log("Returning all contacts:", contactsData);
  res.json(contactsData);
});

// Get all contacts
app.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
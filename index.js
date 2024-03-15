const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Define your endpoint
app.get("/api/data", async (req, res) => {
  try {
    // Make API call to another API
    const response = await axios.get(
      "https://mobile311.sfgov.org/open311/v2/requests.json"
    );
    // Send the data from the response's data property as the response
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

app.get("/health", (req, res) => {
  res.json("Health Ok");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

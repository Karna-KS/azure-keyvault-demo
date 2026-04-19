const express = require("express");
const app = express();

const secret = process.env.MY_SECRET || "No secret found";

app.get("/", (req, res) => {
    res.send(`Secret from Azure Key Vault: ${secret}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

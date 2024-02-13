require('dotenv').config()
const db = require('../../test_database/connect')

const insertTool = async (tool) => {
    const { tool_name, description, price_per_day } = tool
    const query = `
        INSERT INTO tool (tool_name, description, price_per_day) 
        VALUES ($1, $2, $3);`
    try {
        await db.query(query, [tool_name, description, price_per_day])
    } catch (error) {
        console.error("Error inserting tool:", error);
    }
};

const insertAllTools = async (tools) => {
    for (const tool of tools) {
        await insertTool(tool);
    }
};

module.exports = { insertTool, insertAllTools };
const mysql = require('mysql2/promise');


exports.getEmployeesWithoutManager = async function() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    try {
        const [rows] = await connection.execute(`
            SELECT employee_id
            FROM employee
            WHERE manager_id IS NULL
        `);

        return rows;
    } 
    
    finally 
    {
        await connection.end();
    }
    
};

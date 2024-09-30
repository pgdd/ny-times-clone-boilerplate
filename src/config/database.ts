// src/config/database.ts
export const databaseUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/defaultdb';

// src/app/api/users/index.ts
export default async function handler(req, res) {
    const dbUrl = process.env.DATABASE_URL; // Access the environment variable
    // Use the dbUrl to interact with the database
}

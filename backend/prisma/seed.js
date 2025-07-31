import prisma from '../DB/db.config.js'; 

async function seedAdmin() {
    const adminExists = await prisma.user.findUnique({
        where: { username: 'admin' }
    });

    if (!adminExists) {
        await prisma.user.create({
            data: {
                username: 'admin',
                password: 'admin123', // Store hashed password in production
                role: 'admin'
            }
        });
        console.log('Admin user created successfully.');
    } else {
        console.log('Admin user already exists.');
    }
}

seedAdmin().catch(console.error).finally(() => prisma.$disconnect());

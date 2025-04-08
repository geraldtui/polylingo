import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });


const main = async () => {
    try {
        console.log("Seeding database...");

        await db.delete(schema.courses)
        await db.delete(schema.userProgress)
        await db.delete(schema.challenges)
        await db.delete(schema.challengeOptions)
        await db.delete(schema.challengeProgress)
        await db.delete(schema.units)
        await db.delete(schema.lessons)

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Samoan - Fa'amatai",
                imageSrc: "/ws.svg"
            },
            {
                id: 2,
                title: "Samoan - Convos",
                imageSrc: "/ws.svg"
            },
            {
                id: 3,
                title: "Tongan",
                imageSrc: "/to.svg"
            },
            {
                id: 4,
                title: "Fijian",
                imageSrc: "/fj.svg"
            },
            {
                id: 5,
                title: "Niuen",
                imageSrc: "/nu.svg"
            },
        ])

        await db.insert(schema.units).values([
            {
                id: 1,
                title: "Unit 1",
                description: "Formal Greetings",
                courseId: 1,
                order: 1,
            }
        ])

        await db.insert(schema.lessons).values([
            {
                id: 1,
                title: "Lesson 1",
                description: "Pronouns",
                unitId: 1,
                order: 1,
            },
            {
                id: 2,
                title: "Lesson 2",
                description: "Upu Fa'aaloalo",
                unitId: 1,
                order: 2,
            },
            {
                id: 3,
                title: "Lesson 2",
                description: "Upu Fa'aaloalo",
                unitId: 1,
                order: 3,
            },
            {
                id: 4,
                title: "Lesson 2",
                description: "Upu Fa'aaloalo",
                unitId: 1,
                order: 4,
            },
            {
                id: 5,
                title: "Lesson 2",
                description: "Upu Fa'aaloalo",
                unitId: 1,
                order: 5,
            }
        ])

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                order: 1,
                question: "What pronoun is used for a Matai Ali'i?",
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1,
                text: "Afioga",
                correct: true,
                audioSrc: "/ws_afioga.mp3",
                imageSrc: "/boy.svg",
            },
            {
                id: 2,
                challengeId: 1,
                text: "Susuga",
                correct: false,
                audioSrc: "/ws_susuga.mp3",
                imageSrc: "/boy.svg",
            },
            {
                id: 3,
                challengeId: 1,
                text: "Tofa",
                correct: false,
                audioSrc: "/ws_tofa.mp3",
                imageSrc: "/boy.svg",
            },
            {
                id: 4,
                challengeId: 1,
                text: "Fetalaiga",
                correct: false,
                audioSrc: "/ws_fetalaiga.mp3",
                imageSrc: "/boy.svg",
            },
        ])





        console.log("Seeding finished.");

    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed database");
    }
}

main();

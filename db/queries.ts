import { cache } from "react";
import { db } from "./drizzle";
import { asc } from "drizzle-orm";

export const getCourses = cache(async () => {
    const data = await db.query.courses.findMany({
        orderBy: (courses) => [asc(courses.id)],
    });
    return data;
})

import {prisma} from "@/app/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if(req.method !== 'GET') {
        return res.status(405).end();
    }

    const slug = String(req.query.slug);

    const category = await prisma.category.findMany({
        where: {
            slug,
        },
        include: {
            books: true,
        }
    });

    if(!category) {
        return res.status(400).json({ message: 'Category does not exist.' })
    }

    return res.json({ category })
}

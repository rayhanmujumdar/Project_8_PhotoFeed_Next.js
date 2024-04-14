import { getPhotoById } from "@/lib/image-data"
import { NextResponse } from "next/server"

export async function GET(_request, { params }) {
    const { id } = params
    const data = getPhotoById(id)
    return NextResponse.json(data)
}
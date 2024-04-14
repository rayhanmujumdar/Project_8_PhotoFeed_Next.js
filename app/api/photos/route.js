import { getAllPhotos } from '@/lib/image-data';
import { NextResponse } from 'next/server';

export async function GET() {
    const photos = await getAllPhotos();
    return NextResponse.json(photos);
}

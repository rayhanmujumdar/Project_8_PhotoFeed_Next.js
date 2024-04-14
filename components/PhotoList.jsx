import SinglePhoto from './SinglePhoto';
async function getAllPhotos() {
    const response = await fetch(`${process.env.API_BASE_URL}/photos`);
    return response.json();
}
export default async function PhotoList() {
    const photos = await getAllPhotos();
    return (
        <div class="img-grid">
            {photos.map(photo => (
                <SinglePhoto key={photo.id} photo={photo} />
            ))}
        </div>
    );
}

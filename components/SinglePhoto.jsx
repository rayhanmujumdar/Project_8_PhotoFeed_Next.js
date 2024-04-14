import Image from 'next/image';
import Link from 'next/link';

export default function SinglePhoto({ photo }) {
    const { id, title, url } = photo;
    return (
        <Link href={`/photos/${id}`} className="group">
            <Image
                src={url}
                alt=""
                style={{ width: '100%' }}
                width={500}
                height={500}
            />
            <div className="title-container">
                <h4 className="title">{title}</h4>
            </div>
        </Link>
    );
}

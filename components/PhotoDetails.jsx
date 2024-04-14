import { getDictionaries } from '@/app/[lang]/dictionaries';
import Image from 'next/image';

const getSinglePhotoDetails = async id => {
    const response = await fetch(`${process.env.API_BASE_URL}/photos/${id}`);
    return response.json();
};
export default async function PhotoDetails({ id, lang }) {
    const photoInfo = await getSinglePhotoDetails(id);
    const dictionary = await getDictionaries(lang);
    const {
        title,
        url,
        tags,
        views,
        share,
        uploaded,
        author: { avatar, name, bio, followers },
        likes,
    } = photoInfo;
    return (
        <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
            <div className="col-span-12 lg:col-span-8 border rounded-xl">
                <Image
                    className="max-w-full h-full max-h-[70vh] mx-auto"
                    src={url}
                    alt="photo"
                    style={{ width: '100%' }}
                    width={500}
                    height={500}
                />
            </div>

            <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
                <h2 className="text-lg lg:text-2xl font-bold mb-2">{title}</h2>
                <div className="text-xs lg:text-sm text-black/60 mb-6">
                    {tags.map(tag => `#${tag},`)}
                </div>

                <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
                    <div className="flex justify-between">
                        <span>{dictionary.views}</span>
                        <span className="font-bold">{views}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>{dictionary.share}</span>
                        <span className="font-bold">{share}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>{dictionary.uploadedOn}</span>
                        <span className="font-bold">{uploaded}</span>
                    </div>
                </div>

                <div className="mt-6">
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-3">
                            <Image
                                className="size-12 lg:size-14 rounded-full border"
                                src={avatar}
                                alt="avatar"
                                width={48}
                                height={48}
                            />
                            <div className="spacy-y-3">
                                <h6 className="lg:text-lg font-bold">{name}</h6>
                                <p className="text-black/60 text-xs lg:text-sm">
                                    {followers} {dictionary.followers}
                                </p>
                            </div>
                        </div>
                        <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
                            <Image
                                src="/icons/follow.svg"
                                className="w-5 h-5"
                                width={20}
                                height={20}
                                alt="icons"
                            />
                            {dictionary.follow}
                        </button>
                    </div>

                    <p className="text-xs lg:text-sm text-black/60">{bio}</p>
                </div>
                <div className="mt-6">
                    <div className="flex items-stretch gap-3">
                        <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                            <Image
                                src="/icons/heart.svg"
                                className="w-5 h-5"
                                alt="icon"
                                width={20}
                                height={20}
                            />
                            {likes}
                        </button>
                        <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                            <Image
                                src="/icons/save.svg"
                                className="w-5 h-5"
                                width={20}
                                height={20}
                                alt="icons"
                            />
                            {dictionary.save}
                        </button>
                        <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                            <Image
                                src="/icons/share.svg"
                                className="w-5 h-5"
                                width={20}
                                height={20}
                                alt="icons"
                            />
                            {dictionary.share}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { GoTrashcan } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

const PhotoListItem = ({photo}) => {
    const [removePhoto] = useRemovePhotoMutation()

    const handleRemovePhoto = () => removePhoto(photo)


    return (
        <div className="relative m-2 cursor-pointer" onClick={handleRemovePhoto}>
            <img className="mx-8 flex flex-row flex-wrap justify-between" src={photo.url} alt={photo.id} />
            <div className="absolute flex inset-0 items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80 ">
                <GoTrashcan className="text-3xl" />
            </div>
        </div>
    );
}

export default PhotoListItem;
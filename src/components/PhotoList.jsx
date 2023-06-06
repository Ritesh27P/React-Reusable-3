import PhotoListItem from "./PhotoListItem";
import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

const PhotoList = ({album}) => {
    const {data, error, isFetching} = useFetchPhotosQuery(album);
    const [addPhoto, result] = useAddPhotoMutation();

    console.log(error);
    let content;
    if (isFetching) { content = <Skeleton className='h-10 w-full' times={3} />}
    else if (error) { content = "Error loading albums" }
    else { content = data.map(photo => {
        return <PhotoListItem key={photo.id} photo={photo} />
    })}

    const handleAddPhoto = () => addPhoto(album)
    return (
    <div>
        <div className="flex flex-row items-center justify-between m-2">
          <h3 className="text-lg font-bold">Photos in {album.title}</h3> 
          <Button loading={result.isLoading} onClick={handleAddPhoto} >+ Add Photo</Button>
        </div>
        <div className="mx-8 flex flex-row flex-wrap justify-between">{content}</div>
    </div>
    );
}

export default PhotoList;
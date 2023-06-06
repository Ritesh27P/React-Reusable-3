import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotoList from "./PhotoList";

const AlbumListItem = ({album}) => {
    const [removeAlbum, result] = useRemoveAlbumMutation()

    const handleRemoveAlbum = () => removeAlbum(album)
    console.log(result);

    const header = <div className="flex flex-row justify-between m-2 items-center">
            <Button loading={result.isLoading} onClick={handleRemoveAlbum}><GoTrashcan /> </Button>
            {album.title}
        </div>
    return (
      <ExpandablePanel key={album.id} header={header} >
        <PhotoList album={album} />
      </ExpandablePanel>
    );
}

export default AlbumListItem;
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumListItem from "./AlbumListItem";

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user)
  const [addAlbum, result] = useAddAlbumMutation()

  let content
  if (isFetching) { content = <Skeleton className='h-10 w-full' times={3} /> }
  else if (error) { content = "Error loading albums..." }
  else { 
    content = data.map(album => {
      return <AlbumListItem key={album.id} album={album} />
    })
  }

  const handleAddAlbum = () => addAlbum(user)

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-2">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3> 
        <Button loading={result.isLoading} onClick={handleAddAlbum} >+ Add Album</Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;

import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumsList({user}){

    const {data, error, isLoading} = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();
    console.log(results);

    const handleAddAlbum = () => {
        addAlbum(user);
    }

    let content;

    if(isLoading){
        <Skeleton times={3} />
    }  else if (error){
        <div>error loading data.</div>
    } else {
        content = data.map((album) => {
            const header = <div>{album.title}</div>
            return <ExpandablePanel key={album.id} header = {header}>
                list of photos
            </ExpandablePanel>
        })
    }
    
    return(
        <div>
            <div>
            Albums for {user.name}
            <Button onClick={handleAddAlbum}>Add Album +</Button>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default AlbumsList;
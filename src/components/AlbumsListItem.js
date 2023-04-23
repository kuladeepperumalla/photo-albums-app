import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";

function AlbumsListItem({album}){
                const header = <div>
                    <Button><GoTrashcan /></Button>
                    {album.title}</div>;
                return (
                  <ExpandablePanel key={album.id} header={header}>
                    list of photos
                  </ExpandablePanel>
                );
}

export default AlbumsListItem;
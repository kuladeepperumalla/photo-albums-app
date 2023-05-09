import { useFetchPhotosQuery } from "../store"
function PhotosList(album){
    return useFetchPhotosQuery(album)
}

export default PhotosList 
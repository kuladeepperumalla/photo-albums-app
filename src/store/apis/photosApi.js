import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
    reducerPath: 'Photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            fetchPhotos: builder.query({
                query: (album) => {
                    return {
                        url: '/photos',
                        params: {
                            albumId: album.id,
                        },
                        method: 'GET',
                    }
                }
            }),
            addPhotos: builder.mutation({
                query: (album)=>{
                    return {
                        method: 'POST',
                        url:'/photos',
                        body: {
                            albumId:album.id,
                            url: faker.image.abstract(150, 150, true)
                        }
                    }
                }
            }),
            deletePhotos: builder.mutation({
                query: (photo) => {
                    return {
                        method: 'DELETE',
                        url: `/photos/${photo.id}`,

                    }
                }
            })
        }
    }
})

export const {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation,
} = photosApi;

export {photosApi}
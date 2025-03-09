import React, { useContext } from "react";
import { menuContext } from "../context/MenuContext";
import Note from "../component/Note";
import { useInfiniteQuery } from "@tanstack/react-query";
import { notes } from "../utils/notes";
import InfiniteScroll from "react-infinite-scroll-component";

// Fetching the notes from the API
const fetchNotes = async ({ pageParam = 1 }) => {
    try {
        const response = await notes.get("", { params: { page: pageParam } });
        return response.data;
    } catch (error) {
        console.error("Error fetching notes:", error);
        throw error;
    }
};

const Notes = () => {
    const { isOpen } = useContext(menuContext);

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status
    } = useInfiniteQuery({
        queryKey: ["notes"],
        queryFn: fetchNotes,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage?.next ?? null,
    });

    if (isFetching) {
        return <p>Fetching...</p>;
    }

    return (
        <>
            {status === "loading" && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            
            <InfiniteScroll
                dataLength={data?.pages?.length * 10} 
                next={fetchNextPage}
                hasMore={hasNextPage}
                loader={<p>Loading...</p>}
                className={`grid gap-4 p-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 transition-all duration-300 h-fit
                    ${isOpen ? "lg:grid-cols-3 xl:grid-cols-4 w-[6/9]" : "w-full"}`}
            >
                {data?.pages?.map((page, i) => (
                    <React.Fragment key={i}>
                        {page.results.map((note) => (
                            <Note key={note.id} {...note} />
                        ))}
                    </React.Fragment>
                ))}
            </InfiniteScroll>
        </>
    );
};

export default Notes;

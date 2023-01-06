import { useState } from "react";

export function usePosts() {
    const [posts, setPosts] = useState([]);
    return { posts, setPosts };
}
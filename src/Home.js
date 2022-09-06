import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'Lorem Ipsum...', author: 'Mario', id: 1 },
        { title: 'Welcome party!', body: 'Lorem Ipsum...', author: 'Luigi', id: 2 },
        { title: 'Web dev top tips', body: 'Lorem Ipsum...', author: 'Yoshi', id: 3 },
        { title: 'Web dev top tips', body: 'Lorem Ipsum...', author: 'Yoshi', id: 4 },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Yoshi')} title="Yoshi's blogs!" /> */}
        </div>
    );
}

export default Home;
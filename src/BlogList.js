import { Link } from "react-router-dom";
const BlogList = ({blogs, title}) => {
  
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => ( //in parentheses as jsx template will be output. key can be any unique property
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    </Link>
                   
                </div>
            ))

            }
        </div>
    );
}
 
export default BlogList;

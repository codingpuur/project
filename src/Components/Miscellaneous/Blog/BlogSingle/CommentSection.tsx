import { blogSingleData } from "@/Data/Blog/BlogData";
import BlogComment from "./BlogComment";

const CommentSection = () => {
  return (
    <ul>
      {blogSingleData.map((data, i) => (
        <li key={i}>
          {data.id !== 2 ? (
            <BlogComment data={data} />
          ) : (
            <ul className='flex-row'>
              <li>
                <BlogComment data={data} />
              </li>
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default CommentSection;

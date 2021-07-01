import ArticleItem from "./ArticleItem";
import articleStyles from "../styles/Article.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article, key) => (
        <ArticleItem key={key} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;


const NewsGrid = ({ publisher }) => {
  const articles = useSelector(selectArticlesByPublisher(publisher));
  console.log(`Selected publisher: ${publisher}`);
  console.log(`Articles data:`, articles);
};

export default NewsGrid;

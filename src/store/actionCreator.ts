export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: "ADD_ARTICLE",
    article,
  };

  return action;
}

import axios from "axios";

const instance = axios.create({
  baseURL: "https://speedwagon-server.herokuapp.com/api"
});

const getUserByUsername = async username => {
  const {
    data: { user }
  } = await instance.get(`/users/${username}`);
  return user;
};

const postComment = async ({ article_id, ...rest }) => {
  const {
    data: { comment }
  } = await instance.post(`/articles/${article_id}/comments`, rest);
  return comment;
};

const getArticleById = async article_id => {
  const {
    data: { article }
  } = await instance.get(`/articles/${article_id}`);
  return article;
};

const deleteCommentById = async comment_id => {
  await instance.delete(`/comments/${comment_id}`);
};

const getCommentsByArticleId = async (article_id, query) => {
  const {
    data: { comments }
  } = await instance.get(`/articles/${article_id}/comments`, {
    params: {
      ...query
    }
  });
  return comments;
};

const getArticles = async query => {
  const {
    data: { articles }
  } = await instance.get("/articles", {
    params: {
      ...query
    }
  });
  return articles;
};

const patchArticle = async ({ article_id, ...rest }) => {
  const {
    data: { article }
  } = await instance.patch(`/articles/${article_id}`, rest);
  return article;
};

const getTopics = async () => {
  const {
    data: { topics }
  } = await instance.get("/topics");
  return topics;
};

const patchComment = async ({ comment_id, ...rest }) => {
  const {
    data: { comment }
  } = await instance.patch(`/comments/${comment_id}`, rest);
  return comment;
};

export default {
  patchArticle,
  patchComment,
  deleteCommentById,
  getCommentsByArticleId,
  getArticleById,
  getArticles,
  getTopics,
  getUserByUsername,
  postComment
};

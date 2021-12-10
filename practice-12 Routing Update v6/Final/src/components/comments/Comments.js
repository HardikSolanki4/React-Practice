import { useCallback, useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';
import { getAllComments } from '../lib/api';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';

const Comments = ({ quotesId }) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {
    sendRequest,
    status,
    data: loadedCommentLists,
  } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quotesId);
  }, [sendRequest, quotesId]);

  let commentNode;

  if (status === 'pending') {
    commentNode = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (
    status === 'completed' &&
    loadedCommentLists.length > 0 &&
    loadedCommentLists
  ) {
    commentNode = <CommentsList comments={loadedCommentLists} />;
  }

  if (
    status === 'completed' &&
    (!loadedCommentLists || loadedCommentLists.length === 0)
  ) {
    commentNode = <div className='centered focused'>No Comment Yet!</div>;
  }

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const loadLatestComment = useCallback(() => {}, []);

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          onAddedComment={loadLatestComment}
          quotesId={quotesId}
        />
      )}
      {commentNode}
    </section>
  );
};

export default Comments;

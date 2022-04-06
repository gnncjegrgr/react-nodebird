import { useRouter } from 'next/router';
import AppLayout from '../../components/AppLayout';
import { END } from 'redux-saga';
import axios from 'axios';
import { useSelector } from 'react-redux';

import wrapper from '../../store/configureStore';
import { LOAD_MY_INFO_REQUEST } from '../../reduecers/user';
import { LOAD_POST_REQUEST } from '../../reducers/post';
import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/PostCard';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { singlePost } = useSelector((state) => state.post);

  return (
    <AppLayout>
      <PostCard post={singlePost} />
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
});

export default Post;

import { h, Component } from 'preact'

import { PostListPagination } from './postListPagination';
import { Post } from './post';

export class PostList extends Component<{ posts: Object, currentPage: number, totalPages: number }, {}> {

  render = ({ posts, currentPage, totalPages }) => {
    if (!posts) return (<p style={{ width: '60%', padding: '1rem 8rem' }}>cargando...</p>)
    if (posts && posts.length == 0) return (<p>No hay resultados</p>)

    return (
    <div style={{ width: '60%', padding: '1rem' }}>
      { posts.map(post => <Post post={post} />)}
      <PostListPagination currentPage={currentPage} totalPages={totalPages} />
    </div>)
  }
}

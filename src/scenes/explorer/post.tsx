import { h, Component } from 'preact'
import { PostDetail } from './postDetail'

export class Post extends Component<{ post: Object }, any> {

  constructor() {
    super()
    this.setState({ detailsToggled: false })
    this.toggleDetails = this.toggleDetails.bind(this)
  }

  toggleDetails() {
    this.setState({ detailsToggled: !this.state.detailsToggled })
  }

  render = ({ post }) => (
    <div onClick={this.toggleDetails} style={{ padding: '.5rem 0' }}>
      <strong>{ post['name'] }</strong> - { post['post_message'] }
      <PostDetail toggled={this.state.detailsToggled} post_published={post['post_published']} post_link={post['post_link']} shares_count_fb={post['shares_count_fb']} reactions_count_fb={post['reactions_count_fb']} />
    </div>
  )
}

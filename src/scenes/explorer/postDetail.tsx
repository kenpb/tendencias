import { h, Component } from 'preact'

export class PostDetail extends Component<{ toggled: boolean, post_published: string, post_link: string, shares_count_fb: number, reactions_count_fb: number }, {}> {

  displayBlock = { display: 'block' }

  preventPropagation(event) {
    event.stopPropagation()
  }

  render = ({ toggled, post_published, post_link, shares_count_fb, reactions_count_fb }) => (
    <div onClick={this.preventPropagation} style={{ display: toggled ? 'block' : 'none', padding: '1rem' }}>
      <small style={this.displayBlock}>Fecha de publicación: { post_published }</small>
      <small style={this.displayBlock}>Cantidad de veces compartido en facebook: { shares_count_fb }</small>
      <small style={this.displayBlock}>Cantidad de reacciones en facebook: { reactions_count_fb }</small>
      <a href={ post_link }  target="_blank">Enlace original</a>
    </div>
  )
}

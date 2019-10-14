import { h, Component } from 'preact'

export class PostDetail extends Component<{ toggled: boolean, post_published: string, post_link: string, shares_count_fb: number, reactions_count_fb: number }, {}> {

  displayBlock = { display: 'block', margin: 0, }

  preventPropagation(event) {
    event.stopPropagation()
  }

  render = ({ toggled, post_published, post_link, shares_count_fb, reactions_count_fb }) => (
    <div onClick={this.preventPropagation} style={{ display: toggled ? 'block' : 'none', padding: '1rem' }}>
      <div>
        <p style={this.displayBlock}>Fecha de publicación: { post_published }</p>
        <p style={this.displayBlock}>Cantidad de veces compartido en facebook: { shares_count_fb }</p>
        <p style={this.displayBlock}>Cantidad de reacciones en facebook: { reactions_count_fb }</p>
      </div>
      <div style={{ padding: '0 1em' }}>
        <a style={{ display: 'block' }} href={ post_link } target="_blank">Descargar comentarios</a>
        <a style={{ display: 'block' }} href={ post_link } target="_blank">Enlace original</a>
      </div>
    </div>
  )
}

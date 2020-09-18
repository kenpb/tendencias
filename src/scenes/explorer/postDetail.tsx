import { h, Component } from 'preact'

export class PostDetail extends Component<{ texto_completo: string, engagement_fb: number, toggled: boolean, post_published: string, post_link: string, shares_count_fb: number, reactions_count_fb: number }, {}> {

  displayBlock = { display: 'block', margin: 0, }

  preventPropagation(event) {
    event.stopPropagation()
  }

  render = ({ toggled, post_published, post_link, shares_count_fb, reactions_count_fb, engagement_fb, texto_completo }) => (
    <div onClick={this.preventPropagation} style={{ display: toggled ? 'block' : 'none', padding: '1rem' }}>
      <div>
        <p style="margin: 0;margin-bottom: 1rem;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;">{ texto_completo }</p>
        <p style={this.displayBlock}>
          <strong>
            Fecha de publicación:
          </strong> { post_published }
        </p>
        <p style={this.displayBlock}>
          <strong>
            Cantidad de veces compartido en facebook:
          </strong> { shares_count_fb }
        </p>
        <p style={this.displayBlock}>
          <strong>
            Cantidad de reacciones en facebook:
          </strong> { reactions_count_fb }
        </p>
        <p style={this.displayBlock}>
          <strong>
            Interacción en facebook:
          </strong> { engagement_fb }
        </p>
      </div>
      <div style={{ padding: '0 1em' }}>
        {/* <a style={{ display: 'block' }} href={ post_link } target="_blank">Descargar comentarios</a> */}
        <a style={{ display: 'block' }} href={ post_link } target="_blank">Enlace original</a>
      </div>
    </div>
  )
}

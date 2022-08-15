const AffImg = ({ img, url, caption }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img alt={caption} src={`img/` + img} class="affimg" />
    </a>
  )
}

export default AffImg
function ServiceCard({ name, url, detailLink }) {
  return (
    <div className="service-card">
      <span className="service-card-name">{name}</span>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="detail-link"
        >
          {detailLink} →
        </a>
      )}
    </div>
  )
}

export default ServiceCard

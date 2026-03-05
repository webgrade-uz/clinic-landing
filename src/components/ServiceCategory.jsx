import ServiceCard from './ServiceCard'

function ServiceCategory({ title, items, detailLink }) {
  return (
    <div className="service-category">
      <h3 className="category-title">{title}</h3>
      <div className="service-grid">
        {items.map((item) => (
          <ServiceCard
            key={item.name}
            name={item.name}
            url={item.url}
            detailLink={detailLink}
          />
        ))}
      </div>
    </div>
  )
}

export default ServiceCategory

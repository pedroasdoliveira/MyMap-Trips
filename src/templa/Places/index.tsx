type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    galley: ImageProps[]
  }
}

const PlacesTemplate = ({ place }: PlacesTemplateProps) => {
  return (
    <>
      <h1>{place.name}</h1>
    </>
  )
}

export default PlacesTemplate



const NasaDisplay = ({data}) => {

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="nasa-container">
      <img src={data.hdurl} alt="img" className="nasa-img" />

        <h1>{data.title}</h1>
        <h2>{data.date}</h2>
    
    </div>
  )
}

export default NasaDisplay
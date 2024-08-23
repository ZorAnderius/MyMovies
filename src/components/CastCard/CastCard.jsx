import styles from './CastCard.module.css';
const CastCard = ({cast}) => {
  return (
      <div>
          <p>{cast.id}</p>
          <p>{cast.name}</p>
          <p>{cast.profile_path}</p>
          <p>{cast.popularity}</p>
      </div>
  )
}

export default CastCard
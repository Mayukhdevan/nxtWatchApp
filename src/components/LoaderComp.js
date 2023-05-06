import Loader from 'react-loader-spinner'

const LoaderComp = () => (
  <div
    style={{
      height: '60vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    className="loader-container"
    data-testid="loader"
  >
    <Loader type="ThreeDots" color="#fffff" height="50" width="50" />
  </div>
)

export default LoaderComp

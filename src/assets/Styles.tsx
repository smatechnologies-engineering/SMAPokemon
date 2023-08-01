import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({   
  contentGridContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '1300px',
    padding: '50px',
  },
  cardGridContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  sectionGridItem: {
    backgroundColor: '#f2f0f1',
    textAlign: 'center',
    padding: '30px',
    width: '200px',
    borderRadius: '10px',
    margin: '10px !important',
  },
  cardItem: {
    backgroundColor: '#fff',
    padding: '10px',
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: '10px',
  },
  boxContainer: {
    width: '100%',
    display: 'flex',
    minHeight: '600px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingBottom: '15px',
  },
  subtitle: {
    opacity: '0.4',
    paddingBottom: '30px',
  },
  description: {
    paddingBottom: '25px',
  },
  largeImage: {
    width: '100%',
  },
  footerContainer: {
    display: 'flex',
    alignItems: 'center',
    miHeight: '10vh',
    width: '100%',
    padding: '20px',
    justifyContent: 'center',
    backgroundColor: '#f2f0f1',
    flexDirection: 'column',
  },
}))

export default useStyles

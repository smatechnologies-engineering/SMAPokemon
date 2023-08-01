import useStyles from '../assets/Styles'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Avatar } from '@mui/material'

const data1 = [
  {
    id: 1,
    icon: (
      <img
        src="https://lh3.googleusercontent.com/FdZgjHsp9HtX72heMRGgn81rhkz412vc9ZfQNzuUsBwXqw3UzD4F7t0koJPMFMuYVIc6yOIppmVYt71qrZD-iNw5phapTVSZf_f8sRT0-UPvwA"
        width="125"
        height="125"
      />
    ),
    sentence:
      'Starting with the event and continuing afterwards, Greninja will be able to learn the Fast Attack Water Shuriken.',
  },
  {
    id: 2,
    icon: (
      <img
        src="https://lh3.googleusercontent.com/dcdPkfXPOVtDQ696Tw7fhPLMNoJC8ISajQN0ei1DfPk0CIZQ6kJmq5GFk04EX0VmMnlzOp42vL5XBEgoc9SF9nf9GTrEJPXc5lkBPwCmsABdP7Q=s0"
        width="125"
        height="125"
      />
    ),
    sentence:
      'You can only join these raids using Raid Passes and Premium Battle Passes. Remote Raid Passes cannot be used to join these Raid Battles.',
  },
  {
    id: 3,
    icon: (
      <img
        src="https://lh3.googleusercontent.com/EGbcp2kTJ0aQTUPpX5Qle8klgMv4hybyiFQIaQS7bDiUdE7gTaTEkJwCVMUAbHsTKPHF7FumrYnvScA3KAUbih0eoxJ2-mjMy5sByYSsvuwy=s0"
        width="125"
        height="125"
      />
    ),
    sentence: 'Froakie will appear more frequently in the wild.',
  },
]

const data2 = [
  {
    id: 1,
    name: 'Sandygast and Palossand',
    statement:
      'Both Sandygast, the Sand Heap Pokémon, and Palossand, the Sand Castle Pokémon, will debut during Water Festival: Beach Week. These Pokémon were originally discovered in the Alola region from Pokémon Sun and Pokémon Moon. ',
    image_url:
      'https://lh3.googleusercontent.com/mzUGyasGmodP5Ktjb7qVqzojsjcyzvgg-wKZ2lRZkeSYhlcrvmi2F3ut3pNaJ9iLRCU8BtdEhTpDpXaDJaRlAuPKqnTt-cJFAquT7qBu9RqK9w=e365-w952',
    position: '',
  },
  {
    id: 2,
    name: 'Carbink',
    statement:
      'Carbink, the Jewel Pokémon, will also make its Pokémon GO debut during Hidden Gems! But where will Carbink first appear? And what other new Pokémon will be coming to Pokémon GO this Season? Experience Hidden Gems to find out!',
    image_url:
      'https://lh3.googleusercontent.com/ZMMX3zDd4l1Pz995RMlGca3mzXaMVPlbUY7SuZYiV6ONEMr4LHADJ1zPM0j_4As-SsuXPWezT0Yug9WT2UgLMK9a_783kCpgDxlTbi7BKsMAMA=e365-w952',
    position: 'Product Manager at Google',
  },
  {
    id: 3,
    name: 'Diancie',
    statement:
      'The Mythical Pokémon Diancie–the Jewel Pokémon–is the crown jewel of Hidden Gems! This glimmering Pokémon will make its Pokémon GO debut during Pokémon GO Fest 2023! Head over to our GO Fest 2023 to learn more about how to encounter this gem of a Mythical Pokémon!',
    image_url:
      'https://lh3.googleusercontent.com/o5hM_ACxQCkT8p4ln6EsRFQr7lbenf-k3le8FsvdxlPx_RmM4LaQkvu89-OLHFaS3Rqxp9KvDigSXW0M-6IPeIQ7l4JlzIakF8j0mf__RvdVBg=e365-w952',
    position: 'Founder of Crypto',
  },
]
export function Home() {
  const classes = useStyles()
  return (
    <>
      {/* Learn More Section */}
      <Box className={classes.boxContainer} data-testid="learn-more-section">
        <Grid container spacing={2} className={classes.contentGridContainer}>
          <Grid item xs={12} md={7}>
            <Typography variant="h3" fontWeight={700} className={classes.title}>
              Chart New Paths in Pokémon GO with ROUTES
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              Explore the globe with the Pokémon GO community as your guide!
              Chart a course to show off your favorite sights or follow in the
              footsteps of local Trainers to see what their communities have to
              share.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: '200px', fontSize: '16px' }}
            >
              Learn more
            </Button>
          </Grid>
          <Grid item xs={12} md={5}>
            <img
              src={
                'https://lh3.googleusercontent.com/nxcT_2P3TCnWLRvZXfdA6UrXOdB5pEgU9FqFTryWHucvqgfo2KB4Jiikl3PSMIMtevmrIfUr7TehFKC47rqTTVECXBggpgxUg_CeEwEzT3Dd7fI=e365-w560'
              }
              alt="My Team"
              className={classes.largeImage}
            />
          </Grid>
        </Grid>
      </Box>
      {/* Heros Section */}
      <Box sx={{ flexGrow: 1, minHeight: '400px', width: '100%' }} data-testid="heros-section">
        <Grid container className={classes.cardGridContainer}>
          {data1.map((item) => (
            <Grid
              item
              xs={12}
              md={3}
              minHeight={300}
              key={item.id}
              className={classes.sectionGridItem}
            >
              {item.icon}
              <Typography>{item.sentence}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Contact Us Section */}
      <Box className={classes.boxContainer} data-testid="contact-us-section">
        <Grid container spacing={6} className={classes.contentGridContainer}>
          <Grid item xs={12} md={5}>
            <img
              src="https://lh3.googleusercontent.com/RGShDyVofSODXIJ0eQ9umAID8tCw9KdqBFrtgCEdrxjJijG1qZBryfECP9IRV1MOJhCk4Za4VYB34DE-hnPesZNNVYMwgHKs9KrNue3LNJRJuw=e365-w1920"
              alt="My Team"
              className={classes.largeImage}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight={700} className={classes.title}>
              Catch Pokémon Find your buddy!
            </Typography>
            <Typography className={classes.subtitle}>
              Catching Pokémon is one way to collect them! You can also collect
              them by hatching Eggs and trading with other Trainers.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: '200px', fontSize: '16px' }}
            >
              CONTACT US
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/* Testimonial Section */}
      <Box sx={{ flexGrow: 1, minHeight: '400px', width: '100%' }} data-testid="testimonial-section">
        <Grid container className={classes.cardGridContainer}>
          {data2.map((item) => (
            <Grid
              item
              xs={12}
              md={3}
              key={item.id}
              className={classes.sectionGridItem}
            >
              <Card
                className={classes.cardItem}
                style={{ height: 300, width: '100%' }}
              >
                <CardContent>
                  <Typography className={classes.description}>
                    "{item.statement}"
                  </Typography>
                  <Box sx={{ display: 'flex' }}>
                    <Avatar
                      src={item.image_url}
                      sx={{ width: 56, height: 56 }}
                      className={classes.avatar}
                    />
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography>{item.name}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>{' '}
      {/* Footer Section */}
      <Box className={classes.footerContainer}>
        <Typography className={classes.title}>
          Demo version of Pokemon App
        </Typography>
        <Typography>07/31/2023</Typography>
      </Box>
    </>
  )
}

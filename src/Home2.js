import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import ListPopular from './ListPopular';
import ListPopular2 from './ListPopular2';

const articles = [
    {
      id: 1,
      rank:'01',
      title: 'The Economics of the Boomers',
      author:'Byrne Hobart in Marker',
      infoDate: 'Des 2 - 23 min read',
      gambar: "https://miro.medium.com/max/5184/1*df6SmsVK8k5m-gL85RqSag.jpeg",
      subTitle:'From the Mac startup tone to the Skype ring, sound designers discuss the legacy of their creations',
      info:'BASED ON YOUR READING HISTORY',
    },
    {
      id: 2,
      rank:'02',
      title: 'When Larry Met Sergey',
      author:'Steven Levy in Marker',
      infoDate: 'Des 7 - 16 min read',
      gambar: 'https://miro.medium.com/max/2950/1*Aj6EonMciZjMayKzRbIuvQ.jpeg',
      subTitle:'Twelve years ago, I had just returned from a four month solo journey in India. I received physically and emotionally intense Ayurveda',
      info:'CREATIVITY POPULAR TOPIC',
    },
    {
      id: 3,
      rank:'03',
      title: 'The iPhone Could Be Banned in Russia by 2020',
      author: 'Aimee Pearcy in OneZero',
      infoDate: 'Dec 6 - 5 min read',
      gambar: 'https://miro.medium.com/max/6400/1*ABKMOAKgjnC2CnuF8PDtsQ.jpeg',
      subTitle:'A black car rolled into the home of a nazi commander...',
      info:'POPULAR ON MEDIUM',
    },
    {
        id: 4,
        rank:'04',
        title: 'Three Magical Phrases to Comfort a Dying Person',
        author: 'Jenny Harrington in Human Parts',
        infoDate: 'Mar 10 - 10 min read',
        gambar: 'https://miro.medium.com/max/5120/1*XCVXNUtfnv44Fgs_Sz-Wug.jpeg',
        subTitle:'Your disappearing act is probably saying far...',
        info:'BASED ON YOUR READING HISTORY',
      },
      {
        id: 5,
        rank:'05',
        title: 'A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades',
        author: 'Corinne Purtill in OneZero',
        infoDate: 'Nov 26 - 6 min read',
        gambar:'https://miro.medium.com/max/512/1*gUoANPVUnpV-5hNg2HRX5Q.png',
        subTitle:'On networks, Connections, Relationships...',
        info:"POPULAR ON MEDIUM",

      }
  ]
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop:20,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
        <div>
            <Grid maxwidth="md" container justify="center" spacing={1} style={{marginBottom:"5px"}}>
                <Grid item xs style={{position:'sticky', top:"0px", height:"100vh"}}>
                    <Typography variant="h5"> Popular on Medium</Typography>
                        <Divider style={{marginTop:"20px", marginBottom:"20px"}} />
                            <Grid container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            maxWidth="md"
                            minWidth="md"
                            style={{width:"350px"}}>
                                <Grid item xs space={2}>
                                        {articles.map(item =>
                                            <ListPopular
                                            rank={item.rank}
                                            title={item.title}
                                            author={item.author}
                                            infoDate={item.infoDate}                                       
                                            />)}
                                </Grid>
                            </Grid>
                        <div style={{paddingTop:"50px"}}>
                            <Button>Help</Button>
                            <Button>Status</Button>
                            <Button>Writers</Button>
                            <Button>Blog</Button>
                            <Button>Careers</Button>
                            <Button>Privacy</Button>
                            <Button>Terms</Button>
                            <Button>About</Button>
                    </div>
                </Grid>
                <Grid item xs={8} direction="column">
                {articles.map(item=>
                    <ListPopular2
                    info={item.info}
                    title={item.title}
                    subTitle={item.subTitle}
                    author={item.author}
                    gambar={item.gambar}
                    infoDate={item.infoDate}/>)}
                </Grid>
            </Grid>
        </div>
    </Container>
  );
}
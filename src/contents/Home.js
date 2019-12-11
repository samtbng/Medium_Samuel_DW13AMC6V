import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import ListArticle from '../components/ListArticle';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
 
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageBig: {
    width: 380,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  text:{
    fontSize:"15px",
    lineHeight:"20px"
  }
}));

const articles = [
  {
    id: 1,
    title: 'The Economics of the Boomers',
    subTitle: 'America is getting ol...',
    author:'Byrne Hobart in Marker',
    infoDate: 'Des 2 - 23 min read',
    gambar: "https://miro.medium.com/max/5184/1*df6SmsVK8k5m-gL85RqSag.jpeg"
  },
  {
    id: 2,
    title: 'When Larry Met Sergey',
    subTitle: 'With Google’s founders withdraw...',
    author:'Steven Levy in Marker',
    infoDate: 'Des 7 - 16 min read',
    gambar: 'https://miro.medium.com/max/2950/1*Aj6EonMciZjMayKzRbIuvQ.jpeg'
  },
  {
    id: 3,
    title: 'The iPhone Could Be Banned in Russia by 2020',
    subTitle: 'A ‘Digital Iron Curtain’ is des...',
    author: 'Aimee Pearcy in OneZero',
    infoDate: 'Dec 6 - 5 min read',
    gambar: 'https://miro.medium.com/max/6400/1*ABKMOAKgjnC2CnuF8PDtsQ.jpeg'
  }
]

export default function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.root} style={{marginBottom:"30px", marginTop:"30px"}}>
    <div >
      <Grid maxwidth="md" container justify="center" spacing={1} style={{marginBottom:"5px"}}>
        <Grid item xs>
          <Card elevation="0" className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Joy Of Being an Uthethered Woman"
                  height="140"
                  image="./favLeft.jpeg"
                  title="Joy Of Being an Uthethered Woman"
                />
              </CardActionArea>
            <Paper>
              <Typography gutterBottom variant="h5" component="h2">
              The Joy of Being an Untethered Woman
              </Typography>
              <Typography color="textSecondary" variant="caption" style={{marginBottom:"10px"}}>
              On sex, solitude, and female friendship
              </Typography>
              <Typography variant="body2" component="p">
              Anna Graham Hunter in Human Parts
              </Typography>
              <Typography color="textSecondary" variant="caption">
              Feb 19, 2017 - 7 min read
              </Typography>
            </Paper>
          </Card>
        </Grid>
        <Grid item xs >
          <Grid container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  maxWidth="md"
                  minWidth="md">
                           
            <Grid item xs >
              {articles.map(item =>
                  <ListArticle
                    title={item.title}
                    subTitle={item.subTitle}
                    author={item.author}
                    infoDate={item.infoDate}
                    gambar={item.gambar} />
                )}
            </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Card  elevation="0" className={classes.card}>
              <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Your Family’s Behavioral Patterns Are In Your DNA"
                    height="140"
                    image="./favRight.jfif"
                    title="Your Family’s Behavioral Patterns Are In Your DNA"
                  />
              </CardActionArea>
              <Paper>
                <Typography gutterBottom variant="h5" component="h2">
                Your Family’s Behavioral Patterns Are In Your DNA
                </Typography>
                <Typography color="textSecondary" variant="caption" style={{marginBottom:"10px"}}>
                ‘Pivot characters’ break the imprints we...
                </Typography>
                <Typography variant="body2" component="p">
                  Brianna Wiest in Human Parts
                </Typography>
                <Typography color="textSecondary" variant="caption">
                  Nov 15 - 7 min read
                </Typography>
              </Paper>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Button style={{position:"absolute", right:"100px"}} size="small" color="primary">
          See All Feature {">"}  
      </Button>
    </Container>
  );
}
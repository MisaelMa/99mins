import React from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import itemData from './itemdata';
import {Ships} from "@/common/types/app/Launche";
import {Grid} from "@material-ui/core";
import {createTheme} from '@material-ui/core/styles'
import {MuiThemeProvider, Slider} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      height: 290,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function RShips(props: { ship: Ships[] }) {
  const {ship = []} = props
  const classes = useStyles();
  const theme = createTheme({
    overrides: {
      MuiImageListItem: {
        root: {
          listStyle: "none",
        },
        item: {
          listStyle: "none",
        }
      }
    }
  })
  return (
    <div className={classes.root}>
      {/*<ImageList rowHeight={190} className={classes.imageList}>*/}
      {/*  {ship.map((item,i) => (*/}
      {/*    <ImageListItem key={i} >*/}
      {/*      <img src={item.image} alt={item.name}/>*/}
      {/*      <ImageListItemBar*/}
      {/*        title={item.name}*/}
      {/*        subtitle={<span> {item.home_port}</span>}*/}
      {/*      />*/}
      {/*    </ImageListItem>*/}
      {/*  ))}*/}
      {/*</ImageList>*/}
      <MuiThemeProvider theme={theme}>
        <Grid style={{height: 290, overflow: "auto"}} container spacing={1}>
          {ship.map((item, i) => (
            <Grid key={i} item sm={6} md={6} xl={6} lg={6}>
              <ImageListItem style={{borderRadius: 8, height: 180}}>
                <img src={item.image} alt={item.name}/>
                <ImageListItemBar
                  title={item.name}
                  subtitle={<span> {item.home_port}</span>}
                />
              </ImageListItem>
            </Grid>
          ))}
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

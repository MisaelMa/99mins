import React from 'react';
import {Theme, createStyles, makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import {mdiRocketLaunch} from '@mdi/js'
import {Avatar, CardHeader, Grid} from "@material-ui/core";
import Icon from "@mdi/react";
import moment from "moment"
import {useLaunch} from "@/common/hooks/useLaunch";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      marginBottom: 5
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }),
);

export default function Launche(props: any) {
  const {
    launch = {
      id: 0,
      mission_name: "",
      launch_site: {
        site_name_long: ""
      },
      details: "",
      launch_date_local: "",
    },
    onClick
  } = props
  const classes = useStyles();
  const theme = useTheme();
  const {launch: mission} = useLaunch()
  return (
    <Card
      variant="outlined"
      style={{
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: mission.id === launch.id ? 'rgb(63, 81, 181)': 'white',
        color:  mission.id === launch.id ? 'white': "black",
        height: 105,
        marginTop: 3
      }} onClick={() => {
      onClick(launch)
    }}>
      <Grid container style={{marginTop:10, marginLeft:5}}>
        <Grid item sm={2} md={2} xl={2} lg={2}>
          <Icon size={2} style={{marginTop: 10}} path={mdiRocketLaunch}/>
        </Grid>
        <Grid item sm={9} md={9} xl={9} lg={9}>

          <Typography variant="h6" component="h5">
            {launch.mission_name}</Typography>
          <div>{launch.launch_site.site_name_long}</div>
          <div style={{
            float: 'right',
            color: 'rgba(0, 0, 0, 0.54)',
            marginRight: -5,
            marginTop: -4
          }}>
            {moment(launch.launch_date_local).format('DD/MM/YYYY')}
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}

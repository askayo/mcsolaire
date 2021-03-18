import Card from "@material-ui/core/Card";
import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        paddingLeft: "40px",
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
}));

export const About = (props) => {
    const classes = useStyles();


    return (
        <div id='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12 col-md-6'>
                        <div className='about-text'>
                            <h2>Responsable, <div className={"access"}>Personnalisable</div> Accessible,</h2>
                            <p>{props.data ? props.data.paragraph : 'loading...'}</p>
                        </div>


                    </div>

                    <div className='col-xs-12 col-md-6'>
                        <Box
                            pt={"1em"}
                            elevation={1}
                            className={"shadow-6dp"}
                            style={{height: "40vh"}}>
                            <Grid container>
                                <Grid item xs={2}> </Grid>
                                <Grid
                                    justify="center"
                                    alignItems="center"
                                    spacing={3}
                                    item xs={8}
                                >
                                    <em className={"pgridabout"}>
                                        "Rendre le solaire accessible à tous est notre objectif, afin que les gens
                                        puissent récolter la lumière du soleil à travers leur fenêtre, tout en ayant un
                                        élément de décoration intérieure."
                                    </em>
                                </Grid>
                                <Grid item xs={2}/>

                                <Grid pt={5} item xs={3}>
                                    <Avatar src={"/img/avatars/Oval_iy@2x.png"} className={classes.large}/>
                                </Grid>


                                <Grid item xs={8}>
                                    <p className={"pgridabout"}>
                                        Elon Musk
                                    </p>
                                    <p className={"pgri"}>
                                        Président Directeur Général, EFFISUN
                                    </p>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>


                  <div  className='col-xs-12 col-md-12'>
                    <hr/>

                  </div>




                      <div className='col-xs-12 col-md-4 pt-20'>
                        <p className={"aboutOsez"}>Osez vous regarder dans le miroir...</p>
                      </div>

                      <div className={"col-xs-12 col-md-2 pt-20"}/>
                      <div className='col-xs-12 col-md-6 pt-20'>
                        <p>Le tout premier miroir responsable équipé d'un panneau solaire vous permettant de recharger vos appareils sans impact sur l'environnement.</p>
                      </div>

                </div>
            </div>
        </div>
    )
}

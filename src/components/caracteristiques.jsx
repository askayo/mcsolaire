import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";





export const Caracteristiques = (props) => {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div id='caract'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12 col-md-6'>
                        <Grid container>
                            <Grid item xs={2}> </Grid>
                            <Grid
                                justify="center"
                                alignItems="center"
                                spacing={3}
                                item xs={8}
                            >
                                <div className='caract-text'>
                                    <h2>Caractéristiques</h2>

                                    <ul>
                                        <li>Sangle artisanal en cuir écologique       </li>
                                        <li>     Boucle de ceinture afin d'ajuster la taille  </li>
                                        <li>  Cadre en bois     </li>
                                        <li>  Fixation murale à vis     </li>
                                        <li>   Régulateur de tension (5V / 2A)    </li>
                                        <li>  Panneau solaire 6V / 2A / 4.5 Watt     </li>
                                        <li>   Batterie lithium de 10.000 à 20.000 mAh    </li>
                                        <li>     3 ports USB (5V / 2A)  </li>
                                        <li>    Bouton d'activation sur le côté   </li>
                                        <p>Voyants lumineux pour indiquer :</p>
                                              <ul>
                                                <li>
                                                    lorsqu'il y a du soleil
                                                </li>

                                                <li>
                                                    lorsque la batterie est pleine
                                                </li>
                                            </ul>

                                    </ul>

                                </div>

                                

                            </Grid>

                            <Grid item xs={2}/>


                        </Grid>

                    </div>

                    <div style={{
                        display: "flex"
                    }} className='col-xs-12 col-md-6'>
                        <img src={"/img/produits/3.png"}/>
                        <img src={"/img/produits/2.png"}/>

                    </div>


                </div>
            </div>
        </div>
    )
}

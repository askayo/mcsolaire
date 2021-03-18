import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";





export const Produit = (props) => {
    const [alignment, setAlignment] = React.useState('center');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div id='produit'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12 col-md-6'>
                        <img src={"/img/Produits/1.png"}/>
                    </div>

                    <div className='col-xs-12 col-md-6'>

                        <Grid container>
                            <Grid item xs={2}> </Grid>
                            <Grid
                                justify="center"
                                alignItems="center"
                                spacing={3}
                                item xs={8}
                            >
                                <div className='produit-text'>
                                    <h2>MC Solaire, <div className={"access"}>Miroir&nbsp;Chargeur&nbsp;Solaire.</div>
                                    </h2>
                                    <p>Conçu à partir de matériaux recyclés, ce miroir design embellira votre intérieur
                                        de façon efficace et responsable !
                                    </p>

                                    <p> Doté de panneaux solaires et d'une batterie lithium, vous pourrez recharger tous
                                        vos appareils sans vous soucier de l'impact environnemental dont vous pourriez
                                        être l'auteur.</p>
                                </div>

                                <div className={"groupePoints"}>
                                    <div style={{background: "black"}} className={"point"}/>
                                    <div style={{background: "#462B05"}} className={"point"}/>
                                    <div style={{background: "#84591A"}} className={"point"}/>
                                    <div style={{background: "#E7B163"}} className={"point"}/>
                                    <div style={{background: "#FFEED5"}} className={"point"}/>
                                </div>

                                <p>
                                    Capacité de la batterie :
                                </p>

                                <ToggleButtonGroup
                                    value={alignment}
                                    exclusive
                                    onChange={handleAlignment}
                                    aria-label="text alignment"
                                >
                                    <ToggleButton value="left" aria-label="left aligned">
                                        <Button> 10 000 mAh</Button>

                                    </ToggleButton>
                                    <ToggleButton value="center" aria-label="centered">
                                        <Button> 15 000 mAh </Button>
                                    </ToggleButton>
                                    <ToggleButton value="right" aria-label="right aligned">
                                        <Button> 20 000 mAh</Button>

                                    </ToggleButton>

                                </ToggleButtonGroup>

                                <button className={"btn-red"}>ajouter au panier ➜</button>


                            </Grid>

                            <Grid item xs={2}/>


                        </Grid>
                    </div>


                </div>
            </div>
        </div>
    )
}

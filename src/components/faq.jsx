import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";





export const Faq = (props) => {
    return (
        <div id="faq">
            <div className="container">
                <div className="row">
                    <div className='col-xs-12 col-md-6'>
                        <h2 className='faq'>Questions fréquentes</h2>
                    </div>
                    <div className='col-xs-12 col-md-6'>
                        <h2 className='faq'>Questions générales</h2>
                    </div>
                </div>
                <div className="row questions">
                    <div className='col-xs-12 col-md-6'>
                        <h4>Mon article est cassé, comment le réparer ?</h4>
                    </div>
                    <div className='col-xs-12 col-md-6'>
                        <h4>Quels sont les moyens de paiement disponibles ?</h4>
                    </div>
                </div>
                <div className="row questions">
                    <div className='col-xs-12 col-md-6'>
                        <h4>Vos produits sont-ils écologiques ?</h4>
                    </div>
                    <div className='col-xs-12 col-md-6'>
                        <h4>Le paiement est-il sécurisé ?</h4>
                    </div>
                </div>
                <div className="row questions">
                    <div className='col-xs-12 col-md-6'>
                        <h4>Où sont fabriqués les produits EFFISUN ?</h4>
                    </div>
                    <div className='col-xs-12 col-md-6'>
                        <h4>Ai-je besoin d'un compte pour acheter ?</h4>
                    </div>
                </div>
                <div className="row questions">
                    <div className='col-xs-12 col-md-6'>
                        <h4>La livraison est-elle valable dans mon pays ?</h4>
                    </div>
                    <div className='col-xs-12 col-md-6'>
                        <h4>Mon adresse a changé, comment la modifier ?</h4>
                    </div>
                </div>
                <div className="row questions">
                    <div className='col-xs-12 col-md-6'>
                        <h4>Comment suivre ma livraison ?</h4>
                    </div>
                    <div className='col-xs-12 col-md-6'>
                        <h4>Quels sont les délais de livraison ?</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

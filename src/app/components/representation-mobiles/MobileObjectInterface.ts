export interface MobileObject {
    mobiles: any;
    id: number; //identifiant du mobile (valeur numérique)
    displayId: string; //label construit à partir de l'id et préfixé par un #
    shape: string; //(CIRCLE, SQUARE, DIAMOND, TRIANGLE)
    environment: string; //(AIR, LAND, UNDERGROUND)
    color: string; //(BLUE, VIOLET, RED, ORANGE, YELLOW, GREEN)
    creationTimestampMs: number; //timestamp de création (epoch exprimé en ms)
    updateTimestampMs: number; //timestamp de dernière mise à jour (epoch exprimé en ms)
    //kinematics: données de cinématique composées de:
    xM: number; //composante x des coordonnées dans le repère cartésien (en m)
    yM: number; //composante y des coordonnées dans le repère cartésien (en m)
    zM: number; //composante z des coordonnées dans le repère cartésien (en m)
    speedMS: number;//vitesse (en m/s)
    headingRad: number;//angle pris depuis le nord pour définir la direction du déplacement (en rad)
    orientationRad: number;//angle pris depuis le nord pour définir l'orientation (en rad)
    spinningSpeedRadS: number;//vitesse angulaire de l'orientation (en rad / s)
    extraMobileData1: number;//données de test mise à jour aléatoirement à une fréquence "moyenne" (fréquence 5 fois moins élevée que la fréquence des mise à jour de cinématique)
    data1: number;//donnée random (numérique flotant)
    data2: number;//donnée random (numérique entier)
    data3: string;//donnée random (chaîne de caractère)
    data4: number;//donnée random (numérique flotant)
    data5: number;//donnée random (numérique entier)
    data6: string;//donnée random (chaîne de caractère)
    data7: number;//donnée random (numérique flotant)
    data8: boolean;//donnée random (booléen)
    extraMobileData2: number; /*données de test mise à jour à une fréquence "basse" (fréquence 10 fois moins élevée que la fréquence des mise à jour de cinématique)
    => même définition de structure de donnée que pour le champ extraMobileData1*/
}